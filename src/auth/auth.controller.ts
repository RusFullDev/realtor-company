import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';
import { LoginAuthDto } from './dto';
import { AccesTokenStrategy } from 'src/common/strategies';
import { AccessTokenGuard } from 'src/common/guards';
import { Tokens } from './types';


UseGuards(AccesTokenStrategy)
UseGuards(AccessTokenGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('signUp')
  async signUp(@Body() createAuthDto: CreateAuthDto,
  @Res({passthrough:true}) res:Response):Promise<Tokens> {

    return this.authService.signUp(createAuthDto,res);
  }


  @Post('signIn')
async signIn(@Body() loginAuthDto:LoginAuthDto,
@Res({passthrough:true}) res:Response){
  return this.authService.singIn(loginAuthDto,res);
}


  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
