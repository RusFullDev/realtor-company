import { IsNumber, IsString } from "class-validator"

export class CreateAddressDto {
    @IsNumber()
    readonly house_number:number    
    @IsNumber()     
    readonly apartment_number:number
    @IsString()    
    readonly location:string  
    @IsString()             
    readonly landmark:string     
    @IsString()          
    readonly location_description:string 
    @IsNumber()
    readonly regionId:number   
    @IsNumber()
    readonly districtId:number
    @IsNumber()
    readonly metroId:number   
    @IsNumber()
    readonly areaId:number    
    @IsNumber()
    readonly mahallaId:number 
    @IsNumber()
    readonly streetId:number   
}
