import { Injectable } from '@nestjs/common';
import { Package } from './package.entity';
import * as PackDto from './dto/index';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PackageService {
    constructor(@InjectRepository(Package) private packRepository:Repository<Package>){}
    

    async findPack(id:number){
        const pack= await this.packRepository.findOne({where:{id}});
        return pack;
    }

    async findAll(): Promise<Package[]> {
        return await this.packRepository.find();
      }
    
   async createPack(pack:PackDto.CreatePackDto):Promise<Package>{
       return await this.packRepository.save(pack);
    }

    async delete(packId: number):Promise<DeleteResult> {
        return await this.packRepository.delete({ id: packId});
      }

   
}
