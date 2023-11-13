import { IMatch } from './IMatch';

export interface IMatchModel {
  findAllMatch(): Promise<IMatch[]>,
  findByFilterMatches(filter: { inProgress?: boolean }): Promise<IMatch[]>;
}
