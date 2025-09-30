import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';
import { useEffect } from 'react';
import type { Category } from '../types';

export const useInitializeBlogData = () => {
  const { posts, setPosts, setCategories } = useBlogStore();

  useEffect(() => {
    if (posts.length === 0) {
      setPosts(sampleBlogPosts);

      // Create unique categories
      const categoryMap = new Map<string, Category>();

      sampleBlogPosts.forEach(post => {
        const cat = post.category; // assuming post.category is string
        if (!categoryMap.has(cat)) {
          categoryMap.set(cat, {
            id: cat.toLowerCase().replace(/\s+/g, '-'),
            name: cat,
            slug: cat.toLowerCase().replace(/\s+/g, '-'),
            color: '#60a5fa', // default color or generate dynamically
            postCount: 1,
          });
        } else {
          // increment postCount
          const existing = categoryMap.get(cat)!;
          existing.postCount += 1;
        }
      });

      const uniqueCategories = Array.from(categoryMap.values());
      setCategories(uniqueCategories);
    }
  }, [posts.length, setPosts, setCategories]);
};
