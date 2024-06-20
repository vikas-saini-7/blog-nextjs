import React from 'react'
import { DUMMY_DATA } from "@/constants/DUMMY_DATA";
import Card from '../common/Card';
import SectionTitle from '../common/SectionTitle';

const PopularPosts = () => {
  return (
    <section>
        <SectionTitle text="Popular"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DUMMY_DATA.map((post) => (
            <Card post={post} />
            ))}
        </div>
    </section>
  )
}

export default PopularPosts