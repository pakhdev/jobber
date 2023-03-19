import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpParserService {

    findAll() {
        return `This action returns all httpParser`;
    }

    findOne(id: number) {
        return `This action returns a #${ id } httpParser`;
    }

    remove(id: number) {
        return `This action removes a #${ id } httpParser`;
    }
}
