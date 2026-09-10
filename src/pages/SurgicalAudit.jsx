import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const faqs = [
  { q: 'Who needs a Surgical Audit?', a: 'Any business whose software is slow, insecure, hard to maintain, or costing more than it should. If you have inherited a legacy codebase, experienced outages, or feel your tech team is constantly firefighting — you need an audit.' },
  { q: 'How long does the audit take?', a: 'A standard audit takes 2–4 weeks. We deliver a written report with every finding documented, prioritised by severity, and accompanied by a clear remediation roadmap.' },
  { q: 'Do we need to give you access to our source code?', a: 'Yes — to perform a thorough technical audit, we require read-only access to your codebase, infrastructure, and any relevant API documentation. All access is covered under an NDA.' },
  { q: 'What happens after the audit?', a: 'You receive a full written report. Many clients then engage us to carry out the remediation work, but you are under no obligation — the audit findings are yours to act on however you choose.' },
  { q: 'How much does it cost?', a: 'Audit pricing depends on the size and complexity of your system. Contact us for a scoping call and we will provide a fixed-price quote upfront.' },
];

export default function SurgicalAudit() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0067b8 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Methodology</span>
          <h1>The Surgical Audit</h1>
          <p>A deep-dive technical analysis that exposes exactly what's broken in your system — and how to fix it before it costs you more.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '24px', display: 'inline-block', background: '#fff', color: '#1a1a2e' }}>Book Your Audit →</Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#1a1a2e', padding: '40px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { stat: '2–4 wks', label: 'Audit Duration' },
            { stat: '100%', label: 'NDA Protected' },
            { stat: '40+', label: 'Vulnerabilities Found on Avg.' },
            { stat: 'Fixed Price', label: 'No Hidden Fees' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#66b2ff' }}>{stat}</div>
              <div style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body">

        {/* What is it */}
        <section className="page-section">
          <h2>What is the Surgical Audit?</h2>
          <p>Many businesses come to us after years of patching broken systems — high server bills, slow load times, security scares, and development teams that take months to ship simple features. The Surgical Audit is our structured diagnostic process. We go deep into your existing system and extract every performance bottleneck, security gap, and technical debt item. You walk away with a clear, costed, prioritised remediation roadmap.</p>
          <p style={{ marginTop: '16px', color: '#444' }}>It is not a surface-level review. We go into the code, the infrastructure, the database, and the APIs — and we tell you the truth, even when it hurts.</p>
        </section>

        {/* What we examine */}
        <section className="page-section" style={{ background: '#fafafa', borderRadius: '12px', padding: '48px' }}>
          <h2 style={{ marginBottom: '8px' }}>What We Examine</h2>
          <p style={{ marginBottom: '32px', color: '#616161' }}>Every audit covers six core diagnostic pillars:</p>
          <div className="page-section page-cards" style={{ paddingTop: 0 }}>
            {[
              { title: 'Core Web Vitals & Performance', desc: 'We measure page speed, First Contentful Paint, Time to Interactive, and Cumulative Layout Shift across your platform and identify exactly where users are dropping off.' },
              { title: 'Security Assessment', desc: 'We probe your system for vulnerabilities — SQL injection, exposed APIs, weak authentication flows, unencrypted data pathways, and misconfigured cloud permissions.' },
              { title: 'Technical Debt Review', desc: 'We document legacy code, outdated dependencies, circular logic, and architectural anti-patterns that are slowing down your development team and increasing operational risk.' },
              { title: 'Database Health Check', desc: 'Missing indexes, N+1 query problems, inefficient schemas, and slow query patterns are identified and quantified in terms of real-world performance impact.' },
              { title: 'Infrastructure Audit', desc: 'We review your cloud or hosting setup — looking for over-provisioned resources, single points of failure, missing redundancy, and cost optimisation opportunities.' },
              { title: 'Remediation Roadmap', desc: 'Every audit ends with a prioritised, costed remediation plan — so you know exactly what to fix first, how long it will take, and what it will cost.' },
            ].map(({ title, desc }) => (
              <div key={title} className="page-card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="page-section">
          <h2 style={{ marginBottom: '32px' }}>The Audit Process</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { step: '01', title: 'Scoping Call', desc: 'We understand your system size, stack, and the key concerns. We agree on scope and sign an NDA.' },
              { step: '02', title: 'Access & Discovery', desc: 'You grant read-only access to your codebase, infrastructure, and documentation. We begin analysis.' },
              { step: '03', title: 'Deep Audit', desc: 'Our engineers spend 2–4 weeks conducting the full technical review across all six pillars.' },
              { step: '04', title: 'Report Delivery', desc: 'We deliver a structured written report with every finding, severity rating, and a full remediation roadmap.' },
              { step: '05', title: 'Debrief Session', desc: 'We walk your team through the findings in a live video session. Q&A included.' },
            ].map(({ step, title, desc }, i, arr) => (
              <div key={step} style={{ display: 'flex', gap: '24px', paddingBottom: i < arr.length - 1 ? '32px' : 0, borderLeft: i < arr.length - 1 ? '2px solid #0067b8' : '2px solid transparent', marginLeft: '20px', paddingLeft: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-14px', top: 0, width: '28px', height: '28px', borderRadius: '50%', background: '#0067b8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700 }}>{step}</div>
                <div>
                  <h3 style={{ marginBottom: '4px', fontSize: '1.05rem' }}>{title}</h3>
                  <p style={{ color: '#616161' }}>{desc}</p>
                </div>
              </div>
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
          <h2>Book your audit today.</h2>
          <p>Most organisations save more than the cost of the audit in the first month of fixes. First scoping call is free.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
