import { Request, Response } from 'express';
import { CreateRoomSchema } from '@repo/common/types';
import prisma from '@repo/db';

export default async function createRoomController(req: Request, res: Response) {
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
}