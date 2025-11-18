import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { useTheme } from '../../context/ThemeContext'; 
import './Footer.css';

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`footer-container ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <div className="rrss-logos">
        <a href="https://www.linkedin.com/in/fatimacosme/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/pointfs" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="mailto:fatimacosme81@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon />
        </a>
      </div>
      <div className="copyright">
        <p>Hecho por Fátima Cosme 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
