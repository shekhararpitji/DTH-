import { Injectable } from '@nestjs/common';
import { Channel } from './channel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import * as ChannelDto from './dto/index';

@Injectable()
export class ChannelService {
    constructor(@InjectRepository(Channel) private channelRepository:Repository<Channel>){}
    

    async findChannel(id:number){
        const channel= await this.channelRepository.findOne({where:{id}});
        return channel;
    }

    async findAll(): Promise<Channel[]> {
        return await this.channelRepository.find();
      }
    
   async createChannel(channel:ChannelDto.CreateChannelDto):Promise<Channel>{
       return await this.channelRepository.save(channel);
    }

    async delete(channelId: number):Promise<DeleteResult> {
        return await this.channelRepository.delete({ id: channelId});
      }

   
}
