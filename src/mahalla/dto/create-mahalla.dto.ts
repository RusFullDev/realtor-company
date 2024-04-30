import { IsNumber, IsString } from "class-validator";

export class CreateMahallaDto {
    @IsString()
    name:string
    @IsNumber()
    areaId:number
}
