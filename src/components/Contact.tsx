import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sadawarteaniket686@gmail.com',
    href: 'mailto:sadawarteaniket686@gmail.com',
    color: '#2DD4BF',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/aniket-sadawarte',
    href: 'https://github.com/aniket-sadawarte',
    color: '#60A5FA',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aniket-sadawarte',
    href: 'https://linkedin.com/in/aniket-sadawarte',
    color: '#2DD4BF',
  },
];

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-label mb-3">CONTACT.NODE</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E6EDF3] mb-4">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#60A5FA]">
              Great
            </span>
          </h2>
          <p className="text-[#8B949E] max-w-xl mx-auto">
            I'm currently open to software engineering roles, research collaborations, and
            interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="glass-card glass-card-hover p-5 flex items-center gap-4 group"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${link.color}10`, border: `1px solid ${link.color}25` }}
                >
                  <link.icon size={20} style={{ color: link.color }} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-widest text-[#8B949E] mb-0.5">
                    {link.label.toUpperCase()}
                  </p>
                  <p className="text-[#E6EDF3] text-sm font-medium truncate">{link.value}</p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="glass-card p-6 mt-6"
            >
              <p className="font-mono text-[10px] tracking-widest text-[#8B949E] mb-3">CURRENT STATUS</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-pulse" />
                <span className="text-[#2DD4BF] font-semibold text-sm">Available for Opportunities</span>
              </div>
              <p className="text-[#8B949E] text-xs leading-relaxed">
                Open to full-time Software Engineering, Data Science, and Research roles.
                Response time: typically within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#30363D]/60">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-2 font-mono text-xs text-[#8B949E]">message.send</span>
              </div>

              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <CheckCircle size={48} className="text-[#2DD4BF]" />
                  <p className="text-[#E6EDF3] font-semibold text-lg">Message Sent!</p>
                  <p className="text-[#8B949E] text-sm text-center">
                    Thanks for reaching out. I'll get back to you shortly.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-primary mt-2">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-[#8B949E] mb-2">NAME</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(11,15,20,0.7)] border border-[#30363D] text-[#E6EDF3] text-sm placeholder-[#8B949E] focus:outline-none focus:border-[rgba(45,212,191,0.5)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-[#8B949E] mb-2">EMAIL</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(11,15,20,0.7)] border border-[#30363D] text-[#E6EDF3] text-sm placeholder-[#8B949E] focus:outline-none focus:border-[rgba(45,212,191,0.5)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-[#8B949E] mb-2">MESSAGE</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What's on your mind?"
                      className="w-full px-4 py-3 rounded-lg bg-[rgba(11,15,20,0.7)] border border-[#30363D] text-[#E6EDF3] text-sm placeholder-[#8B949E] focus:outline-none focus:border-[rgba(45,212,191,0.5)] transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle size={16} />
                      <span>Something went wrong. Try emailing directly.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary justify-center py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#2DD4BF]/30 border-t-[#2DD4BF] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
