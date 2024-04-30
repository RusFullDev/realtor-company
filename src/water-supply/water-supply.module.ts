import { Module } from '@nestjs/common';
import { WaterSupplyService } from './water-supply.service';
import { WaterSupplyController } from './water-supply.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [WaterSupplyController],
  providers: [WaterSupplyService,PrismaService],
})
export class WaterSupplyModule {}
