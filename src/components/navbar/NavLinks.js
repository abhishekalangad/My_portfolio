import React from 'react';
// import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className='nav-links'>
      <li onClick={handleNav}>
        <a href="https://www.instagram.com/___abshk._/" target='_blank' rel="noreferrer" className='nav-link'>
          <FaInstagram />
        </a>
      </li>
      <li onClick={handleNav}>
        <a href="https://www.linkedin.com/in/abhishek-k-22823a232/" target='_blank' rel="noreferrer" className='nav-link'>
          <FaLinkedin />
        </a>
      </li>
      <li onClick={handleNav}>
        <a href="https://github.com/abhishekalangad" target='_blank' rel="noreferrer" className='nav-link'>
          <BsGithub />
        </a>
      </li>
      {/* Email link should use <a> with "mailto:" */}
      <li onClick={handleNav}>
        <a href="mailto:abhishekalangad@gmail.com" className='nav-link'>
          <BiEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
