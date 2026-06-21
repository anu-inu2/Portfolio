import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Briefcase, Code2, Brain, BookOpen, Users } from 'lucide-react';

const infoCards = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'B.Tech CSE',
    sub: 'Medicaps University · 2022–2026',
    color: '#2DD4BF',
  },
  {
    icon: BookOpen,
    label: 'CGPA',
    value: '7.63 / 10',
    sub: 'Computer Science & Engineering',
    color: '#60A5FA',
  },
  {
    icon: Briefcase,
    label: 'Internship',
    value: 'Suzlon Group',
    sub: 'Data Science · Jun–Aug 2025',
    color: '#2DD4BF',
  },
  {
    icon: Brain,
    label: 'Research',
    value: 'Published',
    sub: 'RIET-IJSET · Medical Image Analysis',
    color: '#60A5FA',
  },
  {
    icon: Code2,
    label: 'Focus Areas',
    value: 'SWE + ML',
    sub: 'Full-Stack & Data Science',
    color: '#2DD4BF',
  },
  {
    icon: Users,
    label: 'Leadership',
    value: 'Placement Coord.',
    sub: '1000+ students · 40+ recruiters',
    color: '#60A5FA',
  },
];

const traits = [
  'Full-Stack Development',
  'Machine Learning',
  'Data Analysis',
  'Problem Solving',
  'Research',
  'Team Collaboration',
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">ABOUT.SYSTEM</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E6EDF3]">Who I Am</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="glass-card p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full bg-[#2DD4BF]" />
                <h3 className="text-lg font-semibold text-[#E6EDF3]">Professional Summary</h3>
              </div>
              <div className="space-y-4 text-[#8B949E] leading-relaxed">
                <p>
                  I'm a Computer Science graduate from Medicaps University with a deep passion for
                  building impactful software and intelligent systems. My work spans full-stack
                  web development, machine learning, and data science.
                </p>
                <p>
                  During my internship at Suzlon Group, I processed over 1 million industrial
                  sensor records and built predictive ML models for gearbox failure detection —
                  applying data science to real industrial challenges at scale.
                </p>
                <p>
                  I have co-authored a published research paper on medical image analysis using
                  deep learning, and I am constantly exploring new technologies to build
                  meaningful products. I thrive on combining engineering rigor with creative
                  problem-solving.
                </p>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="font-mono text-xs text-[#2DD4BF] mb-4 tracking-widest">CORE INTERESTS</p>
              <div className="flex flex-wrap gap-2">
                {traits.map((trait) => (
                  <span key={trait} className="skill-chip">{trait}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {infoCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="glass-card glass-card-hover p-5"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: `${card.color}12`, border: `1px solid ${card.color}25` }}
                >
                  <card.icon size={16} style={{ color: card.color }} />
                </div>
                <p className="font-mono text-[10px] text-[#8B949E] tracking-widest mb-1">
                  {card.label.toUpperCase()}
                </p>
                <p className="font-bold text-[#E6EDF3] text-sm mb-0.5">{card.value}</p>
                <p className="text-[#8B949E] text-xs leading-snug">{card.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
