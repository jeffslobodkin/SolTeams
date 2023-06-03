import React, { useEffect, useState } from 'react';
import styles from './AboutTwo.module.css';
import Image from 'next/image';
import solLogo from '@/public/solanaLogo.png';
import TextAboutSection from './TextAboutTwoSection';
import ImageAboutSection from './ImageAboutTwoSection';

const About = () => {

  return (
    <section id="About" className={styles.about}>
      <div id="aboutSection" className={styles.container}>
        <ImageAboutSection />
        <TextAboutSection />
      </div>
    </section>
  );
};

export default About;
