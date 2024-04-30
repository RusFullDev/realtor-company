import { IsNumber, IsString } from "class-validator";

export class CreateAreaDto {
    @IsString()
    name:string
    @IsNumber()
    districtId:number
}
