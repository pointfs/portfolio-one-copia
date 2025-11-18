
import React from 'react'
import './Inspiration.css';

function Inspiration() {
  return (
     <>
     <div className='container-inspiration-cube'>
     <h1>Inspiración</h1>
     <p>Algunos de los sitios que me inspiran, clicka y descúbrelos</p>
      <div className="scene">
        <div className="cube">
          <div className="face front">
            <a href="https://bestwebsite.gallery/" target="_blank" rel="bestwebsite.gallery">
            
            </a>
          </div>
          <div className="face back">
            <a href="https://www.seesaw.website" target="_blank" rel="seesaw">
              
            </a>
          </div>
          <div className="face right">
            <a href="https://www.awwwards.com" target="_blank" rel="awwwards">
              
            </a>
          </div>
          <div className="face left">
            <a href="https://atelierdesign.be" target="_blank" rel="atelierdesign">
              
            </a>
          </div>
          <div className="face top">
            <a href="https://www.adhamdannaway.com" target="_blank" rel="adhamdannaway">
              
            </a>
          </div>
          <div className="face bottom">
            <a href="https://jesse-zhou.com" target="_blank" rel="jesse-zhou">
              
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Inspiration

