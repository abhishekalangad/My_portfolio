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
                        <p>Hey! I am an ERPNext Intern with hands-on experience in customizing and extending ERPNext applications using the Frappe Framework. My work primarily involves understanding real business requirements and converting them into reliable, production-ready ERP solutions.</p>
                        <br/>
                        <p>Since then, I’ve had the opportunity to work closely with experienced professionals on live ERP implementations, which has helped me strengthen my technical foundation and understanding of enterprise workflows. These days, I focus on developing clean customizations—such as server and client scripts, patches, and dynamic print formats—ensuring accuracy, consistency, and alignment with business needs. I also pay close attention to layout precision and data behavior while building print formats that match client specifications exactly. </p>
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
