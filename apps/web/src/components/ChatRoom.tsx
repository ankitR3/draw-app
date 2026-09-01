import axios from 'axios';
import { GET_CHATS_URL } from '../../routes/api-routes';
import { ChatRoomClient } from './ChatRoomClient';

async function getChats(roomId: string) {
    const response = await axios.get(GET_CHATS_URL(roomId));
    return response.data.messages;
}

export async function ChatRoom({id}: {
    id: string
}) {
    const messages = await getChats(id);
    return <ChatRoomClient id={id} messages={messages} />
}