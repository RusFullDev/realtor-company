import { PartialType } from '@nestjs/mapped-types';
import { CreateOwnerRelationDto } from './create-owner-relation.dto';

export class UpdateOwnerRelationDto extends PartialType(CreateOwnerRelationDto) {}
