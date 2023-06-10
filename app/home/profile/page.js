"use client"
import React, { useState } from 'react';
import DescriptionForm from "./components/Form.js";
import TeamForm from "./components/TeamForm.js";
import styles from './page.module.scss';
import Navbar from "./components/Navbar.js";

export default function Profile( { setIsProfile } ) {
    const [activeForm, setActiveForm] = useState(true);

    const handleClick = (value) => {
        setActiveForm(null); // Temporarily set to null to fully hide both forms
        setTimeout(() => setActiveForm(value), 120); // Delay the display change by the transition duration
    }

    const handleBackgroundClick = () => {
        setIsProfile(false);
    }

    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={styles.profileOverlay} onClick={handleBackgroundClick}>
            <div onClick={stopPropagation} className={styles.profileContent}>
                <div className={styles.formToggle}>
                    <button
                        className={`${styles.toggleButton} ${activeForm && styles.active}`}
                        onClick={() => handleClick(true)}
                    >
                        Solo
                    </button>
                    <button
                        className={`${styles.toggleButton} ${!activeForm && styles.active}`}
                        onClick={() => handleClick(false)}
                    >
                        Team
                    </button>
                </div>
                <div className={styles.forms}>
                    { activeForm === true && <div className={`${styles.form} ${styles.activeForm}`}>
                        <DescriptionForm />
                    </div>}
                    { activeForm === false && <div className={`${styles.form} ${styles.activeForm}`}>
                        <TeamForm />
                    </div>}
                </div>
            </div>
        </div>
    )
}
