import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenGuard } from 'src/common/guards';
import { AdminService } from 'src/admin/admin.service';
import { AccessTokenStrategy } from 'src/common/strategies';

@Module({
  imports:[JwtModule.register({}) ,PrismaModule],
  controllers: [AuthController],
  providers: [AuthService,AccessTokenStrategy,AccessTokenGuard,AdminService,Logger],
})

export class AuthModule {}
