import { Request, Response } from 'express';
import UserService from '../service/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async findByEmail(req: Request, res: Response) {
    const { email, password } = req.body;

    const serviceResponse = await this.userService.findByEmail(email, password);

    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
