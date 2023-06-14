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
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);







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
      const response = await fetch('/api/auth/mongodb/user', {
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
    console.log("Inside handleImageChange solo")
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

  const selectOption = (option) => {
    setDescription(option);
    toggleOpen();
  }

  const checkIndex = (index) => {
    console.log("Index: ", index);
    setBarValue(index + 1);
    // if (index == 5) {
    //   setBarValue(5);
    // } else {
    //   setBarValue(index);
    // }
  }


const Star = ({ index }) => {
  const isActive = index < barValue;
  return (
    <svg 
      onClick={() => checkIndex(index)} 
      className={`${styles.star} ${isActive ? styles.active : ''}`}  
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="2" 
        d="M12 15.89l-4.053 2.132.775-4.527-3.29-3.211 4.526-.657L12 4l2.042 4.137 4.527.657-3.29 3.211.776 4.527L12 15.89z" 
      />
    </svg>
  )
}

  

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className='flex'>
        <label>
          {!isUserLoggedIn ? <input type="text" className={styles.formInput} /> : <h1 className={styles.username}>{session.user.name}</h1> }
        </label>
        <label htmlFor="fileInput" className={styles.customFileUpload}>
          {fileName ? fileName : 'Profile Picture'}
        </label>
      </div>
      <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleImageChange} />
        <div className={styles.form__group}>
          <input 
            className={styles.form__field}
            type="text"
            name="twitter"
            value={twitter}
            onChange={handleChange}
            placeholder='Twitter'
          />
          <label htmlFor="Twitter" className={styles.form__label}>Twitter</label>
        </div>
        <div className={styles.dropdown} onClick={toggleOpen}>
            <div className={styles.dropdownheader}>{description || 'Select a position'}</div>
            {isOpen && (
                <div className={styles.dropdownbody}>
                    <div className={styles.object} onClick={() => selectOption('Artist')}>Artist</div>
                    <div className={styles.object} onClick={() => selectOption('Moderator')}>Moderator/Manager</div>
                    <div className={styles.object} onClick={() => selectOption('Developer')}>Developer</div>
                    {/* Add as many options as needed */}
                </div>
            )}
        </div>

      <div className={styles.starContainer}>
      {[0, 1, 2, 3, 4].map((index) => <Star key={index} index={index} />)}
      </div>

      <button type="submit" className={styles.formButton}>Submit</button>
    </form>
  );
}

export default DescriptionForm;