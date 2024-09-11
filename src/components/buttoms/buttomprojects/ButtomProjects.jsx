import React from 'react';
import '../../buttoms/Buttom.css';


const ButtonProjects = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <button onClick={scrollToProjects}>
      Proyectos
    </button>
  );
};

export default ButtonProjects;

