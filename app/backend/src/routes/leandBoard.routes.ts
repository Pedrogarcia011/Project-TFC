import { Request, Response, Router } from 'express';
import LeanderBoardController from '../controllers/LeanderBoardController';

const leanderBController = new LeanderBoardController();

const router = Router();

router.get(
  '/home',
  (req: Request, res: Response) => leanderBController.getLeaderBoard(req, res),
);

export default router;
