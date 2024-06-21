import React from 'react'
import CardSkeleton from './CardSkeleton'

export const PopularPostsSkeleton = () => {
  return (
    <section>
    {/* <SectionTitle text="Trending"/> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
