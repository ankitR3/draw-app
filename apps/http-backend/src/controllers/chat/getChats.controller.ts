import { Request, Response } from 'express';
import prisma from '@repo/db';

export default async function getChatsController(req: Request, res: Response) {
    try {
        const roomId = Number(req.params.roomId);

        // if (isNaN(roomId)) {
        //     return res.status(400).json({
        //         message: 'Invalid roomId'
        //     });
        // }

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
        });
    } catch (err) {
        console.log('get chats error: ', err);
        return res.status(500).json({
            message: 'error while getting the chats'
        });
    }
}