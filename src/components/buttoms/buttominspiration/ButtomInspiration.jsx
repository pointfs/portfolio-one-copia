import React from 'react';

const ButtonInspiration = () => {
  const scrollToInspiration = () => {
    const inspirationSection = document.getElementById('inspiration');
    if (inspirationSection) {
        inspirationSection.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <button onClick={scrollToInspiration}>
      Inspiración
    </button>
  );
};

export default ButtonInspiration;