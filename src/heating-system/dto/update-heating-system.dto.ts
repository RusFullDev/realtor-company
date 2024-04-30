import { PartialType } from '@nestjs/mapped-types';
import { CreateHeatingSystemDto } from './create-heating-system.dto';

export class UpdateHeatingSystemDto extends PartialType(CreateHeatingSystemDto) {}
