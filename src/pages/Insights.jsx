import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const articles = [
  {
    tag: 'WHITEPAPER',
    tagColor: '#0067b8',
    title: 'The Future of Educational ERPs in Africa',
    desc: 'Why monolithic school management systems are failing and how modular, headless architecture fixes scalability, reporting, and student data integrity at scale.',
    readTime: '8 min read',
    date: 'August 2026',
  },
  {
    tag: 'SOLUTION',
    tagColor: '#006400',
    title: 'Scaling Financial Infrastructure Without Downtime',
    desc: 'How we migrate legacy financial records to secure, cloud-native architectures using blue-green deployments, data replication, and incremental traffic shifting — zero downtime guaranteed.',
    readTime: '6 min read',
    date: 'August 2026',
  },
  {
    tag: 'ENGINEERING',
    tagColor: '#7b2d8b',
    title: 'PostgreSQL Optimization for High-Frequency Ledgers',
    desc: 'Advanced indexing strategies, query plan analysis, and caching architectures for financial applications processing thousands of transactions per second.',
    readTime: '10 min read',
    date: 'July 2026',
  },
  {
    tag: 'STRATEGY',
    tagColor: '#b85c00',
    title: 'When to Hire a Fractional CTO vs. a Full-Time CTO',
    desc: 'A practical framework for SME founders and school administrators to decide when internal technical leadership makes sense and when a fractional model delivers more ROI.',
    readTime: '5 min read',
    date: 'July 2026',
  },
  {
    tag: 'SECURITY',
    tagColor: '#c0392b',
    title: 'The Top 10 Security Vulnerabilities We Find in Every Audit',
    desc: 'After auditing dozens of systems across education, healthcare, and finance — these are the security gaps that appear most consistently, and how to close them before they are exploited.',
    readTime: '7 min read',
    date: 'June 2026',
  },
  {
    tag: 'ENGINEERING',
    tagColor: '#7b2d8b',
    title: 'Microservices vs. Monolith: The Real Tradeoffs in 2026',
    desc: 'A grounded, non-hype analysis of when you actually need microservices, when a well-structured monolith is the better choice, and how to make the transition safely.',
    readTime: '9 min read',
    date: 'June 2026',
  },
];

export default function Insights() {
  const [filter, setFilter] = useState('ALL');
  const tags = ['ALL', 'WHITEPAPER', 'SOLUTION', 'ENGINEERING', 'STRATEGY', 'SECURITY'];
  const filtered = filter === 'ALL' ? articles : articles.filter(a => a.tag === filter);

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #001e36 0%, #000000 100%)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: '#0067b8' }}>Corporate Newsroom</span>
          <h1>Insights &amp; Solutions</h1>
          <p style={{ margin: '0 auto' }}>Whitepapers, engineering deep-dives, and strategic frameworks from the vanguard of software development.</p>
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
                  border: filter === tag ? '2px solid #0067b8' : '1px solid #e0e0e0',
                  background: filter === tag ? '#0067b8' : '#fff',
                  color: filter === tag ? '#fff' : '#333',
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
              <div key={i} style={{ padding: '28px', border: '1px solid #e0e0e0', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <span style={{ fontSize: '0.75rem', color: article.tagColor, fontWeight: 700, letterSpacing: '0.05em' }}>{article.tag}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, lineHeight: 1.4, color: '#0f1115' }}>{article.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#616161', lineHeight: 1.7, flexGrow: 1 }}>{article.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid #f0f0f0' }}>
                  <span style={{ fontSize: '0.8rem', color: '#999' }}>{article.date}</span>
                  <span style={{ fontSize: '0.8rem', color: '#0067b8', fontWeight: 600 }}>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="page-section" style={{ marginTop: '48px', background: '#f0f6ff', borderRadius: '12px', padding: '48px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '12px' }}>Stay ahead of the curve.</h2>
          <p style={{ color: '#444', marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>Get our latest whitepapers, engineering insights, and strategic frameworks delivered to your inbox.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{ padding: '12px 20px', borderRadius: '6px', border: '1px solid #c8def5', fontSize: '0.95rem', width: '280px', outline: 'none' }}
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
