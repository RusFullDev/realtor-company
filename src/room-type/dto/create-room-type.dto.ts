import { IsString } from "class-validator";

export class CreateRoomTypeDto {
    @IsString()
    readonly name:string
}
