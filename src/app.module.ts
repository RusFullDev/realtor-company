import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ObjectTypeModule } from './object-type/object-type.module';
import { ResidenceTypeModule } from './residence-type/residence-type.module';
import { ObjectCategoryModule } from './object-category/object-category.module';


@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,envFilePath:'.env'}), PrismaModule, AuthModule, ObjectTypeModule, ResidenceTypeModule, ObjectCategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
