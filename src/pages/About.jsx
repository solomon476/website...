import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function About() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #001427 0%, #0067b8 60%, #003f6e 100%)', minHeight: '400px' }}>
        <div className="page-hero-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span className="page-tag" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>Our Story</span>
          <h1 style={{ fontSize: '3rem', lineHeight: 1.2 }}>Built to Engineer the Future</h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9 }}>
            Solian Wolves is a global technology firm on a mission to help institutions, enterprises, and founders build the next generation of world-class digital infrastructure.
          </p>
        </div>
      </div>

      <div className="page-body">

        {/* Mission & Vision */}
        <section className="page-section" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', paddingBottom: '64px' }}>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Our Mission</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
              To engineer high-performance, globally scalable software systems that transform how organisations operate. We exist at the intersection of strategic vision and technical excellence — turning complex problems into elegant, reliable digital solutions.
            </p>
          </div>
          <div style={{ background: '#f0f6ff', borderRadius: '8px', padding: '32px', borderLeft: '4px solid #0067b8' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Our Vision</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444' }}>
              To be the definitive technology partner for institutions across Africa and the world — a firm that is synonymous with engineering integrity, scale, and executive-level craftsmanship.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="page-section" style={{ background: 'var(--ms-bg-alt)', borderRadius: '8px', padding: '48px', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '24px' }}>Our Story</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#444' }}>
                Solian Wolves was founded with a clear conviction: that there was a gap between the quality of software being built and the ambition of institutions trying to grow. We saw schools struggling with outdated management systems, enterprises drowning in technical debt, and brilliant startups with no reliable engineering partner to help them scale.
              </p>
              <p style={{ fontSize: '1.05rem', lineHeight: 1.9, color: '#444', marginTop: '16px' }}>
                We assembled a team of senior architects, product engineers, and C-suite advisors who shared one belief — that elite software engineering should not be a privilege of the Fortune 500. Today, we operate across Nairobi, London, and Dubai, delivering world-class digital infrastructure to institutions that demand the best.
              </p>
            </div>
            
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}>
              <img 
                src="/team-culture.jpg" 
                alt="Solian Wolves Team Member" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '24px', color: '#fff' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#66b2ff' }}>The Pack</span>
                <h3 style={{ margin: '4px 0 0', fontSize: '1.2rem', fontWeight: 600 }}>Building the future of African tech.</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="page-section">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', textAlign: 'center' }}>Core Values</h2>
          <div className="page-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            <div className="page-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <h3>Excellence</h3>
              <p>We hold every line of code, every design decision, and every client interaction to the highest possible standard.</p>
            </div>
            <div className="page-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <h3>Integrity</h3>
              <p>We say what we mean, deliver what we promise, and never cut corners — even when no one is watching.</p>
            </div>
            <div className="page-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <h3>Innovation</h3>
              <p>We stay at the vanguard of technology — constantly learning, adapting, and pushing the boundaries of what software can do.</p>
            </div>
            <div className="page-card" style={{ textAlign: 'center', padding: '32px 24px' }}>
              <h3>Global Partnership</h3>
              <p>We are not just vendors — we are long-term strategic partners embedded in our clients' vision and growth.</p>
            </div>
          </div>
        </section>

        {/* Global Presence */}
        <section className="page-section" style={{ marginTop: '48px' }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '32px', textAlign: 'center' }}>Global Presence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ background: '#f0f6ff', borderRadius: '8px', padding: '28px', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 4px' }}>Nairobi, Kenya</h3>
              <p style={{ fontSize: '0.85rem', color: '#616161', margin: 0 }}>Africa Headquarters</p>
            </div>
            <div style={{ background: '#f0f6ff', borderRadius: '8px', padding: '28px', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 4px' }}>London, UK</h3>
              <p style={{ fontSize: '0.85rem', color: '#616161', margin: 0 }}>Europe Office</p>
            </div>
            <div style={{ background: '#f0f6ff', borderRadius: '8px', padding: '28px', textAlign: 'center' }}>
              <h3 style={{ margin: '0 0 4px' }}>Dubai, UAE</h3>
              <p style={{ fontSize: '0.85rem', color: '#616161', margin: 0 }}>MENA Office</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="page-cta" style={{ marginTop: '64px' }}>
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss how Solian Wolves can engineer your next breakthrough.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>

      </div>
    </div>
  );
}
