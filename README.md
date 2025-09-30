# FitFlow Fitness Blog

A modern, responsive fitness blog built with React, TypeScript, and Tailwind CSS. Features include dark mode, search functionality, categories, SEO optimization, and a beautiful, animated UI.

## 🚀 Features

### Core Functionality
- **📚 Blog Posts**: Browse and read fitness articles with rich content
- **🔍 Search**: Real-time search across post titles, content, and tags
- **🏷️ Categories**: Filter posts by fitness categories (Workout Routines, Nutrition, Wellness, etc.)
- **📖 Reading Progress**: Visual progress bar while reading articles
- **❤️ Like Posts**: Like and save your favorite articles
- **💬 Comments**: Comment system for engaging with content

### User Experience
- **🌙 Dark Mode**: Toggle between light and dark themes
- **📱 Responsive Design**: Fully responsive across all devices
- **⚡ Fast Loading**: Optimized performance with Vite
- **🎨 Smooth Animations**: Framer Motion for delightful interactions
- **📊 Reading Time**: Estimated reading time for each post

### Technical Features
- **🔒 SEO Optimized**: Meta tags, Open Graph, and structured data
- **💾 Local Storage**: Persistent user preferences and likes
- **🔄 State Management**: Zustand for efficient state management
- **🎯 TypeScript**: Full type safety throughout the application
- **📦 Modern Stack**: React 18, Vite, Tailwind CSS v3

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v3
- **State Management**: Zustand with persistence
- **Animations**: Framer Motion
- **Routing**: React Router v6
- **SEO**: React Helmet Async
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fitflow-blog.git
   cd fitflow-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, Card)
│   ├── BlogCard.tsx    # Blog post card component
│   ├── Footer.tsx      # Site footer
│   ├── Navbar.tsx      # Navigation with search and theme toggle
│   └── SEO.tsx         # SEO meta tags component
├── pages/              # Page components
│   ├── HomePage.tsx    # Landing page with featured posts
│   ├── BlogPage.tsx    # Blog listing with search and filters
│   ├── BlogPostPage.tsx # Individual post with reading progress
│   ├── CategoriesPage.tsx # Categories overview
│   ├── CategoryPage.tsx # Posts by category
│   ├── AboutPage.tsx   # About us page
│   ├── ContactPage.tsx # Contact form
│   └── NotFoundPage.tsx # 404 page
├── store/               # Zustand state management
│   └── blogStore.ts    # Blog state and actions
├── types/              # TypeScript type definitions
│   └── index.ts        # All type definitions
├── utils/              # Utility functions
│   ├── dataInitializer.ts # Blog data initialization
│   └── index.ts        # Utility functions
├── data/               # Sample data
│   └── samplePosts.ts  # Sample blog posts
└── App.tsx             # Main app component
```

## 🎨 Customization

### Adding New Posts
Edit `src/data/samplePosts.ts` to add your own blog posts:

```typescript
export const sampleBlogPosts: BlogPost[] = [
  {
    id: 'your-post-id',
    title: 'Your Post Title',
    slug: 'your-post-slug',
    excerpt: 'Brief description of your post',
    content: '<p>Your HTML content here</p>',
    image: '/path/to/image.jpg',
    category: 'Workout Routines',
    tags: ['tag1', 'tag2'],
    author: {
      name: 'Author Name',
      avatar: '/path/to/avatar.jpg'
    },
    publishedAt: '2024-01-01',
    updatedAt: '2024-01-01',
    likes: 0,
    isFeatured: false,
    comments: []
  }
];
```

### Styling
The project uses Tailwind CSS with custom FitFlow colors:
- `fitflow-primary` - Main brand color
- `fitflow-secondary` - Secondary brand color
- `fitflow-accent` - Accent color

Customize these in `tailwind.config.js`:

```javascript
colors: {
  fitflow: {
    primary: '#3B82F6',
    'primary-dark': '#2563EB',
    secondary: '#10B981',
    'secondary-dark': '#059669',
    accent: '#F59E0B',
    'accent-dark': '#D97706'
  }
}
```

### State Management
The blog uses Zustand for state management. Key features:
- Posts management
- Search and filtering
- Theme switching
- Like/favorite functionality
- Reading progress tracking

Extend the store in `src/store/blogStore.ts`:

```typescript
// Add new state
newFeature: initialValue,

// Add new actions
setNewFeature: (value) => set({ newFeature: value }),

// Add new selectors
getProcessedData: () => {
  const { data } = get();
  return data.map(item => processItem(item));
}
```

## 🔍 SEO Configuration

SEO is handled through the `SEO` component. Each page includes:
- Title and meta description
- Open Graph tags for social sharing
- Structured data for articles
- Keywords and author information

Example usage:
```typescript
<SEO
  title="Page Title"
  description="Page description for SEO"
  keywords={['keyword1', 'keyword2']}
  image="/path/to/image.jpg"
  type="article"
/>
```

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's dark mode classes and persisted in localStorage. Toggle it with:

```typescript
const { theme, toggleTheme } = useBlogStore();

// In your component
<button onClick={toggleTheme}>
  {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
</button>
```

## 📱 Responsive Design

The blog is fully responsive with breakpoints:
- Mobile: Default styling
- Tablet: `md:` prefix (768px+)
- Desktop: `lg:` prefix (1024px+)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Hosting
The built files are in `dist/` and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any static hosting service

### Environment Variables
Create a `.env` file for environment-specific settings:
```
VITE_API_URL=your-api-url
VITE_SITE_URL=your-site-url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from Unsplash
- Icons from Lucide React
- Sample content for demonstration purposes

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Check the documentation
- Contact the maintainers

---

**Happy coding!** 💪✨
