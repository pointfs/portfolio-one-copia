import React from 'react';
import './GalleryProjects.css';
import { 
  DiApple, DiReact, DiBootstrap, DiCss3, DiHtml5, DiJavascript, 
  DiNodejs, DiMysql, DiIllustrator, DiTrello 
} from "react-icons/di";

import Proyecto1 from '../../assets/img/works/Proyecto1.png';
import Proyecto2 from '../../assets/img/works/Proyecto2.png';
import Proyecto3 from '../../assets/img/works/Proyecto3.png';
import Proyecto4 from '../../assets/img/works/Proyecto4.png';
import Proyecto5 from '../../assets/img/works/Proyecto5.png';
import Proyecto6 from '../../assets/img/works/Proyecto6.png';

// Datos de los proyectos
const projects = [
  {
    title: "Vinos Premier",
    link: "https://github.com/SarayAnta/VINO-PREMIER",
    description: "Rediseño de la web y gestión de reservas",
    details: `Desarrollo de una API completa para la gestión de reservas en un sistema de e-commerce, 
    mejorando la eficiencia operativa del cliente VinoPremier.`,
    achievements: [
      "Organización del equipo utilizando Scrum como metodología ágil.",
      "Implementación de un CRUD funcional con React y pruebas unitarias con Jest y Supertest.",
      "Optimización del código mediante principios SOLID.",
      "Colaboración con el Product Owner para cumplir los requisitos de los Stakeholders.",
    ],
    techIcons: [<DiReact />, <DiCss3 />, <DiJavascript />, <DiMysql />, <DiNodejs />],
    image: Proyecto4,
    alt: "Vinos Premier"
  },
  
  {
    title: "NewsPaper",
    link: "https://github.com/pointfs/NEWSPAPER",
    description: "Plataforma con Sesiones Diferenciadas, CRUD",
    details: `Creación de un sistema web con diferentes niveles de usuario y permisos para la edición de contenido.`,
    achievements: [
      "Diseño e implementación de un CRUD avanzado con React y backend en Node.js.",
      "Integración de Styled Components para un diseño visual organizado.",
      "Desarrollo de pruebas unitarias y de integración con Jest.",
      "Tecnologías: React, Styled Components, Node.js, Jest, Supertest."
    ],
    techIcons: [<DiReact />, <DiCss3 />, <DiJavascript />, <DiMysql />, <DiNodejs />, <DiTrello />],
    image: Proyecto3,
    alt: "NewsPaper App"
  },
  {
    title: "App Móvil",
    link: "https://github.com/usuario/proyecto-app-movil",
    description: "Desarrollo de una app con Swift",
    details: `Proyecto individual en el que desarrollé una app para generar plantillas personalizables de 
    portfolios y currículums, destacando por su interfaz intuitiva.`,
    achievements: [
      "Estudio sobre UX/UI para la optimización de la interfaz",
      "Investigación sobre la integracion de una app móvil en App Store",
      "Desarrollo de test y pruebas de vulnerabilidades.",
    ],
    techIcons: [<DiApple />, <DiIllustrator />],
    image: Proyecto5,
    alt: "App Móvil"
  },
  {
    title: "WebsPymes",
    link: "https://www.webspymes.es",
    description: "Desarrollo de una web con React",
    details: `Proyecto personal enfocado en soluciones digitales para autónomos y pequeñas empresas, 
    combinando diseño moderno y funcionalidad.`,
     achievements: [
      "Desarrollo completo de la web",
    
      "Tecnologías: React, Styled Components, Node.js, Jest, Supertest."
    ],
    techIcons: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />],
    image: Proyecto6,
    alt: "WebsPymes"
  },
];

// Componente para renderizar las tarjetas
const Card = ({ title, link, description, details, achievements, techIcons, image, alt }) => (
  <article className="card">
    <a href={link} target="_blank" rel="noopener noreferrer">
      <h2>{title}</h2>
    </a>
    <div className="card-description-projects">
      <h3>{description}</h3>
      <p>{details}</p>
     
    </div>
    <div className="tech-icons">
      {techIcons.map((icon, index) => (
        <span key={index}>{icon}</span>
      ))}
    </div>
    <img src={image} alt={alt} />
     <div className="goals-projects">{achievements && (
        <>
          <p><strong>Logros clave:</strong></p>
          <ul>
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          
        </>
      )}
  </div>
  </article>
);

const GalleryProjects = () => {
  return (
    <section className="projects-container">
      <h1 className="title-container-projects">Proyectos</h1>
      <div className="container-cards">
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default GalleryProjects;
