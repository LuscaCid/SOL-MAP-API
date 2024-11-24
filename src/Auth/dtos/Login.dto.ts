import { ApiProperty } from '@nestjs/swagger';
import { Contains, IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  @Contains('@')
  @Contains('.')
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password : string
}
