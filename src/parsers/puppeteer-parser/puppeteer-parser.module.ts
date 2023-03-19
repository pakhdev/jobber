import { Module } from '@nestjs/common';
import { PuppeteerParserService } from './puppeteer-parser.service';

@Module({
    providers: [PuppeteerParserService],
    exports: [PuppeteerParserService],
})
export class PuppeteerParserModule {
}
