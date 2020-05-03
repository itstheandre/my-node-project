import { Injectable } from '@nestjs/common';

export type Users = {
  userId: number;
  username: string;
  password?: string;
};

@Injectable()
export class UsersService {
  private readonly users: Users[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<Users | undefined> {
    return this.users.find((user: Users) => user.username === username);
  }
}
