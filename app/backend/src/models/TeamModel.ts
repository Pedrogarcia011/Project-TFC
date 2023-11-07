import { ITeamsModel } from '../Interfaces/teams/ITeamModel';
import { ITeams } from '../Interfaces/teams/ITeams';
import ModelTeams from '../database/models/ModelTeams';

export default class TeamModel implements ITeamsModel {
  private model = ModelTeams;

  async findAllTeam(): Promise<ITeams[]> {
    const dbData = await this.model.findAll();

    return dbData.map(({ id, teamName }) => (
      { id, teamName }
    ));
  }

  async findByIdTeams(id: ITeams['id']): Promise<ITeams | null> {
    const dbData = await this.model.findByPk(id);
    if (dbData === null) return null;

    const { teamName }: ITeams = dbData;
    return { teamName, id };
  }
}
