import { Module } from '@nestjs/common';
import { MahallaService } from './mahalla.service';
import { MahallaController } from './mahalla.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [MahallaController],
  providers: [MahallaService,PrismaService],
})
export class MahallaModule {}
