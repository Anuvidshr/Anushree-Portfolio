import React, { useState } from 'react';
import { useInView } from '../App';

const socials = [
  { label: 'GitHub', url: 'https://github.com/Anuvidshr', user: '@Anuvidshr' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/anushree-janoriya', user: '/in/anushree-janoriya' },
  { label: 'Phone', url: 'tel:+919302321112', user: '+91 9302321112' },
];

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=janoriyaanushree@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');

    setStatus('opened');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 6000);
  };

  const inputClass = "bg-bg border border-border text-textprimary font-sans text-sm px-4 py-3 rounded-sm outline-none focus:border-accent transition-all placeholder:text-textdim w-full";

  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-[1180px] mx-auto px-12">
        <div ref={ref} className={`fade-up ${inView ? 'visible' : ''}`}>

          <h2 className="font-mono font-bold text-textprimary mb-6"
            style={{ fontSize: 'clamp(38px, 5vw, 58px)', letterSpacing: '-0.02em' }}>
            Contact
          </h2>

          <p className="text-textsecondary text-base leading-[1.85] mb-12 max-w-3xl">
            Lets connect for building amazing things!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <form className="flex flex-col gap-5" onSubmit={submit}>
              <div>
                <input name="name" value={form.name} onChange={handle} placeholder="Name" required className={inputClass} />
              </div>
              <div>
                <input type="email" name="email" value={form.email} onChange={handle} placeholder="E-mail" required className={inputClass} />
              </div>
              <div>
                <textarea name="message" value={form.message} onChange={handle} rows={6} placeholder="Message" required className={`${inputClass} resize-y`} />
              </div>

              <button type="submit"
                className="self-start bg-accent text-white font-mono text-[11px] uppercase tracking-widest px-8 py-3 rounded-sm transition-all hover:opacity-85 hover:-translate-y-0.5">
                Send
              </button>

              {status === 'opened' && (
                <div className="flex items-center gap-2.5 px-4 py-3 rounded-sm font-mono text-xs text-accentgreen"
                  style={{ background: 'rgba(78,204,163,0.08)', border: '1px solid rgba(78,204,163,0.25)' }}>
                  ✓ Gmail compose opened. Click Send in Gmail to deliver your message.
                </div>
              )}
            </form>

            <div>
              <a href="mailto:janoriyaanushree@gmail.com"
                className="inline-flex items-center gap-2.5 font-mono text-sm text-accent px-4 py-3 rounded-sm mb-8"
                style={{ border: '1px solid rgba(91,141,238,0.25)', background: 'rgba(91,141,238,0.07)' }}>
                ✉ janoriyaanushree@gmail.com
              </a>

              <div className="border-t border-border pt-8 mt-8">
                {socials.map(s => (
                  <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                    className="flex justify-between items-center py-4 border-b border-border group hover:border-accent transition-colors">
                    <span className="font-mono text-sm text-textmuted">{s.label}</span>
                    <span className="text-sm text-textsecondary group-hover:text-accent transition-colors">{s.user} →</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}