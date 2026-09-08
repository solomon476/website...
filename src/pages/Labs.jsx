import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function Labs() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: '#8b5cf6' }}>R&D Division</span>
          <h1>Alpha Labs</h1>
          <p style={{ margin: '0 auto' }}>Exploring the bleeding edge of AI, automation, and distributed systems to build tomorrow's infrastructure.</p>
        </div>
      </div>
      <div className="page-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', gap: '32px' }}>
        
        <div style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Research & Innovation</h2>
          <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.8 }}>
            Alpha Labs is the specialized R&D wing of Solian Wolves. We step beyond traditional software engineering to experiment with applied machine learning, decentralized ledger technologies, and autonomous automation frameworks.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', width: '100%', maxWidth: '1000px', marginTop: '32px' }}>
          
          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem', color: '#4c1d95' }}>AI & Machine Learning</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Developing custom predictive models, LLM integrations, and computer vision systems tailored for enterprise operational efficiency.</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem', color: '#4c1d95' }}>Blockchain & Web3</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Prototyping smart contracts and decentralized applications (dApps) for secure, immutable data architecture in finance and supply chain.</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem', color: '#4c1d95' }}>IoT & Edge Computing</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Creating robust data pipelines for connected devices, optimizing for ultra-low latency processing on the edge.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
