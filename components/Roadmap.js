import React, { useState } from 'react';
import style from './Roadmap.module.css';

// Custom component for each box
function Box({ headerOne, headerTwo, text1, text2, text3 }) {
    return (
      <div className={style.box}>
        <div className={style.textBox}>
          <h3 className={style.textBox}>{headerOne}</h3>
          <h1 className={style.textBox}>{headerTwo}</h1>
          <hr className={style.divider} />
          <ul className={style.bulletList}>
            {text1 && <li>{text1}</li>}
            {text2 && <li>{text2}</li>}
            {text3 && <li>{text3}</li>}
          </ul>
        </div>
      </div>
    );
  }
  

function Roadmap() {
  const [offset, setOffset] = useState(0);

  const boxes = [
    { number: 1, headerOne: 'Q2 2023',  headerTwo: 'UNLEASHING THE POWER OF PIXEL', text1: 'Launch Solana Socials to foster our community and promote the project to a wider audience', text2: 'Release 4444 unique and stylish monkey nfts to the public', text3: 'Begin building the solana ecosystem, focused on supporting other nft projects launching on the Solana blockchain.' },
    { number: 2, headerOne: 'Q3 2023', headerTwo: 'PUSHING THE LIMITS OF INNOVATION', text1: 'Introduce new features to the Solana platform to support NFT creators and collectors', text2: 'Drop first piece of tech. Non-Custodial / Passive Staking Platform Launch. ', text3: 'Collaborate with existing and upcoming projects to provide a customized Staking platform under their own brand. This platform will be developed on our existing infrastructure.' },
    { number: 3, headerOne: 'Q4 2023', headerTwo: 'SCALING NEW HEIGHTS', text1: 'Continue to grow the Solana ecosystem by partnering with other NFT projects on the Solana blockchain', text2: 'The 2nd Tech drop from under the Solana brand.', text3: 'No Code Art Upgrade Platform launch. Projects can buy the service and upgrade their existing  artwork by navigating through an user-friendly UI.' },
    { number: 4, headerOne: 'Q1 2024', headerTwo: 'BEYOND NFTS', text1: 'Expand the capabilities of the Solana platform to support a wider variety of digital assets beyond NFTs ', text2: 'Host exclusive events for Solana collectors and supporters.', text3: 'The third tech drop : NFT YIELD FARMING : More on this as we move forward. ' },
  ].map(({ number, headerOne, headerTwo, text1, text2, text3 }) => (
    <Box key={number} headerOne={headerOne} headerTwo={headerTwo} text1={text1} text2={text2} text3={text3} />
  ));

  return (
    <div id="Roadmap" className={style.wrapper}>
        <section className={style.Roadmap}>
            <div className={style.container2}>
                <h2 className={style.header}>ROADMAP</h2>
                <p className={style.info}>
                    As we continue to build and grow the Solana project, were focusing on expanding our technological capabilities to provide even more value to the NFT ecosystem. Our roadmap includes plans to develop cutting-edge software tools for NFT creators, which will enable them to build their NFT projects after launch on the Solana blockchain more easily and efficiently. Were also working on developing a scalable and decentralized infrastructure to support the rapidly growing NFT market. Our goal is to make the process of swapping and trading NFTs seamless, secure, and reliable.
                </p>
            </div>
        </section>
      <div
        className={`${style.container} ${style.transition}`}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {boxes}
      </div>

      <button
        className={style.arrowleft}
        onClick={() => setOffset((prevOffset) => prevOffset + 310)}
        disabled={offset >= 0}
      >
        &lt;
      </button>

      <button
        className={style.arrowright}
        onClick={() => setOffset((prevOffset) => prevOffset - 310)}
        disabled={offset <= -800}
      >
        &gt;
      </button>
    </div>
  );
}

export default Roadmap;
