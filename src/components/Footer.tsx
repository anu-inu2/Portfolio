import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-[#30363D]/50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[rgba(45,212,191,0.1)] border border-[rgba(45,212,191,0.25)] flex items-center justify-center">
              <Terminal size={12} className="text-[#2DD4BF]" />
            </div>
            <span className="font-mono text-sm text-[#8B949E]">
              <span className="text-[#2DD4BF]">~/</span>aniket-sadawarte
            </span>
          </div>

          <p className="font-mono text-xs text-[#8B949E] text-center">
            Designed & Developed by{' '}
            <span className="text-[#2DD4BF]">Aniket Sadawarte</span>
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/aniket-sadawarte', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/aniket-sadawarte', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:sadawarteaniket686@gmail.com', label: 'Email' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="w-8 h-8 rounded-lg glass-card flex items-center justify-center text-[#8B949E] hover:text-[#2DD4BF] hover:border-[rgba(45,212,191,0.3)] transition-all"
              >
                <link.icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
