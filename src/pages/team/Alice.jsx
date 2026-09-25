import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PageNav from '../../components/PageNav.jsx';
import '../../pages.css';
import aliceImg from '../../assets/alice.jpg';

export default function Alice() {
  const { t } = useTranslation();
  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="bio-page">
        <div className="bio-image-col">
          <img src={aliceImg} alt="Alice Moraa Nyakundi" className="bio-portrait" />
        </div>
        <div className="bio-content-col">
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Chief Financial Officer</span>
          <h1>Alice Moraa Nyakundi</h1>
          
          <p className="bio-lead">{t('bios.alice.lead')}</p>
          <div className="bio-tags">
            <span className="bio-tag">{t('bios.alice.exp1')}</span>
            <span className="bio-tag">{t('bios.alice.exp2')}</span>
            <span className="bio-tag">{t('bios.alice.exp3')}</span>
          </div>
          <div className="bio-body">
            <p>{t('bios.alice.bio1')}</p>
            <p>{t('bios.alice.bio2')}</p>
            <p>{t('bios.alice.bio3')}</p>
          </div>
          <Link to="/contact" className="ms-btn ms-btn-primary" style={{ marginTop: '32px', display: 'inline-block' }}>{t('cta_section.button', 'Work with us')}</Link>
        </div>
      </div>
    </div>
  );
}
