import { Router } from 'express';
import createRoomController from '../controllers/room/createRoom.controller';
import { middleware } from '../middleware/middleware';
import getRoomController from '../controllers/room/getRoom.controller';

const router: Router = Router();

router.post('/create-room', middleware, createRoomController);
router.get('/:slug', getRoomController);

export default router;