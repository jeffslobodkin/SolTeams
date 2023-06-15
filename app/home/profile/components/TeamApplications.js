"use client"

import React, { useState } from 'react';
import styles from './TeamApplications.module.scss';
import ApplicantCard from './ApplicantCard'; // You'll need to create this component
//import MemberCard from './MemberCard'; // You'll need to create this component

const TeamApplications = () => {
    const [activeTab, setActiveTab] = useState('applicants');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.applicationContainer}>
            <div className={styles.navbar}>
                <button 
                    className={`${styles.navButton} ${activeTab === 'applicants' && styles.active}`}
                    onClick={() => handleTabClick('applicants')}
                >
                    Applicants
                </button>
                <button 
                    className={`${styles.navButton} ${activeTab === 'members' && styles.active}`}
                    onClick={() => handleTabClick('members')}
                >
                    Members
                </button>
            </div>
            <div className={styles.cardContainer}>
                {activeTab === 'applicants' && <ApplicantCard />} {/* Fetch and pass the data needed here */}
                {/* {activeTab === 'members' && <MemberCard />} Fetch and pass the data needed here */}
            </div>
        </div>
    );
}

export default TeamApplications;
