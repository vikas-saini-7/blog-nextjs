import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='border-b border-gray-900'>
      <div className='container mx-auto py-6 px-[16px]'>
        <div className="flex items-center justify-between">
          <Link href='/'><p className='font-bold uppercase text-3xl'>Bloggo <span className='bg-teal-500 h-4 w-4 rounded-full inline-block'></span> </p></Link>
          <nav>
            <ul className='flex items-center gap-6 text-md'>
              <Link href='/'><li>Home</li></Link>
              <Link href='/posts'><li>Posts</li></Link>
              <Link href='/about'><li>About</li></Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header