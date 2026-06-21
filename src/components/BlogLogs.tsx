import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Lock, PenLine } from 'lucide-react';

const UPCOMING = [
  { title: 'Building ShelfScanner', tag: 'project deep-dive' },
  { title: 'Lessons From Suzlon', tag: 'internship' },
  { title: 'Notes on Machine Learning', tag: 'learning' },
  { title: 'My LeetCode Journey', tag: 'practice' },
];

export default function BlogLogs() {
  const { ref, inView } = useInView();

  return (
    <section id="blog" ref={ref} className="py-24 px-5">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <p className="mono-label">writing</p>
          <span className="flex items-center gap-1.5 text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
            <PenLine size={12} />
            Writing soon...
          </span>
        </motion.div>

        <div className="space-y-3">
          {UPCOMING.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.06 * i }}
              className="glass p-5 flex items-center gap-4 opacity-60"
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(45,212,191,0.06)', border: '1px solid rgba(45,212,191,0.15)' }}
              >
                <Lock size={13} style={{ color: 'var(--accent)' }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: 'var(--text)' }}>
                  {post.title}
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  #{post.tag}
                </p>
              </div>
              <span
                className="text-[10px] font-mono px-2 py-0.5 rounded-full shrink-0"
                style={{ background: 'rgba(45,212,191,0.06)', color: 'var(--text-muted)' }}
              >
                draft
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
