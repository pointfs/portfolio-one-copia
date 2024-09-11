import React from 'react';
import ButtonTech from '../../components/buttoms/buttomtech/ButtomTech';
import ButtonProjects from '../../components/buttoms/buttomprojects/ButtomProjects';
import ButtonHome from '../../components/buttoms/buttomhome/ButtomHome';
import ButtonInspiration from '../../components/buttoms/buttominspiration/ButtomInspiration';

import hacker3 from '../../assets/icons/hacker3.webp';


const Nav = () => {
  return (
    
      <div className="navbar">
        <img className='logo-nav' src={hacker3} alt="logo" />

        <ul className="menu">
          <li><ButtonHome /></li>
          <li><ButtonProjects /></li>
          <li><ButtonTech /></li>
          <li><ButtonInspiration /></li>
          <button className="button-mail-nav" a href="mailto:fatimacosme81@gmail.com">Contacto</button>
        </ul>
        
      </div>
    
  );
}

export default Nav;
