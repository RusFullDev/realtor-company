import { PartialType } from '@nestjs/mapped-types';
import { CreateMahallaDto } from './create-mahalla.dto';

export class UpdateMahallaDto extends PartialType(CreateMahallaDto) {}
