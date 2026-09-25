import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import hillaryImg from '../../assets/hillary.jpg';

export default function Hillary() {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={hillaryImg} alt="Hillary Onchwati Isaiah" className="bio-portrait" />
          <div className="bio-projects">
            <h3>{t('bio_labels.projects', 'Notable Projects')}</h3>
            <a href="https://somobloom.com" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-card-info">
                <h4>{t('featured.product_name', 'SomoBloom')}</h4>
                <p>{t('footer.e2', 'Enterprise school management system.')}</p>
              </div>
            </a>
          </div>
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Chief Operating Officer</span>
          <h1>Hillary Onchwati Isaiah</h1>
          
          <div className="bio-tags">
            <span className="bio-tag">{t('bios.hillary.exp1', 'Operations Management')}</span>
            <span className="bio-tag">{t('bios.hillary.exp2', 'Strategic Planning')}</span>
            <span className="bio-tag">{t('bios.hillary.exp3', 'Service Delivery')}</span>
          </div>

          <div className="bio-body">
            <p>{t('bios.hillary.bio')}</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>{t('cta_section.button', 'Work with us')}</Link>
        </div>
      </div>
    </div>
  );
}
