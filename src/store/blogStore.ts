import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { BlogStore } from '../types/index';

/**
 * Zustand store for managing blog state
 * Includes persistence to localStorage for user preferences
 */
export const useBlogStore = create<BlogStore>()(
  persist(
    (set, get) => ({
      // Initial state
      posts: [],
      categories: [],
      searchQuery: '',
      selectedCategory: '',
      currentPage: 1,
      postsPerPage: 6,
      theme: 'light',
      likedPosts: [],
      favoritePosts: [],
      readingProgress: {},

      // Actions
      toggleTheme: () =>
        set(state => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),

      setPosts: posts => set({ posts }),

      addPost: post =>
        set(state => ({
          posts: [post, ...state.posts],
        })),

      updatePost: (id, updatedPost) =>
        set(state => ({
          posts: state.posts.map(post =>
            post.id === id ? { ...post, ...updatedPost } : post
          ),
        })),

      deletePost: id =>
        set(state => ({
          posts: state.posts.filter(post => post.id !== id),
        })),

      setCategories: categories => set({ categories }),

      setSearchQuery: searchQuery => set({ searchQuery, currentPage: 1 }),

      setSelectedCategory: selectedCategory =>
        set({ selectedCategory, currentPage: 1 }),

      setCurrentPage: currentPage => set({ currentPage }),

      setTheme: theme => set({ theme }),

      toggleLike: postId =>
        set(state => ({
          likedPosts: state.likedPosts.includes(postId)
            ? state.likedPosts.filter(id => id !== postId)
            : [...state.likedPosts, postId],
          posts: state.posts.map(post =>
            post.id === postId
              ? {
                  ...post,
                  likes: state.likedPosts.includes(postId)
                    ? post.likes - 1
                    : post.likes + 1,
                }
              : post
          ),
        })),

      toggleFavorite: postId =>
        set(state => ({
          favoritePosts: state.favoritePosts.includes(postId)
            ? state.favoritePosts.filter(id => id !== postId)
            : [...state.favoritePosts, postId],
        })),

      addComment: (postId, comment) =>
        set(state => ({
          posts: state.posts.map(post =>
            post.id === postId
              ? { ...post, comments: [...post.comments, comment] }
              : post
          ),
        })),

      setReadingProgress: (postId, progress) =>
        set(state => ({
          readingProgress: { ...state.readingProgress, [postId]: progress },
        })),

      // Selectors
      filteredPosts: () => {
        const { posts, searchQuery, selectedCategory } = get();
        return posts.filter(post => {
          const matchesSearch =
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            );

          const matchesCategory =
            !selectedCategory || post.category === selectedCategory;

          return matchesSearch && matchesCategory;
        });
      },

      paginatedPosts: () => {
        const { filteredPosts, currentPage, postsPerPage } = get();
        const filtered = filteredPosts();
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;
        return filtered.slice(startIndex, endIndex);
      },

      totalPages: () => {
        const { filteredPosts, postsPerPage } = get();
        return Math.ceil(filteredPosts().length / postsPerPage);
      },

      featuredPosts: () => {
        const { posts } = get();
        return posts.filter(post => post.isFeatured).slice(0, 3);
      },

      recentPosts: () => {
        const { posts } = get();
        return [...posts]
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() -
              new Date(a.publishedAt).getTime()
          )
          .slice(0, 5);
      },

      popularPosts: () => {
        const { posts } = get();
        return [...posts].sort((a, b) => b.likes - a.likes).slice(0, 5);
      },

      relatedPosts: currentPostId => {
        const { posts } = get();
        const currentPost = posts.find(post => post.id === currentPostId);
        if (!currentPost) return [];

        return posts
          .filter(
            post =>
              post.id !== currentPostId &&
              (post.category === currentPost.category ||
                post.tags.some(tag => currentPost.tags.includes(tag)))
          )
          .slice(0, 3);
      },
    }),
    {
      name: 'fitflow-blog-storage',
      partialize: state => ({
        theme: state.theme,
        likedPosts: state.likedPosts,
        favoritePosts: state.favoritePosts,
        readingProgress: state.readingProgress,
      }),
    }
  )
);
