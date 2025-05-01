import React from 'react';
import About from '../about/About';
import Projets from '../projets/Projets';
import Contact from '../contact/Contact';
import './Home.scss';

function Home() {
  return (
    <div id="main-container">
      <About />
      <Projets />
      <Contact />
    </div>
  );
}

export default Home;