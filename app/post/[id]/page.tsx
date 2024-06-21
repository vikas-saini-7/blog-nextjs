"use client"
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const page = () => {
    const {id} = useParams();
  return (
    <>
      <section className='container mx-auto'>{id}</section>
    </>
  )
}

export default page