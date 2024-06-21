"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
  const pathname = usePathname();

  return (
    <div className='border-b border-gray-900'>
      <div className='container mx-auto py-6 px-[16px]'>
        <div className="flex items-center justify-between">
          <Link href='/'><p className='font-bold uppercase text-3xl'>Bloggo <span className='bg-teal-500 h-4 w-4 rounded-full inline-block'></span> </p></Link>
          <nav>
            <ul className='flex items-center gap-8 text-xl'>
              <Link href='/'><li className={`${pathname === "/" && "text-teal-500"} hover:text-teal-500`}>Home</li></Link>
              <Link href='/posts'><li className={`${pathname === "/posts" && "text-teal-500"} hover:text-teal-500`}>Posts</li></Link>
              <Link href='/about'><li className={`${pathname === "/about" && "text-teal-500"} hover:text-teal-500`}>About</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header