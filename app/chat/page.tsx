"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IconSend } from '@tabler/icons-react'
import { useChat } from 'ai/react';

interface OpenAIResponse {
    choices: [
      {
        text: string;
      }
    ];
}

interface Message {
    id: number;
    content: string;
}

const page = () => {

    const [messages, input, handleInputChange, handleSubmit] = useChat({
        api: '/api/chat'
    });
    
    const renderResponse = (): React.ReactElement => {
        return (
            <div>
                {messages.map((m: Message) => (
                    <div key={m.id}>
                        <p>{m.content}</p>
                    </div>
                ))}
            </div>
        )
    }

  return (
    <div className='container mx-auto chat-container flex flex-col'>
        <div className="top flex-1 w-full max-w-[900px] mx-auto mt-4 mb-[90px] overflow-auto">
        {renderResponse()}
        </div>
        <div className='bottom w-full max-w-[900px] mx-auto'>
            <form onSubmit={handleSubmit} className='relative'>
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder='Ask Something...'
                    className='w-full bg-gray-500 rounded-lg h-16 bg-opacity-10 px-6'
                    />
                <button type="submit" className='absolute right-6 top-5 text-gray-500'>
                    <IconSend/>
                </button>
            </form>
            <p className='text-xs my-2 text-gray-500 text-center'>Note:  This chat is powered by GenAI and can make mistakes, use it carefully.</p>
        </div>
    </div>
  )
}

export default page