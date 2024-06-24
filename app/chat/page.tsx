"use client"
import React from 'react';
import { useChat } from 'ai/react';
import { IconSend } from '@tabler/icons-react'
const page = () => {
    const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className='container mx-auto chat-container flex flex-col'>
        <div className="top flex-1 w-full max-w-[900px] mx-auto mt-4 mb-[90px] overflow-auto">
        {messages.map(m => (
            <div key={m.id} className="whitespace-pre-wrap">
            {m.role === 'user' ? 'User: ' : 'AI: '}
            {m.content}
            </div>
        ))}
        </div>
        <div className='bottom w-full max-w-[900px] mx-auto'>
            <form className='relative' onSubmit={handleSubmit}>
                <input
                className="w-full h-16 bg-gray-900 px-4 rounded-lg"
                value={input}
                placeholder="Say something..."
                onChange={handleInputChange}
                />
                <button onClick={handleSubmit} className='absolute right-6 top-5 text-gray-500'>
                    <IconSend/>
                </button>
            </form>
            <p className='text-xs my-2 text-gray-500 text-center'>Note:  This chat is powered by GenAI and can make mistakes, use it carefully.</p>
        </div>
    </div>
  )
}

export default page