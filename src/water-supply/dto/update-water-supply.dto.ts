import { PartialType } from '@nestjs/mapped-types';
import { CreateWaterSupplyDto } from './create-water-supply.dto';

export class UpdateWaterSupplyDto extends PartialType(CreateWaterSupplyDto) {}
