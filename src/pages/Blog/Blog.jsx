import React, { useState, useEffect } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './Blog.css'


const Blog = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
      let position = window.pageYOffset; //toammos la posicion del scroll
      setScroll(position); //la guardamos
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll) //disparamos el evento con la funcion creada
    }, [scroll])

    return (
        <div className="blog">
            <Navbar isScrolling={scroll} />
            <div className="blog--banner">
                <h1 className="blog--title">Blog</h1>
                <p className="blog--subtitle">Opinión | Escritor ocasional</p>
            </div>
            <div className="blog--articles">
                <article className="blog--wpp">
                    <div className='hacker-img'>
                    </div>
                    <div>
                        <h1>
                            Hackeado
                        </h1>
                        <p>
                            Un dia te levantas, agarras tu celular y estas 
                            deslogeado de todas las apps, no podes mandar msj ni llamar..
                        </p>
                    </div>
                </article>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog