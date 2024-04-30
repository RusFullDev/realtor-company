import { IsNumber, IsString } from "class-validator";

export class CreateStreetDto {
    @IsString()
    readonly name:string
    @IsNumber()
    readonly mahallaId:number
}
