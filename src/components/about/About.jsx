import React from 'react';
import './About.scss';
import profilePic from '../../images/jf-profile.webp';
import cvPDF from '../../data/CV_JulienFRITSCH.pdf';
import pdfIcon from '../../images/icons/pdf-icon.svg';

function About() {
  return (
    <section id="about">
      <div className="section-header">
        <h1>À propos</h1>
      </div>
      <div className="about-content">
        <img src={profilePic} alt="Julien Fritsch" className="profile-pic" />
        <h2>Julien Fritsch&nbsp;<br />-&nbsp;<br />Développeur&nbsp;<br />Front-end</h2>
        <p>En reconversion professionnelle, j'ai suivi une formation de développeur web avec {' '}
            <a
              href="https://openclassrooms.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenClassrooms
            </a>
            {' '}dans laquelle j'ai appris différents langages et technologies web à travers différents projets.
          </p>
        <p>
          <br />Je suis à la recherche d'un poste de développeur front-end afin d'approfondir
          mes connaissances et d'élargir mon éventail de compétences.
        </p>
        <h3>Compétences</h3>
        <p>
          Front-end : HTML, CSS, JavaScript, React.js, Sass/Scss<br />
          Back-end : Node.js, Express.js, MongoDB<br />
          Outils : VS Code, Git, GitHub, Figma, Postman<br />
          Méthodologies : Agile, Scrum<br />
          Autres : SEO, Accessibilité, Responsive Design<br />
        </p>
        <div className="about-links">
            <a href="https://github.com/noqhz" target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/j-fritsch" target="_blank" rel="noopener noreferrer" className="btn">
              LinkedIn
            </a>
            <a href={cvPDF} target="_blank" rel="noopener noreferrer" className="btn">
              <span>CV</span>
              <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
            </a>
          </div>
      </div>
    </section>
  );
}

export default About;