import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';
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
      <div className="page-hero" style={{ background: 'linear-gradient(135deg, #242424 0%, #000000 100%)' }}>
        <div className="page-hero-content" style={{ textAlign: 'center', margin: '0 auto' }}>
          <span className="page-tag" style={{ background: '#0067b8' }}>Client Portal</span>
          <h1>System Login</h1>
          <p style={{ margin: '0 auto' }}>Secure access for Solian Wolves clients and partners.</p>
        </div>
      </div>
      <div className="page-body" style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px' }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '40px', border: '1px solid #e0e0e0', borderRadius: '4px', textAlign: 'left', boxShadow: '0 4px 24px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', textAlign: 'center' }}>Sign in</h2>
          <p style={{ color: '#616161', marginBottom: '24px', textAlign: 'center', fontSize: '0.9rem' }}>Access your Solian Wolves dashboard.</p>

          {error && (
            <div style={{ background: '#fde8e8', border: '1px solid #f5c2c2', borderRadius: '4px', padding: '12px 16px', marginBottom: '16px', color: '#d13438', fontSize: '0.9rem' }}>
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
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: '10px 14px', border: '1px solid #d1d1d1', borderRadius: '2px', fontSize: '1rem', outline: 'none' }}
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
                style={{ padding: '10px 14px', border: '1px solid #d1d1d1', borderRadius: '2px', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#forgot" style={{ fontSize: '0.85rem', color: '#0067b8', textDecoration: 'none' }}>Forgot password?</a>
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

          <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '0.85rem', color: '#616161' }}>
            Don't have an account? <Link to="/contact" style={{ color: '#0067b8', textDecoration: 'none', fontWeight: '600' }}>Request access</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
