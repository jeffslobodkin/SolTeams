"use client"

import styles from './Form.module.scss';
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
  const [fileName, setFileName] = useState('');







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
    setFileName(e.target.files[0].name);
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
        {!isUserLoggedIn ? <input type="text" className={styles.formInput} /> : <h1 className={styles.username}>{session.user.name}</h1> }
      </label>
      <label htmlFor="fileInput" className={styles.customFileUpload}>
        {fileName ? fileName : 'Upload Image'}
      </label>
      <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleImageChange} />
        <div className={styles.form__group}>
          <input 
            className={styles.form__field}
            type="text"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />
          <label htmlFor="Twitter" placeholder='Twitter' className={styles.form__label}>Twitter</label>
        </div>
        <label className={styles.formLabel}>
          <select value={description} onChange={e => setDescription(e.target.value)} className={styles.formInput}>
            <option value="">Select a position</option>
            <option value="Artist">Artist</option>
            <option value="Moderator/Manager">Moderator/Manager</option>
            <option value="Developer">Developer</option>
            {/* Add as many options as needed */}
          </select>
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