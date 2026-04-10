import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer fade-up-element">
      <div className="footer-container">
        <div className="footer-left">
          Dhruv Shah &copy; 2025 &middot; <Link to="/" className="footer-link">Home</Link> &middot; <Link to="/hire" className="footer-link">AI Services &amp; Pricing</Link>
        </div>
        <div className="footer-right">
          <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`} className="footer-link">{process.env.REACT_APP_CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
