import React from 'react';
import ChartCard from '../components/ChartCard';

const Analytics = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '8px' }}>Analytics</h1>
        <p style={{ color: 'var(--text-secondary)' }}>Detailed metrics and insights.</p>
      </div>
      <div style={{ height: '500px' }}>
        <ChartCard />
      </div>
    </div>
  );
};

export default Analytics;
