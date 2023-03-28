import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ isScrolling }) => {
  const toTop = () => {
    //le decimos hacia donde se va a mover. con smooth hacemos que sea fluido y no de golpe.
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <nav className={`navbar-container ${isScrolling > 20 ? 'scrolling' : 0}`}>
      <div className='navbar-container__logo'>
        <Link to='/' className="custom-link">
          <h1 onClick={toTop}>Luciano</h1>
        </Link>
        <Link to='blog' className="custom-link">
          <h1>Blog</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
