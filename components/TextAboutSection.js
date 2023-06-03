import React from 'react';
import styles from './TextAboutSection.module.css';

const TextSection = () => {
  return (
    <div className={styles.textSection}>
      <h2 className={styles.header}>Projects</h2>
      <p className={styles.info}>
        Need to find team members fast? Create a role opening or search for highly rated role seekers.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Create a role opening</li>
        <li className={styles.listItem}>Search for role seekers</li>
        <li className={styles.listItem}>Rate your team members</li>
      </ul>
    </div>
  );
};

export default TextSection;
