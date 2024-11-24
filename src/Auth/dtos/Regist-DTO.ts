import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterBodyDTO {
  @IsNotEmpty()
  @Length(3, 20 )
  @ApiProperty()
  username: string;
  
  @ApiProperty()
  @IsEmail({}, { message: 'Precisa ser um email correto.' })
  email: string;
  
  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
