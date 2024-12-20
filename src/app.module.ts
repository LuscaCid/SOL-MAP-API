import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from 'config/server.config';
import { InterceptRequest } from './Auth/interceptRequest';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { AuthGuard } from './Auth/auth.guard';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      ServerConfig.getMongoDbConnectionString(),
      ServerConfig.getMongoDbConfig()
    ),
    UserModule,
    AuthModule
  ],
  providers : [
    {
      // it goes to intercept the request, get token in headers and inject him inside the others controllers 
      useClass : InterceptRequest,
      provide : APP_INTERCEPTOR
    },
    {
      //after got token, it will ensure him, if isnt passed, blocks
      useClass : AuthGuard,
      provide : APP_GUARD
    }
  ]
})
export class AppModule {}
