import { IsString } from "class-validator";

export class CreateBuildingSeriaDto {
    @IsString()
    name:string
}
