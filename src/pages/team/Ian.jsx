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
