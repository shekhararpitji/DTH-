import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { PackageModule } from './package/package.module';
import { ChannelModule } from './channel/channel.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: process.env.USER,
      password: process.env.PASS,
      database: process.env.DBNAME,
      entities: [],
      synchronize: true,
    }),
    UserModule,
    // AuthModule,
    SubscriptionModule,
    PackageModule,
    ChannelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
