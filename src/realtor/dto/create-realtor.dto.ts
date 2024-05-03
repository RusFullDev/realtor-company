import { IsBoolean, IsDate, IsString } from "class-validator"

export class CreateRealtorDto {
  @IsString()
  name:string
  @IsBoolean()
  is_active:boolean  
  @IsDate()     
  reg_date:Date
  @IsDate()       
  deactivate_date:Date 
  @IsString()
  photo:string 
  @IsString()         
  login:string 
  @IsString()            
  password:string      
}
