import React from 'react';
import { Bell, ShieldAlert, CheckCircle2 } from 'lucide-react';

const Notifications = () => {
  const notifs = [
    { id: 1, title: 'New Login Detected', desc: 'A new login from Chrome on Windows.', time: '10m ago', icon: ShieldAlert, color: 'var(--warning)', read: false },
    { id: 2, title: 'Weekly Report Ready', desc: 'Your analytics report for this week is ready to view.', time: '2h ago', icon: CheckCircle2, color: 'var(--success)', read: true },
    { id: 3, title: 'System Update', desc: 'Arvion v2.0 will be deployed tonight at 2 AM EST.', time: '1d ago', icon: Bell, color: 'var(--brand-primary)', read: true },
  ];

  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>Notifications</h1>
          <p style={{ color: 'var(--text-secondary)' }}>Stay updated with system alerts and activities.</p>
        </div>
        <button style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>Mark all as read</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {notifs.map(n => (
          <div key={n.id} style={{ 
            display: 'flex', gap: '16px', padding: '20px', 
            backgroundColor: n.read ? 'var(--bg-secondary)' : 'var(--card-bg)', 
            borderRadius: '12px', border: '1px solid var(--border-color)',
            boxShadow: n.read ? 'none' : 'var(--shadow-sm)'
          }}>
            <div style={{ color: n.color, marginTop: '4px' }}>
              <n.icon size={24} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>{n.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{n.desc}</p>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block', marginTop: '8px' }}>{n.time}</span>
            </div>
            {!n.read && <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--brand-primary)', borderRadius: '50%', marginTop: '8px' }}></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
