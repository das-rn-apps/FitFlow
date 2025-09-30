import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO, BlogCard, Button } from '../components';
import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';
import type { BlogPost } from '../types';

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const {
    posts,
    likedPosts,
    toggleLike,
    currentPage,
    setCurrentPage,
    postsPerPage
  } = useBlogStore();

  const [categoryPosts, setCategoryPosts] = useState<BlogPost[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  // Use sample posts if no posts are loaded
  const displayPosts = posts.length > 0 ? posts : sampleBlogPosts;

  useEffect(() => {
    if (category) {
      // Filter posts by category
      const filtered = displayPosts.filter(post =>
        post.category.toLowerCase() === decodeURIComponent(category).toLowerCase()
      );

      setCategoryPosts(filtered);
      setTotalPages(Math.ceil(filtered.length / postsPerPage));
      setCurrentPage(1); // Reset to first page when category changes
    }
  }, [category, displayPosts, postsPerPage, setCurrentPage]);

  // Paginate posts
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = categoryPosts.slice(startIndex, endIndex);

  const handleLike = (postId: string) => {
    toggleLike(postId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!category) {
    return <div>Category not found</div>;
  }

  const decodedCategory = decodeURIComponent(category);

  return (
    <>
      <SEO
        title={`${decodedCategory} - Fitness Blog`}
        description={`Explore our ${decodedCategory.toLowerCase()} content with expert tips, guides, and advice.`}
        keywords={[decodedCategory.toLowerCase(), 'fitness', 'exercise', 'workout']}
      />

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {decodedCategory}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert {decodedCategory.toLowerCase()} content to help you achieve your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-fitflow-blue">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link to="/categories" className="text-gray-600 dark:text-gray-300 hover:text-fitflow-blue">
              Categories
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">
              {decodedCategory}
            </span>
          </nav>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No posts found in this category.
              </div>
              <Link to="/categories">
                <button className="px-6 py-3 bg-fitflow-blue text-white rounded-lg hover:bg-fitflow-blue/90 transition-colors">
                  Browse All Categories
                </button>
              </Link>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-between mb-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Posts in {decodedCategory}
                </h2>
                <div className="text-gray-600 dark:text-gray-300">
                  {categoryPosts.length} total posts
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <BlogCard
                      post={post}
                      onLike={handleLike}
                      isLiked={likedPosts.includes(post.id)}
                    />
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page
                    ? 'bg-fitflow-blue text-white'
                    : 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
                    }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Want More {decodedCategory} Content?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Subscribe to our newsletter for the latest {decodedCategory.toLowerCase()} tips and updates
            </p>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Subscribe Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};