import { IsString } from "class-validator";

export class CreateMetroDto {
    @IsString()
    name:string
}
