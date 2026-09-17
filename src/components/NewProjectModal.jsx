import React, { useState } from 'react';
import Modal from './Modal';
import styles from './NewProjectModal.module.css';

const NewProjectModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'web',
    deadline: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Project name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.deadline) newErrors.deadline = 'Deadline is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Create new project object (in a real app, this would be an API call)
      const newProject = {
        id: Date.now(),
        name: formData.name,
        status: 'Planning',
        progress: 0,
        category: formData.category
      };
      
      onSuccess(newProject);
      
      // Reset form
      setFormData({ name: '', description: '', category: 'web', deadline: '' });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Project">
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="e.g. Arvion Dashboard"
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea} ${errors.description ? styles.inputError : ''}`}
            placeholder="Briefly describe the project..."
            rows="3"
          />
          {errors.description && <span className={styles.errorText}>{errors.description}</span>}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={styles.input}
            >
              <option value="web">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="design">UI/UX Design</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="deadline">Deadline</label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className={`${styles.input} ${errors.deadline ? styles.inputError : ''}`}
            />
            {errors.deadline && <span className={styles.errorText}>{errors.deadline}</span>}
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={onClose} className={styles.cancelBtn}>
            Cancel
          </button>
          <button type="submit" className={styles.submitBtn}>
            Create Project
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default NewProjectModal;
