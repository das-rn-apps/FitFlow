/**
 * Blog post interface defining the structure of blog posts
 */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  category: string;
  tags: string[];
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readTime: number; // in minutes
  youtubeUrl?: string;
  likes: number;
  comments: Comment[];
  isFeatured: boolean;
}

/**
 * Author interface for blog post authors
 */
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  socialLinks?: {
    youtube?: string;
    instagram?: string;
    twitter?: string;
  };
}

/**
 * Comment interface for blog post comments
 */
export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  likes: number;
}

/**
 * Category interface for blog categorization
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  postCount: number;
}

/**
 * Theme interface for dark/light mode
 */
export type Theme = 'light' | 'dark';

/**
 * Blog store interface for Zustand state management
 */
export interface BlogStore {
  posts: BlogPost[];
  categories: Category[];
  searchQuery: string;
  selectedCategory: string;
  currentPage: number;
  postsPerPage: number;
  theme: Theme;
  likedPosts: string[];
  favoritePosts: string[];
  readingProgress: Record<string, number>;

  // Actions
  setPosts: (posts: BlogPost[]) => void;
  addPost: (post: BlogPost) => void;
  updatePost: (id: string, post: Partial<BlogPost>) => void;
  deletePost: (id: string) => void;
  setCategories: (categories: Category[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setCurrentPage: (page: number) => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  toggleLike: (postId: string) => void;
  toggleFavorite: (postId: string) => void;
  addComment: (postId: string, comment: Comment) => void;
  setReadingProgress: (postId: string, progress: number) => void;

  // Selectors
  filteredPosts: () => BlogPost[];
  paginatedPosts: () => BlogPost[];
  totalPages: () => number;
  featuredPosts: () => BlogPost[];
  recentPosts: () => BlogPost[];
  popularPosts: () => BlogPost[];
  relatedPosts: (currentPostId: string) => BlogPost[];
}

/**
 * Contact form interface
 */
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

/**
 * SEO metadata interface
 */
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
}
