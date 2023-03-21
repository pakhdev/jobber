import { Module } from '@nestjs/common';
import { HttpParserService } from './http-parser.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [HttpModule],
    providers: [HttpParserService],
    exports: [HttpParserService],
})
export class HttpParserModule {
}
