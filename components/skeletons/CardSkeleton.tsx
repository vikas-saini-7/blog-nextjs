import React from 'react'

// Loading animation
const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

const CardSkeleton = () => {
  return (
    <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-900">
      <div className="w-full h-48 bg-gray-950"/>
      <div className="p-2 px-6">
        <div className="bg-gray-950 h-6 w-full mb-2"></div>
        <p className="bg-gray-950 h-6 w-full mb-2"></p>
        <div className="text-gray-600 text-sm mb-4">
          {/* By <span className="font-semibold">{post.author}</span> on{' '} */}
          {/* {new Date(post.datePublished).toLocaleDateString()} */}
        </div>
        <div className='bg-gray-900 w-8 h-6'></div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))} */}
      </div>
    </div>
  )
}

export default CardSkeleton