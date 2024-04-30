import { PartialType } from '@nestjs/mapped-types';
import { CreateWallMaterialDto } from './create-wall-material.dto';

export class UpdateWallMaterialDto extends PartialType(CreateWallMaterialDto) {}
