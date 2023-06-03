import React from 'react';
import styles from './TextAboutTwoSection.module.css';

const TextSection = () => {
  return (
    <div className={styles.textSection}>
      <h2 className={styles.header}>Role Seekers</h2>
      <p className={styles.info}>
        Looking to join a new team? Create an account, gather some feedback & apply for openings.
      </p>
      <ul className={styles.list}>
        <li className={styles.listItem}>Create a shareable profile</li>
        <li className={styles.listItem}>Gather positive feedback</li>
        <li className={styles.listItem}>Join successful teams</li>
      </ul>
    </div>
  );
};

export default TextSection;
