import * as jwt from 'jsonwebtoken';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import UserModel from '../models/UsersModel';
import { IToken } from '../Interfaces/IToken';

export default class UserService {
  constructor(
    private userModel = new UserModel(),
  ) { }

  public async findByEmail(email: string, password: string): Promise<ServiceResponse<IToken>> {
    if (!email || !password) {
      return { status: 'INVALID_DATA', data: { message: 'All fields must be filled' } };
    }

    const user = await this.userModel.findByEmail(email);

    if (!user) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret');

    return { status: 'SUCCESSFUL', data: { token } };
  }
}
