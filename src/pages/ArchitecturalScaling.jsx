import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function ArchitecturalScaling() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #003f6e 0%, #00b4d8 100%)' }}>
        <div className="page-hero-content">
          <span className="page-tag">Engineering</span>
          <h1>Architectural Scaling</h1>
          <p>Bespoke cloud and composable architectures engineered to handle infinite growth — modular, performant, and future-proof.</p>
        </div>
      </div>
      <div className="page-body">
        <section className="page-section">
          <h2>Built for Scale from Day One</h2>
          <p>Many systems are built for today and collapse under tomorrow's traffic. Our architectural scaling practice designs systems that grow with your business — whether you're onboarding 100 or 100,000 users. We build headless, composable architectures that let you swap components without rebuilding everything.</p>
        </section>
        <section className="page-section page-cards">
          <div className="page-card">
            <h3>Cloud Infrastructure</h3>
            <p>We architect cloud-native systems on AWS, GCP, or Azure — with auto-scaling, load balancing, and zero-downtime deployments built in from the start.</p>
          </div>
          <div className="page-card">
            <h3>Microservices & APIs</h3>
            <p>Break your monolith into composable services. We design and implement REST and GraphQL APIs that power your core business logic reliably.</p>
          </div>
          <div className="page-card">
            <h3>Database Architecture</h3>
            <p>Optimised database schemas, indexing strategies, caching layers (Redis, CDN), and read replicas — so your data never becomes a bottleneck.</p>
          </div>
          <div className="page-card">
            <h3>DevOps & CI/CD</h3>
            <p>Automated pipelines, containerisation (Docker/Kubernetes), and infrastructure-as-code so your team ships faster with fewer errors.</p>
          </div>
        </section>
        <section className="page-cta">
          <h2>Scale without limits.</h2>
          <p>Tell us where you are and where you need to go — we'll architect the path.</p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Secure Your Consultation</Link>
        </section>
      </div>
    </div>
  );
}
