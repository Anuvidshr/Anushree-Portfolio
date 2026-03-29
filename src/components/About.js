import React from 'react';
import { useInView } from '../App';
import resumePdf from '../Picspdf/Anushree 8lpa.pdf';

const techStack = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 
  'MongoDB', 'MySQL', 'GitHub', 'TypeScript', 'AWS', 'Java'
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-32 bg-bg">
      <div className="max-w-[1180px] mx-auto px-12">
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>

          <h2 className="font-mono font-bold text-textprimary mb-12"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            about
          </h2>

          <div className="max-w-3xl">
            <p className="text-textsecondary text-base leading-[1.85] mb-5">
              Hello! My name is <span className="text-textprimary">Anushree Janoriya</span>. I am a Backend Development professional with expertise 
              in building scalable web applications using React.js, Node.js, and Express.js. Currently pursuing 
              Bachelor of Technology in Information Technology from Oriental Institute of Science 
              and Technology, Bhopal (CGPA: 7.86).
            </p>

            <p className="text-textsecondary text-base leading-[1.85] mb-5">
              I started learning web development during my college years, through online courses and hands-on projects 
              to learn the basics and enhance my skills. I have experience in developing APIs, database management with MongoDB 
              and MySQL, and working with modern tools like Git, GitHub, Postman, and AWS.
            </p>

            <p className="text-textsecondary text-base leading-[1.85] mb-10">
              I am always looking for new challenges and opportunities to apply and expand my knowledge. 
              Here are some technologies I am familiar with:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
              {techStack.map(tech => (
                <div key={tech} className="flex items-center gap-2.5 text-textsecondary text-sm">
                  <span className="text-accent text-lg">➤</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>

            <p className="text-textsecondary text-base leading-[1.85] mb-8">
              Want to know more about my journey? You can download my CV by clicking the button below.
            </p>

            <a
              href={resumePdf}
              download="Anushree-Janoriya-CV.pdf"
              className="inline-flex items-center gap-2 bg-accent text-white font-mono text-[11px] uppercase tracking-widest px-8 py-3 rounded-sm hover:opacity-85 hover:-translate-y-0.5 transition-all"
            >
              CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}