import { Module } from '@nestjs/common';
import { IndeedService } from './indeed.service';
import { IndeedController } from './indeed.controller';
import { PuppeteerParserModule } from '@/parsers/puppeteer-parser/puppeteer-parser.module';
import { HttpParserModule } from '@/parsers/http-parser/http-parser.module';
import { JobsModule } from '@/jobs/jobs.module';

@Module({
    imports: [
        PuppeteerParserModule,
        HttpParserModule,
        JobsModule,
    ],
    controllers: [IndeedController],
    providers: [IndeedService],
})
export class IndeedModule {
}
