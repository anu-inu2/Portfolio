import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Github, ExternalLink, BookOpen, Newspaper, Code2, Microscope } from 'lucide-react';

const projects = [
  {
    icon: BookOpen,
    title: 'Bookshelf Scanner',
    subtitle: 'AI-Powered Book Recognition App',
    period: 'Nov 2025 – Dec 2025',
    description:
      'Full-stack AI application that scans bookshelf images, detects book titles using OpenAI GPT-4o Vision, and generates personalized recommendations from Goodreads history. Designed a REST API with Express and TypeScript, using Prisma ORM with PostgreSQL.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'OpenAI GPT-4o', 'Vite'],
    color: '#2DD4BF',
    github: 'https://github.com/aniket-sadawarte',
    demo: null,
    featured: true,
  },
  {
    icon: Newspaper,
    title: 'Fake News Classification System',
    subtitle: 'NLP-Powered Detection Platform',
    period: 'Jan 2026 – Feb 2026',
    description:
      'End-to-end fake news classification backend using TF-IDF, Logistic Regression, SVM, and DistilBERT. Designed a confidence-aware ensemble to mitigate dataset bias and transformer overconfidence, exposed via FastAPI REST API.',
    tags: ['Python', 'FastAPI', 'DistilBERT', 'TF-IDF', 'Scikit-learn', 'SVM', 'NLP', 'HuggingFace'],
    color: '#60A5FA',
    github: 'https://github.com/aniket-sadawarte',
    demo: null,
    featured: true,
  },
  {
    icon: Code2,
    title: 'DevOverflow',
    subtitle: 'Full-Stack Q&A Platform',
    period: 'Mar 2025 – Apr 2025',
    description:
      'StackOverflow-like Q&A platform with AI-powered suggestions, secure NextAuth authentication, gamification, and advanced search. Implemented voting, bookmarking, and reputation-based engagement for improved usability.',
    tags: ['Next.js 15', 'React', 'Tailwind CSS', 'shadcn/ui', 'MongoDB', 'NextAuth', 'Node.js'],
    color: '#2DD4BF',
    github: 'https://github.com/aniket-sadawarte',
    demo: null,
    featured: false,
  },
  {
    icon: Microscope,
    title: 'Medical Image Analysis',
    subtitle: 'Research — MRI & CT Scan Abnormality Detection',
    period: 'Apr 2024',
    description:
      'Co-authored research published in RIET-IJSET Vol. 12, Issue 2. Investigated deep learning techniques for early abnormality detection in MRI and CT scans using transfer learning architectures including ResNet and VGG.',
    tags: ['Deep Learning', 'ResNet', 'VGG', 'Transfer Learning', 'Medical Imaging', 'Python'],
    color: '#60A5FA',
    github: null,
    demo: null,
    featured: false,
    publication: 'RIET-IJSET Vol. 12, Issue 2',
  },
];

export default function Projects() {
  const { ref, inView } = useInView();

  return (
    <section id="projects" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">PROJECTS.DIRECTORY</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E6EDF3]">Things I've Built</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass-card glass-card-hover p-7 flex flex-col ${
                project.featured ? 'ring-1 ring-[rgba(45,212,191,0.08)]' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${project.color}10`, border: `1px solid ${project.color}25` }}
                  >
                    <project.icon size={18} style={{ color: project.color }} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      {project.featured && (
                        <span className="text-[9px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full text-[#2DD4BF] bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.2)]">
                          FEATURED
                        </span>
                      )}
                      {project.publication && (
                        <span className="text-[9px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full text-[#60A5FA] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.2)]">
                          PUBLISHED
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-[10px] text-[#8B949E] tracking-wider mt-0.5">{project.period}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#8B949E] hover:text-[#2DD4BF] hover:border-[rgba(45,212,191,0.3)] transition-all"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#8B949E] hover:text-[#60A5FA] hover:border-[rgba(96,165,250,0.3)] transition-all"
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#E6EDF3] mb-1">{project.title}</h3>
              <p className="text-sm font-medium mb-3" style={{ color: project.color }}>
                {project.subtitle}
              </p>
              <p className="text-[#8B949E] text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {project.publication && (
                <div className="mb-4 px-3 py-2 rounded-lg bg-[rgba(96,165,250,0.05)] border border-[rgba(96,165,250,0.15)]">
                  <p className="text-[#60A5FA] font-mono text-xs">
                    Published in {project.publication}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-chip">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
