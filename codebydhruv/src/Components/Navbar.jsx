import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  
  // Work and about are on the portfolio page
  const isWorkActive = location.pathname === '/' && location.hash !== '#about';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Dhruv Shah
        </Link>
        <div className="navbar-links">
          <Link to="/" className={`nav-link ${isWorkActive ? 'active' : ''}`}>Work</Link>
          <a href="/#about" className="nav-link">About</a>
          <Link to="/hire" className={`nav-link hire-me-btn ${isActive('/hire') ? 'active-btn' : ''}`}>Hire Me</Link>
        </div>
      </div>
    </nav>
  );
}
