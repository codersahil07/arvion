import React from 'react';
import { ArrowRight, Layout, ShoppingCart, CheckSquare, Briefcase } from 'lucide-react';
import styles from './ProjectOverview.module.css';

const ProjectOverview = ({ projects }) => {
  // Default data if no projects passed
  const displayProjects = projects || [
    { id: 1, name: 'Arvion Alpha', status: 'In Progress', progress: 68, icon: Layout, color: 'blue' },
    { id: 2, name: 'E-Commerce Platform', status: 'Completed', progress: 100, icon: ShoppingCart, color: 'green' },
    { id: 3, name: 'Task Management', status: 'In Progress', progress: 42, icon: CheckSquare, color: 'purple' },
    { id: 4, name: 'Portfolio Website', status: 'Planning', progress: 12, icon: Briefcase, color: 'orange' },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>Project Overview</h3>
        <button className={styles.viewAll}>View All</button>
      </div>
      
      <div className={styles.projectList}>
        {displayProjects.map((project, idx) => {
          const Icon = project.icon || Layout;
          return (
            <div key={project.id || idx} className={styles.projectItem}>
              <div className={`${styles.iconWrapper} ${styles[project.color || 'blue']}`}>
                <Icon size={20} />
              </div>
              
              <div className={styles.projectDetails}>
                <div className={styles.projectHeader}>
                  <h4>{project.name}</h4>
                  <span className={styles.percentage}>{project.progress}%</span>
                </div>
                
                <span className={styles.status}>{project.status}</span>
                
                <div className={styles.progressTrack}>
                  <div 
                    className={`${styles.progressBar} ${styles[`bg-${project.color || 'blue'}`]}`} 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className={styles.actionIcon}>
                <ArrowRight size={18} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default ProjectOverview;
