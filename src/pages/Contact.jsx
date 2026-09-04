import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <Link to="/" className="page-nav-logo">← Solian Wolves</Link>
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0067b8 0%, #242424 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Get in Touch</span>
          <h1>Secure Your Consultation</h1>
          <p>Tell us about your project and one of our senior team members will reach out within 24 hours.</p>
        </div>
      </div>
      <div className="page-body">
        {submitted ? (
          <div className="contact-success">
            <h2>✅ Thank you!</h2>
            <p>We've received your enquiry and will be in touch within 24 hours.</p>
            <Link to="/" className="ms-btn ms-btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>Back to Home</Link>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input id="name" type="text" placeholder="e.g. Jane Mwangi" required />
              </div>
              <div className="form-group">
                <label htmlFor="org">Organisation / Company *</label>
                <input id="org" type="text" placeholder="e.g. Nairobi Academy" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" placeholder="+254 7XX XXX XXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Which service are you interested in? *</label>
              <select id="service" required>
                <option value="">-- Select a service --</option>
                <option>Full-Cycle Development</option>
                <option>The Surgical Audit</option>
                <option>Architectural Scaling</option>
                <option>White Collar Partner</option>
                <option>School Management System</option>
                <option>Custom ERP</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea id="message" rows="6" placeholder="Briefly describe what you need, your timeline, and any key challenges..." required></textarea>
            </div>
            <button type="submit" className="ms-btn ms-btn-primary form-submit">Send Enquiry</button>
          </form>
        )}
      </div>
    </div>
  );
}
