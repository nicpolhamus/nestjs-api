import { User } from "../models/user.model";

export default class UserDto {
  id: string;

  readonly email: string;

  readonly firstName: string;

  readonly lastName: string;

  constructor(user: User | UserDto) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}