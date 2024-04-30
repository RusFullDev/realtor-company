import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateObjectTypeDto, UpdateObjectTypeDto } from './dto';

@Injectable()
export class ObjectTypeService {
  constructor(private readonly prismeService:PrismaService){}

  async create(createObjectTypeDto: CreateObjectTypeDto) {
   const objectT = await this.prismeService.objectType.create({data:createObjectTypeDto})
   return objectT
  }

  findAll() {
    return this.prismeService.objectType.findMany()
  }

  findOne(id: number) {
    return this.prismeService.objectType.findUnique({where:{id}})
  }

  update(id: number, updateObjectTypeDto: UpdateObjectTypeDto) {
    return this.prismeService.objectType.update({where:{id},data:updateObjectTypeDto})
  }

  remove(id: number) {
    return this.prismeService.objectType.delete({where:{id}})
  }
}
