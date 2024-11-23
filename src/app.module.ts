import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from 'config/server.config';

@Module({
  imports: [
    MongooseModule.forRoot(
      ServerConfig.getMongoDbConnectionString(),
      ServerConfig.getMongoDbConfig()
    ),
    UserModule
  ],
})
export class AppModule {}
