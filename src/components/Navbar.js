import React, { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Blog', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(links[i].toLowerCase());
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border py-4' : 'py-6'
    }`}>
      <div className="max-w-[1180px] mx-auto px-12 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-base text-textprimary hover:text-accent transition-colors ml-[-96px]"
        >
          <span className="text-accent">&lt;</span>AJ<span className="text-accent">/&gt;</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link.toLowerCase())}
                className={`font-mono text-xs transition-colors ${
                  active === link.toLowerCase()
                    ? 'text-accent'
                    : 'text-textmuted hover:text-textprimary'
                }`}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-[22px] h-px bg-textprimary transition-all duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-[22px] h-px bg-textprimary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-px bg-textprimary transition-all duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-bg flex flex-col items-center justify-center gap-6 z-50">
          {links.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="font-mono text-lg text-textmuted hover:text-accent transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}