import React, { useEffect } from 'react';

export default function Projina() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar" style={{ background: 'var(--bg-navy)' }}>
        <div className="container nav-inner">
          <a href="#/home" className="logo">Bah Clarkson.</a>
          <ul className="nav-links">
             <li><a href="#/home">← Back to Home</a></li>
          </ul>
        </div>
      </nav>

      <section className="project-detail-hero" style={{ background: 'var(--bg-navy)', color: 'white', paddingTop: '150px', paddingBottom: '100px' }}>
         <div className="container">
            <h1 style={{ fontSize: '5rem', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Projina.</h1>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '4rem' }}>
              A centralized software platform streamlining HR management, workflow automation and internal communication for mid-sized teams.
            </p>
            <div style={{ display: 'flex', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '4rem' }}>
               <div>
                 <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>ROLE</div>
                 <div>Product Designer</div>
               </div>
               <div>
                 <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>TIMELINE</div>
                 <div>4 Months</div>
               </div>
            </div>

            {/* Visuals */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
               <div style={{ background: '#1e293b', borderRadius: '24px', overflow: 'hidden', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem' }}>Dashboard Interface</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ background: 'white', borderRadius: '24px 24px 24px 200px', flex: 1 }}></div>
                  <div style={{ background: 'var(--accent-yellow)', color: 'var(--text-dark)', padding: '2rem', borderRadius: '16px' }}>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: '1.4' }}>
                      "Operational visibility doesn't come from more data, but from the right data surfaced at the right time and hierarchy"
                    </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section style={{ padding: '120px 0', background: 'white' }}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
               <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '2rem' }}>Operations<br/>break where<br/>systems don't<br/>connect.</h2>
            </div>
            <div>
               <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                 Teams were jumping between 4 different tools to approve a single equipment request. The mental overhead was destroying efficiency.
               </p>
               <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: 'var(--text-dark)', fontWeight: 500, fontSize: '0.9rem' }}>
                 <div><strong style={{ display:'block', marginBottom:'0.5rem' }}>The Information Silo</strong>Teams lacked context on state.</div>
                 <div><strong style={{ display:'block', marginBottom:'0.5rem' }}>Approval Bottlenecks</strong>Hard to know who was blocking.</div>
               </ul>
            </div>
         </div>
      </section>

      <section style={{ padding: '0 0 120px 0', background: 'white' }}>
          <div className="container">
             <div style={{ background: '#f8fafc', borderRadius: '24px', minHeight: '600px', padding: '4rem', textAlign: 'center' }}>
                <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem' }}>Prototyping & Flow Mapping Visuals</span>
             </div>
          </div>
      </section>

      <section style={{ background: '#0e1b42', color: 'white', padding: '120px 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '4rem', maxWidth: '700px' }}>Operational decisions that compressed daily friction.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
               <div>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.25rem', marginBottom: '1rem' }}>Single operational surface</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Unifying chat, tasks, and file management into a single context-aware sidebar.</p>
               </div>
               <div>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.25rem', marginBottom: '1rem' }}>Status as primary signal</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Making the current state of a task the most visually dominant element.</p>
               </div>
               <div>
                   <h4 style={{ color: 'var(--text-white)', fontSize: '1.25rem', marginBottom: '1rem' }}>Density tuned per role</h4>
                   <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Managers see compact high-density lists, field workers see large cards.</p>
               </div>
            </div>
         </div>
      </section>

      <footer className="footer-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container">
           <h2 className="footer-title" style={{ textAlign: 'center' }}>Ready to <span className="text-yellow">talk?</span></h2>
           <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href="mailto:bahclarkson44@gmail.com" className="btn-primary">Work with me</a>
           </div>
        </div>
      </footer>
    </>
  );
}
