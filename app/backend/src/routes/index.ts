import { Router } from 'express';
import teamRouter from './team.router';

const router = Router();

router.use('/teams', teamRouter);

router.get('/test', (req, res) => res.json({ ok: true }));

export default router;
