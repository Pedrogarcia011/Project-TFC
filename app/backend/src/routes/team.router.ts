import { Request, Response, Router } from 'express';
import TeamController from '../controllers/Teams.Controler';

const teamController = new TeamController();

const router = Router();

router.get(
  '/',
  (req: Request, res: Response) => teamController.findAllTeam(req, res),
);

router.get(
  '/:id',
  (req: Request, res: Response) => teamController.findByIdTeams(req, res),
);
export default router;
