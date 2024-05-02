import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';
import { LoginAuthDto } from './dto';
import { AccessTokenGuard, RefreshTokenGuard } from 'src/common/guards';
import { Tokens } from './types';
import { GetCurrentUser, GetCurrentUserId, Public } from 'src/common/decorators';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';




@UseGuards(AccessTokenGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


 @Public()
  @Post('signUp')
  async singup(@Body() loginAuthDto: CreateAdminDto,
  @Res({passthrough:true}) res:Response) :Promise<Tokens>
  {
    return this.authService.signUp(loginAuthDto,res);
  }


  
  @Post('signIn')
   async singin(@Body() createAuthDto: LoginAuthDto,
  @Res({passthrough:true}) res:Response) :Promise<Tokens>{
    return this.authService.singIn(createAuthDto,res);
  }


  @Post('signout')
  async logout(
    @GetCurrentUserId() userId:number,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.authService.signout(+userId, res);
  }

  
  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshToken(
    @GetCurrentUserId() userId:number,
    @GetCurrentUser('refreshToken') refreshToken:string,
    @Res({passthrough:true})
    res:Response):Promise<Tokens>{
      return this.authService.refreshToken(+userId,refreshToken,res)
    }
  

}


// UseGuards(AccesTokenStrategy)
// UseGuards(AccessTokenGuard)
// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}


//   @Post('signUp')
//   async signUp(@Body() createAuthDto: CreateAuthDto,
//   @Res({passthrough:true}) res:Response):Promise<Tokens> {

//     return this.authService.signUp(createAuthDto,res);
//   }


//   @Post('signIn')
// async signIn(@Body() loginAuthDto:LoginAuthDto,
// @Res({passthrough:true}) res:Response){
//   return this.authService.singIn(loginAuthDto,res);
// }


  
// }