import React from 'react'
import './About.css';
import perfil from '../../assets/blog-pic.jpeg';

const About = () => {
  return (
    <div className='about-container'>
      <div className='about-container__desc'>
        <h3>Sobre mí</h3>
        <p>Software Development, apacionado por el código y todo lo relacionado a tecnología. Músico (ahre) bueno, me gusta la música y toco el saxo (ahre también).
          Creo que si hablo de mi no puedo no decir "me gustan los videosjuegos" en plan presentación en la primer clase de inglés, ya que seguramente tengo mas horas en la compu que durmiendo.
          Volviendo a lo importante, mis primeros pasos los di en el front con react como fuerte, pero pasé por otras tecnologías. Actualmente estoy enfocado al backend con Java y Spring Boot como framework principal y un poco de Golang, seguramente 
          mi desafío mas grande hasta la actualidad, pero me permitió demostrar(me) que me puedo adaptar y aprender para aportar rápidamente en un equipo.
        </p>
      </div>
      <div className='about-container__img'>
        <img src={perfil} alt="perfil" />
      </div>
    </div>
  )
}

export default About
