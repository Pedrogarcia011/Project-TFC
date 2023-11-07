import { Request, Response } from 'express';
import TeamService from '../service/TeamService';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) { }

  public async findAllTeam(req: Request, res: Response) {
    const serviceResponse = await this.teamService.findAllTeam();

    res.status(200).json(serviceResponse.data);
  }

  public async findByIdTeams(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this.teamService.findByIdTeams(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(500).json(serviceResponse.data);
    }

    res.status(200).json(serviceResponse.data);
  }
}
