import { IsString } from "class-validator";

export class CreateBuildingConditionalDto {
    @IsString()
    readonly name:string
}
