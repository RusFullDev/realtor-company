import { Injectable } from '@nestjs/common';
import { CreateRenovationDto } from './dto/create-renovation.dto';
import { UpdateRenovationDto } from './dto/update-renovation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RenovationService {
  constructor(private readonly prismaService:PrismaService){}
  create(createRenovationDto: CreateRenovationDto) {
    return this.prismaService.renovation.create({data:createRenovationDto})
  }

  findAll() {
    return this.prismaService.renovation.findMany()
  }

  findOne(id: number) {
    return this.prismaService.renovation.findUnique({where:{id}})
  }

  update(id: number, updateRenovationDto: UpdateRenovationDto) {
    return this.prismaService.renovation.update({where:{id},data:updateRenovationDto})
  }

  remove(id: number) {
    return this.prismaService.renovation.delete({where:{id}})
  }
}
