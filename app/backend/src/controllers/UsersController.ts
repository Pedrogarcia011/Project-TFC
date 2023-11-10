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

  public async findByGetRole(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const serviceResponse = await this.userService.findByGetRole(token);

    res.status(200).json(serviceResponse.data);
  }
}
