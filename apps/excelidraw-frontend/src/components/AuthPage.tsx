'use client'

import { Button } from '@repo/ui/button';
import { Input } from '@repo/ui/input';

export function Authpage({isSignin}: {
    isSignin: boolean
}) {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='p-4 m-2 bg-white rounded-sm'>
                <div className='text-black p-1'>
                    <Input type='text' placeholder='Email'></Input>
                </div>
                <div className='text-black mt-3 p-1'>
                    <Input type='password' placeholder='Password'></Input>
                </div>

                <div>
                    <Button variant='default' className='p-2.5 mt-3 ' onClick={() => {

                    }}>{isSignin? 'Sign in' : 'Sign up'}</Button>
                </div>
            </div>
        </div>
    )
}