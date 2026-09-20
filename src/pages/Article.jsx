import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

import articles from '../data/articles.json';

export default function Article() {
  const { slug } = useParams();
  
  const article = articles.find(a => a.slug === slug);
  
  if (!article) {
    return (
      <div className="page-wrapper">
        <nav className="page-nav">
          <PageNav label="← Back to Insights" fallback="/insights" />
        </nav>
        <div style={{ padding: '100px 20px', textAlign: 'center', color: 'var(--ms-text-main)' }}>
          <h1>Article Not Found</h1>
          <p>We couldn't find the insight you were looking for.</p>
          <Link to="/insights" className="ms-btn ms-btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav label="← Back to Insights" fallback="/insights" />
      </nav>
      
      <div className="page-hero" style={{ background: 'var(--ms-bg-alt)', paddingBottom: '60px' }}>
        <div className="page-hero-content" style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
            <span style={{ fontSize: '0.8rem', color: article.tagColor, fontWeight: 700, letterSpacing: '0.05em' }}>
              {article.tag}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'var(--ms-mid-gray)' }}>
              • {article.date} • {article.readTime}
            </span>
          </div>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.2', marginBottom: '24px' }}>{article.title}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--ms-mid-gray)', lineHeight: '1.6', marginBottom: '32px' }}>
            {article.desc}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid var(--ms-border)', paddingTop: '24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--ms-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
              {article.author.charAt(0)}
            </div>
            <div>
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '0.95rem', color: 'var(--ms-text-main)' }}>{article.author}</p>
              <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--ms-mid-gray)' }}>Solian Wolves Engineering</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="page-body" style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '48px', paddingBottom: '80px' }}>
        {article.content.split('\n\n').map((paragraph, idx) => (
          <p key={idx} style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--ms-text-main)', marginBottom: '24px' }}>
            {paragraph}
          </p>
        ))}
        
        <div style={{ marginTop: '64px', padding: '40px', background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-lg)' }}>
          <h3 style={{ marginBottom: '16px', color: 'var(--ms-text-main)' }}>Discuss this article</h3>
          <p style={{ color: 'var(--ms-mid-gray)', marginBottom: '24px' }}>Have questions about {article.title}? Reach out to our senior engineering team.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Contact Engineering</Link>
        </div>
      </div>
    </div>
  );
}
