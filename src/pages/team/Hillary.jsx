import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import hillaryImg from '../../assets/hillary.jpg';

export default function Hillary() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={hillaryImg} alt="Hillary Onchwati Isaiah" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Chief Operating Officer</span>
          <h1>Hillary Onchwati Isaiah</h1>
          
          <div className="bio-tags">
            <span className="bio-tag">Operations Management</span>
            <span className="bio-tag">Service Delivery</span>
            <span className="bio-tag">Strategic Planning</span>
            <span className="bio-tag">Process Optimization</span>
          </div>

          <div className="bio-socials">
            <a href="#" className="bio-social-link" title="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="bio-social-link" title="X (Twitter)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          <p className="bio-lead">Oversees day-to-day internal business operations and service delivery logistics.</p>
          <div className="bio-body">
            <p>Hillary serves as Chief Operating Officer, ensuring that Solian Wolves runs with maximum operational efficiency at every level. He is responsible for workflow optimisation, client onboarding execution, and project SLA compliance.</p>
            <p>He coordinates inter-departmental operations and maintains seamless alignment between the technical and sales teams. As a co-founder, Hillary also operates directly below the CEO on strategic matters, applying his business management expertise to advise and support the leadership team.</p>
            <p>His dual role as both operations lead and strategic advisor makes him a cornerstone of Solian Wolves' day-to-day execution and long-term direction.</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Work with us</Link>
        </div>
      </div>
    </div>
  );
}
