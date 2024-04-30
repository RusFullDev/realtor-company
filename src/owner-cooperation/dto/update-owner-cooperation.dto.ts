import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerCooperationDto } from './create-owner-cooperation.dto';

export class UpdateOwnerCooperationDto extends PartialType(CreateOwnerCooperationDto) {}
