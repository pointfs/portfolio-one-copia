import { Outlet } from "react-router-dom";
import Nav from '../../src/components/nav/Nav';
import FooterContainer from '../../src/components/footer/Footer';
import { useTheme } from '../context/ThemeContext'; 
import "./LayoutPublic.css"

const LayoutPublic = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`layout-container ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <Nav />
      <main className="container py-4">
        <Outlet />
      </main>
      <FooterContainer />
    </div>
  );
};

export default LayoutPublic;
