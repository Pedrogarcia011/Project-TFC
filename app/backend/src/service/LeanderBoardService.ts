import { ILeaderBord } from '../Interfaces/LeanderBoard/ILeaderBoard';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import ModelLeanderBoard from '../models/LeaderboardModel';

export default class ServiceLeanderBoard {
  constructor(private leaderBoardModel = new ModelLeanderBoard()) {}

  leanderBoard = async (): Promise<ServiceResponse<ILeaderBord[]>> => {
    const result = await this.leaderBoardModel.gatLaenderBord();
    const leanderB = result.map((item) => (
      { ...item,
        goalsBalance: item.goalsFavor - item.goalsOwn,
        efficiency: ((item.totalPoints / (item.totalGames * 3)) * 100).toFixed(2),
      }));
    const scoreResult = leanderB.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) return -1;
      if (a.totalPoints < b.totalPoints) return 1;
      if (a.totalVictories > b.totalVictories) return -1;
      if (a.totalVictories < b.totalVictories) return 1;
      if (a.goalsBalance > b.goalsBalance) return -1;
      if (a.goalsBalance < b.goalsBalance) return 1;
      if (a.goalsFavor > b.goalsFavor) return -1;
      if (a.goalsFavor < b.goalsFavor) return 1;
      return 0;
    });
    return { status: 'SUCCESSFUL', data: scoreResult };
  };

  leanderBoardAway = async (): Promise<ServiceResponse<ILeaderBord[]>> => {
    const result = await this.leaderBoardModel.awayLeanderBoard();
    return { status: 'SUCCESSFUL', data: result };
  };
}
