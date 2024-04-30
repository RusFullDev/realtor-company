import { PartialType } from '@nestjs/mapped-types';
import { CreateWindowSideDto } from './create-window-side.dto';

export class UpdateWindowSideDto extends PartialType(CreateWindowSideDto) {}
