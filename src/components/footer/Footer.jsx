import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Julien FRITSCH</p>
      <p className="nb">&nbsp;&ndash;&nbsp;</p>
      <p>Développé avec
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="react-link">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
            alt="React Logo" 
            className="react-logo" 
          />
          React
        </a>
      </p>
      <div id="bottom"></div>
    </footer>
  );
}

export default Footer;