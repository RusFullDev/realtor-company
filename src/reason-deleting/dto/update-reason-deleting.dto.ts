import { PartialType } from '@nestjs/mapped-types';
import { CreateReasonDeletingDto } from './create-reason-deleting.dto';

export class UpdateReasonDeletingDto extends PartialType(CreateReasonDeletingDto) {}
