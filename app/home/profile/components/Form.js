"use client"

import styles from './Form.module.css';
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react";
import axios from 'axios';

function DescriptionForm() {
  const [description, setDescription] = useState('');
  const [barValue, setBarValue] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [twitter, setTwitter] = useState(''); // Add this line
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
      console.log("Bar Value: ", barValue);
      console.log("Twitter: ", twitter);
      const response = await fetch('/api/auth/mongodb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: session.user.name, description, barValue, twitter })
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    console.log("Twitter: ", e.target.value);
    setTwitter(e.target.value);
    console.log("Twitter: ", twitter);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label>
        Username:
        {!isUserLoggedIn ? <input type="text" className={styles.formInput} /> : session.user.name }
      </label>
      <div>
          <label>Twitter</label>
          <input
            type="text"
            name="twitter"
            value={twitter}
            onChange={handleChange}
            className={styles.formInput}
          />
        </div>
      <label>
        Description:
        <textarea className={styles.formInput} type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      Experience:
      <div className={styles.barContainer}>
        {[1, 2, 3, 4, 5].map((section) => (
          <div
            key={section}
            className={`${styles.barSection} ${barValue >= section ? styles.active : ''}`}
            onClick={() => setBarValue(section)}
          />
        ))}
      </div>

      <button type="submit" className={styles.formButton}>Submit</button>
    </form>
  );
}

export default DescriptionForm;