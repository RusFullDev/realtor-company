import { Module } from '@nestjs/common';
import { RenovationService } from './renovation.service';
import { RenovationController } from './renovation.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RenovationController],
  providers: [RenovationService,PrismaService],
})
export class RenovationModule {}
