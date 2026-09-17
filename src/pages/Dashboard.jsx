import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Activity, FolderOpen, Bell, Plus, ArrowUpRight, Shield, Key } from 'lucide-react';
import StatCard from '../components/StatCard';
import ChartCard from '../components/ChartCard';
import ActivityList from '../components/ActivityList';
import ProjectOverview from '../components/ProjectOverview';
import NewProjectModal from '../components/NewProjectModal';
import ApiKeysModal from '../components/ApiKeysModal';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [isApiKeysModalOpen, setIsApiKeysModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleNewProjectSuccess = (project) => {
    showToast('Project created successfully!');
    // In a real app, we would add this to the global state
  };

  const stats = [
    { label: 'Total Users', value: '1,248', change: '+12.5%', icon: Users, trend: 'up' },
    { label: 'Active Sessions', value: '342', change: '+5.2%', icon: Activity, trend: 'up' },
    { label: 'Projects', value: '84', change: '-2.1%', icon: FolderOpen, trend: 'down' },
    { label: 'Notifications', value: '12', change: '+24%', icon: Bell, trend: 'up' },
  ];

  const quickActions = [
    { 
      label: 'New Project', 
      description: 'Create a new project and start building something amazing.',
      actionLabel: 'Create Project →',
      icon: Plus, 
      color: 'primary', 
      action: () => setIsNewProjectModalOpen(true) 
    },
    { 
      label: 'View Profile', 
      description: 'Manage your profile, account information and preferences.',
      actionLabel: 'View Profile →',
      icon: ArrowUpRight, 
      color: 'secondary', 
      action: () => navigate('/profile') 
    },
    { 
      label: 'Security', 
      description: 'Keep your account protected with advanced security settings.',
      actionLabel: 'Manage Security →',
      icon: Shield, 
      color: 'warning', 
      action: () => navigate('/settings') 
    },
    { 
      label: 'API Keys', 
      description: 'Manage your API keys and integrate Arvion with your services.',
      actionLabel: 'Manage Keys →',
      icon: Key, 
      color: 'success', 
      action: () => setIsApiKeysModalOpen(true) 
    },
  ];

  return (
    <div className={styles.dashboard}>
      {toastMessage && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}

      <div className={styles.mainGrid}>
        <div className={styles.leftColumn}>
          <div className={styles.welcomeSection}>
            <div className={styles.welcomeText}>
              <h1>Welcome back, Admin</h1>
              <p>Here’s what’s happening with your account today.</p>
            </div>
            <div className={styles.welcomeImage}>
              <div className={styles.decorCircle1}></div>
              <div className={styles.decorCircle2}></div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <ChartCard />
        </div>

        <div className={styles.rightColumn}>
          <ActivityList />
          <ProjectOverview />
        </div>
      </div>

      <div className={styles.quickActionsCard}>
        <div className={styles.cardHeader}>
          <div className={styles.headerText}>
            <h3>Quick Actions</h3>
            <p className={styles.subtitle}>Get things done faster with these important shortcuts.</p>
          </div>
          <button className={styles.viewAllBtn}>View All →</button>
        </div>
        <div className={styles.actionsGrid}>
          {quickActions.map((action, index) => (
            <button 
              key={index} 
              className={`${styles.actionBtn} ${styles[action.color]}`}
              onClick={action.action}
            >
              <div className={styles.actionIconWrapper}>
                <action.icon size={24} className={styles.actionIcon} />
              </div>
              <div className={styles.actionContent}>
                <h4>{action.label}</h4>
                <p>{action.description}</p>
              </div>
              <span className={styles.actionBottomLabel}>{action.actionLabel}</span>
              <div className={styles.actionDecor}></div>
            </button>
          ))}
        </div>
      </div>

      <NewProjectModal 
        isOpen={isNewProjectModalOpen} 
        onClose={() => setIsNewProjectModalOpen(false)} 
        onSuccess={handleNewProjectSuccess} 
      />
      
      <ApiKeysModal 
        isOpen={isApiKeysModalOpen} 
        onClose={() => setIsApiKeysModalOpen(false)}
        showToast={showToast}
      />
    </div>
  );
};

export default Dashboard;
