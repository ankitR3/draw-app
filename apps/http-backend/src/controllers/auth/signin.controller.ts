import { Request, Response } from 'express';
import prisma from '@repo/db';
import jwt from 'jsonwebtoken';
import { SignInSchema } from '@repo/common/types';
import { JWT_SECRET } from '@repo/backend-common/config';

export default async function signinController(req: Request, res: Response) {
    const data = SignInSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: 'Incorrect inputs'
        });
        return;
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: data.data.email
            }
        });

        if (!user) {
            res.status(403).json({
                message: 'User not found'
            });
            return;
        }

        if (user.password !== data.data.password) {
            res.status(403).json({
                message: 'Incorrect password'
            });
            return;
        }

        const token = jwt.sign(
            {
                userId: user.id
            },
            JWT_SECRET
        );

        res.json({
            token
        });
    } catch (err) {
        console.log('signin error: ', err);
        return res.status(500).json({
            message: 'error while signing in'
        });
    }
}