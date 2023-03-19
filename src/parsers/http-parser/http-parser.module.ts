import { Module } from '@nestjs/common';
import { HttpParserService } from './http-parser.service';

@Module({
    providers: [HttpParserService],
})
export class HttpParserModule {
}
