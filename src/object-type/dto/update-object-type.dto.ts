import { PartialType } from '@nestjs/mapped-types';
import { CreateObjectTypeDto } from './create-object-type.dto';

export class UpdateObjectTypeDto extends PartialType(CreateObjectTypeDto) {}
