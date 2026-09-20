import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher({ direction = 'up' }) {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', name: 'English (Global)' },
    { code: 'fr', name: 'Français' },
    { code: 'sw', name: 'Kiswahili' },
    { code: 'ar', name: 'العربية' },
    { code: 'zh', name: '中文' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Set RTL direction if Arabic
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const dropdownPosition = direction === 'up' 
    ? { bottom: '100%', left: '0', marginBottom: '8px' } 
    : { top: '100%', right: '0', marginTop: '8px' };

  return (
    <div className="language-switcher-container" ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--ms-mid-gray)',
          fontSize: '0.85rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 10px',
          borderRadius: 'var(--radius-sm)',
          transition: 'color 0.2s, background 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--ms-text-main)'; e.currentTarget.style.background = 'var(--ms-glass-bg)'; }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--ms-mid-gray)'; e.currentTarget.style.background = 'none'; }}
      >
        <span style={{ fontSize: '1rem' }}>&#127758;</span> 
        <span style={{ fontWeight: 500 }}>{languages.find(l => l.code === i18n.resolvedLanguage)?.name || 'English (Global)'}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? (direction === 'up' ? 'rotate(180deg)' : 'rotate(-180deg)') : 'none', transition: 'transform 0.2s', marginLeft: '4px' }}>
          {direction === 'up' ? <polyline points="6 15 12 9 18 15"></polyline> : <polyline points="6 9 12 15 18 9"></polyline>}
        </svg>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          ...dropdownPosition,
          background: 'var(--ms-card-bg)',
          border: '1px solid var(--ms-border)',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)',
          minWidth: '200px',
          zIndex: 1000,
          overflow: 'hidden',
          backdropFilter: 'var(--ms-glass-blur)',
          WebkitBackdropFilter: 'var(--ms-glass-blur)',
        }}>
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              style={{
                display: 'flex',
                width: '100%',
                padding: '12px 16px',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                borderBottom: index < languages.length - 1 ? '1px solid var(--ms-border)' : 'none',
                color: i18n.resolvedLanguage === lang.code ? 'var(--ms-blue)' : 'var(--ms-text-main)',
                fontSize: '0.85rem',
                fontWeight: i18n.resolvedLanguage === lang.code ? '600' : '400',
                cursor: 'pointer',
                transition: 'background 0.2s',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--ms-bg-alt)'}
              onMouseLeave={e => e.currentTarget.style.background = 'none'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {lang.name}
              </div>
              {i18n.resolvedLanguage === lang.code && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
