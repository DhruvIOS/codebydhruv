import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer fade-up-element">
      <div className="footer-container">
        <div className="footer-left">
          Dhruv Shah &copy; 2025
        </div>
        <div className="footer-right">
          <a href="https://github.com/DhruvIOS" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruvshah23/" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="mailto:contact@codebydhruv.dev" className="footer-link">contact@codebydhruv.dev</a>
        </div>
      </div>
    </footer>
  );
}
