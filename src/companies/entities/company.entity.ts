import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from '@/jobs/entities/job.entity';

@Entity({ name: 'companies' })
export class Company {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @OneToMany(() => Job, job => job.company)
    jobs: Job[];
}
