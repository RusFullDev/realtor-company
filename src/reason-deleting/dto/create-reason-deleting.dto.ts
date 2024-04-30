import { IsString } from "class-validator";

export class CreateReasonDeletingDto {
    @IsString()
    name:string
}
