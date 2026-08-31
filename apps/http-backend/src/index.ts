import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { middleware } from './middleware/middleware';
import { JWT_SECRET } from '@repo/backend-common/config';
import { CreateUserSchema, SignInSchema, CreateRoomSchema } from '@repo/common/types';
import prisma from '@repo/db';

const app = express();
app.use(express.json());

app.post('/signup', async (req: Request, res: Response) => {
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
})

app.post('/signin', async (req: Request, res: Response) => {
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
})

app.post('/room', middleware, async (req: Request, res: Response) => {
    const data = CreateRoomSchema.safeParse(req.body);
    if (!data.success) {
        res.json({
            message: 'Incorrect inputs'
        });
        return;
    }

    if (!req.userId) {
        res.status(401).json({
            message: 'Unauthorized'
        });
        return;
    }

    try {
        const room = await prisma.room.create({
            data: {
                slug: data.data.slug,
                adminId: req.userId
            }
        });

        res.json({
            roomId: room.id
        });
    } catch (err) {
        console.log('create-room error : ', err);
        return res.status(500).json({
            message: 'error while creating room'
        });
    }
})

app.get('/chat/:roomid', async (req: Request, res: Response) => {
    const roomId = Number(req.params.roomId);
    const messages = await prisma.chat.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            id: 'desc'
        },
        take: 50
    });

    res.json({
        messages
    })
}) 

app.listen(3000);