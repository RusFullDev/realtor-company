import { Module } from '@nestjs/common';
import { ObjectCategoryService } from './object-category.service';
import { ObjectCategoryController } from './object-category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [ObjectCategoryController],
  providers: [ObjectCategoryService,PrismaService],
})
export class ObjectCategoryModule {}
