"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import NavbarPopout from '@/app/components/NavbarPopout';
import About from '@/app/components/About';
import Introduction from '@/app/components/Intro';
import Roadmap from '@/app/components/Roadmap';
import SneakPeek from '@/app/components/SneakPeek';
import Faq from '@/app/components/Faq';
import Footer from '@/app/components/Footer';
import AboutTwo from '@/app/components/AboutTwo';


export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <body>
      {isMobile ? <NavbarPopout /> : <Navbar />}
      <Introduction/>
      <About/>
      <Roadmap/>
      <AboutTwo/>
      <SneakPeek/>
      <Faq/>
      <Footer/>

    </body>
  );
}
