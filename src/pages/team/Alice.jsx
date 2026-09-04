import React from 'react';
import { Link } from 'react-router-dom';
import '../../pages.css';
import aliceImg from '../../assets/alice.jpg';

export default function Alice() {
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <Link to="/" className="page-nav-logo">← Solian Wolves</Link>
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={aliceImg} alt="Alice Moraa Nyakundi" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: '#0067b8' }}>Chief Financial Officer</span>
          <h1>Alice Moraa Nyakundi</h1>
          <p className="bio-lead">Oversees financial planning, budgeting, accounting practices, and financial reporting.</p>
          <div className="bio-body">
            <p>Alice leads all financial operations at Solian Wolves. She is responsible for the company's financial planning, budgeting, accounting practices, and financial reporting — ensuring the firm operates with fiscal discipline and transparency.</p>
            <p>She manages tax filings, compliance, treasury management, and corporate financial auditing. All financial strategies and decisions involving significant capital allocations are under her oversight.</p>
            <p>Alice's grip on revenue pipelines, profit allocation, and capital expenditure controls ensures Solian Wolves maintains a strong, sustainable financial foundation as it scales.</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>Work with us</Link>
        </div>
      </div>
    </div>
  );
}
