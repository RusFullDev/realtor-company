import { IsString } from "class-validator";

export class CreateRenovationDto {
    @IsString()
    name:string
}
