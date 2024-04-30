import { Injectable } from '@nestjs/common';
import { CreateOwnerCooperationDto } from './dto/create-owner-cooperation.dto';
import { UpdateOwnerCooperationDto } from './dto/update-owner-cooperation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnerCooperationService {
  constructor(private readonly prismaService:PrismaService){}

  create(createOwnerCooperationDto: CreateOwnerCooperationDto) {
    return this.prismaService.ownerCooperation.create({data:createOwnerCooperationDto})
  }

  findAll() {
    return this.prismaService.ownerCooperation.findMany()
  }

  findOne(id: number) {
    return this.prismaService.ownerCooperation.findUnique({where:{id}})
  }

  update(id: number, updateOwnerCooperationDto: UpdateOwnerCooperationDto) {
    return this.prismaService.ownerCooperation.update({where:{id},data:updateOwnerCooperationDto})
  }

  remove(id: number) {
    return this.prismaService.ownerCooperation.delete({where:{id}})
  }
}
