import React, { useState } from 'react';
import ButtonTech from '../../components/buttoms/buttomtech/ButtomTech';
import ButtonProjects from '../../components/buttoms/buttomprojects/ButtomProjects';
import ButtonHome from '../../components/buttoms/buttomhome/ButtomHome';
import ButtonInspiration from '../../components/buttoms/buttominspiration/ButtomInspiration';
import ButtonContact from '../../components/buttoms/buttomcontact/ButtomContact';

import hacker3 from '../../assets/icons/hacker3.webp';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="nav">
      <img src={hacker3} alt="logo" className="hacker3" onClick={scrollToTop}/>
      <button className="hamburger" onClick={toggleMenu}>
        
      </button>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li><ButtonHome /></li>
        <li><ButtonProjects /></li>
        <li><ButtonTech /></li>
        <li><ButtonInspiration /></li>
        <li><ButtonContact/></li>
      </ul>
    </div>
  );
}

export default Nav;