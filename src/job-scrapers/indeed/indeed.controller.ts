import { Controller, Get, Query } from '@nestjs/common';
import { IndeedService } from './indeed.service';

@Controller('parsers/indeed')
export class IndeedController {
    constructor(private readonly indeedService: IndeedService) {
    }

    @Get()
    findJobs(@Query('word') word: string) {
        return this.indeedService.findJobs(word);
    }

    @Get('details')
    findJobDetails() {
        return this.indeedService.findJobDetails();
    }
}
