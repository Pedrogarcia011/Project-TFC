import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';

const matchController = new MatchController();

const router = Router();

/* router.get('/', (req: Request, res: Response) =>
  matchController.findAllMatch(req, res));
 */
router.get('/', (req: Request, res: Response) => {
  if (req.query.inProgress) {
    matchController.findByFilterMatches(req, res);
  } else {
    matchController.findAllMatch(req, res);
  }
});

export default router;
