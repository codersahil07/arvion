import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import styles from './ChartCard.module.css';

const data = [
  { name: 'Mon', users: 400, sessions: 240 },
  { name: 'Tue', users: 300, sessions: 139 },
  { name: 'Wed', users: 200, sessions: 980 },
  { name: 'Thu', users: 278, sessions: 390 },
  { name: 'Fri', users: 189, sessions: 480 },
  { name: 'Sat', users: 239, sessions: 380 },
  { name: 'Sun', users: 349, sessions: 430 },
];

const ChartCard = () => {
  return (
    <div className={styles.chartCard}>
      <div className={styles.header}>
        <div>
          <h3>Weekly Activity</h3>
          <p>User logins and active sessions</p>
        </div>
        <select className={styles.filter}>
          <option>This Week</option>
          <option>Last Week</option>
          <option>This Month</option>
        </select>
      </div>
      
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-color)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--text-secondary)', fontSize: 12}} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)', borderRadius: '8px', color: 'var(--text-primary)' }}
              itemStyle={{ color: 'var(--text-primary)' }}
            />
            <Area type="monotone" dataKey="users" stroke="#4F46E5" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
            <Area type="monotone" dataKey="sessions" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#colorSessions)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartCard;
