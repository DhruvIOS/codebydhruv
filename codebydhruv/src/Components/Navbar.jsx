import React, { useState } from "react";
import MyLogo from "../assets/images/MyLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2  md:shadow-lg bg-black/30 text-primary relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={MyLogo} alt="Logo" className="h-20 w-auto" />
      </div>

      {/* Hamburger Toggle (Mobile) */}
      <div className="md:hidden text-white cursor-pointer z-50" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>

      {/* Nav Links */}
      <ul
        className={`absolute md:relative top-full left-0 right-0 md:flex md:items-center md:space-x-6 bg-black/90 md:bg-transparent text-center transition-all duration-300 ease-in-out ${isOpen ? "block py-4" : "hidden"
          }`}
      >
        <li>
          <a href="#" className="block py-2 text-lg font-medium text-secondary hover:text-accent transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 text-lg font-medium text-secondary hover:text-accent transition duration-300">
            About Me
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 text-lg font-medium text-secondary hover:text-accent transition duration-300">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
