import { Injectable } from '@nestjs/common';
import { CreateWindowSideDto } from './dto/create-window-side.dto';
import { UpdateWindowSideDto } from './dto/update-window-side.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WindowSideService {
  constructor(private readonly prismaService:PrismaService){}
  create(createWindowSideDto: CreateWindowSideDto) {
    return this.prismaService.windowSide.create({data:createWindowSideDto})
  }

  findAll() {
    return this.prismaService.windowSide.findMany()
  }

  findOne(id: number) {
    return this.prismaService.windowSide.findUnique({where:{id}})
  }

  update(id: number, updateWindowSideDto: UpdateWindowSideDto) {
    return this.prismaService.windowSide.update({where:{id},data:updateWindowSideDto})
  }

  remove(id: number) {
    return this.prismaService.windowSide.delete({where:{id}})
  }
}
