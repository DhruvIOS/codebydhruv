import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle Scroll Spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Handle Link Click with Animation
  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      // Scroll smoothly
      element.scrollIntoView({ behavior: 'smooth' });

      // Trigger "Landing Animation" - Removing class then re-adding to restart animation if needed
      element.classList.remove('animate-section-landed');
      void element.offsetWidth; // trigger reflow
      element.classList.add('animate-section-landed');
    }
  };

  const navLinks = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#aboutme", id: "aboutme" },
    { name: "Projects", link: "#projects", id: "projects" },
  ];

  return (
    <>
      <style>{`
        @keyframes section-landed {
            0% { box-shadow: inset 0 0 0px rgba(255,255,255,0); }
            50% { box-shadow: inset 0 0 50px rgba(255,255,255,0.15); }
            100% { box-shadow: inset 0 0 0px rgba(255,255,255,0); }
        }
        .animate-section-landed {
            animation: section-landed 1.5s ease-out;
        }
      `}</style>

      {/* Desktop Floating Pill Navbar - PROFESSIONAL (Monochrome) */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex w-auto">

        <nav className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 flex items-center gap-4 shadow-2xl ring-1 ring-white/5">

          {/* Links */}
          <ul className="flex items-center gap-1">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group ${activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                    }`}
                >
                  {/* Active State Highlight Pill (Subtle White Glow) */}
                  {activeSection === item.id && (
                    <span className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10 transition-all duration-300"></span>
                  )}

                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="h-4 w-[1px] bg-white/10"></div>

          {/* Connect Button CTA - LinkedIn Linked */}
          <a
            href="https://www.linkedin.com/in/dhruvshah23/"
            target="_blank"
            rel="noreferrer"
            className="pl-4 pr-3 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group"
          >
            <span>CONNECT</span>
            <span className="bg-black text-white rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
              <FaArrowRight size={8} />
            </span>
          </a>

        </nav>
      </div>

      {/* Mobile Navbar Button - Minimalist */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-black/90 backdrop-blur-md border border-white/10 rounded-full text-white shadow-xl focus:outline-none"
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Full Screen Menu Overlay - Dark & Clean */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="text-3xl font-medium text-white hover:text-gray-300 transition-colors tracking-tight"
            >
              {item.name}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/dhruvshah23/"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-colors"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
