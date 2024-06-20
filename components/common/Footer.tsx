import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-gray-900 text-white py-8'>
      <div className='container mx-auto py-6 px-[16px]'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-bold'>Explore</h3>
            <ul className='mt-2'>
              <li><Link href='/' className='hover:text-teal-500'>Home</Link></li>
              <li><Link href='/posts' className='hover:text-teal-500'>Posts</Link></li>
              <li><Link href='/about' className='hover:text-teal-500'>About</Link></li>
            </ul>
          </div>
          <div className='mb-4 md:mb-0'>
            <h3 className='text-xl font-bold'>Follow Us</h3>
            <ul className='mt-2'>
              <li><a href='#' className='hover:text-teal-500'>Twitter</a></li>
              <li><a href='#' className='hover:text-teal-500'>Facebook</a></li>
              <li><a href='#' className='hover:text-teal-500'>Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-bold'>Contact</h3>
            <p className='mt-2'>123 Main Street, City</p>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
