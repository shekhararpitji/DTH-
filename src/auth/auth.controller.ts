import { CreateUserDto } from './../user/dto/CreateUser.dto';
import { Body, Controller, Post,  UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { Response } from 'express';
import { ExistingUser } from 'src/interceptor/ExistingUser';
import { LoginUserDto } from 'src/user/dto';
import { LocalAuthGuard } from './local-auth.guard';


@Controller('/user')
export class AuthController {
    constructor(private readonly authService:AuthService){}
        @Post('/signup')
        @UseInterceptors(ExistingUser)
        signup(@Body()userData:CreateUserDto ){
        return this.authService.signUp(userData);
       
        }
        @UseGuards(LocalAuthGuard)
    @Post('/signin')
        signin(@Body() userData:LoginUserDto){
        const user = this.authService.signIn(userData);
        return user;
        }
    }

