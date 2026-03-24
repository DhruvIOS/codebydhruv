import React from 'react';
import { Link } from 'react-router-dom';
import { useFadeUp } from '../hooks/useFadeUp';
import './Freelance.css';

function Hero() {
  const fadeRef = useFadeUp();
  return (
    <section className="freelance-hero theme-dark" ref={fadeRef}>
      <div className="freelance-container">
        <div className="overline">/ AVAILABLE FOR FREELANCE WORK</div>
        <h1 className="hero-title">Full-Stack MERN Developer.<br/>AI-Powered Apps &amp; MVPs.</h1>
        <p className="hero-subtitle">I help startups and founders go from idea to deployed product — fast. MERN stack, AI integrations, custom dashboards, and more.</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn-primary">Let's Talk &rarr;</a>
          <Link to="/" className="text-link">See My Work &rarr;</Link>
        </div>
        <div className="availability-indicator">
          <span className="dot"></span>
          <span>Currently accepting projects</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const fadeRef = useFadeUp();
  const servicesData = [
    {
      title: "Full-Stack Dev with AI Integration",
      desc: "Building end-to-end web applications with embedded AI components using the MERN stack. I deliver complete, intelligent products tailored to your needs—acting as a true builder, not just a coder."
    },
    {
      title: "No-Code & Automation Consulting",
      desc: "Streamlining your operations by automating core workflows in Notion and connecting your apps using n8n to eliminate repetitive manual work."
    },
    {
      title: "AI Agent & Workflow Development",
      desc: "Building LLM-powered workflows, function-calling pipelines, and AI integrations using Python and popular AI APIs that upgrade your business capabilities without the complexity."
    },
    {
      title: "Custom Agentic AI Development",
      desc: "Deploying customized AI agents trained specifically on your data—handling your FAQs, services, and support 24/7 on your website or WhatsApp, built with Firebase and Node.js on the backend."
    },
    {
      title: "Localized ML/AI-Based SEO",
      desc: "Supercharging local discoverability using semi-automated content pipelines and review generation systems to revive dead Google Business profiles and drive immediate ROI."
    }
  ];
  return (
    <section className="services-section theme-light" ref={fadeRef}>
      <div className="freelance-container">
        <div className="overline dark">/ WHAT I BUILD</div>
        <h2 className="section-title dark">Here's How I Can Help.</h2>
        <div className="services-grid">
          {servicesData.map((s, i) => {
            const icons = ['◈', '⟁', '⎔', '◓', '◎'];
            return (
              <div key={i} className="service-card fade-up-element" ref={i === 0 ? undefined : null}>
                <div className="service-header">
                  <span className="service-num">0{i + 1}</span>
                  <span className="service-icon">{icons[i]}</span>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{s.title}</h3>
                  <p className="service-desc">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const fadeRef = useFadeUp();
  const steps = [
    { num: "01", title: "Scope", desc: "Define scope, timeline, and deliverables before a line is written." },
    { num: "02", title: "Build", desc: "Milestone-based delivery with regular check-ins, no black holes." },
    { num: "03", title: "Review", desc: "2 included revisions, real feedback taken seriously." },
    { num: "04", title: "Ship", desc: "Deployed, documented, and handed off clean." },
  ];
  return (
    <section className="process-section theme-dark" ref={fadeRef}>
      <div className="freelance-container">
        <div className="overline">/ HOW I WORK</div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div key={i} className="process-step fade-up-element" ref={i === 0 ? undefined : null}>
              <div className="step-num">{s.num}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const fadeRef = useFadeUp();
  
  const pricingTiers = [
    {
      tier: "Starter",
      price: "$299",
      bestFor: "local businesses that need systems, not software",
      features: [
        "No-Code & Automation Consulting — automate core workflows in Notion and connect your apps using n8n",
        "Up to 3 automated workflows built and tested",
        "Basic Localized SEO audit — Google Business profile review + initial setup",
        "2 revisions included post-delivery (7-day window)",
        "Additional revisions: $49/each",
        "Turnaround: 5–7 business days"
      ]
    },
    {
      tier: "Builder",
      price: "$799",
      popular: true,
      bestFor: "founders who need a complete, intelligent web product",
      features: [
        "Full-Stack Dev with AI Integration — end-to-end MERN stack web app with embedded AI components",
        "No-Code & Automation Consulting — Notion + n8n workflow setup",
        "AI Agent & Workflow Development — LLM-powered pipelines and function-calling integrations using Python and popular AI APIs",
        "Localized ML/AI-Based SEO — semi-automated content pipeline + Google Business optimization",
        "3 revisions included post-delivery (14-day window)",
        "Additional revisions: $99/each",
        "Turnaround: 10–14 business days"
      ]
    },
    {
      tier: "Growth",
      price: "$1,299",
      bestFor: "businesses ready to automate customer-facing operations with AI",
      features: [
        "Everything in Builder",
        "Custom Agentic AI Development — AI agent trained on your data, handling FAQs, support, and services 24/7",
        "WhatsApp or website chatbot deployment",
        "Firebase + Node.js backend infrastructure setup",
        "Full Localized SEO pipeline — automated content + review generation system to drive Google discoverability",
        "4 revisions included post-delivery (21-day window)",
        "Additional revisions: $149/each",
        "Turnaround: 14–21 business days"
      ]
    },
    {
      tier: "Scale",
      price: "$1,999",
      bestFor: "clients who want full agency output and ongoing support",
      features: [
        "Everything in Growth",
        "Priority delivery with a dedicated Slack channel",
        "30-day post-launch support window",
        "Unlimited minor updates within the 30-day window",
        "Monthly 1-hour strategy call",
        "Unlimited revisions within 30 days (scope changes billed separately after window)",
        "Turnaround: ~14 business days (priority queue)"
      ]
    },
    {
      tier: "Custom",
      price: "Let's Talk",
      bestFor: "projects that don't fit a box",
      features: [
        "Mix and match services, one-off integrations, or unique scopes",
        "Reach out and I'll send back a proposal with flat pricing built around your specific project."
      ]
    }
  ];

  return (
    <section className="pricing-section theme-light" ref={fadeRef}>
      <div className="freelance-container">
        <div className="overline dark">/ INVESTMENT</div>
        <h2 className="section-title dark">Transparent from day one.</h2>
        <div className="pricing-grid">
          {pricingTiers.map((p, i) => (
             <div key={i} className={`pricing-card fade-up-element ${p.popular ? 'popular' : ''}`}>
               {p.popular && <div className="popular-badge">Most Popular</div>}
               <h3 className="pricing-tier">{p.tier}</h3>
               <div className="pricing-price">{p.price}</div>
               <div className="pricing-best-for">
                 <strong>Best for:</strong> {p.bestFor}
               </div>
               <div className="pricing-divider"></div>
               <ul className="pricing-features">
                 {p.features.map((f, idx) => (
                   <li key={idx}>{f}</li>
                 ))}
               </ul>
             </div>
          ))}
        </div>
        <div className="pricing-note fade-up-element">
          <strong>A note on revisions:</strong> A revision = design tweaks, content changes, bug fixes, or adjustments within the original agreed scope. New features, additional pages, or new integrations fall outside scope and are quoted separately. Revision requests must be submitted within your plan's window — anything after is billed as new work.
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const fadeRef = useFadeUp();
  return (
    <section id="contact" className="contact-section theme-dark" ref={fadeRef}>
      <div className="freelance-container text-center-sm">
        <div className="overline">/ LET'S WORK TOGETHER</div>
        <h2 className="section-title">Ready to build something real?</h2>
        
        <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Form submitted!'); }}>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <select required defaultValue="">
              <option value="" disabled>Project Type</option>
              <option value="Web App">Web App</option>
              <option value="MVP">MVP</option>
              <option value="AI Feature">AI Feature</option>
              <option value="Dashboard">Dashboard</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <select required defaultValue="">
              <option value="" disabled>Budget Range</option>
              <option value="Under $500">Under $500</option>
              <option value="$500–$1500">$500–$1500</option>
              <option value="$1500–$5000">$1500–$5000</option>
              <option value="$5000+">$5000+</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        
        <div className="contact-links">
          <a href="mailto:contact@codebydhruv.dev">contact@codebydhruv.dev</a>
          <a href="https://github.com/DhruvIOS" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/dhruvshah23/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  );
}

export default function Freelance() {
  React.useEffect(() => {
    window.scrollTo(0, 0);

    const elements = document.querySelectorAll('.fade-up-element');
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
    <div className="freelance-page">
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Contact />
    </div>
  );
}
