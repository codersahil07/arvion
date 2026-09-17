import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserCircle, FolderPlus, ShieldCheck, KeyRound } from 'lucide-react';
import styles from './ActivityList.module.css';

const ActivityList = () => {
  const activities = [
    { id: 1, title: 'Admin logged in', description: 'Successful login from IP 192.168.1.1', time: '10 mins ago', icon: LogIn, color: 'primary' },
    { id: 2, title: 'Profile updated', description: 'Admin updated profile picture', time: '1 hour ago', icon: UserCircle, color: 'secondary' },
    { id: 3, title: 'New project created', description: 'Project "Arvion Alpha" initialized', time: '3 hours ago', icon: FolderPlus, color: 'success' },
    { id: 4, title: 'Security settings changed', description: '2FA requirement enabled', time: '1 day ago', icon: ShieldCheck, color: 'warning' },
    { id: 5, title: 'Password updated', description: 'Password changed successfully', time: '2 days ago', icon: KeyRound, color: 'primary' },
  ];

  const navigate = useNavigate();

  return (
    <div className={styles.activityCard}>
      <div className={styles.header}>
        <h3>Recent Activity</h3>
        <button className={styles.viewAllBtn} onClick={() => navigate('/notifications')}>View All</button>
      </div>
      
      <div className={styles.list}>
        {activities.map((activity) => (
          <div key={activity.id} className={styles.activityItem}>
            <div className={`${styles.iconWrapper} ${styles[activity.color]}`}>
              <activity.icon size={18} className={styles.icon} />
            </div>
            <div className={styles.details}>
              <h4 className={styles.title}>{activity.title}</h4>
              <p className={styles.description}>{activity.description}</p>
            </div>
            <span className={styles.time}>{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
