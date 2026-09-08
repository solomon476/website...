import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function Methodology() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #020617 100%)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: '#3b82f6' }}>Engineering Process</span>
          <h1>Our Methodology</h1>
          <p style={{ margin: '0 auto' }}>How we architect, build, and deploy world-class enterprise software.</p>
        </div>
      </div>
      <div className="page-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', gap: '32px' }}>
        <h2>The Solian Framework</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', width: '100%', maxWidth: '800px' }}>
          
          <div style={{ display: 'flex', gap: '24px', padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#cbd5e1' }}>01</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>Strategic Discovery</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>We begin by dissecting your business operations. Our architects map out your exact data flows, identifying bottlenecks and defining the technical requirements necessary for massive scale.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#cbd5e1' }}>02</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>Architectural Design</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Before any code is written, we design the database schemas, API contracts, and infrastructure topology. We prioritize modular, headless architectures that prevent future technical debt.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#cbd5e1' }}>03</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>Iterative Engineering</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Our engineering pods operate in rapid sprints. We build using industry-standard tech stacks (React, Node.js, Python, PostgreSQL), ensuring clean, documented, and testable code.</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#cbd5e1' }}>04</div>
            <div>
              <h3 style={{ margin: '0 0 8px', fontSize: '1.25rem' }}>Deployment & Scaling</h3>
              <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>We deploy to highly available cloud environments (AWS/Azure/Vercel) using automated CI/CD pipelines. We provide ongoing telemetry monitoring and SLA-backed support to guarantee uptime.</p>
            </div>
          </div>

        </div>

        <section className="page-cta" style={{ marginTop: '48px', width: '100%', maxWidth: '800px' }}>
          <h2>Ready to engineer your future?</h2>
          <Link to="/contact" className="ms-btn ms-btn-primary">Talk to an Architect</Link>
        </section>
      </div>
    </div>
  );
}
