import { IMatch } from './IMatch';

export interface IMatchModel {
  findAllMatch(): Promise<IMatch[]>,
}
