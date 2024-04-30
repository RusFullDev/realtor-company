import { Module } from '@nestjs/common';
import { ResidenceTypeService } from './residence-type.service';
import { ResidenceTypeController } from './residence-type.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [ResidenceTypeController],
  providers: [ResidenceTypeService,PrismaService],
})
export class ResidenceTypeModule {}
