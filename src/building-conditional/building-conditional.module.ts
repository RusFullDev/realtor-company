import { Module } from '@nestjs/common';
import { BuildingConditionalService } from './building-conditional.service';
import { BuildingConditionalController } from './building-conditional.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [BuildingConditionalController],
  providers: [BuildingConditionalService,PrismaService],
})
export class BuildingConditionalModule {}
