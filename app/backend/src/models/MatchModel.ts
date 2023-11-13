import { IMatch } from '../Interfaces/matches/IMatch';
import ModelMatch from '../database/models/ModelMatche';
import ModelTeam from '../database/models/ModelTeams';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';

export default class MatchModel implements IMatchModel {
  private model = ModelMatch;

  async findAllMatch(): Promise<IMatch[]> {
    const dbData = await this.model.findAll({
      include: [
        { model: ModelTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: ModelTeam, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return dbData;
  }

  async findByFilterMatches(filter: { inProgress?: boolean }): Promise<IMatch[]> {
    const dbData = await this.model.findAll({ where: filter,
      include: [
        { model: ModelTeam, as: 'homeTeam', attributes: ['teamName'] },
        { model: ModelTeam, as: 'awayTeam', attributes: ['teamName'] },
      ] });

    return dbData;
  }
}
