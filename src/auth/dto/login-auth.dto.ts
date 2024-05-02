import { IsEmail,IsNotEmpty,IsString } from "class-validator"

export class LoginAuthDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  readonly email:string

  @IsString()
  @IsNotEmpty()
  readonly password:string

  @IsString()
  @IsNotEmpty()
  readonly confirm_password:string

}
