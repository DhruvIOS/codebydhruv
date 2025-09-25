import React, { useState } from "react";
import MyLogo from "../assets/images/MyLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3 bg-black/60 backdrop-blur-md text-primary z-50 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img src={MyLogo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Hamburger Toggle (Mobile) */}
      <div
        className="md:hidden text-white cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>

      {/* Nav Links */}
      <ul
        className={`absolute md:relative top-full left-0 right-0 md:flex md:items-center md:space-x-8 bg-black/90 md:bg-transparent text-center transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 py-6"
            : "max-h-0 opacity-0 md:opacity-100 md:max-h-screen"
        } overflow-hidden`}
      >
        {["HOME", "ABOUT ME", "PROJECT"].map((item) => (
          <li key={item}>
            <a
              href="#"
              className="block py-3 px-4 text-lg font-outfit font-medium text-secondary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#7b9dff] hover:to-[#764ba2] transition duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
