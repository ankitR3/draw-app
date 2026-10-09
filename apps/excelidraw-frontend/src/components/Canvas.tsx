import { useEffect, useRef } from 'react';
import { initDraw } from './draw';
import { Button } from '@repo/ui/button';

export function Canvas({ roomId, socket }: {
    roomId: string,
    socket: WebSocket
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        if (canvasRef.current) {
            initDraw(canvasRef.current, roomId, socket);
        }

    }, [canvasRef]);
    
    return (
        <div>
            <canvas ref={canvasRef} width={2000} height={1000}></canvas>
            <div className='fixed bottom-4 right-4 z-50'>
                <Button className='bg-white text-black mr-1.5'>Rect</Button>
                <Button className='bg-white text-black'>Circle</Button>
            </div>
        </div>
    )
}