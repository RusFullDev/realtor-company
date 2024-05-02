import { Injectable } from '@nestjs/common';
import { CreateBuildingConditionalDto } from './dto/create-building-conditional.dto';
import { UpdateBuildingConditionalDto } from './dto/update-building-conditional.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BuildingConditionalService {
  constructor(private readonly prismaService:PrismaService){}
  
  create(createBuildingConditionalDto: CreateBuildingConditionalDto) {
    return this.prismaService.buildingCondition.create({data:createBuildingConditionalDto})
  }

  findAll() {
    return this.prismaService.buildingCondition.findMany()
  }

  findOne(id: number) {
    return this.prismaService.buildingCondition.findUnique({where:{id}})
  }

  update(id: number, updateBuildingConditionalDto: UpdateBuildingConditionalDto) {
    return this.prismaService.buildingCondition.update({where:{id},data:updateBuildingConditionalDto})
  }

  remove(id: number) {
    return this.prismaService.buildingCondition.delete({where:{id}})
  }
}
