import { PartialType } from '@nestjs/mapped-types';
import { CreateRelationshipTypeDto } from './create-relationship-type.dto';

export class UpdateRelationshipTypeDto extends PartialType(CreateRelationshipTypeDto) {}
