import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import './Footer.css';



const Footer = () => {
    return (
    <footer>
      <div className='rrss-logos'>
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
      <div className='copyright'>
        <p>Made in Fátima Cosme 2024</p>
      </div>
    </footer>

  );
}

export default Footer;