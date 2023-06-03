import React from 'react';
import styles from './ImageAboutSection.module.css';
import Image from 'next/image';
import nftpic from '../public/NFTdemo.png';
import nftpic2 from '../public/NFTdemo2.png';
import nftpic3 from '../public/aboutdemo.png';

const ImageSection = () => {
  return (
    <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image src={nftpic3} alt="NFT" className='w-[60%]'/>
        </div>
    </div>
  );
};

export default ImageSection;
