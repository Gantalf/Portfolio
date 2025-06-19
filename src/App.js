import React, { useState, useEffect } from 'react';
import './App.css';
import Cover from './components/cover/Cover.jsx';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Info from './components/info/Info';
import Footer from './components/footer/Footer';

function App() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    let position = window.pageYOffset; //toammos la posicion del scroll
    setScroll(position); //la guardamos
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) //disparamos el evento con la funcion creada
  }, [scroll])

  return (
    <div className="App">
      <Navbar isScrolling={scroll} />
      <Cover />
      <About />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
