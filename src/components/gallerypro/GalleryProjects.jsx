import React from 'react';
import './GalleryProjects.css';

import Proyecto1 from '../../assets/img/works/Proyecto1.png';
import Proyecto2 from '../../assets/img/works/Proyecto2.png';
import Proyecto3 from '../../assets/img/works/Proyecto3.png';
import Proyecto4 from '../../assets/img/works/Proyecto4.png';
import Proyecto5 from '../../assets/img/works/Proyecto5.png';
import Proyecto6 from '../../assets/img/works/Proyecto6.png';

const GalleryProjects = () => {
  return (
    <div>
      <h1 className='title-container-projects'>Proyectos</h1>
      <div className='container-cards'>
        

        <div className='card'>
          <a href="https://github.com/Elianarve/Proyecto-grupal" target="_blank" rel="noopener noreferrer">
            <h2>LandingPage</h2>
          </a>
          <p>Proyecto de aprendizaje</p>
          <img src={Proyecto1} alt="Proyecto 1" />
        </div>

        <div className='card'>
          <a href="https://github.com/SarayAnta/VINO-PREMIER" target="_blank" rel="noopener noreferrer">
            <h2>Vinos Premier</h2>
          </a>
          <p>Rediseño de la Web y gestión de reservas</p>
          <img src={Proyecto4} alt="Proyecto 4" />
        </div>

        <div className='card'>
          <a href="https://github.com/usuario/proyecto-app-movil" target="_blank" rel="noopener noreferrer">
            <h2>App Móvil</h2>
          </a>
          <p>Desarrollo de una app con Swift</p>
          <img src={Proyecto5} alt="Proyecto 5" />
        </div>

        <div className='card'>
          <a href="https://www.webspymes.es" target="_blank" rel="noopener noreferrer">
            <h2>WebsPymes</h2>
          </a>
          <p>Desarrollo de una Web con React</p>
          <img src={Proyecto6} alt="Proyecto 6" />
        </div>
        
      </div>
    </div>
  );
}

export default GalleryProjects;

