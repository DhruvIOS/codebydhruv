import React, { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTrophy } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const projects = [
  {
    title: "Evidex",
    description: "An AI-powered Digital Forensics platform that turns raw evidence into actionable intelligence. It features a secure 'Evidence Vault' for high-res logs and media, enterprise-scale semantic search across millions of records, and immutable blockchain anchoring for legal Chain of Custody.",
    github: "https://github.com/DhruvIOS/evidex",
    live: "https://evidex.tech/",
    thumbnail: "/assets/images/evidex.png",
    tech: ["Next.js", "Node.js", "Vultr", "Snowflake", "MongoDB", "Gemini AI", "Solana"],
    category: "Hackathon",
    // Blue Tint
    tint: "from-blue-500/10 via-blue-500/5 to-transparent",
    hoverTint: "group-hover:from-blue-500/20 group-hover:via-blue-500/10",
    accent: "text-blue-400"
},
  {
    title: "Crypt",
    description: "A VS Code extension to 'bury' unused code snippets. Features custom Tree View & JSON persistence.",
    github: "https://github.com/DhruvIOS/Crypt",
    live: "https://getcrypt.vercel.app/",
    thumbnail: "/assets/images/crypt.png",
    tech: ["TypeScript", "VS Code API", "Next.js", "Tailwind"],
    category: "Personal",
    // Purple Tint
    tint: "from-purple-500/10 via-purple-500/5 to-transparent",
    hoverTint: "group-hover:from-purple-500/20 group-hover:via-purple-500/10",
    accent: "text-purple-400"
  },
  {
    title: "CliniScribe",
    description: "Healthcare app for streamlining clinical documentation. Secure, organized, and user-friendly.",
    github: "https://github.com/DhruvIOS/cliniscribe",
    live: "https://cliniscribe.vercel.app/",
    thumbnail: "/assets/images/cliniscribe.png",
    tech: ["React", "Node.js", "MongoDB", "Firebase"],
    category: "Hackathon",
    // Blue Tint
    tint: "from-blue-500/10 via-blue-500/5 to-transparent",
    hoverTint: "group-hover:from-blue-500/20 group-hover:via-blue-500/10",
    accent: "text-blue-400"
  },
  {
    title: "EDU-HUB",
    description: "Academic platform connecting students with resources and discussions in a scalable hub.",
    github: "https://github.com/DhruvIOS/edu-hub",
    live: "",
    thumbnail: "/assets/images/edu_hub.png",
    tech: ["React", "Express", "MongoDB", "JWT"],
    category: "Hackathon",
    // Orange Tint
    tint: "from-orange-500/10 via-orange-500/5 to-transparent",
    hoverTint: "group-hover:from-orange-500/20 group-hover:via-orange-500/10",
    accent: "text-orange-400"
  },
  {
    title: "GreenCrew",
    description: "AI sustainability platform gamifying eco-actions. Winner at HackUMBC 2025.",
    github: "https://github.com/DhruvIOS/greencrew",
    live: "https://greencrew.tech/",
    thumbnail: "/assets/images/greencrew.png",
    tech: ["React", "TensorFlow", "Firebase", "Express"],
    category: "Hackathon",
    winner: true,
    // Green Tint
    tint: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    hoverTint: "group-hover:from-emerald-500/20 group-hover:via-emerald-500/10",
    accent: "text-emerald-400"
  },
];

const TiltCard = ({ children, className = "" }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -2;
    const rotateY = ((x - centerX) / centerX) * 2;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform duration-200 ease-out transform-gpu h-full ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
      }}
    >
      {/* Container: No colored border here. Just standard glass border. */}
      <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group border border-white/10 hover:border-white/20">
        {children}
      </div>
    </div>
  );
};

const Projects = () => (
  <section className="min-h-screen w-full bg-[#050505] overflow-hidden relative py-20 px-4" id="projects">
    <Helmet>
      <title>Projects | Dhruv Shah</title>
      <meta name="description" content="Projects by Dhruv Shah: GreenCrew, Crypt, CliniScribe." />
    </Helmet>

    {/* Animated Deep Space Background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[10%] right-[10%] w-[60vw] h-[60vw] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-[10%] left-[10%] w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
    </div>

    <div className="relative z-10 max-w-5xl mx-auto w-full">
      <div className="mb-12 text-center animate-fade-in-up">
        <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 tracking-tight mb-3">
          Selected Work
        </h2>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((proj, index) => (
          <div key={index} className="h-full">
            <TiltCard>
              {/* Image Section */}
              <div className="h-48 w-full relative overflow-hidden group-hover:h-44 transition-all duration-300">
                <img
                  src={proj.thumbnail}
                  alt={proj.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>

                {/* Floating Tag - Clean, Monochrome to reduce noise */}
                <div className="absolute top-3 left-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 shadow-lg text-gray-300">
                    {proj.winner && <FaTrophy className="text-yellow-400" />} {proj.category}
                  </div>
                </div>
              </div>

              {/* Content Section - TINTED GLASS BACKGROUND */}
              {/* This div applies the subtle gradient tint based on the project color */}
              <div className={`p-6 flex flex-col flex-1 relative backdrop-blur-md bg-gradient-to-br ${proj.tint} ${proj.hoverTint} transition-colors duration-500`}>

                {/* Title (Subtle color highlight on the text itself) */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-2xl font-bold text-white group-hover:${proj.accent} transition-colors duration-300`}>
                    {proj.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">
                      <FaGithub />
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-lg">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm mb-5 flex-1 line-clamp-3">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {proj.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 text-[10px] font-medium text-gray-300 bg-white/5 border border-white/10 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>

    <style>{`
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.1); }
        }
        .animate-pulse-slow {
            animation: pulse-slow 8s infinite ease-in-out;
        }
      `}</style>
  </section>
);

export default Projects;