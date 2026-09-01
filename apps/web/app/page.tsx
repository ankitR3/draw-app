'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [roomId, setRoomId] = useState('') ;
  const router = useRouter();

  return (
    <div className={'flex w-screen h-screen justify-center items-center'}>
      <div>
        <input className='p-1.5 mr-2 rounded-sm' value={roomId} onChange={(e) => {
          setRoomId(e.target.value);
        }} type='text' placeholder='room id'></input>

        <button className='p-1.5 hover:bg-gray-200 rounded-sm hover:cursor-pointer' onClick={() => {
          router.push(`/room/${roomId}`);
        }}>Join Room</button>
      </div>
    </div>
  );
}
