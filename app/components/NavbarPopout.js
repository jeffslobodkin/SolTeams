import React, { useState, useEffect } from 'react';
import styles from './NavbarPopout.module.css';
import Image from 'next/image';
import navLogo from '@/public/Navbartrans.png';
import twitterLogo from '@/public/twitter.png';
import discordLogo from '@/public/discord.png';
import DiscordLoginButton from './DiscordLoginButton';
import { useSession } from "next-auth/react";



const NavbarPopout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const { data: session } = useSession();

  return (
    <div className={styles.app}>
      <Image alt="" src={navLogo} onClick={togglePopup} className="w-10 fixed top-5 right-5 cursor-pointer"/>
      <div className={`${styles.popup} ${isOpen ? styles.open : ''}`}> {/* Use the open class when isOpen is true */}
        <button className={styles['close-button']} onClick={closePopup}>
          Close
        </button>
        <section className={styles.about}>
            <a onClick={() => scrollToSection('About')}>About</a>
        </section>
        <section className={styles.roadmap}>
          <a onClick={() => scrollToSection('Roadmap')}>Roadmap</a>
        </section>
        <section className={styles.roadmap}>
          <a onClick={() => scrollToSection('Sneekpeek')}>Sneekpeek</a>
        </section>
        <section className={styles.roadmap}>
        <a onClick={() => scrollToSection('Faq')}>Sneekpeek</a>
        </section>
        <section className={styles.roadmap}>
            <Image className={styles.logo} src={twitterLogo} alt="Twitter" />
            <Image className={styles.logo} src={discordLogo} alt="Discord" />
        </section>
        <section className={styles.login}>
          <div>{session && session.user ? session.user.name : <DiscordLoginButton />}</div>
        </section>
        <section className={styles.login}>
          <Link href="./marketplace">
          <button>Marketplace</button>
          </Link>
          </section>
      </div>

      

      <section className={styles.roadmap}>
      </section>
    </div>
  );
};

export default NavbarPopout;
