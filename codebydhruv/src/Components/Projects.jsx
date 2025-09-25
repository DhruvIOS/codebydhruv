import React from "react";
import "../styles/Project.css";
import { Helmet } from "react-helmet-async";


<Helmet>
  <title>Projects | Dhruv Shah Portfolio</title>
  <meta 
    name="description" 
    content="Explore projects by Dhruv Shah, including CliniScribe and EDU-HUB, showcasing expertise in full-stack web development, authentication, and scalable apps." 
  />
  <link rel="canonical" href="https://codebydhruv.vercel.app/#projects" />
</Helmet>

const projects = [
  {
    title: "CliniScribe",
    description:
      "CliniScribe is a healthcare-focused web application designed to streamline clinical documentation for medical professionals. It simplifies the process of recording, organizing, and retrieving patient notes while maintaining a secure and user-friendly interface. The platform emphasizes efficiency, accuracy, and accessibility to improve the workflow of healthcare providers.",
    github: "https://github.com/DhruvIOS/cliniscribe",
    live: "https://cliniscribe.vercel.app/",
    thumbnail: "/assets/images/cliniscribe.png",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase (Google Auth)", "RESTful APIs", "Git/GitHub"]
    ,
    category: "Hackathon",
  },
  {
    title: "EDU-HUB",
    description:
      "Edu-Hub is an academic platform built to connect students with resources, assignments, and community-driven discussions. It allows students to access course materials, collaborate with peers, and track academic progress in a centralized hub. The project was designed with scalability and collaboration in mind, offering a clean and engaging interface for learners",
    github: "https://github.com/DhruvIOS/edu-hub",
    live: "",
    thumbnail: "/assets/images/edu_hub.png",
    tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "bcrypt", "RESTful APIs", "Git/GitHub"],

    category: "Hackathon",
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((proj, index) => (
        <div className="project-card" key={index}>
          <img src={proj.thumbnail} alt={proj.title} className="project-img" />
          <div className="project-content">
            <p className="project-category">{proj.category}</p>
            <h3 className="project-name">{proj.title}</h3>
            <p className="project-desc">{proj.description}</p>
            <div className="project-tech">
              {proj.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {proj.live && (
                <a href={proj.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
