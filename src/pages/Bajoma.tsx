import React, { useEffect } from 'react';

export default function Bajoma() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#060B19', minHeight: '100vh', color: '#ffffff' }}>
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
             Project / 01 / Agritech Platform
           </div>
           <h1 style={{ fontSize: '6rem', letterSpacing: '-2px', margin: '0 0 2rem 0', fontFamily: 'Outfit, sans-serif', fontWeight: 800 }}>Bajoma.</h1>
           <p style={{ maxWidth: '700px', fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
             Commercial wholesale standardizing the food supply chain across African markets. Designed for the realities of low bandwidth, high trust and fast execution.
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
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>4 Months • 2023</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>PLATFORM</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Web & Android / USSD</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>TEAM</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Founder, PM & 2 Devs</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem', letterSpacing: '1px' }}>INDUSTRY</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>Agritech, Supply Chain</div>
          </div>
        </div>

        {/* Visual Mockups */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '2rem', marginTop: '4rem' }}>
          <div style={{ backgroundColor: '#111319', borderRadius: '32px', height: '600px', display: 'flex', alignItems: 'center', justifyItems: 'center', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
            {/* Pattern overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            <div style={{ zIndex: 1, width: '100%', height: '100%', border: '2px solid rgba(255,255,255,0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '2rem', fontWeight: 800 }}>Laptop Mockup</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ backgroundColor: '#111319', borderRadius: '32px 200px 32px 32px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
               <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Mobile Mockup</span>
            </div>
            <div style={{ backgroundColor: '#FFDC00', color: '#060B19', borderRadius: '24px', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
               <svg style={{ width: '40px', marginBottom: '1.5rem', color: '#060B19' }} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
               <p style={{ fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.4, margin: 0 }}>
                 "Many farmers relied on unstable mobile connections. We reduced page weight by 70% and recovered 3x more completed orders"
               </p>
               <div style={{ marginTop: '2rem', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1px', opacity: 0.6 }}>METRIC IMPROVEMENT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ backgroundColor: '#ffffff', color: '#000000', padding: '8rem 5%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem' }}>
          <div>
             <div style={{ fontSize: '0.8rem', color: 'rgba(0,0,0,0.4)', letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600 }}>01 / Core Philosophy</div>
             <h2 style={{ fontSize: '4.5rem', lineHeight: 1, letterSpacing: '-1.5px', margin: 0, fontFamily: 'Outfit, sans-serif' }}>Trust before<br/>transaction.</h2>
          </div>
          <div>
             <p style={{ fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.7)', marginBottom: '3rem' }}>
               Trust is the ultimate currency in B2B agricultural markets. Users needed to feel absolute certainty before making large corporate transactions. Every single interface element was crafted to project stability, transparency and predictability. When the system feels bulletproof, users buy.
             </p>
             
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', paddingTop: '3rem', borderTop: '2px solid rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFDC00' }}></div>
                   <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Clear delivery SLAs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFDC00' }}></div>
                   <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Immutable order histories</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFDC00' }}></div>
                   <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Dedicated account managers</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FFDC00' }}></div>
                   <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>Payment confirmation protocols</span>
                </div>
             </div>
          </div>
        </div>

        {/* Masonry Mockup Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '8rem' }}>
           <div style={{ backgroundColor: '#f1f5f9', height: '700px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Mobile View 1</span>
           </div>
           <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#f1f5f9', flex: 1, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Laptop View</span>
              </div>
              <div style={{ backgroundColor: '#f1f5f9', flex: 1.5, borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem', fontWeight: 800 }}>Mobile View 2</span>
              </div>
           </div>
        </div>
      </section>

      {/* Interface Decisions Section */}
      <section style={{ backgroundColor: '#060B19', color: '#ffffff', padding: '10rem 5%' }}>
         <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase', fontWeight: 600 }}>02 / Engineering Trust</div>
         <h2 style={{ fontSize: '4.5rem', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '6rem', maxWidth: '800px', fontFamily: 'Outfit, sans-serif' }}>
            Interface decisions that moved the metric.
         </h2>
         
         <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem' }}>
            {/* Item 1 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>01</span><span>RELIABILITY</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Offline-first receipts</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>By ensuring users could access their delivery barcodes and order numbers without an internet connection, we reduced friction at the warehouse handoff by 40%. The UI heavily prioritizes saving state locally.</p>
            </div>
            
            {/* Item 2 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>02</span><span>VERIFICATION</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Trust column over star ratings</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>Farmers deeply distrusted public, out-of-context review systems. We replaced 5-star constraints with objective quality metrics, verified delivery histories, and concrete visual proof of product quality.</p>
            </div>
            
            {/* Item 3 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>03</span><span>ACCESSIBILITY</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>USSD bridge as a first-class flow</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>For rural farmers, a modern app is useless if they have a feature phone. We designed USSD and SMS fallback flows mapping 1:1 with the digital marketplace.</p>
            </div>
            
            {/* Item 4 */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', color: '#FFDC00', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>
                  <span>04</span><span>ENVIRONMENTAL</span>
               </div>
               <h4 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Sunlight-mode field UI</h4>
               <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.6 }}>Ag logistics happens in direct sunlight. High contrast thresholds, enormous tap targets, and elimination of subtle greys meant drivers could actually use the app without seeking shade.</p>
            </div>
         </div>
      </section>

      {/* Footer Banner */}
      <section style={{ backgroundColor: '#ffffff', padding: '6rem 5%' }}>
         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, color: '#000' }}>Ready for a system that works in the real world?</p>
            <a href="#/home" style={{ backgroundColor: '#FFDC00', color: '#060B19', padding: '1.25rem 2.5rem', borderRadius: '100px', textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>Let's work together →</a>
         </div>
      </section>

      {/* Simple Footer */}
      <footer style={{ backgroundColor: '#060B19', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '4rem 5%', display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
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
