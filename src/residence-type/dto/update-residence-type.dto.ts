import { PartialType } from '@nestjs/mapped-types';
import { CreateResidenceTypeDto } from './create-residence-type.dto';

export class UpdateResidenceTypeDto extends PartialType(CreateResidenceTypeDto) {}
