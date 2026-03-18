import React from 'react';
import "../styles/About.css"
import { motion } from "framer-motion";
import ProfileImg from '../images/profile_me.jpg'

const About = () => {  
  
  const horizontal ={
    x:0, 
    opacity: 1, 
    transition:{type: 'spring', duration: 2,bounce: 0.3}
  }

  return (
      <>
          <div  className="about" id='about'>
              <div className="container">
                  <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} viewport={{ once: true }} className="heading">
                    <p className="heading-sub-text">Who I am</p>
                    <p className='heading-text'>About Me</p>
                  </motion.div>
                  <div className="split-about">
                    <motion.div initial={{x: '-100%', opacity: 0}} whileInView={horizontal} className="about-content">
                        <p>Hey! I am a Software Developer with hands-on experience in building, customizing, and extending enterprise applications. My work primarily involves understanding real business requirements and converting them into reliable, production-ready software solutions.</p>
                        <br/>
                        <p>I’ve had the opportunity to work closely with experienced professionals on live software implementations, which has helped me strengthen my technical foundation and understanding of scalable workflows. These days, I focus on developing clean code—such as backend logic, client-side scripts, and dynamic interfaces—ensuring accuracy, consistency, and alignment with business needs. I also pay close attention to layout precision and robust data behavior while building features that match client specifications exactly.</p>
                    </motion.div>
                    <motion.div initial={{x: '50', opacity: 0}} whileInView={horizontal}  className='about-img'>
                        <img src={ProfileImg} alt="Profile" />
                    </motion.div>
                  </div>
              </div>
          </div>
      </>
  )
};

export default About;
