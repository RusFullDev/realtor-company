import { Injectable } from '@nestjs/common';
import { CreateRelationshipTypeDto } from './dto/create-relationship-type.dto';
import { UpdateRelationshipTypeDto } from './dto/update-relationship-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RelationshipTypeService {
  constructor(private readonly prismaService:PrismaService){}

  create(createRelationshipTypeDto: CreateRelationshipTypeDto) {
    return this.prismaService.relationshipType.create({data:createRelationshipTypeDto})
  }

  findAll() {
    return this.prismaService.relationshipType.findMany()
  }

  findOne(id: number) {
    return this.prismaService.relationshipType.findUnique({where:{id}})
  }

  update(id: number, updateRelationshipTypeDto: UpdateRelationshipTypeDto) {
    return this.prismaService.relationshipType.update({where:{id},data:updateRelationshipTypeDto})
  }

  remove(id: number) {
    return this.prismaService.relationshipType.delete({where:{id}})
  }
}
