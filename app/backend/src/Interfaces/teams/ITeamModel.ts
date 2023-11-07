import { ITeams } from './ITeams';

export interface ITeamsModel {
  findAllTeam(): Promise<ITeams[]>,
  findByIdTeams(id: ITeams['id']): Promise<ITeams | null>
}
