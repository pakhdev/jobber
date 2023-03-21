import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Keyword } from '@/keywords/entities/keyword.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KeywordsService {
    constructor(@InjectRepository(Keyword) private readonly keywordsRepository: Repository<Keyword>) {
    }

    async create(createKeywordDto: CreateKeywordDto): Promise<Keyword> {
        const keyword = await this.keywordsRepository.create(createKeywordDto);
        return await this.keywordsRepository.save(keyword);
    }

    async findAll(): Promise<Keyword[]> {
        return await this.keywordsRepository.find();
    }

    async findOne(id: number): Promise<Keyword> {
        const keyword = await this.keywordsRepository.findOneBy({ id });
        if (!keyword) throw new NotFoundException();
        return keyword;
    }

    async update(id: number, updateKeywordDto: UpdateKeywordDto): Promise<Keyword> {
        const keyword = await this.keywordsRepository.preload({
            ...updateKeywordDto,
            id,
        });
        if (!keyword) throw new NotFoundException();
        return await this.keywordsRepository.save(keyword);
    }

    async remove(id: number): Promise<void> {
        const keyword = await this.findOne(id);
        await this.keywordsRepository.remove(keyword);
    }
}
