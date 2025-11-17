import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import { useTheme } from '../../context/ThemeContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './LiderTech.css';

import boostrap from '../../assets/icons/boostrap.png';
import css from '../../assets/icons/css.png';
import figma from '../../assets/icons/figma.png';
import git from '../../assets/icons/git.png';
import html from '../../assets/icons/html.png';
import javascript from '../../assets/icons/javascript.png';
import react from '../../assets/icons/react.png';
import mysql from '../../assets/icons/mysql.png';
import jira from '../../assets/icons/jira.png';
import canva from '../../assets/icons/canva.png';
import trello from '../../assets/icons/trello.png';
import miro from '../../assets/icons/miro.png';
import salesforce from '../../assets/icons/salesforce.png';

const techSkills = [
  { img: html, name: 'HTML' },
  { img: css, name: 'CSS' },
  { img: javascript, name: 'JavaScript' },
  { img: react, name: 'React' },
  { img: boostrap, name: 'Bootstrap' },
  { img: git, name: 'Git' },
  { img: figma, name: 'Figma' },
  { img: mysql, name: 'MySQL' },
  { img: salesforce, name: 'Salesforce' },

];

const LiderTech = () => {
  const { isDarkMode } = useTheme(); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className={`lider-tech-wrapper ${isDarkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <h1 className="lider-tech-title">Stack</h1>
      <div className="lider-tech-container">
        <Slider {...settings}>
          {techSkills.map((tech, index) => (
            <motion.div
              className='tech'
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={tech.img} alt={tech.name} />
              <span className="tooltip-text">{tech.name}</span>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LiderTech;
