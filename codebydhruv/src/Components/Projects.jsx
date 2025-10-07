import React from "react";
import "../styles/Project.css";
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "CliniScribe",
    description:
      "CliniScribe is a healthcare-focused web application designed to streamline clinical documentation for medical professionals. It simplifies the process of recording, organizing, and retrieving patient notes while maintaining a secure and user-friendly interface. The platform emphasizes efficiency, accuracy, and accessibility to improve the workflow of healthcare providers.",
    github: "https://github.com/DhruvIOS/cliniscribe",
    live: "https://cliniscribe.vercel.app/",
    thumbnail: "/assets/images/cliniscribe.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase (Google Auth)",
      "RESTful APIs",
      "Git/GitHub",
    ],
    category: "Hackathon",


  },
  {
    title: "EDU-HUB",
    description:
      "Edu-Hub is an academic platform built to connect students with resources, assignments, and community-driven discussions. It allows students to access course materials, collaborate with peers, and track academic progress in a centralized hub. The project was designed with scalability and collaboration in mind, offering a clean and engaging interface for learners.",
    github: "https://github.com/DhruvIOS/edu-hub",
    live: "",
    thumbnail: "/assets/images/edu_hub.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "bcrypt",
      "RESTful APIs",
      "Git/GitHub",
    ],
    category: "Hackathon",
  },
  {
    title: "GreenCrew",
    description:
      "GreenCrew is an AI-powered sustainability platform that gamifies eco-friendly actions. Users can scan everyday items, receive instant recycling guidance, and view their environmental impact through interactive dashboards. The project encourages sustainable living through competition and community engagement. 🏆 Winner at HackUMBC 2025 in Best Health/Environmental Hack and MLH Best .Tech Domain.",
    github: "https://github.com/DhruvIOS/greencrew",
    live: "https://greencrew.tech/",
    thumbnail: "/assets/images/greencrew.png",
    tech: [
      "React.js",
      "Tailwind CSS",
      "TensorFlow",
      "COCO-SSD Model",
      "Firebase",
      "Machine Learning",
      "RESTful APIs",
      "Express.js"
    ],
    category: "Hackathon",
    winner: true,
  },
];

const Projects = () => (
  <div>
    <Helmet>
      <title>Dhruv Shah | Full Stack Developer & IS Student</title>
      <meta
        name="description"
        content="Explore projects by Dhruv Shah, including GreenCrew (HackUMBC Winner), CliniScribe, and EDU-HUB — showcasing expertise in full-stack web development, AI, and scalable platforms."
      />
      <link rel="canonical" href="https://codebydhruv.dev/#projects" />
    </Helmet>

    <section className="projects-section" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            {proj.winner && <div className="winner-tag">🏆 Winner</div>}
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
  </div>
);

export default Projects;
