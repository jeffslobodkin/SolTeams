import React from 'react';
import styles from './ImageSection.module.css';
import Image from 'next/image';
import nftpic from '@/public/NFTdemo.png';
import nftpic2 from '@/public/NFTdemo2.png';

const ImageSection = () => {
  return (
    <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image src={nftpic} alt="NFT" className='border rounded-xl w-72'/>
        </div>
        <div className={styles.imageWrapper}>
          <Image src={nftpic2} alt="NFT" className='border rounded-xl w-72'/>
        </div>
    </div>
  );
};

export default ImageSection;
