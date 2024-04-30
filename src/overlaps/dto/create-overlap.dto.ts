import { IsString } from "class-validator";

export class CreateOverlapDto {
    @IsString()
    readonly name:string
}
