import React from 'react';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import noellaImg from '../../assets/noella.jpg';

export default function Noella() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={noellaImg} alt="Noella Maraka Kaatho" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: '#0067b8' }}>Executive Director / Finance &amp; Admin</span>
          <h1>Noella Maraka Kaatho</h1>
          <p className="bio-lead">Supports financial operations, budget tracking, and corporate administrative management.</p>
          <div className="bio-body">
            <p>Noella serves as Executive Director overseeing Finance and Administration at Solian Wolves. She plays a critical role in supporting the financial team and ensuring the company's administrative infrastructure runs smoothly.</p>
            <p>She assists in internal compliance control, asset tracking, and HR and payroll workflow execution. Her work ensures that every internal process is properly documented, compliant, and efficiently executed.</p>
            <p>Noella collaborates closely with executive leadership on administrative policies and corporate governance, serving as a key link between the operational and financial arms of the organisation.</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Work with us</Link>
        </div>
      </div>
    </div>
  );
}
