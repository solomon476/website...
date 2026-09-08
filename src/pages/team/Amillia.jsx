import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import amilliaImg from '../../assets/amillia.jpg';

export default function Amillia() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={amilliaImg} alt="Amillia Rehan" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: '#0067b8' }}>Sales Manager</span>
          <h1>Amillia Rehan</h1>
          <p className="bio-lead">Drives enterprise client acquisition, strategic partnerships, and global revenue expansion.</p>
          <div className="bio-body">
            <p>Amillia serves as Sales Manager at Solian Wolves, spearheading client acquisition, revenue expansion, and commercial partnerships across enterprise and institutional markets.</p>
            <p>She leads the end-to-end sales lifecycle — identifying high-growth market opportunities, engaging executive decision-makers across education, healthcare, and finance sectors, and tailoring enterprise technology engagements to solve mission-critical client challenges.</p>
            <p>Working closely with executive and engineering teams, Amillia ensures that client requirements seamlessly translate into high-impact software solutions, winning commercial agreements, and enduring strategic relationships.</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Work with us</Link>
        </div>
      </div>
    </div>
  );
}
