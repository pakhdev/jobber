import { Injectable } from '@nestjs/common';
import { IndeedJobsList } from '@/job-scrapers/indeed/interfaces/indeed-jobs-list.interface';
import { PuppeteerParserService } from '@/parsers/puppeteer-parser/puppeteer-parser.service';

@Injectable()
export class IndeedService {
    constructor(private puppeteerService: PuppeteerParserService) {
    }

    async findAll(query: string) {
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
            for (let i = 0; i <= totalPages; i++) {
                const offset = i * jobsPerPage;
                const currentPageUrl = `https://es.indeed.com/jobs?q=${ encodedQuery }&l=&fromage=14&start=${ offset / 2 }`;

                const jobsList = await this.puppeteerService.performTask(async (page) => {
                    await page.goto(currentPageUrl);
                    return this.extractJobs(page);
                });

                allJobs = allJobs.concat(jobsList);
            }

            return allJobs;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    async extractTotal(page) {
        return await page.evaluate(() => {
            return (window as any)._initialData.totalJobCount;
        });
    }

    async extractJobs(page) {
        const jobsList = [];
        const jobCards: IndeedJobsList[] = await page.evaluate(() => {
            return (window as any).mosaic.providerData['mosaic-provider-jobcards'].metaData.mosaicProviderJobCardsModel.results;
        });
        for (const job of jobCards) {
            jobsList.push(this.parseJobShort(job));
        }
        return jobsList;
    }

    parseJobShort(job: IndeedJobsList) {
        const {
            company,
            displayTitle: title,
            jobLocationCity: city,
            viewJobLink,
            pubDate: published_at,
            extractedSalary,
        } = job;
        return {
            company,
            title,
            city,
            viewJobLink,
            published_at,
            extractedSalary,
        };
    }

}
