import axios from 'axios';
import { GET_ROOM_URL } from '../../../routes/api-routes';
import { ChatRoom } from '../../../src/components/ChatRoom';

async function getRoom(slug: string) {
    const response = await axios.get(GET_ROOM_URL(slug));
    return response.data.room.id;
}

export default async function ChatRoom1({ params }: {
    params: {
        slug: string
    }
}) {
    const slug = (await params).slug;
    const roomId = await getRoom(slug);

    return <ChatRoom id={roomId}></ChatRoom>
}