import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth.route';
import roomRouter from './routes/room.route';
import chatRouter from './routes/chat.route';

const app = express();
app.use(express.json());
const PORT = 3001;

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/room', roomRouter);
app.use('/api/v1/chat', chatRouter);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});