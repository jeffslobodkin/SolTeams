"use client"

import styles from './TeamForm.module.scss';
import { useState, useEffect } from 'react'
import { useSession } from "next-auth/react";
import axios from 'axios';
import uploadToS3 from '@/lib/aws/auth';

function TeamForm() {
  const [description, setDescription] = useState('');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [twitter, setTwitter] = useState(''); // Add this line
  const [image, setImage] = useState(''); // Add this line
  const { data: session } = useSession();
  const [fileName, setFileName] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [projectDescription, setProjectDescription] = useState(''); 
  const [projectName, setProjectName] = useState('');
  // Add this line

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
      console.log("team: ", projectName);
      console.log("Project Description: ", projectDescription);
      console.log("Twitter: ", twitter);
      const response = await fetch('/api/auth/mongodb/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: session.user.name, description, twitter, projectDescription, projectName, image })
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

  const handleProjectDescriptionChange = (e) => {
    console.log("Project Description: ", e.target.value);
    setProjectDescription(e.target.value);
    console.log("Project Description: ", projectDescription);
  };

  const handleProjectNameChange = (e) => {
    console.log("Project Name: ", e.target.value);
    setProjectName(e.target.value);
    console.log("Project Name: ", projectName);
  };

  const handleImageChange = async (e) => {
    console.log("Inside handleImageChange team")
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


  

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <div className='flex'>
        <label>
          {!isUserLoggedIn ? <input type="text" className={styles.formInput} /> : <h1 className={styles.username}>{session.user.name}</h1> }
        </label>
        <label htmlFor="fileInput" className={styles.customFileUpload}>
          {fileName ? fileName : 'Team Logo'}
        </label>
      </div>
      <input id="fileInput" type="file" style={{ display: "none" }} onChange={handleImageChange} />
      <div className={styles.form__group}>
          <input 
            className={styles.form__field}
            type="text"
            name="projectName"
            value={projectName}
            onChange={handleProjectNameChange}
            placeholder='Project Name'
          />
          <label htmlFor="Project Name" className={styles.form__label}>Project Name</label>
        </div>
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
        <div className={styles.form__group}>
          <input 
            className={styles.form__field}
            type="text"
            name="projectDescription"
            value={projectDescription}
            onChange={handleProjectDescriptionChange}
            placeholder='Description'
          />
          <label htmlFor="Description" className={styles.form__label}>Description</label>
        </div>
        <div className={styles.dropdown} onClick={toggleOpen}>
            <div className={styles.dropdownheader}>{description || 'Select a need'}</div>
            {isOpen && (
                <div className={styles.dropdownbody}>
                    <div className={styles.object} onClick={() => selectOption('Artist')}>Artist</div>
                    <div className={styles.object} onClick={() => selectOption('Moderator/Manager')}>Moderator/Manager</div>
                    <div className={styles.object} onClick={() => selectOption('Developer')}>Developer</div>
                    {/* Add as many options as needed */}
                </div>
            )}
        </div>
      {/* Experience */}
      {/* <div className={styles.starContainer}>
      {[0, 1, 2, 3, 4].map((index) => <Star key={index} index={index} />)}
      </div> */}

      <button type="submit" className={styles.formButton}>Submit</button>
    </form>
  );
}

export default TeamForm;