import { Module } from '@nestjs/common';
import { StreetService } from './street.service';
import { StreetController } from './street.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [StreetController],
  providers: [StreetService,PrismaService],
})
export class StreetModule {}
