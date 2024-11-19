import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext'; // Importa el contexto del tema
import ButtonTech from '../buttoms/ButtomTech';
import ButtonProjects from '../buttoms/ButtomProjects';
import ButtonHome from '../buttoms/ButtomHome';
import ButtonInspiration from '../buttoms/ButtomInspiration';
import ButtonContact from '../buttoms/ButtomContact';

import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); // Accede al estado y función del tema

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      {/* Botón del menú hamburguesa */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Lista de enlaces */}
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><ButtonHome /></li>
        <li><ButtonProjects /></li>
        <li><ButtonTech /></li>
        <li><ButtonInspiration /></li>
        <li><ButtonContact /></li>
      </ul>


      <button className="btn btn-outline-primary toggle-theme-btn" onClick={toggleDarkMode}>
        {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </nav>
  );
};

export default Nav;
