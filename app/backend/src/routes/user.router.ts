import { Request, Response, Router } from 'express';
import UserController from '../controllers/UsersController';
import UserMiddlewares from '../middlewares/users.middlewares';
import TokenValidation from '../middlewares/token.middleware';

const userController = new UserController();

const router = Router();

router.post(
  '/',
  UserMiddlewares.verifyEmailAndPasswordExist,
  UserMiddlewares.verifyLoginValid,
  (req: Request, res: Response) => userController.findByEmail(req, res),
);

router.get(
  '/role',
  TokenValidation.tokenValidate,
  (req: Request, res: Response) => userController.findByGetRole(req, res),
);

export default router;
