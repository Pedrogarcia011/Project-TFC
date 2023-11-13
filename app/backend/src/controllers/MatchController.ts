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

  public async findByFilterMatches(req: Request, res: Response) {
    const { inProgress } = req.query;

    const filter: { inProgress?: boolean } = {};

    if (inProgress === undefined) {
      res.status(400).json({ error: 'Parâmetro inProgress não fornecido.' });
      return;
    }

    if (inProgress !== undefined) {
      filter.inProgress = inProgress === 'true';
    }

    const { status, data } = await this.matchService.findByFilterMatches(filter);

    res.status(mapStatusHTTP(status)).json(data);
  }
}
