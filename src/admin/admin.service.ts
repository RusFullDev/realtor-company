import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AdminService {
  constructor( private readonly prismaService:PrismaService){}

  async create(createAdminDto: CreateAdminDto) {
    const admin = await this.prismaService.admin.findUnique({
      where:
        {email:createAdminDto.email}
      })
      if(admin){
        throw new BadRequestException('Admin already exists!')
      }
const hashedPassword = await bcrypt.hash(createAdminDto.password,7)

const newAdmin = await this.prismaService.admin.create({
  data:{
    fullname:createAdminDto.fullname,
        email:createAdminDto.email,
        phone:createAdminDto.phone,
        hashedPassword }
})

return newAdmin
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
