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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      let result = {};
      try { result = JSON.parse(responseText); } catch (e) {}

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(result.error || `Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
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

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0067b8 0%, #242424 100%)', minHeight: '320px' }}>
        <div className="page-hero-content">
          <span className="page-tag">Get in Touch</span>
          <h1>Secure Your Consultation</h1>
          <p>Tell us about your project and one of our senior team members will reach out within 24 hours.</p>
        </div>
      </div>

      <div className="page-body">
        {submitted ? (
          <div className="contact-success" style={{ textAlign: 'center', padding: '80px 20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
            <h2 style={{ marginBottom: '12px' }}>Thank you — we've received your enquiry!</h2>
            <p style={{ color: '#616161', marginBottom: '32px' }}>A senior member of our team will reach out to you within 24 hours to discuss your project.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" className="ms-btn ms-btn-primary">Back to Home</Link>
              <a href="https://wa.me/254714729996" target="_blank" rel="noopener noreferrer" className="ms-btn" style={{ background: '#25D366', color: '#fff', border: 'none' }}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <div className="contact-layout">

            {/* Left: Contact Info */}
            <div style={{ paddingTop: '8px' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Contact Details</h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '4px', color: '#0f1115' }}>📧 Email</div>
                  <a href="mailto:solianwolves@gmail.com" style={{ color: '#0067b8' }}>solianwolves@gmail.com</a>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '4px', color: '#0f1115' }}>💬 WhatsApp</div>
                  <a href="https://wa.me/254714729996" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>Chat with us directly →</a>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '8px', color: '#0f1115' }}>🌍 Global Offices</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#616161' }}>
                    <span>🇰🇪 Nairobi, Kenya — HQ</span>
                    <span>🇬🇧 London, United Kingdom</span>
                    <span>🇦🇪 Dubai, UAE</span>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: '4px', color: '#0f1115' }}>⏱ Response Time</div>
                  <span style={{ fontSize: '0.9rem', color: '#616161' }}>Within 24 business hours</span>
                </div>
              </div>

              {/* Quick WhatsApp CTA */}
              <a
                href="https://wa.me/254714729996?text=Hi%20Solian%20Wolves%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px', marginTop: '40px',
                  background: '#25D366', color: '#fff', padding: '14px 20px', borderRadius: '8px',
                  fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem'
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.112 1.522 5.845L0 24l6.345-1.507A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.681-.497-5.224-1.367l-.375-.221-3.865.919.976-3.769-.243-.386A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Message us on WhatsApp
              </a>
            </div>

            {/* Right: Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Send an Enquiry</h2>
              {error && <div style={{ color: '#d13438', marginBottom: '16px', fontWeight: 'bold', padding: '12px', background: '#fff0f0', borderRadius: '6px', border: '1px solid #ffcccc' }}>{error}</div>}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Your full name" />
                </div>
                <div className="form-group">
                  <label htmlFor="org">Organisation / Company *</label>
                  <input id="org" name="org" type="text" required placeholder="Your organisation" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="Your email address" />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp</label>
                  <input id="phone" name="phone" type="tel" placeholder="+254 700 000 000" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Service Interested In *</label>
                  <select id="service" name="service" required>
                    <option value="">-- Select a service --</option>
                    <option>Full-Cycle Development</option>
                    <option>The Surgical Audit</option>
                    <option>Architectural Scaling</option>
                    <option>White Collar Partner</option>
                    <option>School Management System</option>
                    <option>Custom ERP</option>
                    <option>Mobile App Development</option>
                    <option>AI & Automation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Estimated Budget (KSh)</label>
                  <select id="budget" name="budget">
                    <option value="">-- Select a range --</option>
                    <option>Under KSh 500,000</option>
                    <option>KSh 500,000 – KSh 1,500,000</option>
                    <option>KSh 1,500,000 – KSh 5,000,000</option>
                    <option>KSh 5,000,000 – KSh 10,000,000</option>
                    <option>KSh 10,000,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your project *</label>
                <textarea id="message" name="message" rows="6" required placeholder="Briefly describe what you need, your timeline, and any key challenges..." />
              </div>

              <button type="submit" className="ms-btn ms-btn-primary form-submit" disabled={isSubmitting} style={{ width: '100%', padding: '14px', fontSize: '1rem' }}>
                {isSubmitting ? 'Sending...' : 'Send Enquiry →'}
              </button>

              <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '12px', textAlign: 'center' }}>
                We respond within 24 hours. All enquiries are treated with strict confidentiality.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
