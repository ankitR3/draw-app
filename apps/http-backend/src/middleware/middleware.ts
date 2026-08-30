import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '@repo/backend-common/config';

export function middleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization ?? '';

    // const JWT_SECRET = process.env.JWT_SECRET;

    // if (!JWT_SECRET) {
    //     throw new Error('JWT_SECRET is not defined');
    // }

    try {
         const decoded = jwt.verify(token, JWT_SECRET);

        if (typeof decoded === 'string' || !decoded.userId) {
            return res.status(403).json({
                message: 'Unauthorized'
            });
        }

        req.userId = decoded.userId;
        next();
    } catch (err) {
        console.log('middleware error: ', err);
        return res.status(403).json({
            message: 'Unauthorized'
        });
    }
}