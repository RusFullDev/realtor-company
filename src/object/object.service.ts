import { Injectable } from '@nestjs/common';

import { UpdateObjectDto } from './dto/update-object.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateObjectDto } from './dto/create-object.dto';

@Injectable()
export class ObjectService {
  constructor(private readonly prismaService:PrismaService){}
  
  create(createObjectDto:CreateObjectDto) 
  {
    return this.prismaService.object.create({

      data:createObjectDto
    })
  }

  findAll() {
      return this.prismaService.object.findMany(
        {
          include:{
        Address:true,BuildingCharacter:true,Currency:true,ObjectCategory:true,
        ObjectStatus:true,ObjectType:true,OwnerRelation:true,Realtor:true,
        Renovation:true,ResidenceType:true,RoomType:true,WindowSide:true
      }
    }
    )
  }

  findOne(id: number) {
    return this.prismaService.object.findUnique({where:{id}})
  }

  update(id: number, updateObjectDto: UpdateObjectDto) {
    return this.prismaService.object.update({where:{id},data:updateObjectDto})
  }

  remove(id: number) {
    return this.prismaService.object.delete({where:{id}})
  }
}
