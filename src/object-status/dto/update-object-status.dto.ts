import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectStatusDto } from './create-object-status.dto';

export class UpdateObjectStatusDto extends PartialType(CreateObjectStatusDto) {}
