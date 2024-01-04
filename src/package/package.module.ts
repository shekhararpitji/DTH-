import { Module } from '@nestjs/common';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';
import { Package } from './package.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Package])],

  controllers: [PackageController],
  providers: [PackageService]
})
export class PackageModule {}
