import { IsString } from "class-validator";

export class CreateOwnershipDto {
    @IsString()
    readonly name:string
}
