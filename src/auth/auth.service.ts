import { Injectable } from '@nestjs/common';
import { UsersService, Users } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string) {
    const user = await this.usersService.findOne(username);

    if (user?.password === pass) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: Users) {
    const payload = { username: user.username, sub: user.userId };
    const log = { accessToken: this.jwtService.sign(payload) };
    console.log('log:', log);
    return log;
  }
}
