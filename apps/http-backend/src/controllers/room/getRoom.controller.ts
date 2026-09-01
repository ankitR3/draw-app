import { Request, Response } from 'express';
import prisma from '@repo/db';

export default async function getRoomController(req: Request, res: Response) {
    try {
        const slug = req.params.slug;

        if (typeof slug !== 'string') {
            return res.status(400).json({
                message: 'Invalid slug'
            });
        }
        
        const room = await prisma.room.findFirst({
            where: {
                slug
            }
        });

        res.json({
            room
        });
    } catch(err) {
        console.log('get-room error: ', err);
        return res.status(500).json({
            message: 'error while getting room'
        });
    }
}