import { NextFunction, Request, Response } from 'express';

export default class UserMiddlewares {
  static verifyEmailAndPasswordExist(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    next();
  }

  static verifyLoginValid(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;

    const regex = /\S+@\S+\.\S+/;

    if (!regex.test(email) || password.length < 6) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    next();
  }
}
