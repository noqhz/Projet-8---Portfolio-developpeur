import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a href="#top">
        <button aria-label="Retour en haut">
          ↑
        </button>
      </a>
    </header>
  );
}

export default Header;