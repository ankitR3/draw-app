import { Request, Response } from 'express';
import prisma from '@repo/db';
import { CreateUserSchema } from '@repo/common/types';

export default async function signupController(req: Request, res: Response) {
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: 'Incorrect inputs'
        });
        return;
    }

    try {
        const user = await prisma.user.create({
            data: {
                email: data.data.email,
                password: data.data.password,
                name: data.data.name,
            }
        })

        res.json({
            userId: user.id
        });
    } catch (err) {
        console.log('signup error: ', err);
        return res.status(500).json({
            message: 'error while signing up'
        });
    }
}