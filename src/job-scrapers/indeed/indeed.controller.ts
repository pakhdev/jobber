import { Controller, Get, Query } from '@nestjs/common';
import { IndeedService } from './indeed.service';

@Controller('parsers/indeed')
export class IndeedController {
    constructor(private readonly indeedService: IndeedService) {
    }

    @Get()
    findAll(@Query('word') word: string) {
        return this.indeedService.findJobs(word);
    }

    // @Get()
    // findAll() {
    //     return this.indeedService.getJobDetails();
    // }
}
