import { UserRegistrationType } from 'src/auth/interface/Service-interface';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ServerConfig } from 'config/server.config';
import { IUser } from './interface/User.interface';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from 'schemas/user.entity';
import { Model } from 'mongoose';

/**
 * changes made inside this service to correspond to an injection of mongoose model
 */
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name, ServerConfig.getMongoDbName())
    private userModel : Model<User>,

    private readonly jwtService: JwtService,
  ) {}
  async SignInToken(data: IUser) {
    const payload = {
      sub: data.user_id,
      username: data.username,
      email: data.email,
    };
    return await this.jwtService.signAsync(payload);
  }
  async findByEmail(email: string, isSelected: boolean) {
    try {
      //i need to verify email that was sent is already in use
      const userFoundByEmail = await this.userModel.findOne({email})
      return userFoundByEmail;
    } catch (err) {
      throw new UnauthorizedException(err);
    }
  }
  async create(data: UserRegistrationType): Promise<void | object> {
    try {
      const client = await this.userModel.create(data)
      return client;
    } catch (e) {
      return { e };
    }
  }
}
