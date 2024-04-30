import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingSeriaDto } from './create-building-seria.dto';

export class UpdateBuildingSeriaDto extends PartialType(CreateBuildingSeriaDto) {}
