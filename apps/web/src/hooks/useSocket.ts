import { useEffect, useState } from 'react';
import { WS_URL } from '../../routes/api-routes';

export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSokcet] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(WS_URL);
        ws.onopen = () => {
            setLoading(false);
            setSokcet(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}