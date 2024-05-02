import { BadRequestException, ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto, LoginAuthDto, UpdateAuthDto } from './dto';
import * as bcrypt from 'bcryptjs'
import { Response } from 'express';
import { Admin } from '@prisma/client';
import { AdminService } from 'src/admin/admin.service';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';


@Injectable()
export class AuthService {
  constructor(
private readonly prismaService: PrismaService,
private readonly jwtService: JwtService,
private readonly adminService:AdminService,
    private readonly logger:Logger
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
/*************************************updateRefreshToken***************************************************** */

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
async signUp(createAdminDto:CreateAdminDto,res:Response){
 
    const newAdmin = await this.adminService.create(createAdminDto)

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
  const{confirm_password,password} = loginAuthDto
  this.logger.log('Calling signin()',AdminService.name)
  this.logger.debug('Calling signin()',AdminService.name)
  this.logger.verbose('Calling signin()',AdminService.name)
  this.logger.warn('Calling signin()',AdminService.name)

  
  if(password !== confirm_password){
    throw new BadRequestException('password is incorrect')
  }
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
// async logout(refreshToken:string,res:Response){
//   const adminData = await this.jwtService.verify(refreshToken,{secret:process.env.REFRESH_TOKEN_KEY})

//   if(!adminData){
//     throw new ForbiddenException('Admin not verified')
//   }
// }

/********************************************************************************* */

async signout(adminId:number, res: Response) {
  const admin = await this.prismaService.admin.updateMany({
   where:{
     id:adminId,
     hashedRefreshToken:{
       not:null
     },
   },
   data:{
     hashedRefreshToken:null
   }
  })
   if (!admin) {
     throw new ForbiddenException('Access Denied');
   }
  
   res.clearCookie('refresh_token');
 
   return true
 }


/****************************************refreshToken*********************************************** */

async refreshToken(adminId: number, refreshToken: string, res: Response) {
  const admin = await this.prismaService.admin.findUnique({
    where:{
      id:adminId
    }
  })

  if (!admin || !admin.hashedRefreshToken) {
    throw new BadRequestException('server not found');
  }
 
  
  const newUser = await this.prismaService.admin.findUnique({ where: { id: adminId } });

  if (!newUser || !newUser.hashedRefreshToken) {
    throw new BadRequestException('User not found');
  }
  const tokenMatch = await bcrypt.compare(
    refreshToken,
    newUser.hashedRefreshToken
  );

  if (!tokenMatch) {
    throw new ForbiddenException('Forbidden');
  }


  const tokens = await this.getTokens(newUser);
  await bcrypt.hash(tokens.refresh_token, 7);

  const checkUser = await this.prismaService.admin.findUnique({where:{id:newUser.id}})
  if(!checkUser){
    throw new BadRequestException('user not Found');
  }

 await this.updateRefreshToken(newUser,tokens.refresh_token)

  res.cookie("refresh_token",tokens.refresh_token,
  {
    maxAge: Number(process.env.COOKIE_TIME),
     httpOnly: true,
  })

 
  return tokens;
}

}


