import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { CreateResidenceTypeDto, UpdateResidenceTypeDto } from './dto';

@Injectable()

export class ResidenceTypeService {
  constructor(private readonly prismaService:PrismaService){}


  create(createResidenceTypeDto: CreateResidenceTypeDto) {
    return this.prismaService.residenceType.create({data:createResidenceTypeDto})
  }

  findAll() {
    return this.prismaService.residenceType.findMany({
      include:{
        ObjectType:true
      }
    })
  }

  findOne(id: number) {
    return this.prismaService.residenceType.findUnique({where:{id}})
  }

  update(id: number, updateResidenceTypeDto: UpdateResidenceTypeDto) {
    return this.prismaService.residenceType.update({where:{id},data:updateResidenceTypeDto})
  }

  remove(id: number) {
    return this.prismaService.residenceType.delete({where:{id}})
  }
}
