import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Users } from 'src/users/users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, pass: string): Promise<Users> {
    const user = await this.authService.validateUser(username, pass);

    console.log('Inside Validate');
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
