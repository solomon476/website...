import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function SurgicalAudit() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0067b8 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Methodology</span>
          <h1>The Surgical Audit</h1>
          <p>A deep-dive technical analysis that exposes exactly what's broken in your system — and how to fix it before it costs you more.</p>
        </div>
      </div>
      <div className="page-body">
        <section className="page-section">
          <h2>What is the Surgical Audit?</h2>
          <p>Many businesses come to us after years of patching broken systems. The Surgical Audit is our structured diagnostic process — we go into your existing system and extract every performance bottleneck, security gap, and technical debt item. You walk away with a clear, actionable remediation roadmap.</p>
        </section>
        <section className="page-section page-cards">
          <div className="page-card">
            <h3>Core Web Vitals Analysis</h3>
            <p>We measure page speed, load times, and user experience scores across your platform and identify exactly where users are dropping off.</p>
          </div>
          <div className="page-card">
            <h3>Security Assessment</h3>
            <p>We probe your system for vulnerabilities — SQL injection risks, exposed APIs, weak authentication, and unencrypted data pathways.</p>
          </div>
          <div className="page-card">
            <h3>Technical Debt Review</h3>
            <p>We document legacy code, outdated dependencies, and architectural anti-patterns that are slowing down your development team.</p>
          </div>
          <div className="page-card">
            <h3>Remediation Roadmap</h3>
            <p>Every audit ends with a prioritised, costed remediation plan — so you know exactly what to fix first and what it will take.</p>
          </div>
        </section>
        <section className="page-cta">
          <h2>Book your audit today.</h2>
          <p>Most organisations save more than the cost of the audit in the first month of fixes.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
