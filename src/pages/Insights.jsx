import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

import articles from '../data/articles.json';

export default function Insights() {
  const [filter, setFilter] = useState('ALL');
  const tags = ['ALL', ...new Set(articles.map(a => a.tag))];
  const filtered = filter === 'ALL' ? articles : articles.filter(a => a.tag === filter);
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'var(--ms-bg-alt)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: 'var(--ms-blue)' }}>Corporate Newsroom</span>
          <h1>Insights &amp; Solutions</h1>
          <p style={{ margin: '0 auto', color: 'var(--ms-mid-gray)' }}>Whitepapers, engineering deep-dives, and strategic frameworks from the vanguard of software development.</p>
        </div>
      </div>

      <div className="page-body">

        {/* Filter Tabs */}
        <section className="page-section" style={{ paddingBottom: '0' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: filter === tag ? '2px solid var(--ms-blue)' : '1px solid var(--ms-border)',
                  background: filter === tag ? 'var(--ms-blue)' : 'var(--ms-card-bg)',
                  color: filter === tag ? '#fff' : 'var(--ms-mid-gray)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {filtered.map((article, i) => (
              <div key={i} className="ms-card" style={{ padding: '28px', background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'border-color 0.2s, transform 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ms-blue)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--ms-border)'; e.currentTarget.style.transform = 'none'; }}
                onClick={() => navigate(`/insights/${article.slug}`)}
              >
                <span style={{ fontSize: '0.75rem', color: article.tagColor, fontWeight: 700, letterSpacing: '0.05em' }}>{article.tag}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, color: 'var(--ms-text-main)' }}>{article.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--ms-mid-gray)', lineHeight: 1.7, flexGrow: 1 }}>{article.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid var(--ms-border)' }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ms-mid-gray)' }}>{article.date}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--ms-blue)', fontWeight: 600 }}>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="page-section ms-card" style={{ marginTop: '48px', background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-lg)', padding: '48px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '12px' }}>Stay ahead of the curve.</h2>
          <p style={{ color: 'var(--ms-mid-gray)', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>Get our latest whitepapers, engineering insights, and strategic frameworks delivered to your inbox.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{ padding: '12px 20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--ms-border)', background: 'var(--ms-bg-main)', color: 'var(--ms-text-main)', fontSize: '0.95rem', width: '280px', outline: 'none' }}
            />
            <button className="ms-btn ms-btn-primary">Subscribe</button>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta">
          <h2>Have a challenge we haven't written about?</h2>
          <p>Let's talk. Our senior team is happy to discuss your specific technical situation.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
