import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import solomonImg from '../../assets/solomon-new.jpg';

export default function Solomon() {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={solomonImg} alt="Solomon Nyangweso Omwenga" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Chief Technology Officer</span>
          <h1>Solomon Nyangweso Omwenga</h1>
          
          <div className="bio-tags">
            <span className="bio-tag">{t('bios.solomon.exp1', 'Enterprise Architecture')}</span>
            <span className="bio-tag">{t('bios.solomon.exp2', 'Cloud Infrastructure')}</span>
            <span className="bio-tag">{t('bios.solomon.exp3', 'Cybersecurity')}</span>
          </div>

          <div className="bio-body">
            <p>{t('bios.solomon.bio')}</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>{t('cta_section.button', 'Work with us')}</Link>

          <div className="bio-projects">
            <h3>{t('bio_labels.projects', 'Notable Projects')}</h3>
            <a href="https://somobloom.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-card-info">
                <h4>{t('featured.product_name', 'SomoBloom')}</h4>
                <p>{t('footer.e2', 'Enterprise school management system.')}</p>
              </div>
              <div className="project-card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
