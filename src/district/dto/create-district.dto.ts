import { IsNumber, IsString } from "class-validator";

export class CreateDistrictDto {
    @IsString()
    readonly name:string
    @IsNumber()
    readonly regionId:number
}
