import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository:Repository<User>,){}
  
    findUsers(id:number){
        return this.userRepository.find({where:{id}});
       
    }

   createUser(user:User){
       return this.userRepository.save(user);
    }

//    async login(email:string,password:string){
//     return await this.userRepository.find

//     }
}
