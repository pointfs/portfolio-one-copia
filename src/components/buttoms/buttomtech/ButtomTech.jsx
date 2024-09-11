import React from 'react';


const ButtonTech = () => {
  const scrollToTech = () => {
    const techSection = document.getElementById('tech');
    if (techSection) {
      techSection.scrollIntoView({ behavior: 'smooth' , inline: 'start'});
    }
  };

  return (
    <button onClick={scrollToTech}>
      Skills
    </button>
  );
};

export default ButtonTech;