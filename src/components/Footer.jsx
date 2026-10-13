import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#D9BBAF] dark:border-[#734652] py-10 bg-[#EDE0DC] dark:bg-[#261219] text-[#734652] dark:text-[#D9C5CE] text-xs font-mono transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">{personalInfo.name}</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} All rights reserved</span>
        </div>

        <div className="flex items-center gap-4 text-[#734652] dark:text-[#D9C5CE]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#BF5670] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-[#BF5670]" />
            <span>GitHub</span>
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-[#BF5670] transition-colors flex items-center gap-1 p-1"
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
