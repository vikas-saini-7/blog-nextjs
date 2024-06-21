"use client"
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props {
  post: {
    id: number;
    title: string;
    author: string;
    datePublished: string;
    summary: string;
    tags: string[];
    url: string;
    image: string;
  };
}

const Card: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  const handlePostClick = (postId : number) => {
    router.push(`/post/${postId}`)
  }
  return (
    <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      <img className="w-full h-48 object-cover" src={"https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg"} alt={post.title} />
      <div className="p-2 px-6">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base mb-4">{post.summary}</p>
        <div className="text-gray-600 text-sm mb-4">
          By <span className="font-semibold">{post.author}</span> on{' '}
          {new Date(post.datePublished).toLocaleDateString('en-US')}
        </div>
        <div
          className="text-blue-500 hover:text-blue-700 font-semibold cursor-pointer"
          onClick={() => handlePostClick(post.id)}
        >
          Read more
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
