import React from 'react';
import { useInView } from '../App';

const skills = [
  {
    num: '01',
    title: 'non-stop learning',
    desc: 'Technology never stops updating, that\'s why those who work with technology should not stop updating themselves either.'
  },
  {
    num: '02',
    title: 'communicative',
    desc: 'No matter your profession, communication is always a need in any field.'
  },
  {
    num: '03',
    title: 'open-minded',
    desc: 'When you work for people, you need to accept new ideas from clients or team members and be able to work on them.'
  },
  {
    num: '04',
    title: 'problem solver',
    desc: 'Every project comes with challenges. Being able to analyze and solve problems efficiently is crucial.'
  }
];

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView();
  
  return (
    <div
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} bg-bg border border-border p-8 rounded-sm hover:border-accent transition-all group`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-6">
        <span className="font-mono text-4xl font-bold text-accent opacity-30 group-hover:opacity-100 transition-opacity">
          {skill.num}
        </span>
        <div>
          <h3 className="font-mono text-lg font-semibold text-textprimary mb-3">
            {skill.title}
          </h3>
          <p className="text-textsecondary text-sm leading-[1.75]">
            {skill.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();

  return (
    <section id="skills" className="py-32 bg-surface">
      <div className="max-w-[1180px] mx-auto px-12">

        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''} mb-16`}>
          <h2 className="font-mono font-bold text-textprimary mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            skills
          </h2>

          <p className="text-textsecondary text-base leading-[1.85] max-w-3xl">
            Since the beginning of my journey as a developer, I've improved my soft skills,
            always seeking to be a better professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.num} skill={skill} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}