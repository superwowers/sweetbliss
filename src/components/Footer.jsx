import React from 'react';
import { ArrowUp, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#EDE0DC] dark:bg-[#261219] text-[#734652] dark:text-[#D9C5CE] text-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
          <span className="font-bold text-[#3A1E26] dark:text-[#FDF7F5]">{personalInfo.name}</span>
          <span className="hidden sm:inline">•</span>
          <span>Full-Stack & AI Systems Builder</span>
          <span className="hidden sm:inline">•</span>
          <span>Philippines</span>
        </div>

        <div className="flex items-center gap-6 text-[#734652] dark:text-[#D9C5CE]">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#BF5670] transition-colors flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-[#BF5670]" />
            <span>github.com/{personalInfo.handle}</span>
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-[#BF5670] transition-colors flex items-center gap-1.5 p-1"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
