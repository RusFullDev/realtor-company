import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateObjectStatusDto, UpdateObjectStatusDto } from './dto';

@Injectable()
export class ObjectStatusService {
  constructor(private readonly prismaService:PrismaService){}

  create(createObjectStatusDto: CreateObjectStatusDto) {
    return this.prismaService.objectStatus.create({data:createObjectStatusDto})
  }

  findAll() {
    return this.prismaService.objectStatus.findMany()
  }

  findOne(id: number) {
    return this.prismaService.objectStatus.findUnique({where:{id}})
  }

  update(id: number, updateObjectStatusDto: UpdateObjectStatusDto) {
    return this.prismaService.objectStatus.update({where:{id},data:updateObjectStatusDto})
  }

  remove(id: number) {
    return this.prismaService.objectStatus.delete({where:{id}})
  }
}
