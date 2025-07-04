import React from 'react';
import '../styles/LandingPage.css';
import background from '../assets/images/background.jpg';
import myPic from '../assets/images/myPic.JPG';
import Navbar from './Navbar';

const LandingPage = () => {
  const handleBgImageError = (e) => {
    e.target.style.display = 'none';
    document.querySelector('.landing-container').style.background =
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  };

  const handleCircleImageError = (e) => {
    e.target.style.display = 'none';
    const container = e.target.parentElement;
    container.innerHTML =
      '<div style="background: rgba(255,255,255,0.1); border-radius: 50%; width: 400px; height: 400px; display: flex; align-items: center; justify-content: center; color: white;">Image Placeholder</div>';
  };

  return (
    <div className="landing-container relative min-h-screen text-white overflow-hidden">
      {/* Background image */}
      <img
        src={background}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 z-[-10]"
        onError={handleBgImageError}
      />

      {/* Black translucent overlay */}
      <div className="absolute inset-0 bg-black/90 z-[-5] pointer-events-none" />

      {/* Content */}
      <Navbar />

      <div className="content-wrapper relative z-10">
        <div className="text-content">
          <h1>HEY, I'M DHRUV SHAH</h1>
          <p>
            I'm a CS student and self-taught web developer who loves turning ideas
            into sleek, high-performance websites using modern tools.
          </p>
          <button className="action-button">ABOUT ME</button>
        </div>

        <div className="circle-image-container">
          <div className="circle-image-wrapper">
            <img
              src={myPic}
              alt="ProfilePic"
              className="circle-image"
              onError={handleCircleImageError}
            />
          </div>
        </div>
      </div>

      <button className="btn">
        <div className="scroll"> </div>
      </button>
    </div>
  );
};

export default LandingPage;
