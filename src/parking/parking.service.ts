import { Injectable } from '@nestjs/common';
import { CreateParkingDto } from './dto/create-parking.dto';
import { UpdateParkingDto } from './dto/update-parking.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParkingService {
  constructor(private readonly prismaService:PrismaService){}
  create(createParkingDto: CreateParkingDto) {
    return this.prismaService.parking.create({data:createParkingDto})
  }

  findAll() {
    return this.prismaService.parking.findMany()
  }

  findOne(id: number) {
    return this.prismaService.parking.findUnique({where:{id}})
  }

  update(id: number, updateParkingDto: UpdateParkingDto) {
    return this.prismaService.parking.update({where:{id},data:updateParkingDto})
  }

  remove(id: number) {
    return this.prismaService.parking.delete({where:{id}})
  }
}
