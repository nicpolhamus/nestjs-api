import { Column, Model, Table, Default, Unique } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  @Unique
  email: string;

  @Column
  @Default(true)
  isActive: boolean;

  @Column
  password: string;

  @Column
  passwordResetToken: string;
}