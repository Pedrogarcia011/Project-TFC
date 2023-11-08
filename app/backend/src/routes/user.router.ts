import { Request, Response, Router } from 'express';
import UserController from '../controllers/UsersController';
/* import TeamController from '../controllers/Teams.Controler'; */

const userController = new UserController();

const router = Router();

router.post(
  '/',
  (req: Request, res: Response) => userController.findByEmail(req, res),
);

export default router;
