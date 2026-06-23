import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Bajoma from './pages/Bajoma';
import Projina from './pages/Projina';

export default function App() {
  const [route, setRoute] = useState(window.location.hash.replace('#/', '') || 'home');
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash.replace('#/', '') || 'home');
      window.scrollTo(0, 0); // Scroll to top on route change
    };
    window.addEventListener('hashchange', onHashChange);
    
    // Global custom cursor logic
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
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  return (
    <div className="portfolio-root">
      <div ref={cursorRef} className={`custom-cursor ${hovering ? 'hovering' : ''}`} />
      
      {/* Dynamic Page Rendering based on Hash Router */}
      {route === 'home' && <HomePage />}
      {route === 'bajoma' && <Bajoma />}
      {route === 'projina' && <Projina />}
    </div>
  );
}
