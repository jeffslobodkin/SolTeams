import React, { useEffect, useState } from 'react';
import Typical from 'react-typical';

const TypewriterLoop = () => {
  const [texts, setTexts] = useState([
    'Advisors',
    'Moderators',
    'Managers',
    'Developers'
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Adjust the duration between text changes as needed

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <Typical steps={[texts[currentIndex]]} wrapper="h2" />
    </div>
  );
};

export default TypewriterLoop;
