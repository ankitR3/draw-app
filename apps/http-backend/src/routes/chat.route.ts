import { Router } from 'express';
import getChatsController from '../controllers/chat/getChats.controller';

const router: Router = Router();

router.get('/:roomId', getChatsController);

export default router;