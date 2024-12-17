import { fetchPostById } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  body: string;
}

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const postId = Number(params.id);

  if (isNaN(postId)) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Invalid Post ID</h1>
        <Link href="/" className="text-blue-500 mt-4 inline-block underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  const post: Post = await fetchPostById(postId);

  if (!post) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Post Not Found</h1>
        <Link href="/" className="text-blue-500 mt-4 inline-block underline">
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <nav className="text-sm text-gray-500 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span>Post {post.id}</span>
      </nav>

      <div className="mb-6">
        <Image
          src={`https://via.placeholder.com/800x400?text=Post+${post.id}`}
          alt={`Featured image for ${post.title}`}
          width={800}
          height={400}
          className="w-full rounded-lg shadow-md"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-gray-600 leading-relaxed text-lg">{post.body}</p>

      <div className="mt-8">
        <Link href="/" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
