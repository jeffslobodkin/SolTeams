import { useState } from 'react';
import styles from './TeamCard.module.scss';
import Image from 'next/image';
import discord from '@/public/discord.png';

function TeamCard({ team }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      console.log('flip');
        setIsFlipped(!isFlipped);
    }

    const handleApply = async () => {
        // Make a POST request to your API route that handles applications
        // Include necessary data in the request body
        console.log("Username: ", team.username);
        const response = await fetch('/api/auth/mongodb/application', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: team.username, 
                //teamId: team._id, // assuming that your team documents have an "_id" field
            })
        });

    }

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}>
                <div className={styles.front}>
                    <div>
                        <Image alt="team logo" src={team.image ? team.image : discord} className={styles.image} width={150} height={25}/>
                    </div>
                    <div className={styles.teamInfo}>
                        <span className={styles.descripbg}>{team.username}</span>
                        <span className={styles.descripbg}>{team.projectName}</span>
                    </div>
                    <div className="flex">
                        <div className={styles.descripbg}>
                            <p className={styles.description}>{team.description}</p>
                            
                        </div >
                            <button className={styles.buttonApply} onClick={handleApply}>Apply</button>
                        </div>
                    <div className='flex pt-4 mb-[10%]'>
                        <div className={styles.describText}>
                            <p className={styles.projectDescription} data-text={team.projectDescription}>
                                {team.projectDescription}
                            </p>
                        </div>
                        <div className={styles.label}>
                            <button onClick={handleFlip}>Contact</button>
                        </div>
                    </div>
                </div>
                <div className={styles.back}>
                    <div className={styles.twitter}>
                        <span>{team.twitter}</span>
                    </div>
                    <button onClick={handleFlip}>Go Back</button>
                </div>
            </div>
        </div>
    );
}

export default TeamCard;
