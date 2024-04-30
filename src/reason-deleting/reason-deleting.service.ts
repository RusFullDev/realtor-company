import { Injectable } from '@nestjs/common';
import { CreateReasonDeletingDto } from './dto/create-reason-deleting.dto';
import { UpdateReasonDeletingDto } from './dto/update-reason-deleting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReasonDeletingService {
  constructor(private readonly prismaService:PrismaService){}

  create(createReasonDeletingDto: CreateReasonDeletingDto) {
    return this.prismaService.reasonDeleting.create({data:createReasonDeletingDto})
  }

  findAll() {
    return this.prismaService.reasonDeleting.findMany()
  }

  findOne(id: number) {
    return this.prismaService.reasonDeleting.findUnique({where:{id}})
  }

  update(id: number, updateReasonDeletingDto: UpdateReasonDeletingDto) {
    return this.prismaService.reasonDeleting.update({where:{id},data:updateReasonDeletingDto})
  }

  remove(id: number) {
    return this.prismaService.reasonDeleting.delete({where:{id}})
  }
}
