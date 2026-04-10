import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFadeUp } from '../hooks/useFadeUp';
import logoWhite from '../assets/images/MyLogo(white).png';
import './Portfolio.css';

function Hero() {
  const fadeRef = useFadeUp();
  return (
    <section className="hero-section theme-dark" ref={fadeRef}>
      <div className="noise-overlay"></div>
      <div className="hero-container">
        <div className="hero-left">
          <div className="overline">FREELANCE DEVELOPER & AI SPECIALIST — MARYLAND</div>
          <h1 className="hero-title">I build things that actually work.</h1>
          <p className="hero-subtitle">Freelance Full-Stack Developer and AI Specialist taking businesses from idea to deployed product. I build custom web applications, AI integrations, and seamless workflow automations for clients across Maryland and beyond.</p>
          <div className="hero-ctas">
            <Link to="/hire" className="btn-primary">See My AI Automation Services</Link>
            <a href="#projects" className="text-link">View My Work ↓</a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-brand-presentational">
            <img src={logoWhite} alt="Dhruv Shah - Freelance AI Developer Maryland" className="hero-main-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const fadeRef = useFadeUp();
  return (
    <section className="stats-bar" ref={fadeRef}>
      <div className="stats-container">
        4 Projects Shipped &middot; 1 Hackathon Win &middot; UMBC IS Student &middot; 1 Active Internship
      </div>
    </section>
  );
}

const projectsData = [
  {
    title: "Evidex",
    description: "An AI-powered Digital Forensics platform that turns raw evidence into actionable intelligence. It features a secure 'Evidence Vault' for high-res logs and media, enterprise-scale semantic search across millions of records, and immutable blockchain anchoring for legal Chain of Custody.",
    github: `${process.env.REACT_APP_GITHUB_URL}/evidex`,
    live: "https://evidex.tech/",
    thumbnail: "/assets/images/evidex.png",
    alt: "Evidex - AI-powered digital forensics platform built with Next.js and Node.js",
    tech: ["Next.js", "Node.js", "Vultr", "Snowflake", "MongoDB", "Gemini AI", "Solana"],
    category: "Hackathon",
    accentRgb: "59, 130, 246",
    accentHex: "#60a5fa"
  },
  {
    title: "Crypt",
    description: "A VS Code extension to 'bury' unused code snippets. Features custom Tree View & JSON persistence.",
    github: `${process.env.REACT_APP_GITHUB_URL}/Crypt`,
    live: "https://getcrypt.vercel.app/",
    thumbnail: "/assets/images/crypt.png",
    alt: "Crypt - VS Code extension for managing and archiving unused code snippets",
    tech: ["TypeScript", "VS Code API", "Next.js", "Tailwind"],
    category: "Personal",
    accentRgb: "168, 85, 247",
    accentHex: "#c084fc"
  },
  {
    title: "CliniScribe",
    description: "Healthcare app for streamlining clinical documentation. Secure, organized, and user-friendly.",
    github: `${process.env.REACT_APP_GITHUB_URL}/cliniscribe`,
    live: "https://cliniscribe.vercel.app/",
    thumbnail: "/assets/images/cliniscribe.png",
    alt: "CliniScribe - Healthcare documentation app built with React and Firebase for clinical professionals",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    category: "Hackathon",
    accentRgb: "59, 130, 246",
    accentHex: "#60a5fa"
  },
  {
    title: "EDU-HUB",
    description: "Academic platform connecting students with resources and discussions in a scalable hub.",
    github: `${process.env.REACT_APP_GITHUB_URL}/edu-hub`,
    live: "",
    thumbnail: "/assets/images/edu_hub.png",
    alt: "EDU-HUB - Academic collaboration platform built with the MERN stack",
    tech: ["React", "Express", "MongoDB", "JWT"],
    category: "Hackathon",
    accentRgb: "249, 115, 22",
    accentHex: "#fb923c"
  },
  {
    title: "GreenCrew",
    description: "AI sustainability platform gamifying eco-actions. Winner at HackUMBC 2025.",
    github: `${process.env.REACT_APP_GITHUB_URL}/greencrew`,
    live: "https://greencrew.tech/",
    thumbnail: "/assets/images/greencrew.png",
    alt: "GreenCrew - AI sustainability platform and HackUMBC 2025 domain winner",
    tech: ["React", "TensorFlow", "Firebase", "Express"],
    category: "Hackathon",
    winner: true,
    accentRgb: "16, 185, 129",
    accentHex: "#34d399"
  },
];

function Projects() {
  const fadeRef = useFadeUp();
  const [filter, setFilter] = React.useState('All');
  
  const filteredProjects = projectsData.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="projects" className="projects-section theme-light" ref={fadeRef}>
      <div className="projects-container">
        <div className="overline dark">/ SELECTED WORK</div>
        <h2 className="section-title dark">Full-Stack Web Apps with AI Integration</h2>
        
        <div className="filter-tabs">
          {['All', 'Hackathon', 'Personal'].map(tab => (
            <button key={tab} className={`filter-tab ${filter === tab ? 'active' : ''}`} onClick={() => setFilter(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className="project-card fade-up-element" 
              ref={idx === 0 ? undefined : null}
              style={{
                '--card-accent-rgb': proj.accentRgb,
                '--card-accent-hex': proj.accentHex
              }}
            >
              {proj.thumbnail && (
                <div className="project-thumbnail">
                  <img src={proj.thumbnail} alt={proj.alt} loading="lazy" />
                </div>
              )}
              <div className="project-content">
                <div className="project-header-row">
                  <div className={`project-badge ${proj.category === 'Hackathon' ? 'hackathon' : 'personal'}`}>
                    {proj.category}
                  </div>
                  {proj.winner && <div className="winner-badge">🏆 Winner</div>}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
                <div className="project-links">
                  {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                  {proj.live && <a href={proj.live} target="_blank" rel="noreferrer">Live ↗</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const fadeRef = useFadeUp();
  const skills = ["React", "Node.js", "MongoDB", "Firebase", "TypeScript", "Python", "Next.js", "Express", "TensorFlow", "Snowflake", "GenAI", "VS Code API"];
  
  return (
    <section id="about" className="about-section theme-dark" ref={fadeRef}>
      <div className="about-container">
        <div className="about-left">
          <div className="overline">/ ABOUT</div>
          <h2 className="section-title">Builder by nature. Developer by trade.</h2>
          <p className="about-body">
            I'm a Full Stack Developer and Information Systems student at UMBC with a focus on web apps, ML integration, and API engineering. I'm currently an SWE Intern at Youphoria building iOS features, and I care deeply about crafting clean, secure, and highly functional user experiences. I work with small businesses across Maryland — from Annapolis and Pasadena to Baltimore, Columbia, and beyond — building custom AI solutions and full-stack web applications that solve real problems.
          </p>
          
          <h3 className="subsection-title">Experience &amp; Education</h3>
          <div className="experience-list">
             <div className="exp-item">
                <div className="exp-year">2026 &mdash; Present</div>
                <div className="exp-details">
                   <h4>SWE Intern</h4>
                   <p>Youphoria</p>
                </div>
             </div>
             <div className="exp-item">
                <div className="exp-year">Exp. 2027</div>
                <div className="exp-details">
                   <h4>Information Systems, B.S.</h4>
                   <p>UMBC</p>
                </div>
             </div>
             <div className="exp-item">
                <div className="exp-year">2023 &mdash; 2025</div>
                <div className="exp-details">
                   <h4>Frontend Developer</h4>
                   <p>Towson Cyber Defense Club</p>
                </div>
             </div>
          </div>
        </div>
        <div className="about-right">
          <div className="info-card">
            <h3 className="card-title">Core Technologies</h3>
            <div className="skills-wrap">
              {skills.map(skill => <span key={skill} className="skill-pill">{skill}</span>)}
            </div>
          </div>
          
          <div className="info-card">
            <h3 className="card-title">Milestones</h3>
            <ul className="milestone-list">
               <li><strong>HackUMBC '25</strong> Domain Winner — GreenCrew</li>
               <li><strong>Goldman Sachs</strong> SWE Virtual Experience</li>
               <li><strong>Hackathons</strong> Hophacks &amp; Bitcamp Participant</li>
            </ul>
          </div>

          <div className="info-card">
            <Link to="/hire" className="text-link" style={{fontSize: '1rem'}}>View AI Services &amp; Pricing →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Give elements outside main section a fade intercept 
  useEffect(() => {
      const elements = document.querySelectorAll('.project-card');
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      elements.forEach(el => observer.observe(el));
      return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="portfolio-page">
      <Helmet>
        <title>Dhruv Shah — AI Developer &amp; Automation Specialist | Maryland</title>
        <meta name="description" content="Dhruv Shah is a freelance AI developer and automation specialist serving small businesses across Maryland and the DMV area." />
        <link rel="canonical" href="https://codebydhruv.dev/" />
        <meta property="og:title" content="Dhruv Shah — AI Developer & Automation Specialist" />
        <meta property="og:description" content="Custom AI agents, full-stack web apps, and automation for small businesses across Maryland and the DMV area." />
        <meta property="og:url" content="https://codebydhruv.dev/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://codebydhruv.dev/og-image.png" />
      </Helmet>
      <Hero />
      <StatsBar />
      <About />
      <Projects />
    </div>
  );
}
