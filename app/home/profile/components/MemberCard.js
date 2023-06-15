"use client"

import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';
import styles from './MemberCard.module.scss';


const MemberCard = () => {
    const { data: session } = useSession();
    const [members, setmembers] = useState([]);

    const fetchMembers = async () => {
        const response = await fetch('/api/auth/mongodb/getMembers', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: session.user.name }),
        });

        const data = await response.json();
        setmembers(data);
    };


    useEffect(() => {
        fetchMembers();
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
            {members.map(applicant => (
                <div key={applicant} className={styles.applicant}>
                    <span>{applicant}</span>
                </div>
            ))}
        </div>
    );
};

export default MemberCard;
