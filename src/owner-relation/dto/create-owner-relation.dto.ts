import { IsNumber, IsString } from "class-validator"

export class CreateOwnerRelationDto {
    @IsNumber()
    readonly commission_amount:number 
    @IsString()  
    readonly commission_comment:string 
  @IsNumber()
  readonly deposit_amount:number  
  @IsNumber()   
  readonly deposit_paid:number  
  @IsNumber()      
  readonly owner_price_ideal:number 
  @IsNumber()  
  readonly owner_price_real:number 
  @IsNumber()   
  readonly owner_price_minimal:number 
  @IsNumber()
  readonly ownershipId:number   
  @IsNumber()    
  readonly reasonDeletingId:number 
  @IsNumber()  
  readonly ownerCooperationId:number 
  @IsNumber()
  readonly relationshipTypeId:number 
}
