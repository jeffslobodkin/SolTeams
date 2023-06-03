import React from 'react';
import styles from './SneakPeek.module.css';
import Image from 'next/image';
import img1 from '../public/Exh1.jpg'
import img2 from '../public/Exh2.jpg'
import img3 from '../public/Exh3.jpg'
import img4 from '../public/Exh4.jpg'

function SneakPeek() {
  const boxes = [
    {
      image: img1,
      text: 'Sneak 1',
    },
    {
      image: img2,
      text: 'Sneak 2',
    },
    {
      image: img3,
      text: 'Sneak 3',
    },
    {
      image: img4,
      text: 'Sneak 4',
    },
  ];

  return (
    <div id="Sneekpeek" className={styles.container}>
      <h2 className={styles.title}>Sneak Peeks</h2>
      <div className={styles.line}>
      {boxes.map((box, index) => (
        <div key={index} className={styles.box}>
          <Image src={box.image} alt={`Image ${index + 1}`} className={styles.image} />
          <p className={styles.text}>{box.text}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default SneakPeek;
