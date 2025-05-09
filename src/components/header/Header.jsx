import React, { useState } from 'react';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const refreshPage = () => {
    window.location.href = '/portfolio/';
  };

  return (
    <header>
      <nav>
        <div className="nav-left">
          <h1 onClick={refreshPage}>Julien Fritsch</h1>
        </div>
        <div className={`nav-right ${isMenuOpen ? 'menu-open' : ''}`}>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <ul>
            <li><a href="#about" onClick={closeMenu}>À propos</a></li>
            <li><a href="#projets" onClick={closeMenu}>Projets</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
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