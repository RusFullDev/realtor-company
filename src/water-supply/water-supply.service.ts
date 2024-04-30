import { Injectable } from '@nestjs/common';
import { CreateWaterSupplyDto } from './dto/create-water-supply.dto';
import { UpdateWaterSupplyDto } from './dto/update-water-supply.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WaterSupplyService {
  constructor(private readonly prismaService:PrismaService){}
  create(createWaterSupplyDto: CreateWaterSupplyDto) {
    return this.prismaService.waterSupply.create({data:createWaterSupplyDto})
  }

  findAll() {
    return this.prismaService.waterSupply.findMany()
  }

  findOne(id: number) {
    return this.prismaService.waterSupply.findUnique({where:{id}})
  }

  update(id: number, updateWaterSupplyDto: UpdateWaterSupplyDto) {
    return this.prismaService.waterSupply.update({where:{id},data:updateWaterSupplyDto})
  }

  remove(id: number) {
    return this.prismaService.waterSupply.delete({where:{id}})
  }
}
