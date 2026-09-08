import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      let result = {};
      try {
        result = JSON.parse(responseText);
      } catch (e) {
        console.error('Failed to parse response as JSON:', responseText);
      }

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.error || `Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
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
            {error && <div style={{ color: '#d13438', marginBottom: '16px', fontWeight: 'bold' }}>{error}</div>}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input id="name" name="name" type="text" placeholder="e.g. Jane Mwangi" required />
              </div>
              <div className="form-group">
                <label htmlFor="org">Organisation / Company *</label>
                <input id="org" name="org" type="text" placeholder="e.g. Nairobi Academy" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" placeholder="+254 7XX XXX XXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="service">Which service are you interested in? *</label>
              <select id="service" name="service" required>
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
              <label htmlFor="message">Tell us about your project</label>
              <textarea id="message" name="message" rows="6" placeholder="Briefly describe what you need, your timeline, and any key challenges..."></textarea>
            </div>
            <button type="submit" className="ms-btn ms-btn-primary form-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
