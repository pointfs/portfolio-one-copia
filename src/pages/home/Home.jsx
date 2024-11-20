import React from 'react'
import { motion } from 'framer-motion';

import Background from '../../assets/img/wallpaper.jpg';
import Profile from '../../assets/img/Profile-2.jpg';


import LiderTech from '../../components/lidertech/LiderTech';
import Form from '../../components/form/Form';
import GalleryProjects from '../../components/gallerypro/GalleryProjects';
import Inspiration from '../../components/inspiration/Inspiration';

import '../../../src/styles.css';


const Home = () => {
  const handleCardClick = (event) => {
    event.currentTarget.style.backgroundColor = `#f0f0f0`; 
  };
  return (
    <>
    <section className='container-img' id="home">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 2 }}
        className='image-container'
      >
        <motion.img 
          src={Background}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className='background-image'
        />
        </motion.div>
        <motion.div
        className='text-overlay'>
          <h1>Hola soy Fátima Cosme: Frontend React</h1> 
          <p>Como desarrolladora frontend, domino React, JavaScript, HTML y CSS para crear interfaces dinámicas que conecten con los usuarios.</p>
          <p>Actualmente, estoy aprendiendo Vue y Angular para ampliar mi experiencia, mientras sigo muy enfocada en JS, ya que tener una buena base me parece primordial para seguir creciendo.</p>
          <p> Mi capacidad para comunicarme, liderar y analizar entornos me permite trabajar de manera efectiva en equipo, resolviendo desafíos con creatividad y precisión.</p>
          <p>Estoy en busca de una oportunidad donde pueda no solo aplicar mis habilidades técnicas, sino también aportar mi visión fresca e implicación para impulsar el éxito de proyectos innovadores. Mi pasión por aprender y crecer es el motor que me lleva a entregar siempre lo mejor de mí.</p>
      </motion.div>
    </section>

    <section className='container-tech' id="tech">
      <LiderTech/>
    </section>

    <section className='container-projects' id="projects">
      <GalleryProjects/>
    </section>

    <section className='container-inspiration' id="inspiration" >
      <Inspiration/>
    </section>




    <section className='container-contact' id="contact" onClick={handleCardClick}>
      <h1>Contacto</h1>
      <p>Si te gustó mi trabajo o quieres que trabajemos juntos, no dudes en contactarme</p>
      <div className='contact-content'>
      <img src={Profile} alt="Profile" className='profile-image'/>
      <a href="mailto:contacto@tudominio.com" className="contact-button">
      Contactar
    </a>
      </div>
    </section>
  </>
  )
}

export default Home
