import { Router } from 'express';
import teamRouter from './team.router';
import userRouter from './user.router';

const router = Router();

router.use('/teams', teamRouter);
router.use('/login', userRouter);

router.get('/test', (req, res) => res.json({ ok: true }));

export default router;
