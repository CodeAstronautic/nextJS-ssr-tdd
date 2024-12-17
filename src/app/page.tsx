import { fetchPosts } from "../utils/api";
import BlogList from "@/components/BlogList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; query?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const searchQuery = searchParams.query || "";

  const blogsData = await getBlogs(currentPage, searchQuery);
  const { posts, page, query } = blogsData.props;

  const noResults = posts.length === 0;

  return (
    <div className="container mx-auto p-6">
      <Header />
      <SearchBar query={query} />
      {noResults ? (
        <div className="text-center mt-6 text-xl text-gray-500">
          <p>No blogs found for &quot;{query}&quot;. Please try a different search term.</p>
        </div>
      ) : (
        <BlogList data={posts} />
      )}

      {!noResults && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          {page > 1 && (
            <Link
              href={`/?page=${page - 1}&query=${query}`}
              className="px-4 py-2 border rounded bg-white text-gray-700 hover:bg-gray-100"
            >
              Previous
            </Link>
          )}
          <span className="px-4 py-2 border rounded bg-blue-500 text-white">
            {page}
          </span>
          <Link
            href={`/?page=${page + 1}&query=${query}`}
            className="px-4 py-2 border rounded bg-white text-gray-700 hover:bg-gray-100"
          >
            Next
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
}

export async function getBlogs(page: number = 1, query: string = "") {
  const posts: Post[] = await fetchPosts(page, 8, query);
  return {
    props: {
      posts,
      page,
      query,
    },
  };
}
