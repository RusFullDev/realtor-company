import { Module } from '@nestjs/common';
import { OwnerRelationService } from './owner-relation.service';
import { OwnerRelationController } from './owner-relation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [OwnerRelationController],
  providers: [OwnerRelationService,PrismaService],
})
export class OwnerRelationModule {}
