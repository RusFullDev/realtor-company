import { Injectable } from '@nestjs/common';
import { CreateAreaDto } from './dto/create-area.dto';
import { UpdateAreaDto } from './dto/update-area.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AreaService {
  constructor(private readonly prismaService:PrismaService){}
  create(createAreaDto: CreateAreaDto) {
    return this.prismaService.area.create({data:createAreaDto})
  }

  findAll() {
    return this.prismaService.area.findMany({include:{District:true}})
  }

  findOne(id: number) {
    return this.prismaService.area.findUnique({where:{id}})
  }

  update(id: number, updateAreaDto: UpdateAreaDto) {
    return this.prismaService.area.update({where:{id},data:updateAreaDto})
  }

  remove(id: number) {
    return this.prismaService.area.delete({where:{id}})
  }
}
