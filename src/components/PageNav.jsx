import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher.jsx';

/**
 * Shared page navigation bar with a smart back button.
 * Goes back in browser history if available, otherwise goes home.
 * Pass dark={true} for pages with a dark/black background.
 */
export default function PageNav({ label = '← Solian Wolves', dark = false, fallback = '/' }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  function handleBack() {
    // If there's browser history beyond the current page, go back; otherwise go to fallback
    if (window.history.length > 2 || (window.history.state && window.history.state.idx > 0)) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  }

  return (
    <nav className={`page-nav ${dark ? 'dark' : ''}`}>
      <div className="page-nav-left">
        <button
          onClick={handleBack}
          className="page-nav-logo"
          aria-label="Go back"
        >
          {label}
        </button>
      </div>
      <div className="page-nav-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <LanguageSwitcher direction="down" />
        <Link to="/portal" className="page-nav-link">{t('nav.portal', 'Client Portal')}</Link>
      </div>
    </nav>
  );
}
