import React from 'react';
import './GalleryProjects.css';
import { DiApple, DiReact, DiBootstrap, DiCss3, DiHtml5, DiJavascript, DiNodejs, DiMysql, DiIllustrator, DiTrello } from "react-icons/di";

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
            <h2>Landing Page</h2>
          </a>
          <p>Proyecto de aprendizaje</p>
          <p>El primer proyecto grupal consistió en una landing page. Este reto fomentó el aprendizaje colaborativo y la aplicación de conceptos iniciales de desarrollo web, tras solo tres semanas de formación.</p>
          <div className="tech-icons">
            <DiHtml5 size={50} />
            <DiCss3 size={50} />
            <DiJavascript size={50} />
            <DiBootstrap size={50} />
          </div>
          <img src={Proyecto1} alt="Landing Page" />
        </article>

        <article className="card">
          <a href="https://github.com/SarayAnta/VINO-PREMIER" target="_blank" rel="noopener noreferrer">
            <h2>Vinos Premier</h2>
          </a>
          <p>Rediseño de la web y gestión de reservas</p>
          <p>Desarrollo de una API completa para la gestión de reservas en un sistema de e-commerce, mejorando la eficiencia operativa del cliente VinoPremier.</p>
          <p><strong>Logros clave:</strong></p>
          <ul>
            <li>Organización del equipo utilizando Scrum como metodología ágil, con reuniones de sincronización y retrospectivas.</li>
            <li>Implementación de un CRUD funcional con React y pruebas unitarias con Jest y Supertest.</li>
            <li>Optimización del código mediante principios SOLID, logrando escalabilidad y limpieza en la arquitectura.</li>
            <li>Trabajo colaborativo con el Product Owner para cumplir con los requisitos de los Stakeholders.</li>
          </ul>
          <div className="tech-icons">
            <DiReact size={50} />
            <DiCss3 size={50} />
            <DiJavascript size={50} />
            <DiMysql size={50} />
            <DiNodejs size={50} />
          </div>
          <img src={Proyecto4} alt="Vinos Premier" />
        </article>

        <article className="card">
          <a href="https://github.com/usuario/proyecto-app-movil" target="_blank" rel="noopener noreferrer">
            <h2>App Móvil</h2>
          </a>
          <p>Desarrollo de una app con Swift</p>
          <p>Proyecto individual en el que desarrollé una app para generar plantillas personalizables de portfolios y currículums, destacando por su interfaz intuitiva.</p>
          <div className="tech-icons">
            <DiApple size={50} />
            <DiIllustrator size={50} />
          </div>
          <img src={Proyecto5} alt="App Móvil" />
        </article>

        <article className="card">
          <a href="">
          <h2>NewsPaper</h2>
          </a>
          <p>Plataforma con Sesiones Diferenciadas, CRUD</p>
          <p>Creación de un sistema web con diferentes niveles de usuario y permisos para la edición de contenido.</p>
          <p><strong>Logros clave:</strong></p>
          <ul>
<li>Diseño e implementación de un CRUD avanzado con React y backend en Node.js.
</li>
<li>Integración de Styled Components para lograr un diseño visual organizado y eficiente.
</li>
<li>Desarrollo de pruebas unitarias y de integración con Jest para garantizar la calidad del código.
</li>
<li>Tecnologías: React, Styled Components, Node.js, Jest, Supertest.
</li>
</ul>
<div className="tech-icons">
  <DiReact size={50} />
  <DiCss3 size={50} />
  <DiJavascript size={50} />
  <DiMysql size={50} />
  <DiNodejs size={50} />
  <DiTrello size={50} />
</div>

<img src={Proyecto3} alt="App NewsPaper" />

        </article>

        <article className="card">
          <a href="https://www.webspymes.es" target="_blank" rel="noopener noreferrer">
            <h2>WebsPymes</h2>
          </a>
          <p>Desarrollo de una web con React</p>
          <p>Proyecto personal enfocado en soluciones digitales para autónomos y pequeñas empresas, combinando diseño moderno y funcionalidad.</p>
          <div className="tech-icons">
            <DiHtml5 size={50} />
            <DiCss3 size={50} />
            <DiJavascript size={50} />
            <DiReact size={50} />
          </div>
          <img src={Proyecto6} alt="WebsPymes" />
        </article>

      </div>
    </section>
  );
};

export default GalleryProjects;