import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { Job } from '@/jobs/entities/job.entity';

@Injectable()
export class JobsService {
    constructor(@InjectRepository(Job) private readonly jobRepository: Repository<Job>) {
    }

    async create(createJobDto: CreateJobDto): Promise<Job> {
        const job = await this.jobRepository.create(createJobDto);
        return await this.jobRepository.save(job);
    }

    async findAll() {
        return await this.jobRepository.find();
    }

    async findNotParsed(): Promise<Job[]> {
        return await this.jobRepository.find({ where: { description: IsNull() } });
    }

    async countByRemoteId(id: string): Promise<number> {
        return await this.jobRepository.count({ where: { remoteId: id } });
    }

    update(id: number, updateJobDto: UpdateJobDto) {
        const job = this.jobRepository.update(id, updateJobDto);
    }

    remove(id: number) {
        return `This action removes a #${ id } job`;
    }
}
