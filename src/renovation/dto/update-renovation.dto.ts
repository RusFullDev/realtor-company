import { PartialType } from '@nestjs/mapped-types';
import { CreateRenovationDto } from './create-renovation.dto';

export class UpdateRenovationDto extends PartialType(CreateRenovationDto) {}
