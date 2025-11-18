import React from 'react'
import { motion } from 'framer-motion';

import Background from '../../assets/img/wallpaper.jpg';
import Profile from '../../assets/img/Profile-2.jpg';

import Footer from '../../components/footer/Footer';
import LiderTech from '../../components/lidertech/LiderTech';
import Form from '../../components/form/Form';
import GalleryProjects from '../../components/gallerypro/GalleryProjects';

import Hello from '../../components/hello/hello';

import '../../../src/styles.css';


const Home = () => {
  const handleCardClick = (event) => {
    event.currentTarget.style.backgroundColor = `#f0f0f0`; 
  };
  return (
    <>
      
    <div className="bento-pro-wrapper">

       <section id="rrss" className="bento-pro-item bento-pro-tall glass">
    <Hello />
  </section>
    <section id="projects" className="bento-pro-item bento-pro-medium glass">
    <LiderTech />
  </section>


  <section id="home" className="bento-pro-item bento-pro-large glass">
     <GalleryProjects />
  </section>
  <section id="contact" className="bento-pro-item bento-pro-wide glass" onClick={handleCardClick}>
      <h1>Contacto</h1>
      <p>Si te gustó mi trabajo o quieres que trabajemos juntos, no dudes en contactarme</p>

      <div className='contact-content'>
        <img src={Profile} alt="Profile" className='profile-image'/>
        <a href="mailto:contacto@tudominio.com" className="contact-button">
            Contactar
        </a>
      </div>
  </section>
 
  <section id="rrss" className='footer-section'>
    <Footer />
  </section>

</div>
    </>
  );
}
export default Home;