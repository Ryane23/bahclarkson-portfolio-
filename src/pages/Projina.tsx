import React, { useEffect } from 'react';

export default function Projina() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#0A1942', minHeight: '100vh', color: '#ffffff' }}>
      {/* Navbar exactly like the image */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 5%', alignItems: 'center', fontSize: '0.8rem', letterSpacing: '1px', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <a href="#/home" style={{ fontWeight: 800, textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>←</span> BAH CLARKSON
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#/home" style={{ color: 'rgba(255,255,255,0.6)', textDecoration:'none' }}>Work</a>
          <a href="#/home" style={{ color: 'rgba(255,255,255,0.6)', textDecoration:'none' }}>About</a>
          <a href="#/home" style={{ color: 'rgba(255,255,255,0.6)', textDecoration:'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ padding: '8rem 5% 4rem 5%', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div>
           <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
             Project / 02 / B2B SaaS
           </div>
           <h1 style={{ fontSize: '6rem', letterSpacing: '-2px', margin: '0 0 2rem 0', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Projina.</h1>
           <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
             A centralized software platform streamlining HR management, workflow automation and internal communication for mid-sized teams.
           </p>
        </div>

        {/* Metadata Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '2rem 0', marginTop: '2rem' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>ROLE</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Lead Product Designer</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>TIMELINE</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>6 Months • 2023</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>PLATFORM</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Web & Internal Tools</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>TEAM</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>2 PMs & 4 Devs</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>INDUSTRY</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>SaaS, HRTech</div>
          </div>
        </div>

        {/* Visual Mockups */}
        <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '2rem', marginTop: '4rem' }}>
          <div style={{ backgroundColor: '#1E283E', borderRadius: '32px', height: '600px', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div style={{ zIndex: 1, width: '100%', height: '100%', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem', fontWeight: 800 }}>Dashboard Multi-Screen</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '200px 32px 32px 32px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: 'rgba(0,0,0,0.1)', fontSize: '1.5rem', fontWeight: 800 }}>Feature Shot</span>
            </div>
            <div style={{ backgroundColor: '#FFDC00', color: '#0A1942', borderRadius: '24px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <p style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                 "Operational visibility doesn't come from more data, but from the right data surfaced at the right time and hierarchy"
               </p>
               <div style={{ marginTop: '2rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', opacity: 0.6 }}>CORE DESIGN PRINCIPLE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ backgroundColor: '#ffffff', color: '#000000', padding: '8rem 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem' }}>
          <div>
             <div style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.4)', letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600 }}>01 / The Problem</div>
             <h2 style={{ fontSize: '4.5rem', lineHeight: 1, letterSpacing: '-1.5px', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Operations<br/>break where<br/>systems don't<br/>connect.</h2>
          </div>
          <div>
             <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginBottom: '3rem' }}>
                Teams were jumping between 4 different tools—Slack, email, archaic HR databases, and fragmented Jira boards—to approve a single equipment request or vacation day. The mental overhead was destroying efficiency and leading to massive bottlenecks in daily ops.
             </p>
             
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', paddingTop: '3rem', borderTop: '2px solid rgba(0,0,0,0.1)' }}>
                <div>
                   <h5 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '1rem' }}>The Information Silo</h5>
                   <p style={{ color: 'rgba(0,0,0,0.6)', lineHeight: 1.6 }}>Operations lacked context on current state. Important conversational context was lost when updating ticket statuses, resulting in constant double-checking.</p>
                </div>
                <div>
                   <h5 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '1rem' }}>Approval Bottlenecks</h5>
                   <p style={{ color: 'rgba(0,0,0,0.6)', lineHeight: 1.6 }}>It was impossible to see at a glance who was blocking a process. Hierarchical approvals were invisible to the end user requesting the change.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Masonry Mockup Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '8rem' }}>
           <div style={{ backgroundColor: '#f8fafc', height: '600px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Wireframes & Flows</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#f8fafc', flex: 1, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>UI Component System</span>
              </div>
              <div style={{ backgroundColor: '#f8fafc', flex: 1.5, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Final Web App</span>
              </div>
           </div>
        </div>
        <div style={{ backgroundColor: '#f8fafc', height: '400px', borderRadius: '24px', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Expanded Desktop Interface</span>
        </div>
      </section>

      {/* Interface Decisions Section */}
      <section style={{ backgroundColor: '#0A1942', color: '#ffffff', padding: '10rem 5%' }}>
         <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600 }}>02 / Friction Compression</div>
         <h2 style={{ fontSize: '4.5rem', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '6rem', maxWidth: '800px', fontFamily: 'Outfit, sans-serif' }}>
            Operational decisions that compressed daily friction.
         </h2>
         
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
            {/* Item 1 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>01</span><span>ARCHITECTURE</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Single operational surface</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>By unifying chat, ticket management, and file approvals into a singular context-aware sidebar, users never had to tab-switch to understand the full context of a request.</p>
            </div>
            
            {/* Item 2 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>02</span><span>VISUAL HIERARCHY</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Status as primary signal</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>We elevated the "State" (Pending, Blocked, Approved) above titles and dates. The current bottleneck is always the most visually dominant element on screen.</p>
            </div>
            
            {/* Item 3 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>03</span><span>RESPONSIVENESS</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Field-to-office continuity</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>Mobile interfaces were optimized for one-thumb approvals so managers didn't become blockers when traveling away from their desks.</p>
            </div>
            
            {/* Item 4 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>04</span><span>CUSTOMIZATION</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Density tuned per role</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>C-Level executives see ultra-compact high-density metrics grids, while individual contributors see large, readable task cards with full context. The UI flexes based on operational need.</p>
            </div>
         </div>
      </section>

      {/* Footer Banner (Yellow for Projina!) */}
      <section style={{ backgroundColor: '#FFDC00', padding: '6rem 5%' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: '#0A1942' }}>Ready for a system that works in the real world?</p>
            <a href="#/home" style={{ backgroundColor: '#0A1942', color: '#ffffff', padding: '1.25rem 2.5rem', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>Let's work together →</a>
         </div>
      </section>

      {/* Simple Footer */}
      <footer style={{ backgroundColor: '#0A1942', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
         <div>© 2026 Bah Clarkson. All rights reserved.</div>
         <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="#/home" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Twitter</a>
            <a href="#/home" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>LinkedIn</a>
            <a href="#/home" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Dribbble</a>
         </div>
      </footer>
    </div>
  );
}
