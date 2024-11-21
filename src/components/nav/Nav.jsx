import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext'; 
import ButtonTech from '../buttoms/ButtomTech';
import ButtonProjects from '../buttoms/ButtomProjects';
import ButtonHome from '../buttoms/ButtomHome';
import ButtonInspiration from '../buttoms/ButtomInspiration';
import ButtonContact from '../buttoms/ButtomContact';

// Usar el SVG como imagen estática
import DarkModeIcon from '../../assets/icons/dark_mode_black.svg';
import LightModeIcon from '../../assets/icons/dark_mode_light.svg';

import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>

      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><ButtonHome /></li>
        <li><ButtonProjects /></li>
        <li><ButtonTech /></li>
        <li><ButtonInspiration /></li>
        <li><ButtonContact /></li>
      </ul>

      <button className="btn-toggle-theme-btn" onClick={toggleDarkMode}>
        <img
          src={isDarkMode ? LightModeIcon : DarkModeIcon}
          alt="Modo Oscuro/Claro"
          width="24"
          height="24"
        />
      </button>
    </nav>
  );
};

export default Nav;
