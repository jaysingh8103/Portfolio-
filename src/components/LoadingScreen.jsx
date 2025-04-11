import React from 'react';
import Logo from './Logo'; // Make sure JPLogo.jsx is in the same folder
import './LoadingScreen.css';

const Loading = () => {
  return (
    <div className="only-logo-loading">
      <Logo />
    </div>
  );
};

export default Loading;
