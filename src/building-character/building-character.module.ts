import { Module } from '@nestjs/common';
import { BuildingCharacterService } from './building-character.service';
import { BuildingCharacterController } from './building-character.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports:[PrismaModule],
  controllers: [BuildingCharacterController],
  providers: [BuildingCharacterService,PrismaService],
})
export class BuildingCharacterModule {}
