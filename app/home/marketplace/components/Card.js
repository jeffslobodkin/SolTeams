import { useState } from 'react';
import styles from './Card.module.scss';
import Image from 'next/image';

function Card({ user }) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      console.log('flip');
        setIsFlipped(!isFlipped);
    }

    const Star = ({ index }) => {
  
      const isActive = index < user.barValue;
      return (
        <svg 
          className={`${styles.star} ${isActive ? styles.active : ''}`}  
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1" 
            d="M12 15.89l-4.053 2.132.775-4.527-3.29-3.211 4.526-.657L12 4l2.042 4.137 4.527.657-3.29 3.211.776 4.527L12 15.89z" 
          />
        </svg>
      )
    }

    return (
        <div className={styles.cardContainer}>
            <div className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}>
                <div className={styles.front}>
                    <div>
                        <Image alt="pfp" src={user.image} className={styles.image} width={250} height={20}/>
                    </div>
                    <div className={styles.username}>
                        <span className={styles.username}>{user.username}</span>
                    </div>
                    <div className={styles.descripbg}>
                        <h1 className={styles.description}>{user.description}</h1>
                    </div>
                    <div className='flex pt-4 ml-[7%] mb-[10%]'>
                    <div className={styles.starContainer}>
                            {[0, 1, 2, 3, 4].map((index) => <Star key={index} index={index} className={`${styles.starContainer} ${user.barValue >= index ? styles.active : ''}`}/>)}
                        </div>
                        <div className={styles.label}>
                            <button onClick={handleFlip}>Contact</button>
                        </div>
                    </div>
                </div>
                <div className={styles.back}>
                    <div className={styles.twitter}>
                        <span>{user.twitter}</span>
                    </div>
                    <button onClick={handleFlip}>Go Back</button>
                </div>

            </div>
        </div>
    );
}

export default Card;
