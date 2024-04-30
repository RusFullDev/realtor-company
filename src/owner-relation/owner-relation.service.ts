import { Injectable } from '@nestjs/common';
import { CreateOwnerRelationDto } from './dto/create-owner-relation.dto';
import { UpdateOwnerRelationDto } from './dto/update-owner-relation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OwnerRelationService {
  constructor(private readonly prismaService:PrismaService ){}

  create(createOwnerRelationDto: CreateOwnerRelationDto) {
    return this.prismaService.ownerRelation.create({data:createOwnerRelationDto})
  }

  findAll() {
    return this.prismaService.ownerRelation.findMany({include:{object:true,
      OwnerCooperation:true,Ownership:true,ReasonDeleting:true,RelationshipType:true,
    }})
  }

  findOne(id: number) {
    return this.prismaService.ownerRelation.findUnique({where:{id}})
  }

  update(id: number, updateOwnerRelationDto: UpdateOwnerRelationDto) {
    return this.prismaService.ownerRelation.update({where:{id},data:updateOwnerRelationDto})
  }

  remove(id: number) {
    return this.prismaService.ownerRelation.delete({where:{id}})
  }
}
