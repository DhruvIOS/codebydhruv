import React, { useRef, useState } from 'react';
import { FaGithub, FaShieldAlt } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb } from "react-icons/si";
import { Helmet } from "react-helmet";

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

    const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg tilt
    const rotateY = ((x - centerX) / centerX) * 5;

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
      className={`relative transition-transform duration-200 ease-out transform-gpu ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale3d(1, 1, 1)`,
      }}
    >
      {/* Glass Content */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl relative z-20 h-full overflow-hidden group">

        {/* Dynamic Spotlight */}
        <div
          className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"
          style={{
            background: `radial-gradient(circle at ${50 + rotation.y * 5}% ${50 - rotation.x * 5}%, rgba(255,255,255,0.15), transparent 60%)`
          }}
        />

        {children}
      </div>

      {/* Shadow/Glow Layer */}
      <div
        className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-3xl blur-2xl opacity-20 -z-10 transition-opacity duration-300 group-hover:opacity-40"
      />
    </div>
  );
};

const AboutMeSection = () => (
  <section className="min-h-screen w-full bg-[#050505] overflow-hidden relative flex items-center justify-center py-20 px-4" id="aboutme">
    <Helmet>
      <title>About | Dhruv Shah</title>
      <meta name="description" content="Dhruv Shah - Information Systems Student & Security Intern." />
    </Helmet>

    {/* Animated Deep Space Background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
      <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-cyan-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse-slow animation-delay-4000"></div>
    </div>

    <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transform lg:scale-95">

      {/* Prism 1: The Narrative (Bio) */}
      <div className="lg:col-span-8 flex flex-col">
        <TiltCard className="h-full">
          <div className="relative z-20 flex flex-col justify-center h-full space-y-8">
            <div>
              <h2 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 tracking-tighter mb-6">
                Architecting <br className="hidden lg:block" /> the future.
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                I'm <span className="text-cyan-400 font-medium">Dhruv Shah</span>, constructing the digital backbone of secure applications.
                As an IS student at UMBC, I blend disciplined backend logic with fluid frontend experiences.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/dhruvshah23/" target="_blank" rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-cyan-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Let's Connect
              </a>
              <a href="https://github.com/codebydhruv" target="_blank" rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-cyan-300 transition-all">
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </div>
        </TiltCard>
      </div>

      {/* Prism 2: The Engine (Stack) */}
      <div className="lg:col-span-4 flex flex-col gap-8">
        <TiltCard className="flex-1">
          <div className="h-full flex flex-col">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">/ The Engine</h3>
            <div className="grid grid-cols-2 gap-4 flex-1 content-center">
              {[
                { icon: <SiJavascript />, name: "JS", color: "text-yellow-400" },
                { icon: <SiReact />, name: "React", color: "text-cyan-400" },
                { icon: <SiNodedotjs />, name: "Node", color: "text-green-500" },
                { icon: <SiPython />, name: "Python", color: "text-blue-500" },
                { icon: <SiMongodb />, name: "Mongo", color: "text-green-400" },
                { icon: <FaShieldAlt />, name: "Security", color: "text-purple-400" },
              ].map((tech, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                  <span className={`text-2xl ${tech.color}`}>{tech.icon}</span>
                  <span className="text-gray-300 font-medium text-sm">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </TiltCard>

        {/* Prism 3: The Mission (Role) */}
        <TiltCard>
          <div className="flex flex-col gap-4">
            {/* Role 1 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Current Mission</h3>
                <div className="text-xl font-bold text-white">SWE Intern</div>
                <div className="text-gray-400 text-sm">@ Youphoria</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                <FaShieldAlt className="text-green-400 text-sm" />
              </div>
            </div>

            {/* Divider */}
            <div className="h-[1px] w-full bg-white/10"></div>

            {/* Role 2 */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Fellowship</h3>
                <div className="text-xl font-bold text-white">Dyme Fellow</div>
                <div className="text-gray-400 text-sm">@ Dyme</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <FaShieldAlt className="text-purple-400 text-sm" />
              </div>
            </div>
          </div>
        </TiltCard>
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

export default AboutMeSection;

