import { Module } from '@nestjs/common';
import { OwnerCooperationService } from './owner-cooperation.service';
import { OwnerCooperationController } from './owner-cooperation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [OwnerCooperationController],
  providers: [OwnerCooperationService,PrismaService],
})
export class OwnerCooperationModule {}
