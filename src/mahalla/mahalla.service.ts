import { Injectable } from '@nestjs/common';
import { CreateMahallaDto } from './dto/create-mahalla.dto';
import { UpdateMahallaDto } from './dto/update-mahalla.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MahallaService {
  constructor(private readonly prismaService:PrismaService){}
  create(createMahallaDto: CreateMahallaDto) {
    return this.prismaService.mahalla.create({data:createMahallaDto})
  }

  findAll() {
    return this.prismaService.mahalla.findMany({include:{Area:true}})
  }

  findOne(id: number) {
    return this.prismaService.mahalla.findUnique({where:{id}})
  }

  update(id: number, updateMahallaDto: UpdateMahallaDto) {
    return this.prismaService.mahalla.update({where:{id},data:updateMahallaDto})
  }

  remove(id: number) {
    return this.prismaService.mahalla.delete({where:{id}})
}
}