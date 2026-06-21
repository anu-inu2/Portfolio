import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import avatarSrc from '../assets/images/avatar.png';

const statusChips = [
  { label: 'AVAILABLE FOR OPPORTUNITIES', color: '#2DD4BF', dot: true },
  { label: 'INDIA', color: '#60A5FA' },
  { label: 'OPEN TO SWE ROLES', color: '#8B949E' },
];

const socials = [
  { icon: Github, href: 'https://github.com/aniket-sadawarte', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/aniket-sadawarte', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:sadawarteaniket686@gmail.com', label: 'Email' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-52 h-52 sm:w-64 sm:h-64">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[rgba(45,212,191,0.15)] via-transparent to-[rgba(96,165,250,0.15)] animate-pulse-slow" />
              <div
                className="absolute -inset-1 rounded-2xl opacity-40"
                style={{
                  background: 'conic-gradient(from 0deg, #2DD4BF, #60A5FA, #2DD4BF)',
                  animation: 'bgSpin 10s linear infinite',
                  filter: 'blur(10px)',
                }}
              />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[rgba(45,212,191,0.25)] bg-[rgba(11,15,20,0.6)] backdrop-blur-sm">
                <img
                  src={avatarSrc}
                  alt="Aniket Sadawarte"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#2DD4BF] border-2 border-[#0B0F14] flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0B0F14] animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Status chips */}
            <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {statusChips.map((chip) => {
                const rgb =
                  chip.color === '#2DD4BF' ? '45,212,191'
                  : chip.color === '#60A5FA' ? '96,165,250'
                  : '139,148,158';
                return (
                  <div
                    key={chip.label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-mono font-semibold tracking-wider"
                    style={{
                      background: `rgba(${rgb},0.08)`,
                      border: `1px solid rgba(${rgb},0.28)`,
                      color: chip.color,
                    }}
                  >
                    {chip.dot && (
                      <span
                        className="w-1.5 h-1.5 rounded-full animate-pulse"
                        style={{ backgroundColor: chip.color }}
                      />
                    )}
                    {chip.label}
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={item}>
              <p className="font-mono text-[var(--hero-subtitle)] text-sm mb-2 tracking-widest">HELLO, WORLD. I'M</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--hero-title)] leading-tight mb-3">
                Aniket
                <br />
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, var(--hero-subtitle), var(--hero-accent-blue))',
                  }}
                >
                  Sadawarte
                </span>
              </h1>
            </motion.div>

            <motion.div variants={item}>
              <p className="text-lg sm:text-xl text-[var(--hero-meta)] font-medium mb-2 font-mono">
                Software Developer · Data Science Enthusiast · Problem Solver
              </p>
            </motion.div>

            <motion.p
              variants={item}
              className="text-[var(--hero-description)] text-base max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building software, machine learning systems, and scalable applications while
              continuously exploring new technologies and solving real-world problems.
            </motion.p>

            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a href="#projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="/Aniket's_CV.pdf" download className="btn-secondary">
                <Download size={16} /> Resume
              </a>
              <a href="#contact" className="btn-ghost">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={item} className="flex gap-3 justify-center lg:justify-start">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-[var(--hero-btn-muted-text)] hover:text-[var(--hero-btn-hover-text)] hover:border-[rgba(45,212,191,0.3)] transition-all hover:scale-110"
                >
                  <s.icon size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-[var(--hero-meta)] tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border border-[#30363D] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#2DD4BF]" />
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes bgSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
