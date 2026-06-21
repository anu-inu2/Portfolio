import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export default function WorkArchive() {
  const { ref, inView } = useInView();

  return (
    <section id="work" ref={ref} className="py-24 px-5">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono-label mb-8"
        >
          work
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="glass glass-hover p-7"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>
                Suzlon Group
              </h3>
              <p className="font-mono text-sm" style={{ color: 'var(--accent)' }}>
                Data Science Intern
              </p>
            </div>
            <p className="font-mono text-xs shrink-0 mt-1" style={{ color: 'var(--text-muted)' }}>
              Jun – Aug 2025
            </p>
          </div>

          <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-muted)' }}>
            Worked on predictive maintenance for industrial wind turbines. Processed
            1M+ sensor records, engineered features for gearbox failure prediction,
            and evaluated ML models (R², MAE, RMSE) to surface actionable maintenance insights.
          </p>

          <div className="flex flex-wrap gap-2">
            {['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'SQL', 'Feature Engineering'].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
