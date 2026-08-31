import { Router } from 'express';
import createRoomController from '../controllers/room/createRoom.controller';
import { middleware } from '../middleware/middleware';

const router: Router = Router();

router.post('/create-room', middleware, createRoomController);

export default router;