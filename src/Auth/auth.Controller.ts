import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_STEP, SkipAuth, skipStep } from './config/contants';
import { RegisterBodyDTO } from 'src/auth/dtos/Regist-DTO';
import { hash, compare } from 'bcryptjs';
import { LoginDTO } from 'src/Auth/dtos/Login.dto';
import { AuthService } from './auth.service';
import { PasswordDTO } from './dtos/PasswordDTO.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('auth')
export class AuthorizationController {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}
  @skipStep()
  @SkipAuth()
  @ApiBody({ type : LoginDTO })
  @Post('/signin')
  async createLogin(@Body() data: LoginDTO) {
    const { email, password } = data;

    const userFound = await this.authService.findByEmail(email, false);
    if (!userFound) throw new UnauthorizedException('Usuário não encontrado!');

    //comparsion between passwords
    const isCorrect = await compare(password, userFound.password);
    if (!isCorrect) throw new UnauthorizedException('Senha inválida.');
    
    const payload = await this.jwtService.signAsync(userFound);
    return {
      access_token: payload, //only email token, it cannot provide access to application for this user
    };
  }
  
  @skipStep()
  @SkipAuth() // i dont need to verify if token was passed in requisition cuz i want to register here
  @Post('/signup')
  @ApiBody({ type : RegisterBodyDTO })
  async createUser(@Body() data: RegisterBodyDTO) {
    const { email, password, username } = data;

    const emailAlreadyInUseByUsers = await this.authService.findByEmail(
      email,
      false,
    );
    if (emailAlreadyInUseByUsers) {
      throw new UnauthorizedException('E-mail ja cadastrado na aplicação.');
    }

    //it goes encrypt the password before inserts inside database 
    const encyptPassword = await hash(password, 8);

    const user_id = await this.authService.create({
      email,
      password: encyptPassword,
      username,
    });
    return user_id;
  }
}
