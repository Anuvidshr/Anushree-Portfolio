import React, { useEffect, useState } from 'react'
import profilePic from '../Picspdf/profilepic.png';

const socials = [
  { url: 'https://github.com/Anuvidshr', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
  { url: 'https://linkedin.com/in/anushree-janoriya', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { url: 'https://twitter.com/AnushreeJanori1', icon: 'M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.33 5.71 4.24 4.24 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.34 4.34 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.58 8.58 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.87 0 12.17-6.52 12.17-12.17v-.55A8.7 8.7 0 0 0 22.46 6z' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const firstLineText = 'Full-Stack Developer';
  const secondLineText = 'Building scalable, production-ready web applications with well-structured database systems';
  const [firstLineLength, setFirstLineLength] = useState(0);
  const [secondLineLength, setSecondLineLength] = useState(0);

  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

  useEffect(() => {
    if (!loaded) return;

    let firstIndex = 0;
    let secondIndex = 0;
    let secondLineDelay;
    let secondLineInterval;

    const firstLineInterval = setInterval(() => {
      firstIndex += 1;
      setFirstLineLength(firstIndex);

      if (firstIndex >= firstLineText.length) {
        clearInterval(firstLineInterval);

        secondLineDelay = setTimeout(() => {
          secondLineInterval = setInterval(() => {
            secondIndex += 1;
            setSecondLineLength(secondIndex);

            if (secondIndex >= secondLineText.length) {
              clearInterval(secondLineInterval);
            }
          }, 26);
        }, 200);
      }
    }, 42);

    return () => {
      clearInterval(firstLineInterval);
      clearTimeout(secondLineDelay);
      clearInterval(secondLineInterval);
    };
  }, [loaded, firstLineText.length, secondLineText.length]);

  return (
    <section id="hero" className="min-h-screen relative flex items-center">

      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(91,141,238,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(91,141,238,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="fixed top-[-100px] right-[-50px] w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(91,141,238,0.1) 0%, transparent 70%)', filter: 'blur(100px)' }} />
      <div className="fixed bottom-[10%] left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(155,127,232,0.08) 0%, transparent 70%)', filter: 'blur(100px)' }} />

      <div className="w-full px-6 md:px-12 lg:px-16 py-32 relative z-10">

        <div className={`transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
            <div className="text-left md:max-w-[760px]">
              <h1 className={`font-semibold not-italic text-textprimary mb-8 whitespace-nowrap transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}
                style={{ fontSize: 'clamp(48px, 7vw, 86px)', letterSpacing: '-0.05em', fontFamily: 'Georgia, serif' }}>
                Anushree Janoriya
              </h1>

              <p className="text-textsecondary text-lg italic mb-2 max-w-xl min-h-[28px]">
                {firstLineText.slice(0, firstLineLength)}
              </p>
              <p className="text-textsecondary text-lg italic mb-12 max-w-xl min-h-[56px]">
                {secondLineText.slice(0, secondLineLength)}
              </p>

              <div className="flex items-center justify-start gap-6">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-textmuted hover:text-accent transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={s.icon} />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="inline-flex items-center justify-start gap-3 mt-20 text-textmuted font-mono text-[10px] uppercase tracking-[0.15em] animate-pulse">
                <div className="w-5 h-[30px] border border-borderlight rounded-[10px] flex justify-center pt-[6px]">
                  <div className="w-[3px] h-[5px] bg-accent rounded-sm animate-scrolldown" />
                </div>
                scroll to explore
              </div>
            </div>

            <div className="w-full max-w-[320px] mx-auto md:mx-0 md:ml-auto md:flex-shrink-0 md:-mt-12">
              <img src={profilePic} alt="Anushree Janoriya" className="w-full aspect-square rounded-full object-cover" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}






