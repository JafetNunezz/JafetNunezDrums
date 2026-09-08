import React from 'react';
import './Features.css';

const Features = () => {
  const featuresList = [
    {
      id: 1,
      title: 'Cursos Completos',
      description: 'Aprende desde cero hasta niveles avanzados con módulos estructurados paso a paso.',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Clases 1 a 1',
      description: 'Sesiones personalizadas por videollamada para corregir técnica y mejorar tu groove.',
      icon: '🎥'
    },
    {
      id: 3,
      title: 'Infoproductos',
      description: 'Descarga pistas, presets, partituras y rutinas de práctica exclusivas.',
      icon: '🎧'
    }
  ];

  return (
    <section className="features-section" id="cursos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Eleva tu <span className="text-accent">Nivel</span>
          </h2>
          <p className="section-subtitle">Todo lo que necesitas para convertirte en el baterista que siempre soñaste.</p>
        </div>
        
        <div className="features-grid">
          {featuresList.map(feature => (
            <div className="feature-card" key={feature.id}>
              <div className="feature-icon" style={{ fontSize: '2rem' }}>{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <a href="#" className="feature-link">Saber más &rarr;</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
