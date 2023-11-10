import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import UserModel from '../models/UsersModel';
import { IToken } from '../Interfaces/IToken';

export default class UserService {
  constructor(
    private userModel = new UserModel(),
  ) { }

  public async findByEmail(email: string, password: string): Promise<ServiceResponse<IToken>> {
    const user = await this.userModel.findByEmail(email);

    if (!user || !await bcrypt.compare(password, user.password)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Invalid email or password' } };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret');

    return { status: 'SUCCESSFUL', data: { token } };
  }

  public async findByGetRole(token: string): Promise<ServiceResponse<{ role: string }>> {
    // aqui tenho que decodificar o token que recebo e pegar o id
    const arrToken = token.split(' ', 2);
    /* console.log(arrToken[1]); */
    const decodToken: any = jwt.verify(arrToken[1], process.env.JWT_SECRET || 'secret');

    const userId = decodToken.id;
    const role = await this.userModel.findByGetRole(userId);

    return { status: 'SUCCESSFUL', data: { role } };
  }
}
