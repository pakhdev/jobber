import { PartialType } from '@nestjs/mapped-types';
import { CreateIndeedDto } from './create-indeed.dto';

export class UpdateIndeedDto extends PartialType(CreateIndeedDto) {}
