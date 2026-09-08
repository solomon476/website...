import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function WhiteCollarPartner() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #242424 0%, #0067b8 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Partnership</span>
          <h1>White Collar Partner</h1>
          <p>C-suite level strategic advisory. We embed our senior leadership directly into your business to drive long-term digital growth.</p>
        </div>
      </div>
      <div className="page-body">
        <section className="page-section">
          <h2>More Than a Vendor — A Strategic Partner</h2>
          <p>Most software firms hand you a product and walk away. We don't. Our White Collar Partner programme places our senior executives — fractional CTOs, CMOs, and product strategists — inside your leadership team. We help you make the right technology decisions at the right time, without the cost of a full-time hire.</p>
        </section>
        <section className="page-section page-cards">
          <div className="page-card">
            <h3>Fractional CTO</h3>
            <p>Technical leadership without the full-time salary. Our CTO works with your board to set engineering direction, manage technical risk, and hire the right team.</p>
          </div>
          <div className="page-card">
            <h3>Product Strategy</h3>
            <p>We help you define what to build, in what order, and why — grounded in market data, user research, and competitive analysis.</p>
          </div>
          <div className="page-card">
            <h3>Digital Transformation</h3>
            <p>Moving from legacy systems to modern platforms is complex. We plan and execute the transition with minimal disruption to your operations.</p>
          </div>
          <div className="page-card">
            <h3>Board-Level Reporting</h3>
            <p>We translate technical progress into business outcomes — clear dashboards and executive summaries your board will actually understand.</p>
          </div>
        </section>
        <section className="page-cta">
          <h2>Join the Pack.</h2>
          <p>A limited number of White Collar Partner slots are available per quarter. Enquire now to check availability.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
