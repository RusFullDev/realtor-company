import { IsBoolean, IsNumber, IsString } from "class-validator"

export class CreateObjectDto {
 @IsString()
 readonly name:string

 @IsBoolean()
 readonly is_studio:boolean 

  @IsNumber()       
  readonly floor:number 

  @IsNumber()                  
  readonly floors_in_building:number

  @IsNumber()     
  readonly total_area :number

  @IsNumber()        
  readonly live_area :number 

  @IsNumber()             
  readonly kitchen_area :number

  @IsNumber()        
  readonly rooms_area :number

  @IsNumber()              
  readonly price:number 

  @IsNumber()                 
  readonly price_per_square:number 

  @IsString()  
  readonly price_type:string 

  @IsBoolean()    
  readonly is_apartmen:boolean  

  @IsBoolean()     
  readonly is_luxury:boolean 

  @IsNumber()          
  readonly ceiling_height:number 

  @IsNumber()         
  readonly combined_bath_count:number 

  @IsNumber()     
  readonly separate_bath_count:number

  @IsNumber()      
  readonly loggia_count:number 

  @IsString() 
  readonly loggia_description:string 

   @IsNumber()      
   readonly balcony_count:number 

  @IsString()  
  readonly balcony_description:string 

  @IsString()
  readonly general_description:string

  @IsString()
  readonly cadastral_number:string  

  @IsString()  
  readonly document:string 

  @IsString()      
  readonly layout:string 

  @IsString()        
  readonly fotos:string  

  @IsBoolean()            
  readonly online_show:boolean

  @IsString()      
  readonly video:string   

  // @IsNumber()     
  readonly realtorId:number

  @IsNumber()     
  readonly ownerRelationId:number   

  @IsNumber()     
  readonly addressId:number   

  @IsNumber()     
  readonly buildingCharacterId:number

  @IsNumber()     
  readonly objectTypeId:number 

  @IsNumber()     
  readonly residenceTypeId:number 

  @IsNumber()     
  readonly objectCategoryId:number  

  @IsNumber()     
  readonly objectStatusId:number  

  @IsNumber()     
  readonly currencyId:number    

  @IsNumber()     
  readonly renovationId:number    

  @IsNumber()     
  readonly windowSideId:number 
  
  @IsNumber()             
  readonly roomTypeId:number         
}
