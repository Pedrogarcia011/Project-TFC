import { Request, Response, Router } from 'express';
import UserController from '../controllers/UsersController';
import UserMiddlewares from '../middlewares/users.middlewares';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  UserMiddlewares.verifyEmailAndPasswordExist,
  UserMiddlewares.verifyLoginValid,
  (req: Request, res: Response) => userController.findByEmail(req, res),
);

export default router;
