import { Body, Controller, Delete, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import * as UserDto from './dto/index';
import { User } from './user.entity';
import { DeleteResult } from 'typeorm';


@Controller('/auth/user')
export class UserController {
constructor(private userService:UserService){}


  // @Post('/signup')
  //   store(@Body() userData:UserDto.CreateUserDto){
      
  //     return this.userService.createUser(userData);
  //   }

  // @Post('/login')
  async login(@Body('user') loginUserdto: UserDto.LoginUserDto): Promise<User> {
      return this.userService.login(loginUserdto);
    }
  
  @Get('/get/:userId')
  getUser(@Param()param:{userId:string}): Promise<User>{
    const {userId}=param;
    return this.userService.findUsers(userId) ;
  }

  @Delete('/:email')
  delete(@Param()param:{email:string}): Promise<DeleteResult>{
    const {email}=param;
    return this.userService.delete(email) ;
  }

  @Get('/')
  findAll(){
    return this.userService.findAll() ;
  }
}
