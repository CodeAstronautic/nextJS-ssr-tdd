import { GetServerSideProps } from "next";
import { fetchPostById } from "../../utils/api";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogPostProps {
  post: Post;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<BlogPostProps> = async ({ params }) => {
  const postId = Number(params?.id);

  if (isNaN(postId)) {
    return {
      notFound: true,
    };
  }

  const post = await fetchPostById(postId);

  return {
    props: { post },
  };
};

export default BlogPost;
