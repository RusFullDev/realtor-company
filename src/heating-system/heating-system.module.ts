import { Module } from '@nestjs/common';
import { HeatingSystemService } from './heating-system.service';
import { HeatingSystemController } from './heating-system.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [HeatingSystemController],
  providers: [HeatingSystemService,PrismaService],
})
export class HeatingSystemModule {}
