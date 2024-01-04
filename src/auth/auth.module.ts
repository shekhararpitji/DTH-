import { JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local-strategy';
import { UserService } from 'src/user/user.service';
import { JwtServices } from './jwtService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';

@Module({
  imports:[UserModule,PassportModule,TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers:[UserService,JwtServices,JwtService,AuthService,LocalStrategy],
  exports:[]
})
export class AuthModule {}
