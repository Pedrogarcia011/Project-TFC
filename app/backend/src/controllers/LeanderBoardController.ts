import { Request, Response } from 'express';
import ServiceLeandB from '../service/LeanderBoardService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class LeaderBoardController {
  constructor(private leaderBoardService = new ServiceLeandB()) {}

  getLeaderBoard = async (_req: Request, res: Response) => {
    const leaderBoard = await this.leaderBoardService.leanderBoard();
    res.status(mapStatusHTTP(leaderBoard.status)).json(leaderBoard.data);
  };
}
