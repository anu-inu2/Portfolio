import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { X, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface TechIcon { name: string; slug: string; color: string; }
interface Project {
  title: string; subtitle: string; description: string;
  tech: TechIcon[]; color: string; accent: string;
  github: string | null; demo: string | null;
  challenges: string; learnings: string;
}

const TECH: Record<string, TechIcon> = {
  react:       { name: 'React',        slug: 'react',          color: '61DAFB' },
  ts:          { name: 'TypeScript',   slug: 'typescript',     color: '3178C6' },
  node:        { name: 'Node.js',      slug: 'nodedotjs',      color: '339933' },
  express:     { name: 'Express',      slug: 'express',        color: 'FFFFFF' },
  postgres:    { name: 'PostgreSQL',   slug: 'postgresql',     color: '4169E1' },
  prisma:      { name: 'Prisma',       slug: 'prisma',         color: '2D3748' },
  openai:      { name: 'OpenAI',       slug: 'openai',         color: '412991' },
  python:      { name: 'Python',       slug: 'python',         color: '3776AB' },
  fastapi:     { name: 'FastAPI',      slug: 'fastapi',        color: '009688' },
  sklearn:     { name: 'Scikit-learn', slug: 'scikitlearn',    color: 'F7931E' },
  hugging:     { name: 'HuggingFace',  slug: 'huggingface',    color: 'FFD21E' },
  nextjs:      { name: 'Next.js',      slug: 'nextdotjs',      color: 'FFFFFF' },
  mongo:       { name: 'MongoDB',      slug: 'mongodb',        color: '47A248' },
  tailwind:    { name: 'Tailwind',     slug: 'tailwindcss',    color: '06B6D4' },
};

const PROJECTS: Project[] = [
  {
    title: 'ShelfScanner',
    subtitle: 'AI-Powered Book Recognition',
    description:
      'A full-stack app that scans bookshelf photos using GPT-4o Vision, extracts book titles, and generates personalized reading recommendations based on your Goodreads history. Built with a typed REST API and PostgreSQL-backed scan history.',
    tech: [TECH.react, TECH.ts, TECH.node, TECH.express, TECH.postgres, TECH.prisma, TECH.openai],
    color: '#0f2d2a',
    accent: '#2DD4BF',
    github: 'https://github.com/anu-inu2',
    demo: null,
    challenges:
      'Handling variable bookshelf photo quality and book spine orientation. Engineering GPT-4o prompts that reliably extract structured data from noisy images.',
    learnings:
      'Vision API prompt engineering, full-stack TypeScript patterns, Prisma ORM for relational data, building robust error boundaries around LLM responses.',
  },
  {
    title: 'KhabarGPT',
    subtitle: 'Fake News Classification System',
    description:
      'End-to-end NLP pipeline for detecting fake news. Combines TF-IDF with Logistic Regression, SVM, and DistilBERT in a confidence-aware ensemble that mitigates dataset bias and transformer overconfidence. Exposed via FastAPI.',
    tech: [TECH.python, TECH.fastapi, TECH.sklearn, TECH.hugging],
    color: '#0d1f35',
    accent: '#60A5FA',
    github: 'https://github.com/anu-inu2',
    demo: null,
    challenges:
      'Dataset bias causing both traditional models and transformers to overfit. Building an ensemble that respects per-model calibration without naive averaging.',
    learnings:
      'Confidence calibration in ensembles, DistilBERT fine-tuning for classification, building production-ready ML APIs with FastAPI and Pydantic.',
  },
  {
    title: 'DevOverflow',
    subtitle: 'Full-Stack Q&A Platform',
    description:
      'A StackOverflow-like Q&A platform with AI-powered answer suggestions, secure auth via NextAuth, a gamification system (reputation, badges), and full-text search. Built on the Next.js 15 App Router.',
    tech: [TECH.nextjs, TECH.react, TECH.mongo, TECH.tailwind],
    color: '#1a1a2e',
    accent: '#a78bfa',
    github: 'https://github.com/anu-inu2',
    demo: null,
    challenges:
      'Designing a denormalized MongoDB schema that handles votes, bookmarks, and reputation atomically. Integrating AI suggestions without degrading perceived performance.',
    learnings:
      'Next.js 15 Server Components, MongoDB aggregation pipelines, OAuth flows, building complex social features with optimistic UI updates.',
  },
];

function TechBadge({ tech }: { tech: TechIcon }) {
  return (
    <span className="chip flex items-center gap-1.5">
      <img
        src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`}
        alt={tech.name}
        width={12}
        height={12}
        style={{ objectFit: 'contain' }}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />
      {tech.name}
    </span>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="glass w-full max-w-2xl max-h-[88vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header bar */}
          <div
            className="h-1.5 rounded-t-[14px]"
            style={{ background: `linear-gradient(90deg, ${project.accent}, #60A5FA)` }}
          />
          <div className="p-7">
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h2>
                <p className="text-sm font-mono" style={{ color: project.accent }}>
                  {project.subtitle}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                style={{ border: '1px solid var(--card-border)', color: 'var(--text-muted)', cursor: 'none' }}
              >
                <X size={15} />
              </button>
            </div>

            {/* Preview placeholder */}
            <div
              className="w-full h-40 rounded-xl mb-6 flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${project.color}, rgba(11,15,20,0.8))`,
                border: '1px solid var(--card-border)',
              }}
            >
              <span className="font-mono text-2xl font-bold opacity-20" style={{ color: project.accent }}>
                {project.title}
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t) => <TechBadge key={t.name} tech={t} />)}
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { label: 'Challenges', text: project.challenges },
                { label: 'Learnings', text: project.learnings },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl"
                  style={{ background: 'rgba(45,212,191,0.04)', border: '1px solid rgba(45,212,191,0.12)' }}
                >
                  <p className="mono-label mb-2">{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                  <Github size={14} /> View Code
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-teal">
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function BuildsDirectory() {
  const { ref, inView } = useInView();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [modal, setModal] = useState<Project | null>(null);
  const dragStart = useRef<number | null>(null);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + PROJECTS.length) % PROJECTS.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const proj = PROJECTS[index];

  return (
    <section id="builds" ref={ref} className="py-24 px-5">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono-label mb-8"
        >
          builds
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          {/* Carousel card */}
          <div
            className="relative overflow-hidden"
            onMouseDown={(e) => { dragStart.current = e.clientX; }}
            onMouseUp={(e) => {
              if (dragStart.current !== null) {
                const dx = e.clientX - dragStart.current;
                if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
                dragStart.current = null;
              }
            }}
            onTouchStart={(e) => { dragStart.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (dragStart.current !== null) {
                const dx = e.changedTouches[0].clientX - dragStart.current;
                if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
                dragStart.current = null;
              }
            }}
          >
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={proj.title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="glass p-7"
                onClick={() => setModal(proj)}
                style={{ cursor: 'none' }}
              >
                {/* Color accent strip */}
                <div
                  className="h-0.5 rounded-full mb-5"
                  style={{ background: `linear-gradient(90deg, ${proj.accent}, transparent)`, width: '40%' }}
                />

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{proj.title}</h3>
                    <p className="text-sm font-mono" style={{ color: proj.accent }}>{proj.subtitle}</p>
                  </div>
                  <span
                    className="text-xs font-mono px-2 py-1 rounded-lg"
                    style={{
                      background: `${proj.accent}12`,
                      border: `1px solid ${proj.accent}25`,
                      color: proj.accent,
                    }}
                  >
                    {index + 1}/{PROJECTS.length}
                  </span>
                </div>

                <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {proj.tech.slice(0, 5).map((t) => <TechBadge key={t.name} tech={t} />)}
                  {proj.tech.length > 5 && (
                    <span className="chip">+{proj.tech.length - 5} more</span>
                  )}
                </div>

                <p
                  className="text-xs font-mono"
                  style={{ color: 'rgba(45,212,191,0.6)' }}
                >
                  Click to expand →
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-muted)',
                  cursor: 'none',
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => go(1)}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-muted)',
                  cursor: 'none',
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className="rounded-full transition-all"
                  style={{
                    width: i === index ? 20 : 6,
                    height: 6,
                    background: i === index ? 'var(--accent)' : 'rgba(45,212,191,0.25)',
                    cursor: 'none',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
    </section>
  );
}
