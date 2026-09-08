import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function FullCycleDevelopment() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0067b8 0%, #003f6e 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Solutions</span>
          <h1>Full-Cycle Development</h1>
          <p>From concept to deployment — we engineer complete, high-performance digital systems built to scale globally.</p>
        </div>
      </div>
      <div className="page-body">
        <section className="page-section">
          <h2>What We Build</h2>
          <p>We deliver end-to-end software development for businesses, schools, hospitals, and enterprises that need reliable, high-speed digital infrastructure. From custom web applications to enterprise-grade platforms, we handle every phase of the build.</p>
        </section>
        <section className="page-section page-cards">
          <div className="page-card">
            <h3>Discovery & Architecture</h3>
            <p>We start by understanding your business deeply — mapping out user flows, technical requirements, and system architecture before a single line of code is written.</p>
          </div>
          <div className="page-card">
            <h3>Design & Prototyping</h3>
            <p>Our design team crafts premium, conversion-optimised interfaces. You see exactly what you're getting before we build it.</p>
          </div>
          <div className="page-card">
            <h3>Engineering & Development</h3>
            <p>Our engineers build your system with best-in-class technologies — React, Node.js, cloud-native backends, and robust APIs built for performance.</p>
          </div>
          <div className="page-card">
            <h3>Deployment & Support</h3>
            <p>We deploy to production, set up CI/CD pipelines, and provide ongoing maintenance and support. Your system never goes dark.</p>
          </div>
        </section>
        <section className="page-cta">
          <h2>Ready to build?</h2>
          <p>Let's discuss your project scope and get a timeline going.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
