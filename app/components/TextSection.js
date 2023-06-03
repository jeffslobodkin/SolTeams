import React from 'react';
import styles from './TextSection.module.css';
import TypewriterLoop from './TypewriterLoop.js';

const TextSection = () => {
  return (
    <div className={styles.textSection}>
      <h2>Hire</h2>
      <TypewriterLoop/>
      <p>Build a trusted NFT team, pronto</p>
      <br></br>
      <button>JOIN DISCORD</button>
    </div>
  );
};

export default TextSection;
