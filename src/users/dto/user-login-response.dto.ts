import UserDto from "./user.dto";
import { User } from "../models/user.model";

export default class UserLoginResponseDto extends UserDto {
  token: string;

  constructor(user: User | UserDto, token?: string) {
    super(user);
    this.token = token;
  }
}