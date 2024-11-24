import { Request } from 'express';
import { User } from 'schemas/user.entity';

export interface PasswordDTO extends Request {
  body: {
    password: string;
  };

  user: User;
}
