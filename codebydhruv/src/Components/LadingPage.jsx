import React from "react";
import "../styles/LandingPage.css";
import myPic from "../assets/images/myPic.JPG";
import Navbar from "./Navbar";
import bgDarkClouds from "../assets/images/bgDarkClouds.jpg";
import AboutMeSection from "./AboutMe";  // import AboutMe
import Projects from "./Projects";
import { Helmet } from "react-helmet";



const LandingPage = () => (
  <div className="landing-root">
    <Helmet>
      <title>Dhruv Shah | Information Systems Student & Web Developer</title>
      <meta
        name="description"
        content="Portfolio of Dhruv Shah, Information Systems student and full-stack web developer. Explore projects, skills, and achievements."
      />
      <link rel="canonical" href="https://codebydhruv.vercel.app/" />
    </Helmet>
    {/* Background */}
    <img src={bgDarkClouds} alt="Background" className="landing-bg" />
    <div className="landing-overlay"></div>

    {/* Navbar */}
    <Navbar />

    {/* Hero Section (Full Screen) */}
    <section className="landing-content" id="home">
      <div className="landing-left">
        <h1 className="landing-title">
          Hi, I’m <span className="highlight">Dhruv Shah</span>
        </h1>
        <p className="landing-subtitle">
          Information Systems Student • Web Developer
        </p>
        <p className="landing-desc">
          I’m passionate about building sleek, high-performance websites and
          applications using modern tools. I love transforming ideas into
          digital experiences that are fast, elegant, and user-friendly.
        </p>
        <div className="btn-group">
          <a href="#aboutme" className="landing-btn primary">
            About Me
          </a>
          <a href="#projects" className="landing-btn secondary">
            View Projects
          </a>
        </div>
      </div>

      <div className="landing-right">
        <div className="profile-image-outer">
          <img src={myPic} alt="Dhruv Shah" className="profile-image" />
        </div>
      </div>
    </section>

  </div>
);

export default LandingPage;
