import { IsString } from "class-validator";

export class CreateOwnerCooperationDto {
    @IsString()
    name:string
}
