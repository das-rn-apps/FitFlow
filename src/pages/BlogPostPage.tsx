import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO, Button, Card, BlogCard } from '../components';
import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';
import { formatDate, calculateReadingTime, scrollToTop } from '../utils';
import type { BlogPost } from '../types';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const {
    posts,
    likedPosts,
    toggleLike,
    readingProgress,
    setReadingProgress,
    relatedPosts
  } = useBlogStore();

  const [post, setPost] = useState<BlogPost>();
  const [relatedPostsLocal, setRelatedPostsLocal] = useState<BlogPost[]>([]);
  const [commentForm, setCommentForm] = useState({ name: '', email: '', comment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Use sample posts if no posts are loaded
  const displayPosts = posts.length > 0 ? posts : sampleBlogPosts;

  useEffect(() => {
    scrollToTop();

    // Find the post by slug
    const foundPost = displayPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      setReadingProgress(foundPost.id, 1);

      setRelatedPostsLocal(relatedPosts(foundPost.id));
    }
  }, [slug, displayPosts, relatedPosts, setReadingProgress]);

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      if (!post) return;

      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min((scrolled / maxScroll) * 100, 100);
      setReadingProgress(post.id, progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post, setReadingProgress]);

  const handleLike = () => {
    if (post) {
      toggleLike(post.id);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate comment submission
    setTimeout(() => {
      setCommentForm({ name: '', email: '', comment: '' });
      setIsSubmitting(false);
      alert('Thank you for your comment! It will be reviewed and published soon.');
    }, 1000);
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post not found
          </h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        image={post.thumbnail}
        type="article"
        article={{
          publishedTime: post.publishedAt,
          modifiedTime: post.updatedAt,
          author: post.author.name,
          tags: post.tags
        }}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700 z-50">
        <div
          className="h-full bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Post Header */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
              {post.isFeatured && (
                <span className="px-3 py-1 bg-yellow-400 text-yellow-900 text-sm font-medium rounded-full">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span>{post.author.name}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{calculateReadingTime(post.content)} min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Post Image */}
            {post.thumbnail && (
              <div className="mb-8 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            )}

            {/* Post Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 dark:text-gray-300 leading-relaxed"
              />
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Like Button */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <Button
                variant={likedPosts.includes(post.id) ? 'primary' : 'outline'}
                onClick={handleLike}
                className="gap-2"
              >
                <svg className="w-5 h-5" fill={likedPosts.includes(post.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {likedPosts.includes(post.id) ? 'Liked' : 'Like this post'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comments Section */}
      {post.comments && post.comments.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Comments ({post.comments.length})
              </h3>

              <div className="space-y-6">
                {post.comments.map(comment => (
                  <Card key={comment.id} className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={"https://picsum.photos/300"}
                        alt={comment.author}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {comment.author}
                          </h4>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {formatDate(comment.createdAt)}
                          </span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Comment Form */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Leave a Comment
            </h3>

            <form onSubmit={handleCommentSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={commentForm.name}
                    onChange={(e) => setCommentForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fitflow-blue focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={commentForm.email}
                    onChange={(e) => setCommentForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fitflow-blue focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Comment *
                </label>
                <textarea
                  required
                  rows={6}
                  value={commentForm.comment}
                  onChange={(e) => setCommentForm(prev => ({ ...prev, comment: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-fitflow-blue focus:border-transparent resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8"
              >
                {isSubmitting ? 'Submitting...' : 'Post Comment'}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPostsLocal.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Related Posts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                More content you might enjoy
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPostsLocal.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    post={relatedPost}
                    onLike={handleLike}
                    isLiked={likedPosts.includes(relatedPost.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};