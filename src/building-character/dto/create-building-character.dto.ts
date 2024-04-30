import { IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateBuildingCharacterDto {
    @IsString()
    readonly building_year:string  
    @IsBoolean()          
    readonly is_gas:boolean 
    @IsBoolean()                      
    readonly is_electric:boolean    
    @IsNumber()           
    readonly passenger_elevators_count:number 
    @IsNumber()   
    readonly freight_elevators_count:number 
    @IsBoolean()      
    readonly is_building_security:boolean   
    @IsBoolean()       
    readonly is_demolition_planned:boolean    
    @IsNumber()   
    readonly wallMaterialId:number      
    @IsNumber()   
    readonly overlapsId:number          
    @IsNumber()   
    readonly heatingSystemId:number     
    @IsNumber()   
    readonly buildingConditionId:number 
    @IsNumber()   
    readonly buildingSeriaId:number     
    @IsNumber()   
    readonly waterSupplyId:number       
    @IsNumber()   
    readonly parkingId:number           
}
