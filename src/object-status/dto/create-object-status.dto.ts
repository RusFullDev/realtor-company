import { IsString } from "class-validator";

export class CreateObjectStatusDto {
    @IsString()
    name:string
}
