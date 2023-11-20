import { Router } from 'express';
import teamRouter from './team.router';
import userRouter from './user.router';
import matchRouter from './match.routes';
import leandBRouter from './leandBoard.routes';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', userRouter);
router.use('/matches', matchRouter);
router.use('/leaderboard', leandBRouter);

router.get('/test', (req, res) => res.json({ ok: true }));

export default router;
