import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route exact path="/blog" element={ <Blog /> } />
      </Routes>
    </div>
  );
}

export default App;
