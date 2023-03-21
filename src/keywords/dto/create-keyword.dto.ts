import { IsNumber, IsString, MinLength } from 'class-validator';

export class CreateKeywordDto {

    @IsString()
    @MinLength(1)
    word: string;

    @IsNumber()
    points: number;
}
