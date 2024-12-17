import { render, screen } from '@testing-library/react';
import BlogCard from '../../components/BlogCard'; 
import '@testing-library/jest-dom';

describe('BlogCard Component', () => {
  const mockPost = {
    id: 1,
    title: 'Test Blog Post',
    body: 'This is a test blog post body that is long enough to be truncated.',
  };

  test('displays the correct title', () => {
    render(<BlogCard post={mockPost} />);
    const titleElement = screen.getByRole('heading', { name: /Test Blog Post/i });
    expect(titleElement).toBeInTheDocument();
  });

  test('displays the truncated body', () => {
    render(<BlogCard post={mockPost} />);
    const bodyElement = screen.getByText(/This is a test blog post body that is long enough to be truncated.../i);
    expect(bodyElement).toBeInTheDocument();
  });

  test('contains a link to the post', () => {
    render(<BlogCard post={mockPost} />);
    const linkElement = screen.getByRole('link', { name: /Read More/i });
    expect(linkElement).toHaveAttribute('href', '/post/1');
  });
});