import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useFadeUp } from '../hooks/useFadeUp';
import './Freelance.css';

function Hero() {
  const fadeRef = useFadeUp();
  return (
    <section className="freelance-hero theme-dark" ref={fadeRef}>
      <div className="freelance-container">
        <div className="overline">/ AI SERVICES FOR MARYLAND &amp; DMV BUSINESSES</div>
        <h1 className="hero-title">AI Services &amp; Automation for Small Businesses in Maryland</h1>
        <p className="hero-subtitle">I help small businesses across Maryland and the DMV area go from idea to deployed product — fast. Custom AI chatbots, MERN stack web apps, workflow automation, and local SEO to drive real results.</p>
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
      title: "Custom AI Chatbots for Maryland Businesses",
      desc: "Never miss a lead again. I build custom AI agents that handle customer questions, service requests, and bookings 24/7 — on your website or WhatsApp — so you stop losing business after hours."
    },
    {
      title: "Full-Stack Web Apps with AI Integration",
      desc: "Your business needs more than a brochure site. I build complete web applications using the MERN stack with AI features built in from day one — not bolted on after."
    },
    {
      title: "Workflow Automation for Small Business",
      desc: "Repetitive tasks like follow-ups, reminders, scheduling notifications, and lead routing — I build custom Node.js automation that runs in the background so you don't have to."
    },
    {
      title: "Local SEO & Google Business Revival",
      desc: "If customers can't find you on Google, you're invisible. I rebuild your Google Business profile, optimize for local searches, and set up a review generation system to drive real foot traffic and calls."
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
                  <h2 className="service-title">{s.title}</h2>
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
      tier: "Tier 01 — AI Intake Agent",
      price: "$149",
      tag: "Starter",
      bestFor: "businesses losing leads after hours",
      features: [
        "Custom AI intake agent on your website or WhatsApp",
        "Handles customer questions, service requests & bookings 24/7",
        "No full web app — agent only",
        "Turnaround: 3–5 business days"
      ]
    },
    {
      tier: "Tier 02 — Full-Stack + AI",
      price: "$349",
      tag: "Builder",
      popular: true,
      bestFor: "founders who need a real web product with AI built in",
      features: [
        "Full-stack MERN web application",
        "AI integration built in from day one — not added after",
        "Automated follow-ups, lead routing, or custom logic",
        "Responsive to your brand",
        "Turnaround: 7–10 business days"
      ]
    },
    {
      tier: "Tier 03 — Full Build + Agent + SEO",
      price: "$649",
      tag: "Growth",
      bestFor: "local businesses that want traffic, leads, and automation",
      features: [
        "Everything in Builder",
        "Custom AI agent (trained on your FAQs, services, and pricing)",
        "WhatsApp or website chatbot deployment",
        "Full automated review generation setup",
        "Google Business SEO setup",
        "Turnaround: 10–14 business days",
        "Upgrade credit: $149 from Tier 01 applied toward this tier"
      ]
    },
    {
      tier: "Tier 04 — Full Agency Output",
      price: "$1,099",
      tag: "Scale",
      bestFor: "repeat clients only (offered after 2+ completed projects)",
      features: [
        "Everything in Growth",
        "Priority delivery — dedicated Slack channel",
        "30-day post-launch support window",
        "Unlimited minor updates within 30 days",
        "Monthly 1-hour strategy call",
        "Agent retraining on new data included",
        "Turnaround: ~7–10 business days (priority queue)"
      ]
    }
  ];

  const addOns = [
    { label: "SEO Setup", price: "+$100" },
    { label: "WhatsApp Bot", price: "+$75" },
    { label: "Agent Retraining", price: "+$80" },
    { label: "Extra Revision", price: "+$50–75" }
  ];

  return (
    <section className="pricing-section theme-light" ref={fadeRef}>
      <div className="freelance-container">
        <div className="overline dark">/ INVESTMENT</div>
        <h2 className="section-title dark">Transparent from day one.</h2>
        <div className="pricing-grid">
          {pricingTiers.map((p, i) => (
             <div key={i} className={`pricing-card fade-up-element ${p.popular ? 'popular' : ''}`}>
               {p.popular && <div className="popular-badge">Best Value</div>}
               <div className="pricing-tag">{p.tag}</div>
               <h3 className="pricing-tier">{p.tier}</h3>
               <div className="pricing-price">{p.price} <span className="pricing-suffix">/project</span></div>
               <div className="pricing-divider"></div>
               <ul className="pricing-features">
                 {p.features.map((f, idx) => (
                   <li key={idx}>{f}</li>
                 ))}
               </ul>
             </div>
          ))}
        </div>

        <div className="addons-section fade-up-element">
          <div className="overline dark" style={{marginBottom: '1rem'}}>/ ADD-ONS</div>
          <div className="addons-grid">
            {addOns.map((a, i) => (
              <div key={i} className="addon-card">
                <span className="addon-label">{a.label}</span>
                <span className="addon-price">{a.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-note fade-up-element">
          <strong>A note on revisions:</strong> A revision = design tweaks, content changes, bug fixes, or adjustments within the original agreed scope. New features, additional pages, or new integrations fall outside scope and are quoted separately.
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const fadeRef = useFadeUp();
  const [status, setStatus] = React.useState('idle'); // idle | submitting | success | error

  const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="contact-section theme-dark" ref={fadeRef}>
      <div className="freelance-container text-center-sm">
        <div className="overline">/ LET'S WORK TOGETHER</div>
        <h2 className="section-title">Ready to build something real?</h2>

        {status === 'success' ? (
          <div className="form-success">
            <span className="success-icon">✓</span>
            <h3>Message sent!</h3>
            <p>Thanks for reaching out — I'll get back to you within 24 hours.</p>
            <button className="submit-btn" onClick={() => setStatus('idle')} style={{marginTop: '1.5rem'}}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <select name="project_type" required defaultValue="">
                <option value="" disabled>Project Type</option>
                <option value="AI Chatbot">AI Chatbot</option>
                <option value="Web App">Web App</option>
                <option value="MVP">MVP</option>
                <option value="Workflow Automation">Workflow Automation</option>
                <option value="Local SEO">Local SEO</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <select name="budget" required defaultValue="">
                <option value="" disabled>Budget Range</option>
                <option value="Under $500">Under $500</option>
                <option value="$500–$1500">$500–$1500</option>
                <option value="$1500–$5000">$1500–$5000</option>
                <option value="$5000+">$5000+</option>
              </select>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="form-error">Something went wrong. Please try again or email me directly.</p>
            )}
          </form>
        )}
        
        <div className="contact-links">
          <a href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}>{process.env.REACT_APP_CONTACT_EMAIL}</a>
          <a href={process.env.REACT_APP_GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
          <a href={process.env.REACT_APP_LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div style={{marginTop: '2rem'}}>
          <Link to="/" className="text-link" style={{fontSize: '0.95rem'}}>← Back to Portfolio</Link>
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
      <Helmet>
        <title>AI Services for Small Businesses — Code by Dhruv | Maryland</title>
        <meta name="description" content="Custom AI chatbots, full-stack MERN apps, workflow automation, and local SEO for small businesses across Maryland and the DMV area." />
        <link rel="canonical" href="https://codebydhruv.dev/hire" />
        <meta property="og:title" content="AI Services for Small Businesses — Code by Dhruv" />
        <meta property="og:description" content="Custom AI chatbots, full-stack MERN apps, workflow automation, and local SEO for small businesses across Maryland and the DMV area." />
        <meta property="og:url" content="https://codebydhruv.dev/hire" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://codebydhruv.dev/og-image.png" />
      </Helmet>
      <Hero />
      <Services />
      <Process />
      <Pricing />
      <Contact />
    </div>
  );
}
