import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function Insights() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #001e36 0%, #000000 100%)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: '#0067b8' }}>Corporate Newsroom</span>
          <h1>Insights & Case Studies</h1>
          <p style={{ margin: '0 auto' }}>Whitepapers, engineering metrics, and success stories from the vanguard of software development.</p>
        </div>
      </div>
      <div className="page-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', gap: '32px' }}>
        <h2>Latest Publications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', width: '100%', maxWidth: '1000px' }}>
          
          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
            <span style={{ fontSize: '0.8rem', color: '#0067b8', fontWeight: 'bold' }}>CASE STUDY</span>
            <h3 style={{ margin: '12px 0 8px' }}>Scaling a National Bank's Infrastructure</h3>
            <p style={{ fontSize: '0.9rem', color: '#616161' }}>How we migrated 2 million legacy records to a secure headless architecture with zero downtime.</p>
          </div>

          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
            <span style={{ fontSize: '0.8rem', color: '#0067b8', fontWeight: 'bold' }}>WHITEPAPER</span>
            <h3 style={{ margin: '12px 0 8px' }}>The Future of Educational ERPs</h3>
            <p style={{ fontSize: '0.9rem', color: '#616161' }}>Why monolithic school management systems are failing and how modular scaling fixes it.</p>
          </div>

          <div style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '4px' }}>
            <span style={{ fontSize: '0.8rem', color: '#0067b8', fontWeight: 'bold' }}>ENGINEERING</span>
            <h3 style={{ margin: '12px 0 8px' }}>PostgreSQL Optimization Techniques</h3>
            <p style={{ fontSize: '0.9rem', color: '#616161' }}>Advanced indexing strategies for high-frequency financial ledgers.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
