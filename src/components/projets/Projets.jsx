import React from 'react';
import './Projets.scss';
import Card from '../card/Card';
import projectData from '../../data/projets.json';

function Projets() {
  return (
    <section id="projets">

      <div className="section-header">
        <h1>Mes projets</h1>
      </div>

      <div className="projets-gallery">
        {projectData.map((projet, index) => (
          <Card
            key={index}
            image={projet.image}
            title={projet.title}
            description={projet.description}
            link={projet.link}
          />
        ))}
      </div>

    </section>
  );
}

export default Projets;