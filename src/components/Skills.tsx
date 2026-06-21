import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const skillGroups = [
  {
    label: 'Languages',
    color: '#2DD4BF',
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frontend',
    color: '#60A5FA',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'HTML', 'CSS', 'shadcn/ui'],
  },
  {
    label: 'Backend & DB',
    color: '#2DD4BF',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'MongoDB', 'PostgreSQL', 'Prisma'],
  },
  {
    label: 'Machine Learning',
    color: '#60A5FA',
    skills: ['Scikit-learn', 'XGBoost', 'DistilBERT', 'HuggingFace', 'TF-IDF', 'Random Forest', 'NLP'],
  },
  {
    label: 'Data & Analysis',
    color: '#2DD4BF',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Feature Engineering', 'Model Evaluation'],
  },
  {
    label: 'Tools & Infra',
    color: '#60A5FA',
    skills: ['Git', 'GitHub', 'Postman', 'Jupyter Notebook', 'VS Code', 'Vercel'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">SKILLS.MATRIX</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E6EDF3]">Tech Stack</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-1.5 h-5 rounded-full"
                  style={{ backgroundColor: group.color }}
                />
                <p className="font-mono text-xs font-semibold tracking-widest" style={{ color: group.color }}>
                  {group.label.toUpperCase()}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: i * 0.08 + j * 0.04 }}
                    className="skill-chip"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 glass-card p-6"
        >
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-center">
            {[
              { value: '6+', label: 'Programming Languages' },
              { value: '10+', label: 'Frameworks & Libraries' },
              { value: '7+', label: 'ML / Data Tools' },
              { value: '1', label: 'Published Research' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#2DD4BF] mb-1">{stat.value}</p>
                <p className="text-[#8B949E] text-sm font-mono">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
