import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingConditionalDto } from './create-building-conditional.dto';

export class UpdateBuildingConditionalDto extends PartialType(CreateBuildingConditionalDto) {}
