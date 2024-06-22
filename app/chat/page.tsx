import { IconSend } from '@tabler/icons-react'
import React from 'react'

const page = () => {
  return (
    <div className='container mx-auto chat-container flex flex-col'>
        <div className="top flex-1 w-full max-w-[900px] mx-auto mt-4 mb-[90px] overflow-auto">
            m
        </div>
        <div className='bottom w-full max-w-[900px] mx-auto'>
            <div className='relative'>
                <input className='w-full bg-gray-500 rounded-lg h-16 bg-opacity-10 px-6' placeholder='Ask Something...' type="text" />
                <div className='absolute right-6 top-5 text-gray-500'>
                    <IconSend/>
                </div>
            </div>
            <p className='text-xs my-2 text-gray-500 text-center'>Note:  This chat is powered by GenAI and can make mistakes, use it carefully.</p>
        </div>
    </div>
  )
}

export default page