import React from 'react';
import { useInView } from '../App';

const techStack = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 
  'REST APIs', 'DBMS', 'MongoDB', 'MySQL', 'GitHub', 'TypeScript', 'AWS', 'Java', 'OOPS', 'Data Structures & Algorithms'
];

const softSkills = [
  [
  {
    num: '01',
    title: 'Learning Agility',
    desc: 'Continuously learning and adapting to new technologies to stay relevant in a fast-evolving environment.'
  },
  {
    num: '02',
    title: 'Time Management',
    desc: 'Efficiently prioritizing tasks and managing time to meet deadlines without compromising quality.'
  },
  {
    num: '03',
    title: 'Team Collaboration',
    desc: 'Working effectively with team members to achieve shared goals and deliver successful outcomes.'
  },
  {
    num: '04',
    title: 'Effective Communication',
    desc: 'Clearly expressing ideas and understanding requirements to ensure smooth collaboration.'
  },
  {
    num: '05',
    title: 'Problem Solving',
    desc: 'Analyzing challenges logically and implementing efficient solutions in real-world scenarios.'
  }
]
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
  const [ref2, inView2] = useInView();

  return (
    <section id="skills" className="py-32 bg-surface">
      <div className="max-w-[1180px] mx-auto px-12">

        {/* Tech Skills Section */}
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''} mb-20`}>
          <h2 className="font-mono font-bold text-textprimary mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            Tech Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl">
            {techStack.map(tech => (
              <div key={tech} className="flex items-center gap-2.5 text-textsecondary text-sm bg-bg border border-border p-4 rounded-sm hover:border-accent transition-all">
                <span className="text-accent text-lg">➤</span>
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div ref={ref2} className={`fade-up ${inView2 ? 'visible' : ''} mb-16`}>
          <h2 className="font-mono font-bold text-textprimary mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            Soft Skills
          </h2>

          <p className="text-textsecondary text-base leading-[1.85] max-w-3xl mb-10">
            Since the beginning of my journey as a developer, I've improved my soft skills,
            always seeking to be a better professional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills[0].map((skill, i) => (
              <SkillCard key={skill.num} skill={skill} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}