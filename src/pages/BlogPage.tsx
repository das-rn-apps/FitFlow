import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SEO, BlogCard, Input, Button } from '../components';
import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';

export const BlogPage: React.FC = () => {
  const {
    posts,
    likedPosts,
    toggleLike,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    postsPerPage
  } = useBlogStore();

  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [totalPages, setTotalPages] = useState(1);

  // Use sample posts if no posts are loaded
  const displayPosts = posts.length > 0 ? posts : sampleBlogPosts;

  // Get unique categories
  const categories = Array.from(new Set(displayPosts.map(post => post.category)));

  // Filter and paginate posts
  useEffect(() => {
    let filtered = displayPosts;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory && selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Calculate pagination
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const paginatedPosts = filtered.slice(startIndex, endIndex);

    setFilteredPosts(paginatedPosts);
    setTotalPages(Math.ceil(filtered.length / postsPerPage));
  }, [displayPosts, searchQuery, selectedCategory, currentPage, postsPerPage]);

  const handleLike = (postId: string) => {
    toggleLike(postId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEO
        title="Blog"
        description="Explore our comprehensive fitness blog with workout routines, nutrition tips, exercise guides, and wellness advice."
        keywords={['fitness blog', 'workout routines', 'nutrition tips', 'exercise guides', 'wellness']}
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
              Fitness Blog
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover expert advice, workout routines, and nutrition tips to help you achieve your fitness goals
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="w-full md:w-96">
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handleCategoryChange('all')}
              >
                All Posts
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No posts found matching your criteria.
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
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
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="py-8 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={currentPage === page ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>

            <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
              Page {currentPage} of {totalPages}
            </div>
          </div>
        </section>
      )}
    </>
  );
};