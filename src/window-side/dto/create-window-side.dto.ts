import { IsString } from "class-validator";

export class CreateWindowSideDto {
    @IsString()
    name:string
}
