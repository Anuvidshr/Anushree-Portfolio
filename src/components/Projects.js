import React, { useState } from 'react';
import { useInView } from '../App';

const projects = [
  { 
    id: 1, 
    title: 'Herbário', 
    desc: 'A mobile application focused on documenting herbs, including technical sheets, traditional uses, and spiritual practices associated with plants.',
    tags: ['React Native', 'MongoDB', 'Node.js'],
    link: '#', 
    github: '#' 
  },
  { 
    id: 2, 
    title: 'FanMeet', 
    desc: 'Full-stack social networking platform connecting global fandoms with seamless collaboration and networking. Features include user connection requests, profile management, interest-based discussion forums.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    link: '#', 
    github: '#' 
  },
  { 
    id: 3, 
    title: 'MyShop', 
    desc: 'On-demand home services platform providing plumbing, cleaning, and electrical services with advanced search and filter functionality.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
    link: '#', 
    github: '#' 
  },
  { 
    id: 4, 
    title: 'Pokédex', 
    desc: 'A simple and easy-to-use Pokédex. It has the option to search for pokémons by name, habitat or type; in addition to the three combined.',
    tags: ['React', 'API Integration'],
    link: '#', 
    github: '#' 
  },
];

function ProjectCard({ p, index }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} bg-bg border border-border p-8 rounded-sm hover:border-accent transition-all group`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <h3 className="font-mono text-xl font-bold text-textprimary mb-3 group-hover:text-accent transition-colors">
        {p.title}
      </h3>
      <p className="text-textsecondary text-sm leading-[1.75] mb-6">
        {p.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {p.tags.map(t => (
          <span key={t} className="font-mono text-[10px] text-textmuted border border-border px-2.5 py-1 rounded-sm">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={p.github} target="_blank" rel="noreferrer" className="text-textmuted hover:text-accent transition-colors text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          Code
        </a>
        <a href={p.link} target="_blank" rel="noreferrer" className="text-textmuted hover:text-accent transition-colors text-sm">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Live
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section id="projects" className="py-32 bg-bg">
      <div className="max-w-[1180px] mx-auto px-12">

        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''} mb-16`}>
          <h2 className="font-mono font-bold text-textprimary mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            Projects
          </h2>

          <p className="text-textsecondary text-base leading-[1.85] max-w-3xl">
            Projects are important ways to improve your skills and show what you are capable of. 
            Here are some of my most recent projects. You can click on them to find out more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => <ProjectCard key={p.id} p={p} index={i} />)}
        </div>

        <div className="flex justify-center mt-12">
          <a href="https://github.com/Anuridshi" target="_blank" rel="noreferrer"
            className="border border-border text-textsecondary font-mono text-[11px] uppercase tracking-widest px-8 py-3 rounded-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
            View All on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}