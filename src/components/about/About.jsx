import React from 'react';
import './About.scss';
import profilePic from '../../images/jf-profile.jpg';
import cvPDF from '../../data/JulienFRITSCH_CV.pdf';
import pdfIcon from '../../images/icons/pdf-icon.png';

function About() {
  return (
    <section id="about">
      <div className="section-header">
        <h1>Julien Fritsch</h1>
      </div>
      <div className="about-content">
      <img src={profilePic} alt="Julien Fritsch" className="profile-pic" />
      <p>Développeur Front-end</p>
      <p>En reconversion professionnelle, j'ai suivi une formation de développeur web avec OpenClassrooms.</p>
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