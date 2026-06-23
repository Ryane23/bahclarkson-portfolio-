import React from 'react';

const projects = [
  {
    num: '01',
    name: 'Bajoma',
    desc: 'Agricultural marketplace connecting farmers directly to buyers across African markets. Designed for low bandwidth, high trust.',
    tags: ['Product Design', 'UI', 'UX Research'],
    link: '#/bajoma',
  },
  {
    num: '02',
    name: 'Projina',
    desc: 'Company management system for employees and internal operations. Built for clarity and team efficiency.',
    tags: ['Web Design', 'SaaS', 'Systems'],
    link: '#/projina',
  },
  {
    num: '03',
    name: 'Crestlancing',
    desc: 'Modern company website redesign focused on clarity and conversion. From wireframe to polished final design.',
    tags: ['Branding', 'Web UI', 'Prototyping'],
    link: '#/crestlancing', // future placeholder
  },
];

const processSteps = [
  {
    title: 'Research',
    desc: 'Deep diving into user needs and market constraints. Identifying the core problem before any solution.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    )
  },
  {
    title: 'Strategy',
    desc: 'Defining the product roadmap and core functionality. Ensuring alignment with business goals.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    )
  },
  {
    title: 'Design',
    desc: 'Iterative prototyping and high-fidelity UI. Designing for accessibility and African context.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
    )
  },
  {
    title: 'Delivery',
    desc: 'Development handoff and quality assurance. Making sure the final product matches the vision.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    )
  },
];

export default function HomePage() {
  return (
    <>
      <nav className="navbar">
        <div className="container nav-inner">
          <a href="#/home" className="logo">Bah Clarkson.</a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Get in touch</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Product Designer & Systems Builder</div>
            <h1 className="hero-title">Bah<br />Clarkson</h1>
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
                     <div className="placeholder-text">{project.name} Visual</div>
                     {/* Replace with <img src={project.image} alt={project.name}/> appropriately */}
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
                  <a href={project.link} className="project-view-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Process</h2>
            <p className="section-desc">I systematically break down problems before designing any solution. Here is my standard workflow for most projects.</p>
          </div>
          <div className="process-bento-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bento-card">
                <div>
                  <h3 className="bento-card-title">{step.title}</h3>
                  <p className="bento-card-desc">{step.desc}</p>
                </div>
                <div className="bento-icon">{step.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                 <div className="phi-header"><span>Trust over beauty</span><span>+</span></div>
               </div>
               <div className="philosophy-item">
                 <div className="phi-header"><span>Bandwidth as a constraint</span><span>+</span></div>
               </div>
               <div className="philosophy-item">
                 <div className="phi-header"><span>Design for reality</span><span>+</span></div>
               </div>
             </div>
           </div>
        </div>
      </section>

      <div className="marquee">
        <div className="marquee-content">
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
          <span>PRODUCT DESIGNER • UI/UX • SYSTEMS THINKING • RESEARCH • </span>
        </div>
      </div>

      <footer className="footer-section" id="contact">
        <div className="container footer-inner">
          <div className="contact-main">
             <h2 className="footer-title">Let's work<br /><span className="text-yellow">together.</span></h2>
             <form className="contact-form">
               <div className="form-row">
                 <input type="text" placeholder="Name *" required />
                 <input type="email" placeholder="Email *" required />
               </div>
               <textarea placeholder="Tell me about your project" required></textarea>
               <button type="submit" className="btn-primary">Work with me</button>
             </form>
          </div>
          <div className="footer-socials">
             <div className="social-column">
               <h4>Let's Connect</h4>
               <a href="#!" onClick={(e) => e.preventDefault()}>Twitter</a>
               <a href="#!" onClick={(e) => e.preventDefault()}>LinkedIn</a>
               <a href="#!" onClick={(e) => e.preventDefault()}>Dribbble</a>
             </div>
             <div className="social-column">
               <h4>Contact</h4>
               <a href="mailto:bahclarkson44@gmail.com">bahclarkson44@gmail.com</a>
               <p>Lagos, Nigeria</p>
               <br />
               <h4>Available</h4>
               <p>For freelance work</p>
             </div>
          </div>
        </div>
        <div className="footer-bottom container">
           <div className="footer-brand-section">
             <h2 className="footer-brand">Designing systems,<br />not screens.</h2>
             <p className="footer-tagline">
               Product designer — Based in Africa, building digital<br/>
               experiences for the next billion users.
             </p>
             <div className="footer-copy">© 2026 Bah Clarkson.</div>
           </div>
           <div className="footer-links-grid">
               <div className="footer-link-col">
                   <h4>Nav</h4>
                   <a href="#/home">Home</a>
                   <a href="#work">Projects</a>
                   <a href="#about">About</a>
                   <a href="#contact">Contact</a>
               </div>
               <div className="footer-link-col">
                   <h4>Socials</h4>
                   <a href="#!" onClick={(e) => e.preventDefault()}>Twitter</a>
                   <a href="#!" onClick={(e) => e.preventDefault()}>LinkedIn</a>
                   <a href="#!" onClick={(e) => e.preventDefault()}>Github</a>
               </div>
           </div>
        </div>
      </footer>
    </>
  );
}
