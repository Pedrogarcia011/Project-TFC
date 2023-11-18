import { NextFunction, Request, Response } from 'express';

export default class NoInsertData {
  static async validateInsert(req: Request, res: Response, next: NextFunction)
    : Promise<Response | void> {
    const { awayTeamId, homeTeamId } = req.body;

    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }

    if (homeTeamId > 16 || awayTeamId > 16) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    return next();
  }
}
