import React from 'react';
import About from './About';
import Contact from './Contact';
import HeroSection from './HeroSection';
import Experience from './Experience';
import Education from './Education';
import Certifications from './Certifications';
import Services from './Services';
import Skills from './Skills';
import Works from './Works';
import ExtraCurricular from './ExtraCurricular';

const Main = ({ nav, handleNav, closeNav }) => {
  return (
    <div onClick={closeNav} className='main'>
      <HeroSection nav={nav} handleNav={handleNav} />
      <About />
      <Skills />
      <Services />
      <Experience />
      <Education />
      <Certifications />
      <Works />
      <ExtraCurricular />
      <Contact />
    </div>
  )
};

export default Main;
