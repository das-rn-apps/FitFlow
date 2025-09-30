import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';
import { useEffect } from 'react';

/**
 * Hook to initialize the blog with sample data if no posts exist
 */
export const useInitializeBlogData = () => {
  const { posts, setPosts, setCategories } = useBlogStore();

  useEffect(() => {
    // Only initialize if there are no posts
    if (posts.length === 0) {
      // Initialize with sample posts
      setPosts(sampleBlogPosts);
      
      // Extract unique categories from sample posts
      const uniqueCategories = Array.from(
        new Set(sampleBlogPosts.map(post => post.category))
      );
      setCategories(uniqueCategories);
    }
  }, [posts.length, setPosts, setCategories]);
};