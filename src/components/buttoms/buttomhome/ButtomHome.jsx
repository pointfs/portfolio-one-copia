import React from 'react';

const ButtonHome = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' , inline: 'start'});
    }
  };

  return (
    <button onClick={scrollToHome}>
      Holaa!!
    </button>
  );
};

export default ButtonHome;