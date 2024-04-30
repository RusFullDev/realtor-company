import { Module } from '@nestjs/common';
import { BuildingSeriaService } from './building-seria.service';
import { BuildingSeriaController } from './building-seria.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [BuildingSeriaController],
  providers: [BuildingSeriaService,PrismaService],
})
export class BuildingSeriaModule {}
