import { Module } from '@nestjs/common';
import { IndeedService } from './indeed.service';
import { IndeedController } from './indeed.controller';
import { PuppeteerParserModule } from '@/parsers/puppeteer-parser/puppeteer-parser.module';

@Module({
    imports: [PuppeteerParserModule],
    controllers: [IndeedController],
    providers: [IndeedService],
})
export class IndeedModule {
}
