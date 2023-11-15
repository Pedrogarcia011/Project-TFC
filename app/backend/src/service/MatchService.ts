import { IMatch } from '../Interfaces/matches/IMatch';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import MatchModel from '../models/MatchModel';

export default class MatchService {
  constructor(private matchModel = new MatchModel()) { }

  public async findAllMatch(): Promise<ServiceResponse<IMatch[]>> {
    const getAllMatches = await this.matchModel.findAllMatch();

    return { status: 'SUCCESSFUL', data: getAllMatches };
  }

  public async findByFilterMatches(filter: { inProgress?: boolean }):
  Promise<ServiceResponse<IMatch[]>> {
    const filterMatches = await this.matchModel.findByFilterMatches(filter);

    return { status: 'SUCCESSFUL', data: filterMatches };
  }

  public async matchFinish(id: IMatch['id']):
  Promise<ServiceResponse<IMatch>> {
    const checkId = await this.matchModel.findById(id);
    if (checkId === null) return { status: 'NOT_FOUND', data: { message: 'Id not found' } };

    const finish = await this.matchModel.matchFinish(id);
    if (finish === null) return { status: 'NOT_FOUND', data: { message: 'not found' } };

    return { status: 'SUCCESSFUL', data: finish };
  }
}
