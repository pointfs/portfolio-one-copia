import React, { useState } from 'react';
import ButtonTech from '../buttoms/ButtomTech';
import ButtonProjects from '../buttoms/ButtomProjects';
import ButtonHome from '../buttoms/ButtomHome';
import ButtonInspiration from '../buttoms/ButtomInspiration';
import ButtonContact from '../buttoms/ButtomContact';

import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav className="navbar">
      {/* Menú Hamburguesa */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menú de enlaces */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><ButtonHome /></li>
        <li><ButtonProjects /></li>
        <li><ButtonTech /></li>
        <li><ButtonInspiration /></li>
        <li><ButtonContact /></li>
      </ul>
    </nav>
  );
}

export default Nav;
