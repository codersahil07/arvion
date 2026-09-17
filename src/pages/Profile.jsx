import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '24px', backgroundColor: 'var(--card-bg)', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
      <h1 style={{ marginBottom: '16px', color: 'var(--text-primary)' }}>Profile</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '32px' }}>
        <img src="https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=fff&size=100" alt="Admin" style={{ borderRadius: '50%', border: '4px solid var(--bg-secondary)' }} />
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Admin User</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '8px' }}>admin@arvion.com</p>
          <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.875rem', fontWeight: '500' }}>Active Account</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Member since: January 2026</p>
        <button style={{ marginTop: '16px', backgroundColor: 'var(--brand-primary)', color: 'white', padding: '10px 20px', borderRadius: '8px', fontWeight: '500' }}>Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
