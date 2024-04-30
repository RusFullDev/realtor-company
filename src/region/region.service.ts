import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RegionService {
  constructor(private readonly prismaService:PrismaService){}
  create(createRegionDto: CreateRegionDto) {
    return this.prismaService.region.create({data:createRegionDto})
  }

  findAll() {
    return this.prismaService.region.findMany()
  }

  findOne(id: number) {
    return this.prismaService.region.findUnique({where:{id}})
  }

  update(id: number, updateRegionDto: UpdateRegionDto) {
    return this.prismaService.region.update({where:{id},data:updateRegionDto})
  }

  remove(id: number) {
    return this.prismaService.region.delete({where:{id}})
  }
}
