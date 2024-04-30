import { Module } from '@nestjs/common';
import { ReasonDeletingService } from './reason-deleting.service';
import { ReasonDeletingController } from './reason-deleting.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [ReasonDeletingController],
  providers: [ReasonDeletingService,PrismaService],
})
export class ReasonDeletingModule {}
