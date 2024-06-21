import React from 'react'
import SectionTitle from '../common/SectionTitle'
import { DUMMY_DATA } from '@/constants/DUMMY_DATA'
import Card from '../common/Card'

const YouMayAlsoLike = () => {
  return (
    <section>
    <SectionTitle text="You may also like"/>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DUMMY_DATA.slice(0, 4).map((post) => (
        <Card post={post} />
        ))}
    </div>
    </section>
  )
}

export default YouMayAlsoLike