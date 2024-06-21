import React from 'react'
import SectionTitle from '../common/SectionTitle'
import Card from '../common/Card'
import { DUMMY_DATA } from '@/constants/DUMMY_DATA'

const TrendingPosts = () => {
  return (
    <section>
    <SectionTitle text="Trending"/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DUMMY_DATA.slice(0, 4).map((post) => (
        <Card post={post} />
        ))}
    </div>
    </section>
  )
}

export default TrendingPosts