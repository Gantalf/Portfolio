import React, { useState, useEffect } from 'react'
import Cover from '../../components/cover/Cover';
import Navbar from '../../components/navbar/Navbar';
import About from '../../components/about/About';
import Slider from '../../components/slider/Slider';
import Info from '../../components/info/Info';
import Footer from '../../components/footer/Footer';

const Home = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
      let position = window.pageYOffset; //toammos la posicion del scroll
      setScroll(position); //la guardamos
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll) //disparamos el evento con la funcion creada
    }, [scroll])

    return (
        <div className="home">
            <Navbar isScrolling={scroll} />
            <Cover />
            <About />
            <Slider />
            <Info />
            <Footer />
        </div>
    )
}

export default Home