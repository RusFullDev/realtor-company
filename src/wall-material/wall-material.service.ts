import { Injectable } from '@nestjs/common';
import { CreateWallMaterialDto } from './dto/create-wall-material.dto';
import { UpdateWallMaterialDto } from './dto/update-wall-material.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WallMaterialService {
  constructor(private readonly prismaService:PrismaService){}
  create(createWallMaterialDto: CreateWallMaterialDto) {
    return this.prismaService.wallMaterial.create({data:createWallMaterialDto})
  }

  findAll() {
    return this.prismaService.wallMaterial.findMany()
  }

  findOne(id: number) {
    return this.prismaService.wallMaterial.findUnique({where:{id}})
  }

  update(id: number, updateWallMaterialDto: UpdateWallMaterialDto) {
    return this.prismaService.wallMaterial.update({where:{id},data:updateWallMaterialDto})
  }

  remove(id: number) {
    return this.prismaService.wallMaterial.delete({where:{id}})
  }
}
