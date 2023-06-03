import React, { useEffect, useState } from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import solLogo from '../public/solanaLogo.png';
import TextAboutSection from './TextAboutSection';
import ImageAboutSection from './ImageAboutSection';

const About = () => {

  return (
    <section id="About" className={styles.about}>
      <div id="aboutSection" className={styles.container}>
        <TextAboutSection />
        <ImageAboutSection />
      </div>
      <div className={styles.imageContainer}>
        <Image alt="" className={styles.Image} src={solLogo} />
      </div>
    </section>
  );
};

export default About;
