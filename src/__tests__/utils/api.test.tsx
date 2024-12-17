import { fetchPosts, fetchPostById } from '../../utils/api';

global.fetch = jest.fn();

describe('API Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('fetchPosts', () => {
    it('should fetch posts with default parameters', async () => {
      const mockResponse = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const posts = await fetchPosts();
      expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=9');
      expect(posts).toEqual(mockResponse);
    });

    it('should fetch posts with specific page and limit', async () => {
      const mockResponse = [{ id: 1, title: 'Post 1' }];
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const posts = await fetchPosts(2, 5);
      expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_page=2&_limit=5');
      expect(posts).toEqual(mockResponse);
    });

    it('should fetch posts with a search query', async () => {
      const mockResponse = [{ id: 1, title: 'Post 1' }];
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const posts = await fetchPosts(1, 9, 'test');
      expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=9&q=test');
      expect(posts).toEqual(mockResponse);
    });

    it('should handle errors gracefully', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

      await expect(fetchPosts()).rejects.toThrow('Network Error');
    });
  });

  describe('fetchPostById', () => {
    it('should fetch a post by ID', async () => {
      const mockResponse = { id: 1, title: 'Post 1' };
      (fetch as jest.Mock).mockResolvedValueOnce({
        json: jest.fn().mockResolvedValueOnce(mockResponse),
      });

      const post = await fetchPostById(1);
      expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
      expect(post).toEqual(mockResponse);
    });

    it('should handle errors gracefully', async () => {
      (fetch as jest.Mock).mockRejectedValueOnce(new Error('Network Error'));

      await expect(fetchPostById(1)).rejects.toThrow('Network Error');
    });
  });
});