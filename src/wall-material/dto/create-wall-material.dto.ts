import { IsString } from "class-validator";

export class CreateWallMaterialDto {
    @IsString()
    readonly name:string
}
