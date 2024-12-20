import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthorizationController } from './auth.Controller';
import { JwtModule } from '@nestjs/jwt';
import authConfig from './config/auth.config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerConfig } from 'config/server.config';
import { User, UserSchema } from 'schemas/user.entity';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name : User.name, schema : UserSchema }
    ], ServerConfig.getMongoDbName()),
    JwtModule.register({
      global: true,
      secret: authConfig.jwtSecret,
      signOptions: { expiresIn: authConfig.expiresIn },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthorizationController],
})
export class AuthModule {}
