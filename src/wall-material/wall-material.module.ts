import { Module } from '@nestjs/common';
import { WallMaterialService } from './wall-material.service';
import { WallMaterialController } from './wall-material.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [WallMaterialController],
  providers: [WallMaterialService,PrismaService],
})
export class WallMaterialModule {}
