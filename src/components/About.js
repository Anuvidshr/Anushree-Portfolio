import React from 'react';
import { useInView } from '../App';
import resumePdf from '../Picspdf/Anushree 8lpa.pdf';


export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-32 bg-bg">
      <div className="max-w-[1180px] mx-auto px-12">
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>
           
          <h2 className="font-mono font-bold text-textprimary mb-12"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            About
          </h2>

          <div className="max-w-3xl">
            <p className="text-textsecondary text-base leading-[1.85] mb-5">
              Hello! My name is <span className="text-textprimary">Anushree Janoriya</span>. I am a Backend Development professional with expertise 
              in building scalable web applications using React.js, Node.js, and Express.js. Currently pursuing 
              Bachelor of Technology in Information Technology from Oriental Institute of Science 
              and Technology, Bhopal (CGPA: 7.86).
            </p>

            <p className="text-textsecondary text-base leading-[1.85] mb-5">
              I have built multiple hands-on projects to strengthen my development skills. I have experience in developing APIs, database management with MongoDB and MySQL, and a strong foundation in Data Structures and Algorithms. I also work with tools like Git, GitHub, Postman, and AWS.
            </p>

            <p className="text-textsecondary text-base leading-[1.85] mb-10">
              I am always looking for new challenges and opportunities to apply and expand my knowledge. I am passionate about learning new technologies and improving my skills to become a better developer.
            </p>

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