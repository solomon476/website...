import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function Industries() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: '#10b981' }}>Sectors We Serve</span>
          <h1>Industries</h1>
          <p style={{ margin: '0 auto' }}>We engineer tailored, compliant digital infrastructure for the world's most demanding sectors.</p>
        </div>
      </div>
      <div className="page-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '80px', gap: '32px' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', width: '100%', maxWidth: '1000px' }}>
          
          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🏦</div>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem' }}>Financial Services & FinTech</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>High-frequency trading platforms, secure payment gateways, and banking ledgers built with rigorous security and zero downtime.</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🎓</div>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem' }}>Education & EdTech</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Next-generation school management systems, learning management platforms, and academic ERPs designed to scale seamlessly.</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🏥</div>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem' }}>Healthcare</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>HIPAA-compliant patient portals, telemedicine infrastructure, and hospital management software optimizing clinical workflows.</p>
          </div>

          <div style={{ padding: '32px', border: '1px solid #e2e8f0', borderRadius: '8px', background: '#fff' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🏭</div>
            <h3 style={{ margin: '0 0 12px', fontSize: '1.25rem' }}>Logistics & Supply Chain</h3>
            <p style={{ color: '#475569', lineHeight: 1.6, margin: 0 }}>Real-time inventory tracking, fleet management dashboards, and predictive analytics platforms for global supply chains.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
