"use client"
import React, { useState } from 'react';
import DescriptionForm from "./components/Form.js";
import TeamForm from "./components/TeamForm.js";
import TeamApplications from "./components/TeamApplications.js"; // you need to create this component
import styles from './page.module.scss';
import Navbar from "./components/Navbar.js";

export default function Profile( { setIsProfile } ) {
    const [activeForm, setActiveForm] = useState('solo');

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
                        className={`${styles.toggleButton} ${activeForm === 'solo' && styles.active}`}
                        onClick={() => handleClick('solo')}
                    >
                        Solo
                    </button>
                    <button
                        className={`${styles.toggleButton} ${activeForm === 'team' && styles.active}`}
                        onClick={() => handleClick('team')}
                    >
                        Team
                    </button>
                    <button
                        className={`${styles.toggleButton} ${activeForm === 'applications' && styles.active}`}
                        onClick={() => handleClick('applications')}
                    >
                        Apps
                    </button>
                </div>
                <div className={styles.forms}>
                    { activeForm === 'solo' && <div className={`${styles.form} ${styles.activeForm}`}>
                        <DescriptionForm />
                    </div>}
                    { activeForm === 'team' && <div className={`${styles.form} ${styles.activeForm}`}>
                        <TeamForm />
                    </div>}
                    { activeForm === 'applications' && <div className={`${styles.form} ${styles.activeForm}`}>
                        <TeamApplications /> {/* You need to create this component */}
                    </div>}
                </div>
            </div>
        </div>
    )
}
