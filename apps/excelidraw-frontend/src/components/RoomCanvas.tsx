'use client'

import { useEffect, useState } from 'react';
import { Canvas } from './Canvas';

export function RoomCanvas({roomId}: { roomId: string }) {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const wsUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

        if (!wsUrl) {
            console.error("WebSocket URL is missing");
            return;
        }
        
        const ws = new WebSocket(`${wsUrl}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMDM2NzExOS0wMWYwLTRiYTktYjRiYS02ZWUxMGU3NDEyNTQiLCJpYXQiOjE3ODgyNTYzMjB9.OBJ7uiIJ3k50yGCKOEdRngw2ULn7jVewtcj4Tg48TaQ`);

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: 'join-room',
                roomId
            }))
        }
    }, []);

    if (!socket) {
        return (
            <div>
                Connecting to server.....
            </div>
        )
    }

    return (
        <div>
            <Canvas roomId={roomId} socket={socket} />
        </div>
    )
}