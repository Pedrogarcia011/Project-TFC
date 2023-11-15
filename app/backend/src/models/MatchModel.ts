import { IMatch } from '../Interfaces/matches/IMatch';
import ModelMatch from '../database/models/ModelMatche';
import ModelTeam from '../database/models/ModelTeams';
import { IMatchModel } from '../Interfaces/matches/IMatchModel';
/* import { ServiceMessage } from '../Interfaces/ServiceResponse'; */

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

  async findById(id : IMatch['id']) : Promise<IMatch | null> {
    const mache = await this.model.findByPk(id);
    return mache;
  }

  async matchFinish(id: IMatch['id']): Promise<IMatch | null> {
    const [affectedRows] = await this.model.update({ inProgress: false }, { where: { id } });
    if (affectedRows === 0) return null;

    const result = await this.findById(id);
    return result;
  }
}
