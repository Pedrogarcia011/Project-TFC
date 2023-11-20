import MatchModel from './MatchModel';
import TeamModel from './TeamModel';
import { ILeaderBord } from '../Interfaces/LeanderBoard/ILeaderBoard';

export default class ModelLeanderBoard {
  constructor(private modelMatch = new MatchModel(), private modelTeam = new TeamModel()) { }

  matchFinish = async () => {
    const matchesFinish = await this.modelMatch.getByProgress('false');
    return matchesFinish;
  };

  teamsAll = async () => {
    const findAllTeams = await this.modelTeam.findAllTeam();
    return findAllTeams;
  };

  gatLaenderBord = async (): Promise<ILeaderBord[]> => {
    const teamsAll = await this.teamsAll();
    const matchFinish = await this.matchFinish();

    const leanderB = teamsAll.map((team) => {
      const matchesTeam = matchFinish.filter((match) => match.homeTeamId === team.id);
      const wins = matchesTeam.filter((match) => match.homeTeamGoals > match.awayTeamGoals);
      const draws = matchesTeam.filter((match) => match.homeTeamGoals === match.awayTeamGoals);
      const loss = matchesTeam.filter((match) => match.homeTeamGoals < match.awayTeamGoals);

      return {
        name: team.teamName,
        totalPoints: wins.length * 3 + draws.length,
        totalGames: matchesTeam.length,
        totalVictories: wins.length,
        totalDraws: draws.length,
        totalLosses: loss.length,
        goalsFavor: matchesTeam.reduce((total, match) => total + match.homeTeamGoals, 0),
        goalsOwn: matchesTeam.reduce((total, match) => total + match.awayTeamGoals, 0) };
    });

    return leanderB;
  };

  awayLeanderBoard = async (): Promise<ILeaderBord[]> => {
    const teamsAll = await this.teamsAll();
    const matchFinish = await this.matchFinish();

    const leanderB = teamsAll.map((team) => {
      const matchesTeam = matchFinish.filter((match) => match.awayTeamId === team.id);
      const wins = matchesTeam.filter((match) => match.awayTeamGoals > match.homeTeamGoals);
      const draws = matchesTeam.filter((match) => match.awayTeamGoals === match.homeTeamGoals);
      const loss = matchesTeam.filter((match) => match.awayTeamGoals < match.homeTeamGoals);

      return {
        name: team.teamName,
        totalPoints: wins.length * 3 + draws.length,
        totalGames: matchesTeam.length,
        totalVictories: wins.length,
        totalDraws: draws.length,
        totalLosses: loss.length,
        goalsFavor: matchesTeam.reduce((total, match) => total + match.homeTeamGoals, 0),
        goalsOwn: matchesTeam.reduce((total, match) => total + match.awayTeamGoals, 0) };
    });

    return leanderB;
  };
}
