import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

const roles = [
  {
    id: 'lead-systems-architect',
    title: 'Lead Systems Architect',
    location: 'Remote (Global)',
    type: 'Full-Time',
    overview: 'As a Lead Systems Architect, you will design and oversee the development of highly scalable, mission-critical infrastructure for our enterprise clients. You will work on solving the most complex architectural problems and setting engineering standards.',
    responsibilities: [
      'Design distributed system architectures and microservices.',
      'Lead technical discovery and define engineering roadmaps.',
      'Mentorship of senior engineering pods.',
      'Ensure zero-downtime deployments and system resiliency.'
    ],
    requirements: [
      '8+ years of software engineering experience.',
      'Deep expertise in AWS/GCP/Azure cloud ecosystems.',
      'Proven track record of architecting high-throughput systems.',
      'Strong communication skills for C-suite technical translation.'
    ]
  },
  {
    id: 'senior-backend-engineer',
    title: 'Senior Backend Engineer (Node)',
    location: 'Hybrid (US)',
    type: 'Full-Time',
    overview: 'We are seeking an elite Senior Backend Engineer to build robust, scalable APIs and services. You will be responsible for the core logic that powers our custom enterprise solutions.',
    responsibilities: [
      'Develop and maintain high-performance Node.js backend services.',
      'Optimize database queries and data models (PostgreSQL/MongoDB).',
      'Integrate with third-party enterprise APIs and legacy systems.',
      'Implement strict security and data protection protocols.'
    ],
    requirements: [
      '5+ years of backend development experience.',
      'Expertise in Node.js, TypeScript, and modern backend frameworks.',
      'Solid understanding of database internals and caching strategies.',
      'Experience with CI/CD and containerized environments.'
    ]
  },
  {
    id: 'technical-product-manager',
    title: 'Technical Product Manager',
    location: 'Remote (EU/UK)',
    type: 'Contract',
    overview: 'The Technical Product Manager will bridge the gap between client strategy and engineering execution. You will translate complex business needs into precise architectural requirements and manage the agile delivery lifecycle.',
    responsibilities: [
      'Translate client requirements into actionable engineering epics.',
      'Prioritize product backlogs and manage sprint execution.',
      'Coordinate between design, engineering, and client stakeholders.',
      'Ensure delivery timelines align with strategic business goals.'
    ],
    requirements: [
      '4+ years in technical product management.',
      'Strong understanding of software development lifecycles.',
      'Ability to fluently discuss architecture and APIs with engineers.',
      'Exceptional organizational and agile management skills.'
    ]
  }
];

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState(null);

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedRole(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedRole) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedRole]);

  return (
    <div className="page-wrapper careers-page">
      <nav className="page-nav dark-nav">
        <PageNav label="← Solian Wolves" />
      </nav>

      <section className="careers-hero section-padding">
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="hero-badge">JOIN THE ALPHA PACK</div>
          <h1 className="careers-title">Build the <span className="text-gradient">Impossible</span></h1>
          <p className="careers-subtitle">
            We are a collective of relentless problem solvers. If you thrive in high-pressure environments, obsess over clean architecture, and want to engineer systems that power entire businesses—you belong here.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ padding: '2rem 5% 8rem', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 className="section-title">Open Missions</h2>
        
        <div className="roles-container">
          {roles.map(role => (
            <div key={role.id} className="role-card">
              <div className="role-info">
                <h3>{role.title}</h3>
                <div className="role-meta">
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
                    {role.location}
                  </span>
                  <span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> 
                    {role.type}
                  </span>
                </div>
              </div>
              <button className="btn btn-outline" onClick={() => setSelectedRole(role)}>View Role</button>
            </div>
          ))}
        </div>

        <div className="pitch-card">
          <h3>Don't see a fit?</h3>
          <p>We are always hunting for exceptional talent. If you have what it takes to run with the pack, send us your portfolio.</p>
          <a href="mailto:careers@solianwolves.com?subject=Talent Pitch - Joining The Pack" className="btn btn-blue">Pitch Yourself</a>
        </div>
      </section>

      {/* Role Modal */}
      {selectedRole && (
        <div className="careers-modal-overlay" onClick={() => setSelectedRole(null)}>
          <div className="careers-modal-content" onClick={e => e.stopPropagation()}>
            <button className="careers-modal-close" onClick={() => setSelectedRole(null)}>✕</button>
            
            <div className="modal-header">
              <h2>{selectedRole.title}</h2>
              <div className="role-meta">
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 
                  {selectedRole.location}
                </span>
                <span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> 
                  {selectedRole.type}
                </span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h4>Mission Overview</h4>
                <p>{selectedRole.overview}</p>
              </div>

              <div className="modal-section">
                <h4>Key Responsibilities</h4>
                <ul>
                  {selectedRole.responsibilities.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </div>

              <div className="modal-section">
                <h4>Requirements & Qualifications</h4>
                <ul>
                  {selectedRole.requirements.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </div>
            </div>

            <div className="modal-footer">
              <a href={`mailto:careers@solianwolves.com?subject=Application: ${selectedRole.title}`} className="btn btn-primary-full">Apply for this Mission</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
