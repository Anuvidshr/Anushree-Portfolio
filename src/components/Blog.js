import React from 'react';
import { useInView } from '../App';

const posts = [
  { id: 1, title: 'Building Scalable REST APIs with Node.js', excerpt: 'Best practices for structuring your Node.js backend — middleware, error handling, and rate limiting.', tags: ['Node.js', 'Backend'], date: 'Jan 12, 2025', readTime: '8 min' },
  { id: 2, title: 'React Performance: 10 Patterns That Actually Matter', excerpt: 'Deep-dive into memoization, code splitting, lazy loading, and virtual scrolling.', tags: ['React', 'Performance'], date: 'Dec 28, 2024', readTime: '11 min' },
  { id: 3, title: 'Docker for Full Stack Developers', excerpt: 'Containerize Node.js, PostgreSQL, Redis, and nginx all in one docker-compose.', tags: ['Docker', 'DevOps'], date: 'Dec 10, 2024', readTime: '14 min' },
];

function BlogCard({ post, index }) {
  const [ref, inView] = useInView();
  
  return (
    <article 
      ref={ref}
      className={`fade-up ${inView ? 'visible' : ''} bg-bg border border-border p-6 rounded-sm hover:border-accent transition-all group`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-4 mb-3">
        <span className="font-mono text-[10px] text-textmuted">{post.date}</span>
        <span className="font-mono text-[10px] text-textdim">{post.readTime}</span>
      </div>
      <h3 className="font-mono text-base font-semibold text-textprimary mb-3 group-hover:text-accent transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-textsecondary leading-[1.7] mb-4">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(t => (
          <span key={t} className="font-mono text-[10px] text-textmuted border border-border px-2 py-0.5 rounded-sm">
            {t}
          </span>
        ))}
      </div>
      <a href="/blog/post" className="font-mono text-[11px] text-textmuted hover:text-accent transition-colors flex items-center gap-1.5 group/link">
        Read more
        <span className="group-hover/link:translate-x-1 transition-transform inline-block">→</span>
      </a>
    </article>
  );
}

export default function Blog() {
  const [ref, inView] = useInView();

  return (
    <section id="blog" className="py-32 bg-surface">
      <div className="max-w-[1180px] mx-auto px-12">

        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''} mb-16`}>
          <h2 className="font-mono font-bold text-textprimary mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            blog
          </h2>

          <p className="text-textsecondary text-base leading-[1.85] max-w-3xl">
            I write about full stack development, clean architecture, and things I learn building real projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.id} post={post} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a href="/blog"
            className="border border-border text-textsecondary font-mono text-[11px] uppercase tracking-widest px-8 py-3 rounded-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all">
            All Articles →
          </a>
        </div>
      </div>
    </section>
  );
}