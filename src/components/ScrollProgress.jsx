import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScroll(scrollPercent);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      style={{
        height: '5px',
        background: '#007bff',
        width: `${scroll}%`,
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: 'width 0.2s ease',
      }}
    />
  );
};

export default ScrollProgress;