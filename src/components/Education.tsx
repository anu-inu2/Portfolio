import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { GraduationCap, BookOpen, Award, Calendar } from 'lucide-react';

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">EDUCATION.LOG</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E6EDF3]">Academic Background</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-card p-8 border border-[rgba(45,212,191,0.15)]"
          >
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#30363D]/60">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-2 font-mono text-xs text-[#8B949E]">education.sh</span>
            </div>

            <div className="space-y-1 font-mono text-sm mb-6">
              <p className="text-[#8B949E]">
                <span className="text-[#2DD4BF]">$</span> cat degree.info
              </p>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.2)] flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-[#2DD4BF]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#E6EDF3] mb-1">Medicaps University</h3>
                <p className="text-[#2DD4BF] font-medium text-sm mb-1">
                  B.Tech in Computer Science & Engineering
                </p>
                <p className="text-[#8B949E] text-sm flex items-center gap-1.5">
                  <Calendar size={12} />
                  Aug 2022 – May 2026 · Indore, India
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-[rgba(45,212,191,0.05)] border border-[rgba(45,212,191,0.15)]">
                <p className="font-mono text-[10px] text-[#8B949E] tracking-widest mb-1">CGPA</p>
                <p className="text-2xl font-bold text-[#2DD4BF]">7.63</p>
                <p className="text-[#8B949E] text-xs">out of 10.00</p>
              </div>
              <div className="p-4 rounded-xl bg-[rgba(96,165,250,0.05)] border border-[rgba(96,165,250,0.15)]">
                <p className="font-mono text-[10px] text-[#8B949E] tracking-widest mb-1">YEAR</p>
                <p className="text-2xl font-bold text-[#60A5FA]">2026</p>
                <p className="text-[#8B949E] text-xs">Graduating</p>
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs text-[#8B949E]">
              <p><span className="text-[#2DD4BF]">degree:</span> Bachelor of Technology</p>
              <p><span className="text-[#2DD4BF]">major:</span> Computer Science & Engineering</p>
              <p><span className="text-[#2DD4BF]">status:</span> <span className="text-[#2DD4BF]">Final Year</span></p>
            </div>
          </motion.div>

          {/* Achievements */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.2)] flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-[#60A5FA]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full text-[#60A5FA] bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.2)] mb-2 inline-block">
                    PUBLISHED RESEARCH
                  </span>
                  <h4 className="text-[#E6EDF3] font-semibold text-sm mb-1">
                    Analysis of Medical Images (MRI, CT Scans) for Early Detection of Abnormalities
                  </h4>
                  <p className="text-[#8B949E] text-xs leading-relaxed mb-2">
                    Co-authored research on machine learning techniques for medical image analysis
                    using transfer learning (ResNet, VGG) for abnormality detection.
                  </p>
                  <p className="font-mono text-[#60A5FA] text-xs">
                    RIET-IJSET Vol. 12, Issue 2 · Apr 2024
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="glass-card glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.2)] flex items-center justify-center shrink-0">
                  <Award size={18} className="text-[#2DD4BF]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded-full text-[#2DD4BF] bg-[rgba(45,212,191,0.08)] border border-[rgba(45,212,191,0.2)] mb-2 inline-block">
                    LEADERSHIP
                  </span>
                  <h4 className="text-[#E6EDF3] font-semibold text-sm mb-1">
                    Student Placement Coordinator
                  </h4>
                  <p className="text-[#8B949E] text-xs leading-relaxed mb-2">
                    Coordinated placement activities for 1000+ students, worked with 40+ recruiters,
                    and assisted in mock interviews and placement readiness programs.
                  </p>
                  <p className="font-mono text-[#2DD4BF] text-xs">
                    Medicaps University · Aug 2024 – Apr 2026
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="glass-card p-5"
            >
              <p className="font-mono text-[10px] text-[#8B949E] tracking-widest mb-3">RELEVANT COURSEWORK</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Machine Learning',
                  'Database Management',
                  'Operating Systems',
                  'Computer Networks',
                  'Software Engineering',
                  'Deep Learning',
                ].map((course) => (
                  <span key={course} className="skill-chip">{course}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
