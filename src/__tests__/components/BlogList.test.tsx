import { render } from "@testing-library/react";
import BlogList from "../../components/BlogList";
import '@testing-library/jest-dom';

interface Post {
  id: number;
  title: string;
  body: string;
}

jest.mock("../../components/BlogCard", () => {
  return function MockBlogCard({ post }: { post: Post }) {
    return <div data-testid="blog-card">{post.title}</div>;
  };
});

describe("BlogList Component", () => {
  const mockData: Post[] = [
    { id: 1, title: "First Post", body: "This is the first post." },
    { id: 2, title: "Second Post", body: "This is the second post." },
    { id: 3, title: "Third Post", body: "This is the third post." },
  ];

  it("renders without crashing", () => {
    render(<BlogList data={mockData} />);
  });

  it("renders the correct number of BlogCards", () => {
    const { getAllByTestId } = render(<BlogList data={mockData} />);
    const blogCards = getAllByTestId("blog-card");
    expect(blogCards.length).toBe(mockData.length);
  });

  it("renders BlogCard with correct props", () => {
    const { getAllByTestId } = render(<BlogList data={mockData} />);
    const blogCards = getAllByTestId("blog-card");

    mockData.forEach((post, index) => {
      expect(blogCards[index]).toHaveTextContent(post.title);
    });
  });

  it("handles empty data array gracefully", () => {
    const { container } = render(<BlogList data={[]} />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toBeEmptyDOMElement();
  });

  it("renders correctly with a single post", () => {
    const singlePostData: Post[] = [
      { id: 1, title: "Single Post", body: "This is a single post." },
    ];
    const { getByTestId } = render(<BlogList data={singlePostData} />);
    const blogCard = getByTestId("blog-card");
    expect(blogCard).toHaveTextContent(singlePostData[0].title);
  });

  it("renders correctly with multiple posts", () => {
    const { getAllByTestId } = render(<BlogList data={mockData} />);
    const blogCards = getAllByTestId("blog-card");
    expect(blogCards.length).toBe(mockData.length);
    expect(blogCards[0]).toHaveTextContent(mockData[0].title);
    expect(blogCards[1]).toHaveTextContent(mockData[1].title);
    expect(blogCards[2]).toHaveTextContent(mockData[2].title);
  });
});