import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText, ArrowDown } from 'lucide-react';
import avatarSrc from '../assets/images/avatar.png';

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/anu-inu2' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/aniket-sadawarte/' },
  { icon: Mail, label: 'Email', href: 'mailto:sadawarteaniket686@gmail.com' },
  { icon: FileText, label: 'Resume', href: "/Aniket's_CV.pdf", download: true },
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-16"
    >
      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-6 relative"
          style={{ width: 120, height: 120 }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #2DD4BF, #60A5FA, #2DD4BF)',
              animation: 'spin 12s linear infinite',
              filter: 'blur(8px)',
              opacity: 0.35,
              borderRadius: '50%',
            }}
          />
          <div
            className="relative w-full h-full rounded-full overflow-hidden"
            style={{ border: '2px solid rgba(45,212,191,0.3)' }}
          >
            <img src={avatarSrc} alt="Aniket" className="w-full h-full object-cover object-top" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight"
          style={{ color: 'var(--text)' }}
        >
          Aniket Sadawarte
        </motion.h1>

        {/* Role */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="text-base font-mono mb-6"
          style={{ color: 'var(--accent)' }}
        >
          Software Developer & ML Enthusiast
        </motion.p>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="mb-10 space-y-2"
        >
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            I like building products that solve real problems.
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            I enjoy working on software engineering, machine learning,
            backend systems, and developer tools.
          </p>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              {...(s.download ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
              className="btn btn-ghost flex items-center gap-2"
              style={{ fontSize: '0.8rem', padding: '7px 16px' }}
            >
              <s.icon size={14} />
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} style={{ color: 'var(--text-muted)', opacity: 0.6 }} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
