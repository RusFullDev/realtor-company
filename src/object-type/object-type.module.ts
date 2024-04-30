import { Module } from '@nestjs/common';
import { ObjectTypeService } from './object-type.service';
import { ObjectTypeController } from './object-type.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [ObjectTypeController],
  providers: [ObjectTypeService,PrismaService],
})
export class ObjectTypeModule {}
