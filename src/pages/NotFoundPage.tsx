import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO, Button } from '../components';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found"
        description="Sorry, the page you're looking for doesn't exist. Explore our fitness blog and workout resources."
        keywords={['404 error', 'page not found', 'fitness blog', 'workout resources']}
      />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="text-9xl font-bold bg-gradient-to-r from-fitflow-blue to-fitflow-blue-light bg-clip-text text-transparent">
                404
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-fitflow-accent rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-fitflow-blue-light rounded-full"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Oops! Page Not Found
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto"
          >
            Sorry, the page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL. But don't worry, we can help you find what you're looking for!
          </motion.p>

          {/* Search Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Popular destinations:
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/">
                <Button variant="outline" size="sm">
                  Home
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="sm">
                  Blog
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="sm">
                  Categories
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="sm">
                  About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="sm">
                  Contact
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link to="/">
              <Button size="lg" className="px-8">
                Take Me Home
              </Button>
            </Link>
          </motion.div>

          {/* Fun Fitness Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <blockquote className="text-lg italic text-gray-600 dark:text-gray-300 mb-2">
                "The only bad workout is the one that didn't happen."
              </blockquote>
              <cite className="text-sm text-gray-500 dark:text-gray-400">
                — Unknown
              </cite>
            </div>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-fitflow-blue/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 10 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${20 + i * 15}%`,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};