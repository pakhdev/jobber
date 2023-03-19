import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Importance } from '@/jobs/enums/importance.enum';
import { Company } from '@/companies/entities/company.entity';

@Entity({ name: 'jobs' })
export class Job {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 255, nullable: false })
    title: string;

    @Column('text')
    description: string;

    @Column('varchar', { length: 100 })
    salary: string;

    @Column({ default: () => 'NOW()' })
    published_at: Date;

    @Column('varchar', { length: 255, nullable: false })
    url: string;

    @Column()
    points: number;

    @Column({ type: 'enum', enum: Importance })
    importance: Importance;

    @ManyToOne(() => Company, company => company.jobs)
    company: Company;

    @Column({ nullable: true })
    cv_date: Date;
}
