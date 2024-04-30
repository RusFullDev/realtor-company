import { IsString } from "class-validator";

export class CreateObjectTypeDto {
@IsString()
    readonly name:string
}
