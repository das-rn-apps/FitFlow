import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO, BlogCard, Button } from '../components';
import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';

export const HomePage: React.FC = () => {
  const {
    posts,
    likedPosts,
    toggleLike,
    // searchQuery,
    // setSearchQuery,
    // theme
  } = useBlogStore();

  // Use sample posts if no posts are loaded
  const displayPosts = posts.length > 0 ? posts : sampleBlogPosts;

  // Get featured posts
  const featuredPosts = displayPosts.filter(post => post.isFeatured).slice(0, 3);

  // Get recent posts
  const recentPosts = displayPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 6);

  const handleLike = (postId: string) => {
    toggleLike(postId);
  };

  return (
    <>
      <SEO
        title="Home"
        description="FitFlow is your ultimate fitness and exercise blog. Discover workouts, nutrition tips, and motivation to help you achieve your fitness goals."
        keywords={['fitness', 'exercise', 'workouts', 'nutrition', 'health', 'wellness']}
      />

      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-fitflow-blue/20 via-transparent to-fitflow-blue-light/20 dark:from-fitflow-blue/10 dark:to-fitflow-blue-light/10" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 bg-fitflow-blue/40 rounded-full blur-lg"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light bg-clip-text text-transparent">
                Fitness Journey
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover expert workouts, nutrition guides, and motivation to help you achieve
              your fitness goals and live a healthier life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button size="lg" className="px-8" >
                  Explore Workouts
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Workouts
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Hand-picked fitness content to help you get started on your journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BlogCard
                    post={post}
                    featured={true}
                    onLike={handleLike}
                    isLiked={likedPosts.includes(post.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Fitness Tips
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay up-to-date with the latest workout routines, nutrition advice, and wellness tips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
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

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button size="lg" variant="outline">
                View All Posts
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of people who have transformed their lives with FitFlow
            </p>
            <Link to="/contact">
              <Button size="lg" variant="primary" >
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};