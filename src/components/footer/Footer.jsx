import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">© 2025 Julien FRITSCH</div>
      <div className="links">
        <a href="https://github.com/noqhz" className="circle-button" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        <a href="https://www.linkedin.com/in/j-fritsch" className="circle-button" target="_blank" rel="noopener noreferrer">
          Linkedin
        </a>
      </div>
    </footer>
  );
}

export default Footer;