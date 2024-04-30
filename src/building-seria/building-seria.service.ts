import { Injectable } from '@nestjs/common';
import { CreateBuildingSeriaDto } from './dto/create-building-seria.dto';
import { UpdateBuildingSeriaDto } from './dto/update-building-seria.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BuildingSeriaService {
  constructor(private readonly prismaService:PrismaService){}
  create(createBuildingSeriaDto: CreateBuildingSeriaDto) {
    return this.prismaService.buildingSeria.create({data:CreateBuildingSeriaDto})
  }

  findAll() {
    return this.prismaService.buildingSeria.findMany()
  }

  findOne(id: number) {
    return this.prismaService.buildingSeria.findUnique({where:{id}})
  }

  update(id: number, updateBuildingSeriaDto: UpdateBuildingSeriaDto) {
    return this.prismaService.buildingSeria.update({where:{id},data:updateBuildingSeriaDto})
  }

  remove(id: number) {
    return this.prismaService.buildingSeria.delete({where:{id}})
  }
}
