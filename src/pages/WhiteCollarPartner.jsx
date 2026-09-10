import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const faqs = [
  { q: 'What exactly is a Fractional CTO?', a: 'A Fractional CTO is a senior technology executive who works with your business on a part-time or retainer basis — giving you C-suite level technical leadership without the full-time salary. They sit in your leadership team, advise your board, manage your engineering direction, and help you make the right technology decisions.' },
  { q: 'How is this different from hiring a consultant?', a: 'Consultants advise from the outside and move on. Our White Collar Partners embed themselves into your leadership — they attend board meetings, manage your team, own the technical roadmap, and are accountable for outcomes. It is a long-term relationship, not a one-off project.' },
  { q: 'How many clients can one White Collar Partner serve?', a: 'We limit each partner to a maximum of 3 concurrent engagements to guarantee quality and availability. Slots are limited — we open a small number of partnerships per quarter.' },
  { q: 'What is the minimum engagement period?', a: 'We ask for a minimum 3-month commitment to allow the partner time to fully understand your business and make meaningful impact. Most partnerships last 12–24 months.' },
  { q: 'Can you help us hire and build an internal tech team?', a: 'Yes — this is one of the most common things our Fractional CTOs help with. We define the roles you need, write job specs, interview candidates, and help you onboard your internal team as we transition responsibilities over time.' },
];

export default function WhiteCollarPartner() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #242424 0%, #0067b8 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Partnership</span>
          <h1>White Collar Partner</h1>
          <p>C-suite level strategic advisory. We embed our senior leadership directly into your business to drive long-term digital growth — without the full-time hire.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '24px', display: 'inline-block', background: '#fff', color: '#242424' }}>Check Availability →</Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#111', padding: '40px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { stat: '3 max', label: 'Clients Per Partner' },
            { stat: '3–24 mo', label: 'Engagement Length' },
            { stat: 'Limited', label: 'Slots Per Quarter' },
            { stat: '100%', label: 'Embedded in Your Team' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#66b2ff' }}>{stat}</div>
              <div style={{ fontSize: '0.85rem', color: '#aaa', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body">

        {/* Overview */}
        <section className="page-section">
          <h2>More Than a Vendor — A Strategic Partner</h2>
          <p>Most software firms hand you a product and walk away. We do not. Our White Collar Partner programme places our senior executives — fractional CTOs, CMOs, and product strategists — inside your leadership team. We sit at the table, attend your board meetings, manage your engineering direction, and help you make the right technology decisions at the right time.</p>
          <p style={{ marginTop: '16px', color: '#444' }}>This is for businesses that know technology is critical to their growth but do not yet have the internal leadership to steer it correctly. You get the experience of a decade-seasoned CTO at a fraction of the cost of a full-time hire.</p>
        </section>

        {/* What partners do */}
        <section className="page-section" style={{ background: '#fafafa', borderRadius: '12px', padding: '48px' }}>
          <h2 style={{ marginBottom: '8px' }}>What Our Partners Do</h2>
          <p style={{ marginBottom: '32px', color: '#616161' }}>Every engagement is tailored, but here is what a typical White Collar Partner delivers:</p>
          <div className="page-section page-cards" style={{ paddingTop: 0 }}>
            {[
              { title: 'Fractional CTO', desc: 'Technical leadership without the full-time salary. Our CTO works with your board to set engineering direction, manage technical risk, define your technology roadmap, and hire the right team.' },
              { title: 'Product Strategy', desc: 'We help you define what to build, in what order, and why — grounded in market data, user research, competitive analysis, and your business objectives.' },
              { title: 'Engineering Team Management', desc: 'If you have developers, we manage them. If you need to build a team, we hire and onboard them. We set processes, standards, and a culture of engineering excellence.' },
              { title: 'Digital Transformation', desc: 'Moving from legacy systems to modern platforms is complex and risky. We plan and execute the transition with minimal disruption to your operations and your users.' },
              { title: 'Board-Level Reporting', desc: 'We translate technical progress into business outcomes — clear dashboards and executive summaries that your board will actually understand and use to make decisions.' },
              { title: 'Vendor & Partner Management', desc: 'We evaluate, negotiate with, and manage your technology vendors, SaaS subscriptions, cloud providers, and outsourcing partners — ensuring you are never over-paying or under-served.' },
            ].map(({ title, desc }) => (
              <div key={title} className="page-card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who is it for */}
        <section className="page-section">
          <h2 style={{ marginBottom: '24px' }}>Who Is This For?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {[
              { icon: '🏫', label: 'Schools & Universities', desc: 'Digitising operations and managing EdTech systems without an internal IT leader.' },
              { icon: '🏥', label: 'Healthcare Providers', desc: 'Navigating complex healthcare software, compliance, and digital patient systems.' },
              { icon: '💼', label: 'SMEs & Scale-ups', desc: 'Growing businesses that need senior tech leadership but cannot justify a full-time CTO salary.' },
              { icon: '🏦', label: 'Financial Institutions', desc: 'Banks, SACCOs, and fintechs that need expert guidance on digital transformation and regulatory compliance.' },
              { icon: '🏗️', label: 'Founders & CEOs', desc: 'Non-technical leaders who need a trusted technical co-pilot to help them make the right product and engineering decisions.' },
              { icon: '🌍', label: 'NGOs & Government Bodies', desc: 'Organisations managing large-scale digital programmes that need accountable, experienced technology leadership.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} style={{ padding: '24px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{label}</h3>
                <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.6 }}>{desc}</p>
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
          <h2>Join the Pack.</h2>
          <p>A limited number of White Collar Partner slots are available per quarter. Enquire now to check availability.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Check Availability</Link>
        </section>
      </div>
    </div>
  );
}
