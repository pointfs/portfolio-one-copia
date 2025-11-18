import React from 'react';
import { motion } from 'framer-motion';
import '../../../src/styles.css';

const Hello = () => {

  return (
    <section className='container-img' id="home">
        
        <motion.div
        className='text-overlay'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        >
          <h1 className="tittle">Hola soy Fátima Cosme: Frontend React</h1> 
          <p className='descripition'>Como desarrolladora frontend, domino React, JavaScript, HTML y CSS para crear interfaces dinámicas que conecten con los usuarios.</p>
          <p className='descripition'>Actualmente, estoy aprendiendo Vue y Angular para ampliar mi experiencia, mientras sigo muy enfocada en JS, ya que tener una buena base me parece primordial para seguir creciendo.</p>
          <p className='descripition'> Mi capacidad para comunicarme, liderar y analizar entornos me permite trabajar de manera efectiva en equipo, resolviendo desafíos con creatividad y precisión.</p>
          <p className='descripition'>Estoy en busca de una oportunidad donde pueda no solo aplicar mis habilidades técnicas, sino también aportar mi visión fresca e implicación para impulsar el éxito de proyectos innovadores. Mi pasión por aprender y crecer es el motor que me lleva a entregar siempre lo mejor de mí.</p>
      </motion.div>
    </section>

    );
};
export default Hello;
