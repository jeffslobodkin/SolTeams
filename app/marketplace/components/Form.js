"use client"

import styles from './Form.module.css';
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react";
import axios from 'axios';

function DescriptionForm() {
  const [description, setDescription] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) {
      setIsUserLoggedIn(false);
    } else {
      setIsUserLoggedIn(true);
    }
  }, [session]);

  const handleSubmit = async event => {
  event.preventDefault();
  try {
    console.log("Username: ", session.user.name);
    console.log("Description: ", description);
    const response = await fetch('/api/auth/mongodb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: session.user.name, description })
    });

    const newDescription = await response.json();
  } catch (error) {
    console.error(error);
  }
};


  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label>
        Username:
        {!isUserLoggedIn ? <input type="text" className={styles.formInput} /> : session.user.name }
      </label>
      <label>
        Description:
        <textarea className={styles.formInput} type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button type="submit" className={styles.formButton}>Submit</button>
    </form>
  );
}

export default DescriptionForm;
