import { IsNumber, IsString } from "class-validator";

export class CreateResidenceTypeDto {
    @IsString()
    readonly name:string

    @IsNumber()
    readonly objectTypeId:number
}
