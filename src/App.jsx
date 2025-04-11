import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress';
import Education from './components/Education';

import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
    
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
        
          <ScrollProgress/>
          <Navbar />
          <Intro />
          
          <About />
          <Education/>
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
