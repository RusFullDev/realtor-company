import { Module } from '@nestjs/common';
import { WindowSideService } from './window-side.service';
import { WindowSideController } from './window-side.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [WindowSideController],
  providers: [WindowSideService,PrismaService],
})
export class WindowSideModule {}
