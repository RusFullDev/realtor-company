import { Injectable } from '@nestjs/common';
import { CreateRealtorDto } from './dto/create-realtor.dto';
import { UpdateRealtorDto } from './dto/update-realtor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RealtorService {
  constructor(private readonly prismaService:PrismaService){}

  create(createRealtorDto: CreateRealtorDto) {
    return this.prismaService.realtor.create({data:createRealtorDto})
  }

  findAll() {
    return this.prismaService.realtor.findMany({include:{object:true}})
  }

  findOne(id: number) {
    return this.prismaService.realtor.findUnique({where:{id}})
  }

  update(id: number, updateRealtorDto: UpdateRealtorDto) {
    return this.prismaService.realtor.update({where:{id},data:updateRealtorDto})
  }

  remove(id: number) {
    return this.prismaService.realtor.delete({where:{id}})
  }
}
