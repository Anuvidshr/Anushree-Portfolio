import React, { useEffect, useState } from 'react';

const socials = [
  { url: 'https://github.com/Anuridshi', icon: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' },
  { url: 'https://linkedin.com/in/anushree-janoriya', icon: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' },
  { url: 'https://instagram.com/anushree_janoriya', icon: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z' },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);

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
              <h1 className="font-bold not-italic text-textprimary mb-8 whitespace-nowrap"
                style={{ fontSize: 'clamp(48px, 7vw, 86px)', letterSpacing: '-0.02em', fontFamily: 'Times New Roman, Times, serif' }}>
                Anushree Janoriya
              </h1>

              <p className="text-textsecondary text-lg italic mb-2 max-w-xl">
                Full-Stack Developer
              </p>
              <p className="text-textsecondary text-lg italic mb-12 max-w-xl">
                Building scalable, production-ready web applications with well-structured database systems
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

            <div className="w-full max-w-[320px] mx-auto md:mx-0 md:ml-auto md:flex-shrink-0">
              <div className="w-full aspect-square border border-borderlight rounded-lg flex items-center justify-center text-textmuted font-mono text-xs tracking-wide uppercase">
                Profile Pic
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}