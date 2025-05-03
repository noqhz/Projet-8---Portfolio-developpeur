import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">© 2025 Julien FRITSCH</div>
      <div className="links">
        <a href="https://github.com/noqhz" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/j-fritsch" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </div>
      <div id="bottom"></div>
    </footer>
  );
}

export default Footer;