import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px';
        dot.current.style.top = e.clientY + 'px';
      }
      if (ring.current) {
        ring.current.style.left = e.clientX + 'px';
        ring.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', move);
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => setHovered(true));
      el.addEventListener('mouseleave', () => setHovered(false));
    });
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className={`cursor-ring${hovered ? ' hovered' : ''}`} />
    </>
  );
}

export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const threshold = options?.threshold ?? 0.12;
  const root = options?.root ?? null;
  const rootMargin = options?.rootMargin ?? '0px';

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold, root, rootMargin }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, root, rootMargin]);
  return [ref, inView];
}

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}