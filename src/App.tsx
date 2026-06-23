import React, { useEffect, useRef, useState } from 'react';
import './App.css';

const projects = [
  {
    num: '01',
    name: 'Bajoma',
    desc: 'Agricultural marketplace connecting farmers directly to buyers across African markets. Designed for low bandwidth, high trust.',
    tags: ['Product Design', 'UI', 'UX Research'],
    image: '/project1.jpg', // Placeholder for user
    color: '#050a18',
  },
  {
    num: '02',
    name: 'Projina',
    desc: 'Company management system for employees and internal operations. Built for clarity and team efficiency.',
    tags: ['Web Design', 'SaaS', 'Systems'],
    image: '/project2.jpg',
    color: '#050a18',
  },
  {
    num: '03',
    name: 'Crestlancing',
    desc: 'Modern company website redesign focused on clarity and conversion. From wireframe to polished final design.',
    tags: ['Branding', 'Web UI', 'Prototyping'],
    image: '/project3.jpg',
    color: '#050a18',
  },
];

const processSteps = [
  {
    title: 'Research',
    desc: 'Deep diving into user needs and market constraints. Identifying the core problem before any solution.',
  },
  {
    title: 'Strategy',
    desc: 'Defining the product roadmap and core functionality. Ensuring alignment with business goals.',
  },
  {
    title: 'Design',
    desc: 'Iterative prototyping and high-fidelity UI. Designing for accessibility and African context.',
  },
  {
    title: 'Delivery',
    desc: 'Development handoff and quality assurance. Making sure the final product matches the vision.',
  },
];

export default function App() {
  const [hovering, setHovering] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  return (
    <div className="portfolio-root">
      <div ref={cursorRef} className={`custom-cursor ${hovering ? 'hovering' : ''}`} />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="logo">Bah Clarkson.</a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Get in touch</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Product Designer & Systems Builder</div>
            <h1 className="hero-title">
              Bah<br />Clarkson
            </h1>
            <p className="hero-subtitle">
              Building digital systems that work for the realities most products ignore. Rooted in African context. Designed with intention.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Work with me</a>
              <a href="#work" className="hero-link">See my projects →</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-arched">
               <img src="/profile.jpg" alt="Bah Clarkson" />
            </div>
            <div className="hero-status">
              <div className="status-dot"></div>
              <span>Available for work</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="work">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">Practical solutions for real world problems, designed with high intent.</p>
          </div>
          <div className="projects-list">
            {projects.map((project, idx) => (
              <div key={idx} className={`project-item ${idx % 2 === 1 ? 'reverse' : ''}`}>
                <div className="project-image-box">
                   <div className="project-img-placeholder" style={{ backgroundColor: '#1e293b' }}>
                     {/* Replace with <img src={project.image} /> */}
                     <div className="placeholder-text">{project.name} Visual</div>
                   </div>
                </div>
                <div className="project-info-box">
                  <span className="project-num">{project.num} — {project.tags[0]}</span>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.desc}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={`#project-${idx}`} className="project-view-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Process</h2>
            <p className="section-desc">A systematic approach to solving complex design problems.</p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-card">
                <div className="process-icon">{idx + 1}</div>
                <h3 className="process-card-title">{step.title}</h3>
                <p className="process-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="container about-inner">
           <div className="about-visual">
             <div className="about-photo-arched">
                <img src="/profile.jpg" alt="Bah Clarkson" />
             </div>
           </div>
           <div className="about-content">
             <h2 className="about-title">I care about building digital experiences that people actually want to use.</h2>
             <p className="about-text">
               I'm a Product Designer based in Africa, specializing in creating systems that are functional, accessible, and grounded in the specific needs of local users.
             </p>
             <div className="about-philosophy">
               <div className="philosophy-item active">
                 <div className="phi-header">
                   <span>Trust over beauty</span>
                   <span>+</span>
                 </div>
               </div>
               <div className="philosophy-item">
                 <div className="phi-header">
                   <span>Bandwidth as a constraint</span>
                   <span>+</span>
                 </div>
               </div>
               <div className="philosophy-item">
                 <div className="phi-header">
                   <span>Design for reality</span>
                   <span>+</span>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div className="marquee-content">
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
        </div>
      </div>

      {/* FOOTER / CONTACT SECTION */}
      <footer className="footer-section" id="contact">
        <div className="container footer-inner">
          <div className="contact-main">
             <h2 className="footer-title">Let's work<br />together.</h2>
             <form className="contact-form">
               <input type="text" placeholder="Name" />
               <input type="email" placeholder="Email" />
               <textarea placeholder="Tell me about your project"></textarea>
               <button type="submit" className="btn-primary">Work with me</button>
             </form>
          </div>
          <div className="footer-socials">
             <div className="social-column">
               <h4>Socials</h4>
               <a href="#!" onClick={(e) => e.preventDefault()}>LinkedIn</a>
               <a href="#!" onClick={(e) => e.preventDefault()}>Dribbble</a>
               <a href="#!" onClick={(e) => e.preventDefault()}>Twitter</a>
             </div>
             <div className="social-column">
               <h4>Contact</h4>
               <a href="mailto:bahclarkson44@gmail.com">bahclarkson44@gmail.com</a>
               <p>Lagos, Nigeria</p>
             </div>
          </div>
        </div>
        <div className="footer-bottom container">
           <div className="footer-brand">Bah Clarkson.</div>
           <div className="footer-tagline">Designing systems, not screens.</div>
           <div className="footer-copy">© 2026. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
