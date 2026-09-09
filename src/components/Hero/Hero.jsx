import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <span className="subtitle">Baterista y Educador</span>
          <h1 className="title">
            <span className="text-white">JAFET</span><br/>
            <span className="text-accent">NUNEZ</span>
          </h1>
          <p className="description">
            Lleva tu técnica y velocidad al siguiente nivel. Aprende con cursos, clases en línea y recursos exclusivos diseñados para bateristas que buscan la excelencia.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Explorar Cursos</button>
            <a href="#clases" className="btn-secondary">Agenda una Clase</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
