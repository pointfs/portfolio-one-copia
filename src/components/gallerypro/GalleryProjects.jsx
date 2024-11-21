import React from 'react';
import './GalleryProjects.css';
import { DiApple , DiReact , DiBootstrap , DiCss3 , DiHtml5 , DiJavascript , DiNodejs , DiMysql, DiIllustrator } from "react-icons/di";

import Proyecto1 from '../../assets/img/works/Proyecto1.png';
import Proyecto2 from '../../assets/img/works/Proyecto2.png';
import Proyecto3 from '../../assets/img/works/Proyecto3.png';
import Proyecto4 from '../../assets/img/works/Proyecto4.png';
import Proyecto5 from '../../assets/img/works/Proyecto5.png';
import Proyecto6 from '../../assets/img/works/Proyecto6.png';

const GalleryProjects = () => {
  return (
    <section className="projects-container">
      <h1 className="title-container-projects">Proyectos</h1>
      <div className="container-cards">
        
        <article className="card">
          <a href="https://github.com/Elianarve/Proyecto-grupal" target="_blank" rel="noopener noreferrer">
            <h2>LandingPage</h2>
          </a>
          <p>Proyecto de aprendizaje</p>
          <p>El primer proyecto que realizamos de forma conjenta consitió en una landing page, todo un reto ya que solo llevabamos 3 semanas formandonos en este sector.</p>
          <div className="tech-icons">
            <DiHtml5 size={50} />
            <DiCss3  size={50} />
            <DiJavascript size={50} />
            <DiBootstrap size={50} />
          </div>
          <img src={Proyecto1} alt="Proyecto 1" />
         
        </article>

        <article className="card">
          <a href="https://github.com/SarayAnta/VINO-PREMIER" target="_blank" rel="noopener noreferrer">
            <h2>Vinos Premier</h2>
          </a>
          <p>Rediseño de la Web y gestión de reservas</p>
          <p>En esta ocasión se pidió el rediseño de las cards del producto, para mostrar más información y se implemento una api para gestionar las resservas de las catas de vinos.</p>
          <div className="tech-icons">
          <DiReact size={50} />
            <DiCss3  size={50} />
            <DiJavascript size={50} />
            <DiMysql size={50} />
            <DiNodejs size={50} />
          </div>
          <img src={Proyecto4} alt="Proyecto 4" />
          
     
        </article>

        <article className="card">
          <a href="https://github.com/usuario/proyecto-app-movil" target="_blank" rel="noopener noreferrer">
            <h2>App Móvil</h2>
          </a>
          <p>Desarrollo de una app con Swift</p>
          <p>Proyecto indivudual en que he desarrolado una app para generar plantillas para portfolio y curriculums</p>
          <div className="tech-icons">
          <DiApple size={50} />
          <DiIllustrator size={50} />
          </div>

          <img src={Proyecto5} alt="Proyecto 5" />
         
        </article>

        <article className="card">
          <a href="https://www.webspymes.es" target="_blank" rel="noopener noreferrer">
            <h2>WebsPymes</h2>
          </a>
          <p>Desarrollo de una Web con React</p>
          <p>Mi proyecto actual de emprendimiento, se trata de una web enfocada al desarrollo web de autónomos y pymes</p>
          <div className="tech-icons">
            <DiHtml5 size={50} />
            <DiCss3 size={50} />
            <DiJavascript size={50} />
            <DiReact size={50} />

          </div>
          <img src={Proyecto6} alt="Proyecto 6" />
        
        </article>
        
      </div>
    </section>
  );
};

export default GalleryProjects;
