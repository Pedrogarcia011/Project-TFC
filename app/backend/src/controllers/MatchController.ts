import { Request, Response } from 'express';
import MatchService from '../service/MatchService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class MatchController {
  constructor(
    private matchService = new MatchService(),
  ) { }

  public async findAllMatch(req: Request, res: Response) {
    const serviceResponse = await this.matchService.findAllMatch();

    res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}
