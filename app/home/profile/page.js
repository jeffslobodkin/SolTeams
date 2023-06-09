"use client"
import React, { useState } from 'react';
import DescriptionForm from "./components/Form.js";
import TeamForm from "./components/TeamForm.js";
import styles from './page.module.scss';

export default function Profile() {
    const [activeForm, setActiveForm] = useState(true);

    const handleClick = (value) => {
        setActiveForm(null); // Temporarily set to null to fully hide both forms
        setTimeout(() => setActiveForm(value), 120); // Delay the display change by the transition duration
    }

    return (
        <div>
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
    )
}
