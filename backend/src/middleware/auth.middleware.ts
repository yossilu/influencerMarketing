import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {

    const isAuthenticated = true; // just for example purposes of testing

    if (!isAuthenticated) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    next();
  }
}