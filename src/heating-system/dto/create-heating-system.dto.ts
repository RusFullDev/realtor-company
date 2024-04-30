import { IsString } from "class-validator";

export class CreateHeatingSystemDto {
    @IsString()
   readonly name:string
}
