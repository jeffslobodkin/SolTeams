import React from 'react';
import styles from './Intro.module.css';
import TextSection from './TextSection';
import ImageSection from './ImageSection';

const Introduction = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.container}>
        <TextSection />
        <ImageSection />
      </div>
    </section>
  );
};

export default Introduction;
