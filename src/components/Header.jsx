import React from 'react';
import { Menu, Bell, Moon, Sun, Search } from 'lucide-react';
import styles from './Header.module.css';

const Header = ({ toggleTheme, currentTheme, toggleMobileMenu }) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuBtn} onClick={toggleMobileMenu} aria-label="Toggle Menu">
          <Menu size={24} />
        </button>
        
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Search..." className={styles.searchInput} />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn} onClick={toggleTheme} aria-label="Toggle Theme">
          {currentTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className={styles.iconBtn} aria-label="Notifications">
          <Bell size={20} />
          <span className={styles.badge}></span>
        </button>

        <div className={styles.profile}>
          <img src="https://ui-avatars.com/api/?name=Admin&background=4F46E5&color=fff" alt="Admin" className={styles.avatar} />
          <div className={styles.profileInfo}>
            <span className={styles.name}>Admin</span>
            <span className={styles.role}>Superadmin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
