import { PartialType } from '@nestjs/mapped-types';
import { CreateMetroDto } from './create-metro.dto';

export class UpdateMetroDto extends PartialType(CreateMetroDto) {}
