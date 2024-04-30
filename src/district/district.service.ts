import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DistrictService {
constructor(private readonly prismaService:PrismaService){}

  create(createDistrictDto: CreateDistrictDto) {
    return this.prismaService.district.create({data:createDistrictDto})
  }

  findAll() {
    return this.prismaService.district.findMany({include:{Region:true}})
  }

  findOne(id: number) {
    return this.prismaService.district.findUnique({where:{id}})
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return this.prismaService.district.update({where:{id},data:updateDistrictDto})
  }

  remove(id: number) {
    return this.prismaService.district.delete({where:{id}})
  }
}
