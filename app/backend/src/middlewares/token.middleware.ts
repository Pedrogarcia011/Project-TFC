import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export default class TokenValidation {
  static tokenValidate(req: Request, res: Response, next: NextFunction): Response | void {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const arrToken = token.split(' ', 2);

    try {
      const decodToken = jwt.verify(arrToken[1], process.env.JWT_SECRET || 'secret');
      res.locals.user = decodToken;

      return next();
    } catch (error) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
  }
}
