"use client"

import styles from './Form.module.css';
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react";
import axios from 'axios';
import uploadToS3 from '@/lib/aws/auth';

function DescriptionForm() {
  const [description, setDescription] = useState('');
  const [barValue, setBarValue] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [twitter, setTwitter] = useState(''); // Add this line
  const [image, setImage] = useState(''); // Add this line
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
        body: JSON.stringify({ username: session.user.name, description, barValue, twitter, image })
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

  const handleImageChange = async (e) => {
    console.log("Imagedasdasd: ", e.target.files[0]);
    setImage(e.target.files[0].name);
    console.log("Imagea: ", e.target.files[0].name);
    const file = e.target.files[0];
    try {
      const imageUrl = await uploadToS3(file);
      setImage(imageUrl);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <label>
        Username:
        {!isUserLoggedIn ? <input type="text" className={styles.formInput} /> : session.user.name }
      </label>
      <label>
        Profile Picture:
        <input type="file" onChange={handleImageChange} className={styles.formInput} />
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