import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const faqs = [
  { q: 'How long does a typical full-cycle project take?', a: 'Most projects range from 8–24 weeks depending on complexity. After your consultation, we provide a precise project roadmap with milestones and delivery dates.' },
  { q: 'Do you work with startups or only enterprises?', a: 'Both. We work with ambitious startups from MVP stage and large enterprises needing to rebuild or scale existing systems. Our approach adapts to your stage.' },
  { q: 'What technologies do you build with?', a: 'Our primary stack is React / React Native (frontend), Node.js / Python / Django (backend), PostgreSQL / MongoDB (databases), and AWS / Azure / GCP (cloud). We can adapt to your existing stack.' },
  { q: 'Will we own the code?', a: 'Yes — 100%. All code, IP, and system assets are fully transferred to you upon project completion and final payment.' },
  { q: 'Do you offer post-launch support?', a: 'Yes. We offer retainer support plans that include monitoring, bug fixes, performance optimisation, and feature additions after launch.' },
];

export default function FullCycleDevelopment() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #0067b8 0%, #003f6e 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Solutions</span>
          <h1>Full-Cycle Development</h1>
          <p>From concept to deployment — we engineer complete, high-performance digital systems built to scale globally.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '24px', display: 'inline-block', background: '#fff', color: '#0067b8' }}>Start Your Project →</Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#f0f6ff', padding: '40px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { stat: '40+', label: 'Projects Delivered' },
            { stat: '8–24 wks', label: 'Average Delivery Time' },
            { stat: '100%', label: 'Client Code Ownership' },
            { stat: '24/7', label: 'Post-Launch Support' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#0067b8' }}>{stat}</div>
              <div style={{ fontSize: '0.9rem', color: '#616161', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body">

        {/* What We Build */}
        <section className="page-section">
          <h2>What We Build</h2>
          <p>We deliver end-to-end software development for businesses, schools, hospitals, and enterprises that need reliable, high-speed digital infrastructure. From custom web applications to enterprise-grade ERP platforms — we handle every phase from discovery to production.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '32px' }}>
            {['Custom ERP Systems', 'School Management Platforms', 'SaaS Products', 'Mobile Apps (iOS & Android)', 'Financial & Fintech Systems', 'Healthcare Logistics Software', 'E-commerce Platforms', 'Admin & Client Portals'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', border: '1px solid #e0e0e0', borderRadius: '6px', fontSize: '0.9rem', fontWeight: 500 }}>
                <span style={{ color: '#0067b8', fontWeight: 700 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="page-section" style={{ background: '#fafafa', borderRadius: '12px', padding: '48px' }}>
          <h2 style={{ marginBottom: '40px' }}>Our Development Process</h2>
          <div className="page-section page-cards" style={{ paddingTop: 0 }}>
            {[
              { step: '01', title: 'Discovery & Architecture', desc: 'We spend time deeply understanding your business — mapping user flows, technical requirements, data models, and system architecture before a single line of code is written.' },
              { step: '02', title: 'Design & Prototyping', desc: 'Our design team crafts premium, conversion-optimised interfaces. You see exactly what you are getting — including interactive prototypes — before we build it.' },
              { step: '03', title: 'Engineering & Development', desc: 'Senior engineers build your system with best-in-class technologies — React, Node.js, cloud-native backends, and robust APIs — with weekly progress reviews and code previews.' },
              { step: '04', title: 'QA, Launch & Handover', desc: 'Rigorous quality assurance, performance benchmarking, and security testing before we deploy to production. Full code handover with documentation and team training.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="page-card" style={{ position: 'relative', paddingTop: '40px' }}>
                <span style={{ position: 'absolute', top: '16px', left: '16px', fontSize: '2rem', fontWeight: 800, color: '#e0e8f0', lineHeight: 1 }}>{step}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="page-section">
          <h2>Technologies We Use</h2>
          <p style={{ marginBottom: '24px' }}>We build with battle-tested, modern technologies — no fads, no lock-in.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {['React & Next.js', 'React Native', 'Node.js', 'Python / Django', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Vercel', 'Stripe', 'Firebase', 'GraphQL', 'REST APIs'].map(tech => (
              <span key={tech} style={{ background: '#f0f6ff', border: '1px solid #c8def5', borderRadius: '20px', padding: '6px 16px', fontSize: '0.85rem', fontWeight: 500, color: '#003f6e' }}>{tech}</span>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="page-section" style={{ maxWidth: '760px' }}>
          <h2 style={{ marginBottom: '32px' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', padding: '20px 0' }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '1rem', fontWeight: 600, color: '#0f1115' }}
              >
                {faq.q}
                <span style={{ fontSize: '1.4rem', color: '#0067b8', lineHeight: 1 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p style={{ marginTop: '12px', color: '#444', lineHeight: 1.8 }}>{faq.a}</p>}
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="page-cta">
          <h2>Ready to build?</h2>
          <p>Let's discuss your project scope and get a timeline going. First consultation is free.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
