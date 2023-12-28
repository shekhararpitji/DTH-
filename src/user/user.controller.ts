import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
// import { LoginUserDto } from './dto/CreateUser.dto';

@Controller('/user')
export class UserController {
constructor(private userService:UserService){}


  @Post()
    store(@Body() user:User){
      
      return this.userService.createUser(user);
    }

  // @Post()
  //   login(@Body() body:LoginUserDto){
  //     const {email,password}=body;
  //     return this.userService.login(email,password);
  //   }
  
  @Get('/user:userId')
  getUser(@Param()param:{userId:number}){
    const id=+param;
    return this.userService.findUsers(id) ;
  }
}
