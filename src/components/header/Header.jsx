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
        <button aria-label="Haut de la page">
          ↑
        </button>
      </a>
      <a href="#bottom">
          <button aria-label="Bas de la page">
            ↓
          </button>
      </a>
    </header>
  );
}

export default Header;