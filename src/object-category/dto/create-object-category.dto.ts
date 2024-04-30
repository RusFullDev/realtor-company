import { IsString } from "class-validator";

export class CreateObjectCategoryDto {
    @IsString()
    readonly name:string
}
