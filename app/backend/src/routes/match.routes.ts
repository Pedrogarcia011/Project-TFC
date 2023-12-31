import { Request, Response, Router } from 'express';
import MatchController from '../controllers/MatchController';
import TokenValidation from '../middlewares/token.middleware';
import InsertValidation from '../middlewares/match.middleware';

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

router.patch(
  '/:id/finish',
  TokenValidation.tokenValidate,
  (req: Request, res: Response) => matchController.matchFinish(req, res),
);

router.patch(
  '/:matchId',
  TokenValidation.tokenValidate,

  (req: Request, res: Response) => matchController.updateMatch(req, res),
);

router.post(
  '/',
  TokenValidation.tokenValidate,
  InsertValidation.validateInsert,
  (req: Request, res: Response) => matchController.matchCreated(req, res),
);

export default router;
