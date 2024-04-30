import { IsString } from "class-validator";

export class CreateWaterSupplyDto {
    @IsString()
    name:string
}
