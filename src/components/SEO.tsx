import React from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  article?: {
    publishedTime: string;
    modifiedTime: string;
    author: string;
    tags: string[];
  };
  publishedAt?: string;
  modifiedAt?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  author = 'FitFlow',
  image = '/images/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  article = {
    publishedTime: "",
    modifiedTime: "",
    author: "author",
    tags: ["dd", "sas"]
  },
  type = 'website',
  publishedAt,
  modifiedAt,
  twitterCard = 'summary_large_image',
  noindex = false,
  canonicalUrl,
}) => {
  const siteName = 'FitFlow - Fitness & Exercise Blog';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const metaKeywords = keywords.length > 0 ? keywords.join(', ') : 'fitness, exercise, workouts, health, wellness, nutrition';
  return (
    <>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {modifiedAt && <meta property="article:modified_time" content={modifiedAt} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@fitflow" />
      <meta name="twitter:creator" content="@fitflow" />

      {/* Article Meta Tags */}
      {type === 'article' && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Fitness" />
          <meta property="article:tag" content={metaKeywords} />
          <meta property="article:pubTime" content={article.publishedTime} />
          <meta property="article:modTime" content={article.modifiedTime} />
        </>
      )}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': type === 'article' ? 'Article' : 'WebSite',
          name: fullTitle,
          description: description,
          url: url,
          image: image,
          author: {
            '@type': 'Person',
            name: author,
          },
          publisher: {
            '@type': 'Organization',
            name: siteName,
            logo: {
              '@type': 'ImageObject',
              url: '/images/logo.png',
            },
          },
          datePublished: publishedAt,
          dateModified: modifiedAt,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
          },
        })}
      </script>
    </>
  );
};