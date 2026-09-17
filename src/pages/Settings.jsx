import React from 'react';
import { User, Mail, Shield, Bell, Moon, Lock } from 'lucide-react';
import styles from './Settings.module.css';

const Settings = ({ toggleTheme, currentTheme }) => {
  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <h1>Settings</h1>
        <p>Manage your account preferences and settings.</p>
      </div>

      <div className={styles.settingsContainer}>
        {/* Account Settings */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <User className={styles.sectionIcon} />
            <h2>Account Settings</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.formGroup}>
              <label>Username</label>
              <input type="text" defaultValue="Admin" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>Email Address</label>
              <input type="email" defaultValue="admin@arvion.com" className={styles.input} />
            </div>
            <button className={styles.saveBtn}>Save Changes</button>
          </div>
        </div>

        {/* Security */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Shield className={styles.sectionIcon} />
            <h2>Security</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <h4>Change Password</h4>
                <p>Update your password to keep your account secure.</p>
              </div>
              <button className={styles.actionBtn}>Update</button>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <h4>Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Bell className={styles.sectionIcon} />
            <h2>Preferences</h2>
          </div>
          <div className={styles.card}>
            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <h4>Dark Mode</h4>
                <p>Switch between light and dark themes.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" checked={currentTheme === 'dark'} onChange={toggleTheme} />
                <span className={styles.slider}></span>
              </label>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.settingRow}>
              <div className={styles.settingInfo}>
                <h4>Email Notifications</h4>
                <p>Receive daily summaries and important alerts.</p>
              </div>
              <label className={styles.switch}>
                <input type="checkbox" defaultChecked />
                <span className={styles.slider}></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
