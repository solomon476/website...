import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Shared page navigation bar with a smart back button.
 * Goes back in browser history if available, otherwise goes home.
 * Pass dark={true} for pages with a dark/black background.
 */
export default function PageNav({ label = '← Solian Wolves', dark = false }) {
  const navigate = useNavigate();

  function handleBack() {
    // If there's browser history, go back; otherwise go home
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  return (
    <nav
      className="page-nav"
      style={dark ? {
        background: '#000',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      } : {}}
    >
      <button
        onClick={handleBack}
        className="page-nav-logo"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          color: dark ? '#ffffff' : undefined,
          fontSize: '0.95rem',
          fontWeight: 600,
          letterSpacing: '0.01em',
        }}
      >
        {label}
      </button>
    </nav>
  );
}
