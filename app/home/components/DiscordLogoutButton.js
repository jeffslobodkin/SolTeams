import styles from './DiscordLogoutButton.module.css';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { signIn, signOut } from "next-auth/react";

const DiscordLoginButton = () => {
  const handleLogin = () => {
    router.push('/signin');
  };

  return (
    <>
    <div className={styles.container}>
      <button  onClick={() => signOut()} >Logout</button>
    </div>
    </>
  );
};

export default DiscordLoginButton;
