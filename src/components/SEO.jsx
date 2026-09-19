import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title, 
  description, 
  type = 'website',
  name = 'Solian Wolves',
  url = 'https://solianwolves.com',
  image = 'https://solianwolves.com/logo.jpg'
}) {
  const defaultTitle = 'Solian Wolves | Enterprise Software & Cloud Infrastructure';
  const defaultDescription = 'We engineer high-performance software, custom ERPs, and mission-critical business systems tailored for ambitious organisations.';
  
  const seoTitle = title ? `${title} | ${name}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name='description' content={seoDescription} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:image" content={image} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Solian Wolves",
          "url": "https://solianwolves.com",
          "logo": "https://solianwolves.com/logo.jpg",
          "sameAs": [
            "https://www.linkedin.com/company/145206557/",
            "https://x.com/solianwolves",
            "https://www.youtube.com/@thesolianwolves",
            "https://www.reddit.com/user/The_Solian_Wolves/"
          ]
        })}
      </script>
    </Helmet>
  );
}
