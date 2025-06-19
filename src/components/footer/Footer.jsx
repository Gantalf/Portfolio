import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-container__info'>
        <h1>Luciano Nicolas Pereira</h1>
        <p>CABA, Argentina</p>
      </div>
      <div className='footer-container__contact'>
        <h3>Contactos</h3>
      </div>
      <div className='footer-sns'>
        <div className='footer-sns--links'>
          <a href="https://linkedin.com/in/luciano-nicolas-pereira-dev" target='_blank' rel='noreferrer'>
            <i className='fab fa-linkedin linkedin'></i>
          </a>
          <a href="https://github.com/Gantalf " target='_blank' rel='noreferrer'>
            <i className='fab fa-github github'></i>
          </a>
          <a href="https://x.com/Gantalf99" target='_blank' rel='noreferrer'>
            <i className='fab fa-x-twitter twitter'></i>
          </a> 
        </div>
      </div>
    </footer>
  )
}

export default Footer
