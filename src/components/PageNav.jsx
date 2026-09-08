import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Shared page navigation bar with a smart back button.
 * Goes back in browser history if available, otherwise goes home.
 */
export default function PageNav({ label = '← Solian Wolves' }) {
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
    <nav className="page-nav">
      <button
        onClick={handleBack}
        className="page-nav-logo"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
      >
        {label}
      </button>
    </nav>
  );
}
