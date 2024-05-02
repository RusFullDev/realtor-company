import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminService {
  constructor( private readonly prismaService:PrismaService){}

  create(createAdminDto: CreateAdminDto) {
    return this.prismaService.admin
  }

  findAll() {
    return this.prismaService.admin.findMany()
  }

  findOne(id: number) {
    return this.prismaService.admin.findUnique({where:{id}})
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.prismaService.admin.update({where:{id},data:updateAdminDto})
  }

  remove(id: number) {
    return this.prismaService.admin.delete({where:{id}})
  }
}
