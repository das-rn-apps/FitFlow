import React from 'react';
import { Link } from 'react-router-dom';
import type { BlogPost } from '../types/index';
import { formatDate, truncateText } from '../utils';

export interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  showExcerpt?: boolean;
  showAuthor?: boolean;
  showDate?: boolean;
  showReadTime?: boolean;
  showCategory?: boolean;
  showTags?: boolean;
  className?: string;
  onLike?: (postId: string) => void;
  isLiked?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  post,
  featured = false,
  showExcerpt = true,
  showAuthor = true,
  showDate = true,
  showReadTime = true,
  showCategory = true,
  showTags = false,
  className = '',
  onLike,
  isLiked = false,
}) => {
  const handleLikeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onLike?.(post.id);
  };

  const cardClasses = featured
    ? 'group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300'
    : 'group relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300';

  const imageClasses = featured
    ? 'w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
    : 'w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300';

  return (
    <article className={`${cardClasses} ${className}`}>
      <Link to={`/blog/${post.slug}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={post.thumbnail || 'https://picsum.photos/200'}
            alt={post.title}
            className={imageClasses}
            loading="lazy"
          />

          {/* Category Badge */}
          {showCategory && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-fitflow-blue text-white">
                {post.category}
              </span>
            </div>
          )}

          {/* Featured Badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
                ⭐ Featured
              </span>
            </div>
          )}

          {/* Reading Time */}
          {showReadTime && (
            <div className="absolute bottom-4 right-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                {post.readTime} min read
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-fitflow-blue transition-colors duration-200">
            {post.title}
          </h3>

          {/* Excerpt */}
          {showExcerpt && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
              {truncateText(post.excerpt, 150)}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-4">
              {/* Author */}
              {showAuthor && (
                <div className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span>{post.author.name}</span>
                </div>
              )}

              {/* Date */}
              {showDate && (
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              )}
            </div>

            {/* Like Button */}
            {onLike && (
              <button
                onClick={handleLikeClick}
                className={`flex items-center space-x-1 px-2 py-1 rounded-full transition-colors duration-200 ${isLiked
                  ? 'text-red-500 bg-red-50 dark:bg-red-900/20'
                  : 'text-gray-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                  }`}
                aria-label={isLiked ? 'Unlike post' : 'Like post'}
              >
                <svg
                  className={`w-4 h-4 ${isLiked ? 'fill-current' : 'fill-none stroke-current'}`}
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className="text-xs">{post.likes}</span>
              </button>
            )}
          </div>

          {/* Tags */}
          {showTags && post.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
};