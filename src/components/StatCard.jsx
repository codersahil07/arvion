import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import styles from './StatCard.module.css';

const StatCard = ({ label, value, change, icon: Icon, trend }) => {
  const isPositive = trend === 'up';

  return (
    <div className={styles.statCard}>
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <div className={styles.iconWrapper}>
          <Icon size={20} className={styles.icon} />
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.value}>{value}</h3>
        <div className={`${styles.change} ${isPositive ? styles.positive : styles.negative}`}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>{change}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
