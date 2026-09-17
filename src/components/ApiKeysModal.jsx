import React, { useState } from 'react';
import { Copy, Trash2, Plus, Check } from 'lucide-react';
import Modal from './Modal';
import styles from './ApiKeysModal.module.css';

const initialKeys = [
  { id: 1, name: 'Production API Key', key: 'arv_live_********************a9f2', date: 'Oct 12, 2025', status: 'Active' },
  { id: 2, name: 'Development Key', key: 'arv_test_********************b3c4', date: 'Jan 05, 2026', status: 'Active' },
];

const ApiKeysModal = ({ isOpen, onClose, showToast }) => {
  const [keys, setKeys] = useState(initialKeys);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    setCopiedId(id);
    if (showToast) showToast('API Key copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleRevoke = (id) => {
    setKeys(keys.filter(k => k.id !== id));
    if (showToast) showToast('API Key revoked successfully', 'warning');
  };

  const handleCreate = () => {
    const newKey = {
      id: Date.now(),
      name: `New API Key ${keys.length + 1}`,
      key: `arv_live_********************${Math.floor(Math.random() * 10000).toString(16)}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Active'
    };
    setKeys([newKey, ...keys]);
    if (showToast) showToast('New API Key generated successfully');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="API Keys Management">
      <div className={styles.container}>
        <p className={styles.description}>
          Manage your API keys. Do not share your production keys with anyone.
        </p>

        <div className={styles.keysList}>
          {keys.length === 0 ? (
            <div className={styles.emptyState}>No API keys found.</div>
          ) : (
            keys.map(key => (
              <div key={key.id} className={styles.keyRow}>
                <div className={styles.keyInfo}>
                  <div className={styles.keyHeader}>
                    <h4>{key.name}</h4>
                    <span className={styles.statusBadge}>{key.status}</span>
                  </div>
                  <div className={styles.keyValueGroup}>
                    <code className={styles.keyValue}>{key.key}</code>
                    <button 
                      className={styles.iconBtn} 
                      onClick={() => handleCopy(key.id)}
                      title="Copy API Key"
                    >
                      {copiedId === key.id ? <Check size={16} className={styles.successColor} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <span className={styles.keyDate}>Created on {key.date}</span>
                </div>
                <button 
                  className={`${styles.iconBtn} ${styles.revokeBtn}`} 
                  onClick={() => handleRevoke(key.id)}
                  title="Revoke Key"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        <div className={styles.actions}>
          <button className={styles.createBtn} onClick={handleCreate}>
            <Plus size={18} />
            <span>Create New API Key</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ApiKeysModal;
