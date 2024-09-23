import React from 'react'

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


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './LiderTech.css';


  const LiderTech = () => {
    

    const settings = {
      dots: true,
      infinite: true,
      speed: 5000,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
    
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
      }
      ]
    };
    return (
      <div className="lider-tech-wrapper">

      <h1 className="lider-tech-title">Skills</h1>
      <div className="lider-tech-container">
      
        <Slider  {...settings}>
          <div className='tech'>
            <img src={html} alt="HTML" />
            <span class="tooltip-text">HTML</span>
          </div>
          <div className='tech'>
            <img src={css} alt="CSS" />
            <span class="tooltip-text">CSS</span>
          </div>
          <div className='tech'>
            <img src={javascript} alt="JavaScript" />
            <span class="tooltip-text">JS</span>
          </div>
          <div className='tech'>
            <img src={react} alt="React" />
            <span class="tooltip-text">React</span>
          </div>
          <div className='tech'>
            <img src={boostrap} alt="Bootstrap" />
            <span class="tooltip-text">Bootstrap</span>
          </div>
          <div className='tech'>
            <img src={git} alt="Git" />
            <span class="tooltip-text">Git</span>
          </div>
          <div className='tech'>
            <img src={figma} alt="Figma" />
            <span class="tooltip-text">Figma</span>
          </div>
          <div className='tech'>
            <img src={mysql} alt="MySQL" />
            <span class="tooltip-text">MySQL</span>
          </div>
          <div className='tech'>
            <img src={salesforce} alt="Salesforce" />
            <span class="tooltip-text">Salesforce</span>
          </div>
          <div className='tech'>
            <img src={jira} alt="Jira" />
            <span class="tooltip-text">Jira</span>
          </div>
          <div className='tech'>
            <img src={canva} alt="Canva" />
            <span class="tooltip-text">Canva</span>
          </div>
          <div className='tech'>
            <img src={trello} alt="Trello" />
            <span class="tooltip-text">Trello</span>
          </div>
          <div className='tech'>
            <img src={miro} alt="Miro" />
            <span class="tooltip-text">Miro</span>
          </div>

        </Slider>
       
      </div>
    </div>
    );
}

export default LiderTech
