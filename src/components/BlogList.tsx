"use client";

import BlogCard from "./BlogCard";

interface BlogListProps {
  data: {
    id: number;
    title: string;
    body: string;
  }[];
}

const BlogList = ({ data }: BlogListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogList;
