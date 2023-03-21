import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'keywords' })
export class Keyword {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 30, unique: true })
    word: string;

    @Column()
    points: number;
}
