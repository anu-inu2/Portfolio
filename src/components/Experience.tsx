import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Building2, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    role: 'Data Science Intern',
    company: 'Suzlon Group',
    type: 'Internship',
    period: 'Jun 2025 – Aug 2025',
    location: 'Remote / Indore',
    color: '#2DD4BF',
    highlights: [
      'Processed and analyzed 1M+ industrial sensor records through data cleaning, preprocessing, and exploratory data analysis.',
      'Developed and evaluated ML models for gearbox failure prediction using Python, feature engineering, and performance metrics (R², MAE, RMSE).',
      'Created visualizations using Matplotlib and Seaborn to identify operational trends; queried large datasets with SQL.',
      'Collaborated with industry professionals to translate analytical findings into actionable maintenance insights.',
    ],
    tags: ['Python', 'Scikit-learn', 'Pandas', 'SQL', 'Matplotlib', 'Seaborn', 'Feature Engineering', 'EDA'],
  },
  {
    role: 'Student Placement Coordinator',
    company: 'Medicaps University',
    type: 'Leadership',
    period: 'Aug 2024 – Apr 2026',
    location: 'Indore, India',
    color: '#60A5FA',
    highlights: [
      'Coordinated placement activities for 1000+ students across the university.',
      'Collaborated with 40+ recruiters to streamline the hiring process.',
      'Assisted students through mock interviews and placement readiness initiatives.',
    ],
    tags: ['Coordination', 'Communication', 'Team Leadership', 'Mentoring'],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">EXPERIENCE.LOG</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E6EDF3]">Where I've Worked</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2DD4BF]/40 via-[#60A5FA]/20 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative md:pl-20"
              >
                <div
                  className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl items-center justify-center border"
                  style={{ background: `${exp.color}10`, borderColor: `${exp.color}30` }}
                >
                  <Building2 size={18} style={{ color: exp.color }} />
                </div>

                <div className="glass-card glass-card-hover p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-[10px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full"
                          style={{
                            color: exp.color,
                            background: `${exp.color}12`,
                            border: `1px solid ${exp.color}25`,
                          }}
                        >
                          {exp.type.toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#E6EDF3]">{exp.role}</h3>
                      <p className="text-[#8B949E] font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#8B949E] text-sm font-mono shrink-0">
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-[#8B949E] text-sm leading-relaxed">
                        <ChevronRight size={14} className="shrink-0 mt-0.5" style={{ color: exp.color }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="skill-chip">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
