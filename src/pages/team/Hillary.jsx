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
          <span className="page-tag" style={{ background: '#0067b8' }}>Chief Operating Officer</span>
          <h1>Hillary Onchwati Isaiah</h1>
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
