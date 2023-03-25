import { Injectable } from '@nestjs/common';
import { IndeedJobsList } from '@/job-scrapers/indeed/interfaces/indeed-jobs-list.interface';
import { PuppeteerParserService } from '@/parsers/puppeteer-parser/puppeteer-parser.service';
import { CreateJobDto } from '@/jobs/dto/create-job.dto';
import { JobsService } from '@/jobs/jobs.service';
import { KeywordsService } from '@/keywords/keywords.service';

@Injectable()
export class IndeedService {
    constructor(
        private readonly puppeteerService: PuppeteerParserService,
        private readonly jobsService: JobsService,
        private readonly keywordsService: KeywordsService,
    ) {
    }

    async findJobs(query: string) {
        const jobsPerPage = 20;

        try {
            const encodedQuery = encodeURIComponent(query);
            const url = `https://es.indeed.com/jobs?q=${ encodedQuery }&l=&fromage=14&start=0`;

            const totalResults = await this.puppeteerService.performTask(async (page) => {
                await page.goto(url);
                return this.extractTotal(page);
            });
            const totalPages = Math.ceil(totalResults / jobsPerPage);

            let allJobs = [];
            pagesLoop: for (let i = 0; i <= totalPages; i++) {
                const offset = i * jobsPerPage;
                const currentPageUrl = `https://es.indeed.com/jobs?q=${ encodedQuery }&sort=date&l=&fromage=14&start=${ offset / 2 }`;

                const jobsList = await this.puppeteerService.performTask(async (page) => {
                    await page.goto(currentPageUrl);
                    return this.extractJobs(page);
                });

                for (const job of jobsList) {
                    const jobExists = await this.jobsService.countByRemoteId(job.remoteId);
                    if (jobExists > 0) break pagesLoop;
                    await this.jobsService.create(job);
                }

                allJobs = allJobs.concat(jobsList);
            }

            return allJobs;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async findJobDetails() {
        const jobs = await this.jobsService.findNotParsed();
        for (const job of jobs) {
            const description = await this.getJobDetails(job.url);
            const points = await this.keywordsService.calculatePoints(description);
            await this.jobsService.update(job.id, {
                description,
                points,
            });
        }
    }

    async getJobDetails(indeedParams: string): Promise<string> {
        const url = 'https://es.indeed.com' + indeedParams;
        return await this.puppeteerService.performTask(async (page) => {
            await page.goto(url);
            return this.cleanHTML(await page.$eval('#jobDescriptionText', (div) => div.innerHTML));
        });
    }

    async extractTotal(page) {
        return await page.evaluate(() => {
            return (window as any)._initialData.totalJobCount;
        });
    }

    async extractJobs(page): Promise<CreateJobDto[]> {
        const jobsList: CreateJobDto[] = [];
        const jobCards: IndeedJobsList[] = await page.evaluate(() => {
            return (window as any).mosaic.providerData['mosaic-provider-jobcards'].metaData.mosaicProviderJobCardsModel.results;
        });
        // console.log(jobCards[0]);
        for (const job of jobCards) {
            jobsList.push(this.parseJobShort(job));
        }
        return jobsList;
    }

    parseJobShort(job: IndeedJobsList): CreateJobDto {
        const {
            displayTitle: title,
            jobLocationCity: location,
            pubDate: published_at,
            // company,
            extractedSalary,
            jobkey: remoteId,
        } = job;
        return {
            remoteId,
            title,
            location,
            url: `/viewjob?viewtype=embedded&jk=${ remoteId }`,
            published_at: new Date(published_at),
            // company,
            salary: extractedSalary ? `${ extractedSalary.min } - ${ extractedSalary.max }` : null,
        };
    }

    cleanHTML(html: string): string {
        return html
            .replace(/<br\s*[\/]?>/gi, '\n')
            .replace(/<li>/gi, '\n- ')
            .replace(/<[^>]+>/g, '')
            .split('\n')
            .filter((line) => line.trim() !== '')
            .join('\n')
            .trim();
    }

}
