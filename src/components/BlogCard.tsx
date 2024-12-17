import React from "react";
import Link from "next/link";

interface BlogCardProps {
  post: {
    id: number;
    title: string;
    body: string;
  };
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
      <p className="mt-4 text-gray-600">{post.body.substring(0, 100)}...</p>
      <Link
        href={`/post/${post.id}`}
        className="mt-4 inline-block text-blue-500 hover:underline font-semibold"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
