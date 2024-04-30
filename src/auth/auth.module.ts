import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AccesTokenStrategy } from 'src/common/strategies';
import { AccessTokenGuard } from 'src/common/guards';

@Module({
  imports:[JwtModule.register({}) ,PrismaModule],
  controllers: [AuthController],
  providers: [AuthService,AccesTokenStrategy,AccessTokenGuard],
})

export class AuthModule {}
