import { Outlet } from "react-router-dom";
import Nav from '../../src/components/nav/Nav';

import { useTheme } from '../context/ThemeContext'; 


const LayoutPublic = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`layout-container ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Nav />
      
        <Outlet />
      

    </div>
  );
};

export default LayoutPublic;
