import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'John',
        password: 'simple'
      },
      {
        userId: 2,
        username: 'Josh',
        password: 'easy'
      },
      {
        userId: 3,
        username: 'James',
        password: 'test'
      }
    ];
  }

  async findOne(username: string): Promise<User> {
    return this.users.find(user => user.username === username);
  }
}
