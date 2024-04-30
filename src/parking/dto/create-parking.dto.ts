import { IsString } from "class-validator";

export class CreateParkingDto {
    @IsString()
    readonly name:string
}
