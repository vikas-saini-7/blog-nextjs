import React from 'react';
import Image from 'next/image';

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
  return (
    <div className="rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
      {/* <Image
      src={"https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg"}
      alt={post.title}
      layout="fill"
      objectFit="contain"
      className="rounded-t"
      /> */}

    <img className="w-full h-48 object-cover" src={"https://media.sproutsocial.com/uploads/2019/09/how-to-write-a-blog-post.svg"} alt={post.title} />
      <div className="p-2 px-6">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base mb-4">{post.summary}</p>
        <div className="text-gray-600 text-sm mb-4">
          By <span className="font-semibold">{post.author}</span> on{' '}
          {new Date(post.datePublished).toLocaleDateString()}
        </div>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Read more
        </a>
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
