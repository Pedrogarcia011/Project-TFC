import { ITeams } from '../Interfaces/teams/ITeams';
import { ITeamsModel } from '../Interfaces/teams/ITeamModel';
import TeamModel from '../models/TeamModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';

export default class TeamService {
  constructor(
    private teamModel: ITeamsModel = new TeamModel(),
  ) { }

  public async findAllTeam(): Promise<ServiceResponse<ITeams[]>> {
    const allTeams = await this.teamModel.findAllTeam();
    return { status: 'SUCCESSFUL', data: allTeams };
  }

  public async findByIdTeams(id: number): Promise<ServiceResponse<ITeams>> {
    const team = await this.teamModel.findByIdTeams(id);
    if (!team) return { status: 'NOT_FOUND', data: { message: `Team ${id} not found` } };

    return { status: 'SUCCESSFUL', data: team };
  }
}
