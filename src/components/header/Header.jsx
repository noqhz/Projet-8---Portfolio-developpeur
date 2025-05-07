import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <div className="nav-left">
          <h1>Julien Fritsch</h1>
        </div>
        <div className="nav-right">
          <ul>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
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
        </div>
      </nav>
    </header>
  );
}

export default Header;