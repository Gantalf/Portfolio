import React from 'react'
import './About.css';
import perfil from '../../assets/perfil.webp';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container__desc'>
        <h3>Sobre mí</h3>
        <p>¡Hola! Soy desarrollador backend, aunque arranqué mi camino en el mundo del frontend. Hoy en día me dedico a crear sistemas que soportan grandes cargas y funcionan con microservicios orientados a eventos, usando principalmente Java con Spring Boot y Golang.
        Me encanta aprender haciendo, por eso siempre tengo algún side project en marcha (aunque solo algunos llegan a ver la luz, como condescuento.ar). Disfruto mucho resolver problemas complejos y experimentar con nuevas tecnologías. Creo que la mejor forma de crecer es meterse de lleno en los desafíos y nunca dejar de explorar.</p>
      </div>
      <div className='about-container__img'>
        <img src={perfil} alt="perfil" />
      </div>
    </div>
  )
}

export default About
