import React, { useEffect } from 'react';

const projects = [
  {
    category: '01 / AGRITECH PLATFORM',
    name: 'Bajoma',
    desc: 'Commercial wholesale standardizing the food supply chain across African markets.',
    role: 'Lead Product Designer',
    platform: 'Web, Mobile (USSD)',
    link: '#/bajoma',
    imageType: 'laptop', // styling flag
  },
  {
    category: '02 / B2B SAAS',
    name: 'Projina',
    desc: 'Centralized workspace platform streamlining HR management and internal ops.',
    role: 'Product Designer',
    platform: 'Web App',
    link: '#/projina',
    imageType: 'dashboard',
  },
  {
    category: '03 / AGENCY WEBSITE',
    name: 'Crestlancing',
    desc: 'Modern company website redesign focused on clarity and conversion.',
    role: 'UI Designer',
    platform: 'Web',
    link: '#/crestlancing',
    imageType: 'website',
  },
];

const processSteps = [
  {
    title: 'Research',
    subtitle: 'Understanding the constraints',
    desc: 'Deep diving into user needs, market constraints, and hardware limitations before drafting a single screen.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    ),
    badge: ''
  },
  {
    title: 'Strategy',
    subtitle: 'Mapping the system',
    desc: 'Defining the product roadmap, user flows, and core functionality. Ensuring alignment with business goals.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    badge: 'Built mapped for scale'
  },
  {
    title: 'Design',
    subtitle: 'System and interfaces',
    desc: 'Iterative prototyping, component architecture, and high-fidelity UI design tailored for the reality of the user.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
    ),
    badge: ''
  },
  {
    title: 'Delivery',
    subtitle: 'Handoff and QA',
    desc: 'Precise development handoff, specs documentation, and QA sessions to guarantee exact implementation.',
    icon: (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    badge: ''
  },
];

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar exact-navbar">
        <div className="container nav-inner">
          <a href="#/home" className="logo">BAH CLARKSON</a>
          <ul className="nav-links">
            <li><a href="#work">WORK</a></li>
            <li><a href="#process">PROCESS</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="container hero-inner exact-hero-inner">
          <div className="hero-content">
            <div className="hero-badge exact-badge">DESIGN SYSTEMS & PRODUCT STRATEGY</div>
            <h1 className="hero-title exact-title">Bah<br />Clarkson.</h1>
            <p className="hero-subtitle exact-subtitle">
              Building digital systems that work for the realities most products ignore. Rooted in African context. Designed with intention.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary exact-btn">Let's work together</a>
              <a href="#work" className="hero-link">See my projects →</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo-arched">
               <img src="/profile.jpg" alt="Bah Clarkson" />
            </div>
          </div>
          <div className="scroll-indicator">SCROLL</div>
        </div>
      </section>

      <section className="projects-section exact-projects-bg" id="work">
        <div className="container">
          <div className="section-header exact-header">
            <span className="section-label-tiny">SELECTED WORK</span>
            <h2 className="section-title">Projects</h2>
            <p className="section-desc">Practical solutions for real world problems, designed with high intent.</p>
          </div>
          <div className="projects-list exact-list">
            {projects.map((project, idx) => (
              <div key={idx} className={`project-item exact-project-item ${idx % 2 === 1 ? 'reverse' : ''}`}>
                <div className="project-image-box" style={{ background: project.imageType === 'laptop' ? '#091533' : project.imageType === 'dashboard' ? '#111827' : '#F3F4F6' }}>
                   {/* Placeholder matching the exact visual style */}
                   {project.imageType === 'laptop' && <div className="mock-img laptop-mock"></div>}
                   {project.imageType === 'dashboard' && <div className="mock-img dashboard-mock"></div>}
                   {project.imageType === 'website' && <div className="mock-img web-mock"></div>}
                </div>
                <div className="project-info-box">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-description">{project.desc}</p>
                  
                  <div className="project-meta-grid">
                     <div>
                        <div className="meta-label">Role</div>
                        <div className="meta-value">{project.role}</div>
                     </div>
                     <div>
                        <div className="meta-label">Platform</div>
                        <div className="meta-value">{project.platform}</div>
                     </div>
                  </div>
                  
                  <div className="project-divider"></div>
                  <a href={project.link} className="project-view-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section exact-process" id="process">
        <div className="container">
          <div className="section-header exact-header">
            <span className="section-label-tiny">HOW I APPROACH PROBLEMS</span>
            <h2 className="section-title">Process</h2>
            <p className="section-desc">I systematically break down problems before designing any solution. Here is my standard workflow for most projects.</p>
          </div>
          <div className="process-bento-grid exact-bento">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bento-card exact-bento-card">
                {step.badge && <div className="bento-floating-badge">{step.badge}</div>}
                <div>
                  <h3 className="bento-card-title">{step.title}</h3>
                  <div className="bento-card-subtitle">{step.subtitle}</div>
                  <p className="bento-card-desc">{step.desc}</p>
                </div>
                <div className="bento-icon exact-bento-icon">{step.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section exact-about" id="about">
        <div className="container about-inner exact-about-inner">
           <div className="about-text-side">
             <span className="section-label-tiny">ABOUT ME</span>
             <h2 className="about-title">I care about building digital experiences that people actually want to use.</h2>
           </div>
           <div></div> {/* empty grid spacer if needed, per design */}
           
           <div className="about-visual-container">
             {/* Abstract Shapes */}
             <div className="shape shape-star">★</div>
             <div className="shape shape-squiggle">〰</div>
             
             <div className="about-photo-arched custom-smaller-arch">
                <img src="/profile.jpg" alt="Bah Clarkson" />
             </div>
           </div>
           
           <div className="about-content accordion-side">
             <p className="about-text">
               Based in Africa, I design digital products tailored for the next billion users. I strongly believe that good design solves real problems within actual constraints, not hypothetical ideals.
             </p>
             <div className="exact-accordion-box">
               <div className="philosophy-item">
                 <div className="phi-header"><span>Trust over beauty</span><span>+</span></div>
               </div>
               <div className="philosophy-item border-top">
                 <div className="phi-header"><span>Bandwidth as a constraint</span><span>+</span></div>
               </div>
               <div className="philosophy-item border-top">
                 <div className="phi-header"><span>Design for the reality, not the ideal</span><span>+</span></div>
               </div>
               <div className="philosophy-item border-top">
                 <div className="phi-header"><span>Systems before screens (UI follows UX)</span><span>+</span></div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Solid yellow transition line/band */}
      <div className="solid-yellow-band"></div>

      <footer className="footer-section exact-contact" id="contact">
        <div className="container footer-inner">
          <div className="contact-main">
             <span className="section-label-tiny">GET IN TOUCH</span>
             <h2 className="footer-title">Let's work<br /><span className="text-yellow">together.</span></h2>
             
             <form className="contact-form exact-form">
               <div className="form-row">
                 <input type="text" placeholder="Name *" className="line-input" required />
                 <input type="email" placeholder="Email *" className="line-input" required />
               </div>
               <textarea placeholder="Tell me about your project" className="line-input" required></textarea>
               <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Let's work together</button>
             </form>
          </div>
          <div className="footer-socials exact-social-area">
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
               <h4>Status</h4>
               <p style={{ color: '#FFDC00' }}>Available for freelance work</p>
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
             <div className="footer-copy">© 2023 Bah Clarkson.</div>
           </div>
           <div className="footer-links-grid">
               <div className="footer-link-col">
                   <h4>Nav</h4>
                   <a href="#/home">Home</a>
                   <a href="#work">Projects</a>
                   <a href="#process">Process</a>
                   <a href="#about">About</a>
               </div>
               <div className="footer-link-col">
                   <h4>Socials</h4>
                   <a href="#!" onClick={(e) => e.preventDefault()}>Twitter</a>
                   <a href="#!" onClick={(e) => e.preventDefault()}>LinkedIn</a>
                   <a href="#!" onClick={(e) => e.preventDefault()}>Github</a>
               </div>
               <div className="footer-link-col">
                   <h4>Legal</h4>
                   <a href="#!">Privacy Policy</a>
               </div>
           </div>
        </div>
      </footer>
    </>
  );
}
