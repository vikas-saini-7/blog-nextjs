import React from 'react'
import CardSkeleton from './CardSkeleton'

export const PopularPostsSkeleton = () => {
  return (
    <section>
    <div className='h-8 w-32 bg-gray-950 mb-6'/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
    </div>
    </section>
  )
}
