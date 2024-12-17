export const fetchPosts = async (page: number = 1, limit: number = 9, searchQuery: string = "") => {
  const query = searchQuery ? `&q=${searchQuery}` : '';
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}${query}`
  );
  const data = await res.json();
  return data;
};

export const fetchPostById = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};
