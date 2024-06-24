"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname();

  return (
    <div className='border-b border-gray-900'>
      <div className='container mx-auto'>
        <div className="flex items-center justify-between px-[16px] h-[90px]">
          {pathname === "/chat" ? 
          <Link href='/chat'><p className='font-bold uppercase text-3xl'>raw gpt <span className='bg-teal-500 h-4 w-4 rounded-full inline-block'></span> </p></Link>
          :
          <Link href='/'><p className='font-bold uppercase text-3xl'>Bloggo <span className='bg-teal-500 h-4 w-4 rounded-full inline-block'></span> </p></Link>
          }
          <nav>
            <ul className='flex items-center gap-8 text-xl'>
              <Link href='/'><li className={`${pathname === "/" && "text-teal-500"} hover:text-teal-500`}>Home</li></Link>
              <Link href='/posts'><li className={`${pathname === "/posts" && "text-teal-500"} hover:text-teal-500`}>Posts</li></Link>
              <Link href='/chat'><li className={`${pathname === "/chat" && "text-teal-500"} hover:text-teal-500`}>Chat</li></Link>
              <Link href='/about'><li className={`${pathname === "/about" && "text-teal-500"} hover:text-teal-500`}>About</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header