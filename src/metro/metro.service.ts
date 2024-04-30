import { Injectable } from '@nestjs/common';
import { CreateMetroDto } from './dto/create-metro.dto';
import { UpdateMetroDto } from './dto/update-metro.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MetroService {
  constructor(private readonly prismaService:PrismaService){}
  create(createMetroDto: CreateMetroDto) {
    return this.prismaService.metro.create({data:createMetroDto})
  }

  findAll() {
    return this.prismaService.metro.findMany()
  }

  findOne(id: number) {
    return this.prismaService.metro.findUnique({where:{id}})
  }

  update(id: number, updateMetroDto: UpdateMetroDto) {
    return this.prismaService.metro.update({where:{id},data:updateMetroDto})
  }

  remove(id: number) {
    return this.prismaService.metro.delete({where:{id}})
  }
}
