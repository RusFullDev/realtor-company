import { PartialType } from '@nestjs/mapped-types';
import { CreateOverlapDto } from './create-overlap.dto';

export class UpdateOverlapDto extends PartialType(CreateOverlapDto) {}
