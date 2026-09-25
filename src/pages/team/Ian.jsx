import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import ianImg from '../../assets/ian-new-cropped.jpg';

export default function Ian() {
  const { t } = useTranslation();
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
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Chief Executive Officer</span>
          <h1>Ian Momanyi Nyakundi</h1>
          
          <div className="bio-tags">
            <span className="bio-tag">{t('bios.ian.exp1', 'Corporate Strategy')}</span>
            <span className="bio-tag">{t('bios.ian.exp2', 'Executive Leadership')}</span>
            <span className="bio-tag">{t('bios.ian.exp3', 'Global Operations')}</span>
          </div>

          <div className="bio-body">
            <p>{t('bios.ian.bio')}</p>
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
