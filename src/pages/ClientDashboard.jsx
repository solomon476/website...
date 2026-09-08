import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import '../pages.css';

export default function ClientDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/portal');
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  async function handleSignOut() {
    await signOut(auth);
    navigate('/portal');
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
        <p style={{ color: '#616161' }}>Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <nav className="page-nav" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 32px' }}>
        <PageNav />
        <button
          onClick={handleSignOut}
          style={{ background: 'none', border: '1px solid #d1d1d1', borderRadius: '2px', padding: '8px 16px', cursor: 'pointer', fontSize: '0.9rem', color: '#444' }}
        >
          Sign Out
        </button>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>
        {/* Welcome Header */}
        <div style={{ background: 'linear-gradient(135deg, #001427, #0067b8)', borderRadius: '8px', padding: '40px', color: '#fff', marginBottom: '32px' }}>
          <h1 style={{ margin: '0 0 8px', fontSize: '2rem' }}>Welcome back 👋</h1>
          <p style={{ margin: 0, opacity: 0.85 }}>{user?.email}</p>
        </div>

        {/* Status Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px' }}>
            <p style={{ color: '#616161', fontSize: '0.85rem', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Active Projects</p>
            <h2 style={{ margin: 0, fontSize: '2rem', color: '#0067b8' }}>—</h2>
            <p style={{ color: '#9e9e9e', fontSize: '0.8rem', margin: '8px 0 0' }}>No active projects yet</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px' }}>
            <p style={{ color: '#616161', fontSize: '0.85rem', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Open Tickets</p>
            <h2 style={{ margin: 0, fontSize: '2rem', color: '#0067b8' }}>0</h2>
            <p style={{ color: '#9e9e9e', fontSize: '0.8rem', margin: '8px 0 0' }}>All clear</p>
          </div>
          <div style={{ background: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '24px' }}>
            <p style={{ color: '#616161', fontSize: '0.85rem', margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Account Status</p>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#107c10' }}>✓ Active</h2>
            <p style={{ color: '#9e9e9e', fontSize: '0.8rem', margin: '8px 0 0' }}>Portal access granted</p>
          </div>
        </div>

        {/* Getting Started */}
        <div style={{ background: '#f9f9f9', border: '1px solid #e0e0e0', borderRadius: '8px', padding: '32px' }}>
          <h3 style={{ margin: '0 0 16px' }}>Get Started</h3>
          <p style={{ color: '#616161', marginBottom: '24px' }}>
            Your client dashboard is being configured by the Solian Wolves team. In the meantime, reach out to us directly for project updates.
          </p>
          <Link to="/contact" className="ms-btn ms-btn-primary">Contact Your Account Manager</Link>
        </div>
      </div>
    </div>
  );
}
