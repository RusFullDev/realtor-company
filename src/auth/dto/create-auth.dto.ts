import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from "class-validator"

export class CreateAuthDto {
    @IsOptional()
    @IsString()
 readonly fullname:string

 @IsOptional()
 @IsPhoneNumber("UZ")
  readonly phone:string

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email:string
  @IsString()
  @IsNotEmpty()
  readonly password:string

}
