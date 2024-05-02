import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto, LoginAuthDto, UpdateAuthDto } from './dto';
import * as bcrypt from 'bcryptjs'
import { Response } from 'express';
import { Admin } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
private readonly prismaService: PrismaService,
private jwtService: JwtService,
  ){}
/*********************************getToken******************************************** */

async getTokens(admin:Admin){
  const payload = {
   sub:admin.id,
    email: admin.email
  };

  const [accessToken, refreshToken] = await Promise.all([
    this.jwtService.signAsync(payload, {
      secret: process.env.ACCESS_TOKEN_KEY,
      expiresIn: process.env.ACCESS_TOKEN_TIME,
    }),
    this.jwtService.signAsync(payload, {
      secret: process.env.REFRESH_TOKEN_KEY,
      expiresIn: process.env.REFRESH_TOKEN_TIME,
    }),
  ]);
  return {
    access_token: accessToken,
    refresh_token: refreshToken,
  };
}
/****************************************************************************************** */

async updateRefreshToken(admin:Admin,refreshToken:string){
  const hashedRefreshToken = await bcrypt.hash(refreshToken,7)
  await this.prismaService.admin.update({
    where:{
      id:admin.id,
    },
    data:{
      hashedRefreshToken
    }
  })
}
/****************************************signUp********************************************* */
async signUp(createAuthDto:CreateAuthDto,res:Response){
  const admin = await this.prismaService.admin.findUnique({
    where:
      {email:createAuthDto.email}
    })
    if(admin){
      throw new BadRequestException('Admin already exists!')
    }
    const hashedPassword  = await bcrypt.hash(createAuthDto.password,7)
    const newAdmin = await this.prismaService.admin.create({
data:{
  fullname:createAuthDto.fullname,
  phone:createAuthDto.phone,
  email:createAuthDto.email,
  hashedPassword
} })

    const tokens = await this.getTokens(newAdmin)
  await this.updateRefreshToken(newAdmin,tokens.refresh_token)

  res.cookie('refresh_token',tokens.refresh_token,{
    maxAge:Number(process.env.COOKIE_TIME),
    httpOnly:true
  })
    return tokens
}

/*********************************************signIn*************************************************/
async singIn(loginAuthDto:LoginAuthDto,res:Response){
  const admin = await this.prismaService.admin.findUnique({
    where:
      {email:loginAuthDto.email}
    })
    if(!admin){
      throw new BadRequestException('Admin not found ')
    }
    const passwordMuch = await bcrypt.compare(loginAuthDto.password,admin.hashedPassword)
    if(!passwordMuch){
      throw new BadRequestException("Password not much")
    }
    const tokens = await this.getTokens(admin)
    await this.updateRefreshToken(admin,tokens.refresh_token)
    res.cookie('refresh_token',tokens.refresh_token,{
      maxAge:Number(process.env.COOKIE_TIME),
      httpOnly:true
    })
    return tokens
}
/*************************************************logout *******************************************/
async logout(refreshToken:string,res:Response){
  const adminData = await this.jwtService.verify(refreshToken,{secret:process.env.REFRESH_TOKEN_KEY})

  if(!adminData){
    throw new ForbiddenException('Admin not verified')
  }
}








  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
