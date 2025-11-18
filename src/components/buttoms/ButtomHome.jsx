import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 0.75em 1.5em;
  color: #3a0ca3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 600;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  transition: color 0.2s ease, transform 0.2s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    background: linear-gradient(90deg, #3a0ca3, #ff006e, #3a0ca3);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
    z-index: 1;
    border-radius: inherit;
  }

  &:hover:before {
    transform: translateX(0);
  }

  &:hover {
    color: #ffffff;
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  & > span {
    position: relative;
    z-index: 2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(58, 12, 163, 0.4);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.65em 1.2em;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.5em 1em;
  }
`;
const ButtonHome = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  };

  return (
    <StyledButton onClick={scrollToHome} aria-label="Volver al inicio">
      <span>Hola</span>
    </StyledButton>
  );
};

export default ButtonHome;
