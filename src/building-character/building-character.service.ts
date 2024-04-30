import { Injectable } from '@nestjs/common';
import { CreateBuildingCharacterDto } from './dto/create-building-character.dto';
import { UpdateBuildingCharacterDto } from './dto/update-building-character.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BuildingCharacterService {
  constructor(private readonly prismaService:PrismaService){}
  create(createBuildingCharacterDto: CreateBuildingCharacterDto) {
    return this.prismaService.buildingCharacter.create({data:createBuildingCharacterDto})
  }

  findAll() {
    return this.prismaService.buildingCharacter.findMany({include:{BuildingCondition:true,
      BuildingSeria:true,HeatingSystem:true,object:true,Overlaps:true,
      Parking:true,WallMaterial:true,WaterSupply:true,
    }})
  }

  findOne(id: number) {
    return this.prismaService.buildingCharacter.findUnique({where:{id}})
  }

  update(id: number, updateBuildingCharacterDto: UpdateBuildingCharacterDto) {
    return this.prismaService.buildingCharacter.update({where:{id},data:updateBuildingCharacterDto})
  }

  remove(id: number) {
    return this.prismaService.buildingCharacter.delete({where:{id}})
  }
}
