import { Injectable } from '@nestjs/common';
import { CreateHeatingSystemDto } from './dto/create-heating-system.dto';
import { UpdateHeatingSystemDto } from './dto/update-heating-system.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HeatingSystemService {
  constructor(private readonly prismaService:PrismaService){}
  create(createHeatingSystemDto: CreateHeatingSystemDto) {
    return this.prismaService.heatingSystem.create({data:createHeatingSystemDto})
  }

  findAll() {
    return this.prismaService.heatingSystem.findMany()
  }

  findOne(id: number) {
    return this.prismaService.heatingSystem.findUnique({where:{id}})
  }

  update(id: number, updateHeatingSystemDto: UpdateHeatingSystemDto) {
    return this.prismaService.heatingSystem.update({where:{id},data:updateHeatingSystemDto})
  }

  remove(id: number) {
    return this.prismaService.heatingSystem.delete({where:{id}})
  }
}
