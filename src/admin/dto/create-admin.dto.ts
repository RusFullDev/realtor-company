import { IsEmail, IsPhoneNumber, IsString } from "class-validator"

export class CreateAdminDto {
  @IsString()
  fullname:string
  @IsPhoneNumber("UZ")
  phone:string
  @IsEmail()
  email:string
  @IsString()
  password:string
}
