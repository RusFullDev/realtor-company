import { Module } from '@nestjs/common';
import { ObjectStatusService } from './object-status.service';
import { ObjectStatusController } from './object-status.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [ObjectStatusController],
  providers: [ObjectStatusService,PrismaService],
})
export class ObjectStatusModule {}
