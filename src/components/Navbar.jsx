import React, { useState, useEffect } from 'react';
import { Github, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Featured Work', href: '#projects' },
    { name: 'Technical Skills', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#F5E9E5]/95 dark:bg-[#2F171F]/95 backdrop-blur-md border-b border-[#D9BBAF] dark:border-[#734652] shadow-md shadow-[#734652]/10 dark:shadow-black/40 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-[#BF5670] text-white border border-[#D9B0C3]/60 flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-all">
            LME
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] group-hover:text-[#BF5670] dark:group-hover:text-[#D9B0C3] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-[#734652] dark:text-[#D9BBAF]">
              @{personalInfo.handle}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-6 text-sm font-medium text-[#734652] dark:text-[#D9C5CE]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#BF5670] dark:hover:text-[#D9B0C3] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#BF5670] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 pl-4 border-l border-[#D9BBAF] dark:border-[#734652]">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] hover:border-[#BF5670] text-[#734652] dark:text-[#D9B0C3] hover:text-[#BF5670] transition-all shadow-sm"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#D9B0C3]" />
              ) : (
                <Moon className="w-4 h-4 text-[#734652]" />
              )}
            </button>

            {/* GitHub Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] hover:border-[#BF5670] text-xs font-mono text-[#3A1E26] dark:text-[#FDF7F5] transition-all hover:text-[#BF5670] shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-[#BF5670]" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-[#734652] dark:text-[#D9BBAF]" />
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-[#BF5670] hover:bg-[#a8445e] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#BF5670]/30 hover:shadow-[#BF5670]/50"
            >
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#734652] dark:text-[#D9B0C3]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D9B0C3]" /> : <Moon className="w-4 h-4 text-[#734652]" />}
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#734652] dark:text-[#FDF7F5]"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-[#BF5670]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#734652] dark:text-[#FDF7F5] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF3F1] dark:bg-[#381B24] border-b border-[#D9BBAF] dark:border-[#734652] px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#3A1E26] dark:text-[#FDF7F5] hover:text-[#BF5670] font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#D9BBAF] dark:border-[#734652] flex flex-col gap-3">
            <button
              onClick={() => toggleTheme()}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#F5E9E5] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-sm font-medium text-[#3A1E26] dark:text-[#FDF7F5]"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#D9B0C3]" /> : <Moon className="w-4 h-4 text-[#734652]" />}
              <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#F5E9E5] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-sm font-mono text-[#3A1E26] dark:text-[#FDF7F5]"
            >
              <Github className="w-4 h-4 text-[#BF5670]" />
              <span>github.com/{personalInfo.handle}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-lg bg-[#BF5670] text-white font-semibold text-sm shadow-md shadow-[#BF5670]/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
