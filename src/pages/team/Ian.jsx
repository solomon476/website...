import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import ianImg from '../../assets/ian.jpg';

export default function Ian() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={ianImg} alt="Ian Momanyi Nyakundi" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: '#0067b8' }}>Chief Executive Officer</span>
          <h1>Ian Momanyi Nyakundi</h1>
          <p className="bio-lead">Provides overall corporate vision, strategic leadership, and executive direction for the company.</p>
          <div className="bio-body">
            <p>Ian is the founding CEO of Solian Wolves Software Company, responsible for setting the strategic direction of the firm and driving high-level growth across all verticals.</p>
            <p>He leads business development, high-level client relations, legal compliance, and strategic partnerships. He presides over Board and leadership meetings and oversees executive officer operations.</p>
            <p>Under his leadership, Solian Wolves has positioned itself as a mission-critical software engineering firm serving ambitious organisations across multiple industries.</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Work with us</Link>
        </div>
      </div>
    </div>
  );
}
