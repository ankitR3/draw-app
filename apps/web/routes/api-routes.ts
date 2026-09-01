const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const wsUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL;

if (!BACKEND_URL) {
    throw new Error('NEXT_PUBLIC_BACKEND_URL is not set');
}

if (!wsUrl) {
    throw new Error('NEXT_PUBLIC_WEBSOCKET_URL is not set');
}

export const WS_URL: string = wsUrl;

export const API_URL = BACKEND_URL + '/api/v1';

export const SIGNUP_URL = API_URL + '/auth/signup';
export const SIGNIN_URL = API_URL + '/auth/signin';

export const CREATE_ROOM_URL = API_URL + '/room/create-room';
export const GET_ROOM_URL = (slug: string) => API_URL + `/room/${slug}`;

export const GET_CHATS_URL = (roomId: string) => API_URL + `/chat/${roomId}`;