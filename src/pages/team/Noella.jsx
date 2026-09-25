import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import noellaImg from '../../assets/noella.jpg';

export default function Noella() {
  const { t } = useTranslation();
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
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Executive Director / Finance & Admin</span>
          <h1>Noella Maraka Kaatho</h1>
          
          <div className="bio-tags">
            <span className="bio-tag">{t('bios.noella.exp1', 'Financial Operations')}</span>
            <span className="bio-tag">{t('bios.noella.exp2', 'Budget Tracking')}</span>
            <span className="bio-tag">{t('bios.noella.exp3', 'HR & Administration')}</span>
          </div>

          <p className="bio-lead">Supports financial operations, budget tracking, and corporate administrative management.</p>
          <div className="bio-body">
            <p>{t('bios.noella.bio')}</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>{t('cta_section.button', 'Work with us')}</Link>
        </div>
      </div>
    </div>
  );
}
