
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
            <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer">
            
            </a>
          </div>
          <div className="face back">
            <a href="https://stackoverflow.com" target="_blank" rel="stackoverflow">
              
            </a>
          </div>
          <div className="face right">
            <a href="https://github.com/kovaxis" target="_blank" rel="kovaxis">
              
            </a>
          </div>
          <div className="face left">
            <a href="https://www.cisinformatica.cat/es/margaret-hamilton-biografia-logros/" target="_blank" rel="hamilton">
              
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

