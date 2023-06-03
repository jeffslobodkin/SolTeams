import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import logo1 from '../public/discord.png';
import logo2 from '../public/twitter.png';

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>Join us on this journey and become a part of the ______ community.</p>
        <div className={styles.logoContainer}>
          <Image src={logo1} alt="Logo 1" className={styles.logo} />
          <Image src={logo2} alt="Logo 2" className={styles.logo} />
        </div>
        <hr className={styles.line} />
        <div className={styles.footerBottom}>
          <p className={styles.copyRight}>&copy; 2023 Wtv nft name is. All rights reserved.</p>
          <button className={styles.scrollToTop} onClick={handleScrollToTop}>
          &#9660;
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
