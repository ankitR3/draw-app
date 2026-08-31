import { Request, Response } from 'express';
import prisma from '@repo/db';

export default async function getChatsController(req: Request, res: Response) {
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
}