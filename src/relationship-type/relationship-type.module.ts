import { Module } from '@nestjs/common';
import { RelationshipTypeService } from './relationship-type.service';
import { RelationshipTypeController } from './relationship-type.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [RelationshipTypeController],
  providers: [RelationshipTypeService,PrismaService],
})
export class RelationshipTypeModule {}
