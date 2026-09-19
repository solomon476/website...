import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
import PageNav from '../components/PageNav.jsx';
import '../pages.css';

export default function Portal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      const messages = {
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password. Please try again.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
        'auth/invalid-credential': 'Invalid email or password.',
      };
      setError(messages[err.code] || 'Sign in failed. Please try again.');
      setIsLoading(false);
    }
  }

  return (
    <div className="page-wrapper">
      <nav className="page-nav">
        <PageNav />
      </nav>
      <div className="page-hero" style={{ background: 'var(--ms-bg-alt)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: 'var(--ms-blue)', color: '#ffffff' }}>Client Portal</span>
          <h1>System Login</h1>
          <p style={{ margin: '0 auto', color: 'var(--ms-mid-gray)' }}>Secure access for Solian Wolves clients and partners.</p>
        </div>
      </div>
      <div className="page-body" style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px' }}>
        <div className="ms-card" style={{ maxWidth: '400px', width: '100%', padding: '40px', background: 'var(--ms-card-bg)', border: '1px solid var(--ms-border)', borderRadius: 'var(--radius-lg)', textAlign: 'left', boxShadow: '0 4px 24px rgba(0,0,0,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', textAlign: 'center' }}>Sign in</h2>
          <p style={{ color: 'var(--ms-mid-gray)', marginBottom: '24px', textAlign: 'center', fontSize: '0.9rem' }}>Access your Solian Wolves dashboard.</p>

          {error && (
            <div style={{ background: 'rgba(209, 52, 56, 0.1)', border: '1px solid rgba(209, 52, 56, 0.3)', borderRadius: '4px', padding: '12px 16px', marginBottom: '16px', color: '#ff6b6b', fontSize: '0.9rem' }}>
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="portal-email" style={{ fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
              <input
                id="portal-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px 14px', background: 'transparent', color: 'var(--ms-text-main)', border: '1px solid var(--ms-border)', borderRadius: '4px', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label htmlFor="portal-password" style={{ fontSize: '0.9rem', fontWeight: '600' }}>Password</label>
              <input
                id="portal-password"
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px 14px', background: 'transparent', color: 'var(--ms-text-main)', border: '1px solid var(--ms-border)', borderRadius: '4px', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', color: 'var(--ms-mid-gray)' }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" style={{ fontSize: '0.85rem', color: 'var(--ms-blue)', textDecoration: 'none' }}>Forgot password?</a>
            </div>

            <button
              type="submit"
              className="ms-btn ms-btn-primary"
              style={{ marginTop: '16px', width: '100%' }}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.85rem', color: 'var(--ms-mid-gray)' }}>
            Don't have an account? <Link to="/contact" style={{ color: 'var(--ms-blue)', textDecoration: 'none', fontWeight: '600' }}>Request access</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
