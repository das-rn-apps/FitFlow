import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button, SEO } from '../components';
import { useBlogStore } from '../store/blogStore';
import { sampleBlogPosts } from '../data/samplePosts';
import type { BlogPost } from '../types';

export const CategoriesPage: React.FC = () => {
  const { posts } = useBlogStore();

  // Use sample posts if no posts are loaded
  const displayPosts = posts.length > 0 ? posts : sampleBlogPosts;

  // Group posts by category
  const categories = displayPosts.reduce((acc, post) => {
    if (!acc[post.category]) {
      acc[post.category] = {
        name: post.category,
        count: 0,
        posts: [],
        description: getCategoryDescription(post.category)
      };
    }
    acc[post.category].count++;
    acc[post.category].posts.push(post);
    return acc;
  }, {} as Record<string, { name: string; count: number; posts: BlogPost[]; description: string }>);

  const categoryList = Object.values(categories);

  function getCategoryDescription(category: string): string {
    const descriptions: Record<string, string> = {
      'Workout Routines': 'Structured exercise plans and fitness routines for all levels',
      'Nutrition': 'Healthy eating tips, meal plans, and nutritional guidance',
      'Wellness': 'Mental health, mindfulness, and overall wellness advice',
      'Weight Training': 'Strength training exercises and muscle building techniques',
      'Cardio': 'Cardiovascular exercises and endurance training',
      'Yoga': 'Yoga poses, sequences, and flexibility training',
      'HIIT': 'High-intensity interval training workouts and tips',
      'Strength Training': 'Power building and strength development exercises',
      'Flexibility': 'Stretching routines and mobility exercises',
      'Running': 'Running techniques, training plans, and tips for runners'
    };

    return descriptions[category] || 'Fitness content and advice';
  }

  return (
    <>
      <SEO
        title="Categories"
        description="Browse our fitness blog posts by category. Find workout routines, nutrition tips, wellness advice, and more."
        keywords={['fitness categories', 'workout types', 'nutrition', 'wellness', 'exercise categories']}
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
              Blog Categories
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our fitness content organized by category to find exactly what you're looking for
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryList.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-500 dark:text-gray-400 text-lg mb-4">
                No categories found.
              </div>
              <Link to="/blog">
                <button className="px-6 py-3 bg-fitflow-blue text-white rounded-lg hover:bg-fitflow-blue/90 transition-colors">
                  Browse Blog
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryList.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/categories/${encodeURIComponent(category.name)}`}
                    className="block group"
                  >
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-fitflow-blue transition-colors">
                          {category.name}
                        </h3>
                        <div className="bg-fitflow-blue/10 text-fitflow-blue px-3 py-1 rounded-full text-sm font-medium">
                          {category.count} posts
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {category.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-fitflow-blue font-medium group-hover:underline">
                          View Posts →
                        </span>
                        <div className="flex -space-x-2">
                          {category.posts.slice(0, 3).map((post, i) => (
                            <img
                              key={post.id}
                              src={post.thumbnail}
                              alt={post.title}
                              className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
                              style={{ zIndex: 3 - i }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div className="p-6">
              <div className="text-4xl font-bold text-fitflow-blue mb-2">
                {displayPosts.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Total Posts
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-fitflow-blue-light mb-2">
                {categoryList.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Categories
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-fitflow-accent mb-2">
                {Math.max(...categoryList.map(c => c.count))}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Most Posts in Category
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Browse all our fitness content or contact us for personalized advice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button variant="secondary" size="lg">
                  Browse All Posts
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-fitflow-blue">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};