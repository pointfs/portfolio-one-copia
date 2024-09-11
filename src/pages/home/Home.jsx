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
          <h1>Hola soy Fátima Cosme</h1>
          <h2>Frontend React y Swift</h2> 
          <p>Comencé en el desarrollo de manera autodidacta y poco a poco, fui entendiendo las grandes posibilidades que ofrece este campo. En 2023, me lancé a cursar una formación de 750 horas de Factoria F5 Fullstack. Actualmente, desarrollo proyectos como freelance, mientras sigo aprendiendo y formándome</p>
          <p>Encontrar nuevos retos y probarme en cada proyecto, es uno de los motivos que me enganchó al mundo de la programción</p>
        
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
        <Form/>
        <img src={Profile} alt="Profile" className='profile-image'/>
      </div>
    </section>
  </>
  )
}

export default Home
