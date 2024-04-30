import { Injectable } from '@nestjs/common';
import { CreateOwnershipDto } from './dto/create-ownership.dto';
import { UpdateOwnershipDto } from './dto/update-ownership.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnershipService {
  constructor(private readonly prismaService:PrismaService){}

  create(createOwnershipDto: CreateOwnershipDto) {
    return this.prismaService.ownership.create({data:createOwnershipDto})
  }

  findAll() {
    return this.prismaService.ownership.findMany()
  }

  findOne(id: number) {
    return this.prismaService.ownership.findUnique({where:{id}})
  }

  update(id: number, updateOwnershipDto: UpdateOwnershipDto) {
    return this.prismaService.ownership.update({where:{id},data:updateOwnershipDto})
  }

  remove(id: number) {
    return this.prismaService.ownership.delete({where:{id}})
  }
}
