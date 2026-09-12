import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import solomonImg1 from '../../assets/solomon-1-cropped.jpg';
import solomonImg2 from '../../assets/solomon-2-cropped.jpg';

export default function Solomon() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={solomonImg1} alt="Solomon Nyangweso Omwenga - Image 1" className="bio-portrait" style={{ marginBottom: '24px' }} />
          <img src={solomonImg2} alt="Solomon Nyangweso Omwenga - Image 2" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: '#0067b8' }}>Chief Technology Officer</span>
          <h1>Solomon Nyangweso Omwenga</h1>
          <p className="bio-lead">Directs technical architecture, enterprise software engineering, infrastructure development, and innovation.</p>
          <div className="bio-body">
            <p>Solomon is the Chief Technology Officer of Solian Wolves, responsible for the technical vision and execution across all software products — both internal platforms and client-facing systems.</p>
            <p>He oversees system engineering, cybersecurity protocols, and development deployments. He manages technical team workflows, quality assurance processes, and ongoing product updates to ensure every system Solian Wolves ships meets the highest standard.</p>
            <p>When engagements involve outsourcing, Solomon leads and manages the outsourced team and project, maintaining Solian Wolves' quality standards regardless of where the engineering takes place.</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Work with us</Link>
        </div>
      </div>
    </div>
  );
}
