import { IsString } from "class-validator";

export class CreateRelationshipTypeDto {
    @IsString()
    name:string
}
