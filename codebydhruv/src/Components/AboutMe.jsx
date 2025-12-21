import React from 'react';
import { FaLaptopCode, FaReact, FaNodeJs, FaPython, FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/AboutMe.css';
import { Helmet } from "react-helmet";




const techStack = [
  { name: "JavaScript", icon: <FaLaptopCode /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Express.js", icon: <FaLaptopCode /> },
  { name: "MongoDB", icon: <FaGithub /> },
];

const AboutMeSection = () => (

  <div>

    <Helmet>
      <title>About Me | Dhruv Shah</title>
      <meta
        name="description"
        content="Learn more about Dhruv Shah, Information Systems student, backend developer, and security intern with experience in React, Node.js, and MongoDB."
      />
      <link rel="canonical" href="https://codebydhruv.vercel.app/#aboutme" />
    </Helmet>

    <section className="aboutme-fullscreen" id="aboutme">
      <div className="aboutme-content">
        <h2 className="aboutme-title">
          <FaLaptopCode className="icon-title" />
          About Me
        </h2>
        <div className="aboutme-codeblock">
          <span className="aboutme-console">console.log(</span>
          <span className="aboutme-string">"Hey, I'm Dhruv Shah 👋"</span>
          <span className="aboutme-console">);</span>
        </div>
        <div className="aboutme-tags">
          <span className="tag">IS Student @ UMBC</span>
          <span className="tag">Security Intern</span>
        </div>
        <span className="aboutme-subtle">Turning caffeine into code since 2020 ☕️</span>
        <p className="aboutme-bio">
          I specialize in building <span className="aboutme-keyword">high-performance web apps</span> and <span className="aboutme-keyword">secure backends</span>.<br />
          <span className="aboutme-keyword">Currently:</span> Security Intern @ Youphoria | Backend Developer | Prompt Engineer
        </p>
        <div className="aboutme-stack-title">Tech Stack:</div>
        <div className="aboutme-stack">
          {techStack.map((tech, i) => (
            <span key={i} className="aboutme-tech">
              {tech.icon} {tech.name}
            </span>
          ))}
        </div>
        <div className="aboutme-connect">
          <span className="aboutme-keyword">Let’s connect:</span>
          <a href="https://www.linkedin.com/in/dhruvshah23/" target="_blank" rel="noopener noreferrer" className="aboutme-link">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
      <div className="code-bar">
        <span>&lt;Code. Security. Creativity. Coffee. Repeat/&gt;</span>
      </div>
    </section>
  </div>
);

export default AboutMeSection;

