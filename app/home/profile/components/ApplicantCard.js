"use client"

import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import styles from './ApplicantCard.module.scss';


const ApplicantCard = () => {
    const { data: session } = useSession();
    const [applications, setApplications] = useState([]);

    const fetchApplications = async () => {
        const response = await fetch('/api/auth/mongodb/recApplications', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: session.user.name }),
        });

        const data = await response.json();
        setApplications(data);
    };


    useEffect(() => {
        fetchApplications();
    }, []);

    const handleAccept = async (applicant) => {
        // Handle acceptance here
        console.log(`${applicant} is accepted`);
        const response = await fetch('/api/auth/mongodb/acceptApp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: applicant, 
                //teamId: team._id, // assuming that your team documents have an "_id" field
            })
        });
    };

    const handleMessage = async (applicant) => {
        // Handle messaging here
        console.log(`Message to ${applicant}`);
    };

    return (
        <div className={styles.applicantContainer}>
            {applications.map(applicant => (
                <div key={applicant} className={styles.applicant}>
                    <span>{applicant}</span>
                    <button onClick={() => handleAccept(applicant)}>Accept</button>
                    <button onClick={() => handleMessage(applicant)}>Message</button>
                </div>
            ))}
        </div>
    );
};

export default ApplicantCard;
