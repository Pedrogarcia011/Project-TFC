import { IMatch } from '../Interfaces/matches/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  constructor(private matchModel = new MatchModel()) { }

  public async findAllMatch(): Promise<ServiceResponse<IMatch[]>> {
    const getAllMatches = await this.matchModel.findAllMatch();

    return { status: 'SUCCESSFUL', data: getAllMatches };
  }
}
