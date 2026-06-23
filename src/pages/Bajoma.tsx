import React, { useEffect } from 'react';

export default function Bajoma() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Project Nav */}
      <nav className="navbar" style={{ background: 'var(--bg-navy)' }}>
        <div className="container nav-inner">
          <a href="#/home" className="logo">Bah Clarkson.</a>
          <ul className="nav-links">
             <li><a href="#/home">← Back to Home</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="project-detail-hero" style={{ background: 'var(--bg-navy)', color: 'white', paddingTop: '150px', paddingBottom: '100px' }}>
         <div className="container">
            <h1 style={{ fontSize: '5rem', marginBottom: '1.5rem', fontFamily: 'Outfit, sans-serif' }}>Bajoma.</h1>
            <p style={{ maxWidth: '600px', fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '4rem' }}>
              Commercial wholesale standardizing the food supply chain across African markets. Designed for the realities of low bandwidth, high trust and fast execution.
            </p>
            <div style={{ display: 'flex', gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '4rem' }}>
               <div>
                 <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>ROLE</div>
                 <div>Product Designer</div>
               </div>
               <div>
                 <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.5rem' }}>TIMELINE</div>
                 <div>3 Months</div>
               </div>
            </div>

            {/* Visuals */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem' }}>
               <div style={{ background: '#111827', borderRadius: '24px', overflow: 'hidden', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.5rem' }}>Laptop Mockup</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ background: '#111827', borderRadius: '24px 24px 0 24px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '1.2rem' }}>Mobile Mockup</span>
                  </div>
                  <div style={{ background: 'var(--accent-yellow)', color: 'var(--text-dark)', padding: '2rem', borderRadius: '16px' }}>
                    <p style={{ fontWeight: 600, fontSize: '1.1rem', lineHeight: '1.4' }}>
                      "Many farmers relied on unstable mobile connections. We reduced page weight by 70% and recovered 3x more completed orders"
                    </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Middle Section */}
      <section style={{ padding: '120px 0', background: 'white' }}>
         <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
               <h2 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '2rem' }}>Trust before<br/>transaction.</h2>
            </div>
            <div>
               <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                 Users needed to feel safe before making large corporate transactions. Every single interface element was crafted to project stability, transparency and predictability.
               </p>
               <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', color: 'var(--text-dark)', fontWeight: 500 }}>
                 <li>✓ Clear delivery SLAs</li>
                 <li>✓ Dedicated account managers</li>
                 <li>✓ Immutable order histories</li>
                 <li>✓ Payment confirmation protocols</li>
               </ul>
            </div>
         </div>
      </section>

      {/* Mockup Grid */}
      <section style={{ padding: '0 0 120px 0', background: 'white' }}>
          <div className="container">
             <div style={{ background: '#f1f5f9', borderRadius: '24px', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'rgba(0,0,0,0.2)', fontSize: '1.5rem' }}>Large Interface Showcase Grid</span>
             </div>
          </div>
      </section>

      {/* Metrics Section */}
      <section style={{ background: 'var(--bg-navy)', color: 'white', padding: '120px 0' }}>
         <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '4rem', maxWidth: '600px' }}>Interface decisions that moved the metric.</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem' }}>
               <div>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.25rem', marginBottom: '1rem' }}>Offline-first receipts</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Ensuring users could access their delivery barcodes and order numbers without internet.</p>
               </div>
               <div>
                  <h4 style={{ color: 'var(--text-white)', fontSize: '1.25rem', marginBottom: '1rem' }}>Trust column over star ratings</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Farmers distrusted public out-of-context review systems. We replaced it with objective quality metrics.</p>
               </div>
            </div>
         </div>
      </section>
      
      {/* Footer */}
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
