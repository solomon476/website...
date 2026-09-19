import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const experiments = [
  {
    tag: 'AI & ML',
    tagColor: '#7c3aed',
    title: 'Predictive Analytics Engine',
    desc: 'A custom-built machine learning pipeline that analyses institutional data — student performance, financial patterns, operational metrics — and surfaces actionable predictions before problems occur.',
    status: 'In Development',
    statusColor: '#f59e0b',
  },
  {
    tag: 'AUTOMATION',
    tagColor: '#0067b8',
    title: 'Intelligent Document Processing',
    desc: 'An LLM-powered system that reads, extracts, classifies, and routes unstructured documents (invoices, forms, reports) into structured workflows — eliminating manual data entry entirely.',
    status: 'Beta Testing',
    statusColor: '#25D366',
  },
  {
    tag: 'BLOCKCHAIN',
    tagColor: '#0f766e',
    title: 'Immutable Academic Records',
    desc: 'A blockchain-based certificate and transcript verification system for universities — enabling instant, tamper-proof credential validation without relying on any central authority.',
    status: 'Research Phase',
    statusColor: '#0067b8',
  },
  {
    tag: 'IoT',
    tagColor: '#b45309',
    title: 'Edge Analytics for Smart Campuses',
    desc: 'Ultra-low latency data pipelines for IoT-connected school and hospital environments — processing sensor data at the edge for real-time occupancy, energy, and security monitoring.',
    status: 'In Development',
    statusColor: '#f59e0b',
  },
  {
    tag: 'AI & ML',
    tagColor: '#7c3aed',
    title: 'Conversational ERP Assistant',
    desc: 'A natural language interface layered on top of enterprise systems — allowing staff to query reports, trigger workflows, and get insights by simply typing or speaking in plain English.',
    status: 'Concept Stage',
    statusColor: '#9ca3af',
  },
  {
    tag: 'SECURITY',
    tagColor: '#dc2626',
    title: 'Automated Penetration Testing Framework',
    desc: 'A proprietary tool that continuously probes client systems for vulnerabilities using scripted attack patterns — enabling faster, cheaper, and more thorough security audits at scale.',
    status: 'Internal Use',
    statusColor: '#374151',
  },
];

const researchAreas = [
  { icon: '🤖', title: 'Applied AI & LLMs', desc: 'We integrate large language models into enterprise workflows — not as gimmicks, but as genuine productivity multipliers embedded in real business processes.' },
  { icon: '⛓️', title: 'Distributed Ledger Technology', desc: 'Exploring practical uses of blockchain in credential verification, supply chain transparency, and financial record integrity across African markets.' },
  { icon: '📡', title: 'IoT & Edge Computing', desc: 'Building data pipelines for connected devices in schools, hospitals, and smart buildings — prioritising ultra-low latency and offline resilience.' },
  { icon: '🔐', title: 'Offensive Security Research', desc: 'Our security team continuously researches new attack vectors and builds internal tools to stay ahead of the threat landscape for our clients.' },
  { icon: '⚡', title: 'High-Performance Systems', desc: 'Research into database query optimisation, memory management, and distributed computing patterns that push performance boundaries.' },
  { icon: '🌍', title: 'Africa-First Infrastructure', desc: 'Designing software architectures that perform reliably under the constraints of African internet infrastructure — bandwidth, latency, and device diversity.' },
];

export default function Labs() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'var(--ms-bg-alt)', minHeight: '380px' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '700px' }}>
          <span className="page-tag" style={{ background: 'var(--ms-blue)' }}>R&D Division</span>
          <h1>Alpha Labs</h1>
          <p style={{ margin: '0 auto', color: 'var(--ms-mid-gray)' }}>Where we explore the bleeding edge of AI, automation, and distributed systems — building tomorrow's infrastructure before it becomes mainstream.</p>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--ms-card-bg)', borderTop: '1px solid var(--ms-border)', borderBottom: '1px solid var(--ms-border)', padding: '40px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { stat: '6', label: 'Active Experiments' },
            { stat: '3', label: 'Research Areas' },
            { stat: '2', label: 'Tools in Beta' },
            { stat: '∞', label: 'Curiosity' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--ms-blue)' }}>{stat}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--ms-mid-gray)', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body">

        {/* What is Alpha Labs */}
        <section className="page-section">
          <h2>What is Alpha Labs?</h2>
          <p>Alpha Labs is the dedicated research and development wing of Solian Wolves. While our core teams deliver production systems for clients, Alpha Labs exists to ask a different question: <strong>what becomes possible in the next 3–5 years?</strong></p>
          <p style={{ marginTop: '16px', color: '#444' }}>We run internal experiments, build proprietary tools, publish research, and prototype technologies that eventually make their way into client products. If it is on the bleeding edge, it starts here.</p>
        </section>

        {/* Active Experiments */}
        <section className="page-section ms-card" style={{ background: 'var(--ms-bg-alt)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-lg)', padding: '48px' }}>
          <h2 style={{ marginBottom: '8px' }}>Active Experiments</h2>
          <p style={{ color: 'var(--ms-mid-gray)', marginBottom: '32px' }}>Projects currently running inside Alpha Labs:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {experiments.map((exp, i) => (
              <div key={i} className="ms-card" style={{ background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-md)', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: exp.tagColor, letterSpacing: '0.05em' }}>{exp.tag}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: exp.statusColor, background: `${exp.statusColor}18`, padding: '4px 10px', borderRadius: '20px' }}>{exp.status}</span>
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--ms-text-main)', lineHeight: 1.3 }}>{exp.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--ms-mid-gray)', lineHeight: 1.7, flexGrow: 1 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Areas */}
        <section className="page-section">
          <h2 style={{ marginBottom: '8px' }}>Research Focus Areas</h2>
          <p style={{ color: 'var(--ms-mid-gray)', marginBottom: '32px' }}>The six domains driving our long-term R&D agenda:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {researchAreas.map(({ icon, title, desc }) => (
              <div key={title} className="ms-card" style={{ padding: '28px', background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-md)', borderTop: '3px solid var(--ms-blue)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '8px', color: 'var(--ms-text-main)' }}>{title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--ms-mid-gray)', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Collaborate */}
        <section className="page-section ms-card" style={{ background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-lg)', padding: '56px', textAlign: 'center', color: 'var(--ms-text-main)' }}>
          <h2 style={{ color: 'var(--ms-text-main)', marginBottom: '16px' }}>Collaborate with Alpha Labs</h2>
          <p style={{ color: 'var(--ms-mid-gray)', marginBottom: '32px', maxWidth: '560px', margin: '0 auto 32px' }}>Are you a researcher, university, or enterprise with a problem that sits on the frontier of technology? We are open to collaborative research partnerships.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ fontWeight: 700, padding: '14px 32px' }}>Get in Touch →</Link>
        </section>

      </div>
    </div>
  );
}
