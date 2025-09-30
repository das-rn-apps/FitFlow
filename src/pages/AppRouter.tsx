import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer } from '../components';
import { useBlogStore } from '../store/blogStore';

// Page Components
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { BlogPostPage } from './BlogPostPage';
import { CategoriesPage } from './CategoriesPage';
import { CategoryPage } from './CategoryPage';
import { AboutPage } from './AboutPage';
import { ContactPage } from './ContactPage';
import { NotFoundPage } from './NotFoundPage';

export const AppRouter: React.FC = () => {
  const { theme } = useBlogStore();
  
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className={`min-h-screen transition-colors duration-300 ${
          theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'
        }`}>
          <Navbar />
          
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/categories/:category" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
};