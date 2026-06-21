import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Calendar } from 'lucide-react';

export default function DevActivity() {
  const { ref, inView } = useInView();

  return (
    <section id="activity" ref={ref} className="py-24 px-5">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mono-label mb-8"
        >
          dev.activity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="glass p-7"
        >
          <div className="flex items-center gap-2 mb-5">
            <Calendar
              size={16}
              style={{ color: 'var(--accent)' }}
            />

            <span
              className="font-mono text-sm font-semibold"
              style={{ color: 'var(--text)' }}
            >
              leetcode.com/u/anu_inu
            </span>
          </div>

          <div className="rounded-lg overflow-hidden border border-white/5">
            <img
              src="https://leetcard.jacoblin.cool/anu_inu?theme=dark&font=JetBrains%20Mono&ext=heatmap"
              alt="LeetCode Activity"
              className="w-full"
            />
          </div>

          <div className="mt-4 flex justify-between items-center">
            <span
              className="font-mono text-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              Live LeetCode Activity
            </span>

            <a
              href="https://leetcode.com/u/anu_inu/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs transition-opacity hover:opacity-80"
              style={{
                color: 'var(--accent)',
                cursor: 'none',
              }}
            >
              View Profile →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}