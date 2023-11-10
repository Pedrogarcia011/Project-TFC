import { IUsers } from '../Interfaces/users/IUsers';
import { IUsersModel } from '../Interfaces/users/IUsersModel';
import ModelUsers from '../database/models/ModelUsers';

export default class UserModel implements IUsersModel {
  private model = ModelUsers;

  async findByEmail(email: string): Promise<IUsers | null> {
    const dbData = await this.model.findOne({ where: { email } });

    if (dbData === null) return null;

    const { id, username, role, password }: IUsers = dbData;
    return { id, username, role, password, email };
  }

  async findByGetRole(id: number): Promise<string> {
    const dbData = await this.model.findByPk(id);

    if (!dbData) {
      throw new Error('User not found');
    }

    return dbData.role;
  }
}
