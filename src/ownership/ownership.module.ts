import { Module } from '@nestjs/common';
import { OwnershipService } from './ownership.service';
import { OwnershipController } from './ownership.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [OwnershipController],
  providers: [OwnershipService,PrismaService],
})
export class OwnershipModule {}
