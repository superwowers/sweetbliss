import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-ferra-200 dark:border-ferra-900/90 py-10 bg-ferra-50/90 dark:bg-brandDark-950 text-ferra-600 dark:text-cancan/60 text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-ferra-950 dark:text-cancan-100 font-semibold">{personalInfo.name}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>

        <div className="flex items-center gap-4 text-ferra-600 dark:text-cancan/70">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-mulberry dark:hover:text-bloom transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-mulberry" />
            <span>GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-mulberry transition-colors flex items-center gap-1 p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
}
