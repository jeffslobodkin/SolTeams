"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.css';
import twitterLogo from '@/public/twitter.png';
import discordLogo from '@/public/discord.png';
import DiscordLoginButton from './DiscordLoginButton';
import DiscordLogoutButton from './DiscordLogoutButton';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

const Navbar = ({ searchValue, setSearchValue }) => {
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const handleSearchChange = (e) => setSearchValue(e.target.value);

  // const router = useRouter();

  // const handleLogin = () => {
  //   router.push('./marketplace');
  // };

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

  useEffect(() => {
    if (!session) {
      setIsUserLoggedIn(false);
    } else {
      setIsUserLoggedIn(true);
    }
  }, [session]);



  return (
    <nav className={`${styles.navbar} ${navbarScrolled ? styles.navbarScrolled : ''}`}>
      <ul className={styles.navbarMenu}>
        <li className={styles.navbarItem}>
          <input 
            type="text" 
            className={styles.searchBar}
            value={searchValue} 
            onChange={handleSearchChange} 
            placeholder="Search by description..." 
          />
        </li>
        <li className={styles.navbarItem}>
          <Link href="/home/profile">
          <button>Create Profile</button>
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Image className={styles.logo} src={twitterLogo} alt="Twitter" />
          <Image className={styles.logo} src={discordLogo} alt="Discord" />
        </li>
        <li className={styles.navbarItem}>
          <div className={styles.username}>{isUserLoggedIn ? session.user.name : <DiscordLoginButton />}</div>
        </li>
        {isUserLoggedIn ? (
          <li className={styles.navbarItem}>
            <div className={styles.username}>
              <DiscordLogoutButton />
            </div>
          </li>
          ) : null}
        {/* <li className={styles.navbarItem}>
          <Link href="./marketplace">
          <button>Marketplace</button>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
