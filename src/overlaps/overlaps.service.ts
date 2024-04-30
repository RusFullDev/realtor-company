import { Injectable } from '@nestjs/common';
import { CreateOverlapDto } from './dto/create-overlap.dto';
import { UpdateOverlapDto } from './dto/update-overlap.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OverlapsService {
  constructor(private readonly prismaService:PrismaService){}
  create(createOverlapDto: CreateOverlapDto) {
    return this.prismaService.overlaps.create({data:createOverlapDto})
  }

  findAll() {
    return this.prismaService.overlaps.findMany()
  }

  findOne(id: number) {
    return this.prismaService.overlaps.findUnique({where:{id}})
  }

  update(id: number, updateOverlapDto: UpdateOverlapDto) {
    return this.prismaService.overlaps.update({where:{id},data:updateOverlapDto})
  }

  remove(id: number) {
    return this.prismaService.overlaps.delete({where:{id}})
  }
}
