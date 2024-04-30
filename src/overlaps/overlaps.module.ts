import { Module } from '@nestjs/common';
import { OverlapsService } from './overlaps.service';
import { OverlapsController } from './overlaps.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [OverlapsController],
  providers: [OverlapsService,PrismaService],
})
export class OverlapsModule {}
