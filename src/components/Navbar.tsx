import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#work' },
  { label: 'Builds', href: '#builds' },
  { label: 'Blog', href: '#blog' },
  { label: 'Activity', href: '#activity' },
  { label: 'Now', href: '#now' },
];

interface Props {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const doc = document.documentElement;
      const pct = window.scrollY / (doc.scrollHeight - doc.clientHeight);
      setProgress(Math.min(100, pct * 100));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        id="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl border-b'
            : ''
        }`}
        style={{
          background: scrolled ? 'var(--card-bg)' : 'transparent',
          borderColor: scrolled ? 'var(--card-border)' : 'transparent',
        }}
      >
        <nav className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="font-mono text-sm font-semibold tracking-wider"
            style={{ color: 'var(--accent)', cursor: 'none' }}
          >
            aniket.dev
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="px-3 py-1.5 text-sm rounded-lg transition-colors"
                style={{ color: 'var(--text-muted)', cursor: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                {l.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
              style={{
                background: 'rgba(45,212,191,0.08)',
                border: '1px solid rgba(45,212,191,0.2)',
                color: 'var(--accent)',
                cursor: 'none',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </button>

            {/* Mobile menu */}
            <button
              className="md:hidden w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-muted)',
                cursor: 'none',
              }}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden backdrop-blur-xl border-t"
              style={{
                background: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div className="px-4 py-3 flex flex-col gap-0.5">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-3 py-2.5 text-sm rounded-lg"
                    style={{ color: 'var(--text-muted)', cursor: 'none' }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
