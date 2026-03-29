import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-[1180px] mx-auto px-12 py-10 text-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-base text-textsecondary hover:text-accent transition-colors mb-4 inline-block"
        >
          <span className="text-accent">&lt;</span>AJ<span className="text-accent">/&gt;</span>
        </button>
        <p className="text-sm text-textmuted mb-6">
          Built with React & Tailwind
        </p>
        <div className="flex gap-8 justify-center mb-6">
          <a
            href="https://github.com/Anuridshi"
            target="_blank"
            rel="noreferrer"
            className="text-textmuted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anushree-janoriya"
            target="_blank"
            rel="noreferrer"
            className="text-textmuted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/anushree_janoriya"
            target="_blank"
            rel="noreferrer"
            className="text-textmuted hover:text-accent transition-colors"
          >
            Instagram
          </a>
        </div>
        <p className="text-xs text-textdim font-mono">
          © {new Date().getFullYear()} Anushree Janoriya
        </p>
      </div>
    </footer>
  );
}