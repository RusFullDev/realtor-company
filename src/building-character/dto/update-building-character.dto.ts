import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingCharacterDto } from './create-building-character.dto';

export class UpdateBuildingCharacterDto extends PartialType(CreateBuildingCharacterDto) {}
