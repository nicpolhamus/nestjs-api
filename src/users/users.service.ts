import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User
  ) {}

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({
      where: { email }
    });
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
