import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-container__info'>
        <h1>Luciano Nicolas Pereira</h1>
        <p>Charata Chaco, Argentina</p>
      </div>
      <div className='footer-container__contact'>
        <h3>Contáctame</h3>
        <p>Trabajemos juntos</p>
      </div>
      <div className='footer-sns'>
        <div className='footer-sns--desing'>
          Diseñado por Luciano Nicolas Pereira
        </div>
        <div className='footer-sns--links'>
          <a href="https://linkedin.com/in/luciano-nicolas-pereira-dev" target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a href="https://github.com/Gantalf " target='_blank' rel='noreferrer'>
            <i className='fab fa-github github'></i>
          </a>
          <a href="https://twitter.com/pereira22995" target='_blank' rel='noreferrer'>
            <i className='fab fa-twitter twitter'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
