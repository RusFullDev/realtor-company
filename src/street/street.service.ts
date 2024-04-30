import { Injectable } from '@nestjs/common';
import { CreateStreetDto } from './dto/create-street.dto';
import { UpdateStreetDto } from './dto/update-street.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StreetService {
  constructor(private readonly prismaService:PrismaService){}
  create(createStreetDto: CreateStreetDto) {
    return this.prismaService.street.create({data:createStreetDto})
  }

  findAll() {
    return this.prismaService.street.findMany({include:{Mahalla:true}})
  }

  findOne(id: number) {
    return this.prismaService.street.findUnique({where:{id}})
  }

  update(id: number, updateStreetDto: UpdateStreetDto) {
    return this.prismaService.street.update({where:{id},data:updateStreetDto})
  }

  remove(id: number) {
    return this.prismaService.street.delete({where:{id}})
  }
}
