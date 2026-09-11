import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const faqs = [
  { q: 'What does "architectural scaling" actually mean?', a: 'It means designing your system so it can handle 10x or 100x its current load without falling over. It involves restructuring how your application components, database, APIs, and infrastructure are organised and connected.' },
  { q: 'We already have a system — can you scale what we have?', a: 'Yes. We can work with your existing system, refactor it incrementally, or design a migration path to a new architecture. We always assess the most cost-effective route first.' },
  { q: 'Which cloud platforms do you work with?', a: 'We work with AWS (our primary platform), Microsoft Azure, and Google Cloud Platform (GCP). We are cloud-agnostic and will recommend the best platform for your use case and budget.' },
  { q: 'Will we experience downtime during the migration?', a: 'Not if we can help it. We design all scaling migrations with zero-downtime strategies — using blue-green deployments, feature flags, and incremental traffic shifting.' },
  { q: 'How do we know if we need architectural scaling?', a: 'Signs include: slow page loads, frequent crashes under load, high and growing infrastructure costs, a development team that moves slowly because the codebase is tightly coupled, or an upcoming product launch you are worried about.' },
];

export default function ArchitecturalScaling() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>

      {/* Hero */}
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #003f6e 0%, #00b4d8 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Engineering</span>
          <h1>Architectural Scaling</h1>
          <p>Bespoke cloud and composable architectures engineered to handle infinite growth — modular, performant, and future-proof.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '24px', display: 'inline-block', background: '#fff', color: '#003f6e' }}>Discuss Your Architecture →</Link>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: '#003f6e', padding: '40px 5%' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center' }}>
          {[
            { stat: '0', label: 'Downtime During Migration' },
            { stat: '3', label: 'Cloud Platforms Supported' },
            { stat: '10–100x', label: 'Typical Load Increase' },
            { stat: '∞', label: 'Scalability Ceiling' },
          ].map(({ stat, label }) => (
            <div key={label}>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: '#00b4d8' }}>{stat}</div>
              <div style={{ fontSize: '0.85rem', color: '#aad4e8', marginTop: '4px' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="page-body">

        {/* Overview */}
        <section className="page-section">
          <h2>Built for Scale from Day One</h2>
          <p>Many systems are built for today and collapse under tomorrow's traffic. Our architectural scaling practice designs systems that grow with your business — whether you are onboarding 100 or 100,000 users. We build headless, composable architectures that let you swap components, add services, and scale independently — without rebuilding everything from scratch.</p>
          <p style={{ marginTop: '16px', color: '#444' }}>Whether you need to migrate a monolith to microservices, move to the cloud, reduce your infrastructure bill, or simply stop your system from crashing — we have done it before and we will do it for you.</p>
        </section>

        {/* Core Services */}
        <section className="page-section" style={{ background: 'var(--ms-bg-alt)', borderRadius: '12px', padding: '48px' }}>
          <h2 style={{ marginBottom: '8px' }}>Core Engineering Services</h2>
          <p style={{ marginBottom: '32px', color: '#616161' }}>Our scaling practice covers every layer of your system:</p>
          <div className="page-section page-cards" style={{ paddingTop: 0 }}>
            {[
              { title: 'Cloud Infrastructure', desc: 'We architect cloud-native systems on AWS, GCP, or Azure — with auto-scaling groups, load balancers, CDN layers, and zero-downtime deployments baked in from day one.' },
              { title: 'Microservices & APIs', desc: 'We break monoliths into independent, composable services. Every service communicates through well-defined REST or GraphQL APIs, deployed and scaled independently.' },
              { title: 'Database Architecture', desc: 'Optimised schemas, smart indexing, query optimisation, caching layers (Redis, Memcached), read replicas, and sharding strategies — so your database is never your bottleneck.' },
              { title: 'DevOps & CI/CD', desc: 'Automated deployment pipelines, containerisation with Docker and Kubernetes, infrastructure-as-code (Terraform), and environment management — so your team ships faster with fewer errors.' },
              { title: 'Performance Engineering', desc: 'We profile your application end-to-end, identify CPU and memory hotspots, and implement targeted optimisations that make immediate, measurable differences to load times and resource cost.' },
              { title: 'Disaster Recovery', desc: 'Multi-region failover, automated backups, data replication, and recovery runbooks — so when something goes wrong (and it will), your system recovers in minutes, not hours.' },
            ].map(({ title, desc }) => (
              <div key={title} className="page-card">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Signs you need this */}
        <section className="page-section">
          <h2 style={{ marginBottom: '24px' }}>Signs You Need Architectural Scaling</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {[
              '🐢 Pages load slowly under normal traffic',
              '💥 System crashes during peak usage',
              '💸 Your cloud bill keeps growing unexpectedly',
              '🔒 Your team is afraid to touch core parts of the codebase',
              '🚂 A new feature takes weeks because everything is tightly coupled',
              '📈 You are about to launch and worried about capacity',
              '🌍 You need to expand to new regions',
              '⏰ You are spending more time on maintenance than on growth',
            ].map(item => (
              <div key={item} style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '0.9rem', lineHeight: 1.6 }}>{item}</div>
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
          <h2>Scale without limits.</h2>
          <p>Tell us where you are and where you need to go — we will architect the path. First consultation is free.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
