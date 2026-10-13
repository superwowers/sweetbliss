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
        ? 'bg-[#faf6f7]/90 dark:bg-[#120a10]/85 backdrop-blur-md border-b border-ferra-200/80 dark:border-ferra-800/60 shadow-md shadow-ferra-950/5 dark:shadow-black/30 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-ferra-100 dark:bg-ferra/30 border border-mulberry/40 flex items-center justify-center text-ferra-800 dark:text-bloom font-mono font-bold text-sm group-hover:border-mulberry group-hover:bg-mulberry/20 transition-all duration-300 shadow-sm shadow-mulberry/10">
            LME
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-ferra-900 dark:text-cancan-100 group-hover:text-mulberry dark:group-hover:text-bloom transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-ferra-600 dark:text-cancan/70">
              @{personalInfo.handle}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-6 text-sm font-medium text-ferra-700 dark:text-cancan-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-mulberry transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-mulberry after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 pl-4 border-l border-ferra-200 dark:border-ferra-800">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 hover:border-mulberry/50 text-ferra-700 dark:text-bloom hover:text-mulberry transition-all shadow-sm"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-cancan-200 hover:text-white" />
              ) : (
                <Moon className="w-4 h-4 text-ferra-700 hover:text-mulberry" />
              )}
            </button>

            {/* GitHub Button */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 hover:border-mulberry/50 text-xs font-mono text-ferra-800 dark:text-cancan-200 transition-all hover:text-mulberry dark:hover:text-white shadow-sm"
            >
              <Github className="w-3.5 h-3.5 text-mulberry" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-ferra-400 dark:text-cancan/60" />
            </a>

            {/* CTA */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-mulberry hover:bg-mulberry-400 text-white text-xs font-semibold tracking-wide transition-all shadow-sm shadow-mulberry/30 hover:shadow-mulberry/50"
            >
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Nav Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 text-ferra-700 dark:text-bloom"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-cancan-200" /> : <Moon className="w-4 h-4 text-ferra-700" />}
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 text-ferra-700 dark:text-cancan-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-mulberry" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 text-ferra-700 dark:text-cancan-200 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-brandDark-900/95 backdrop-blur-md border-b border-ferra-200 dark:border-ferra-800 px-6 py-6 space-y-4 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ferra-800 dark:text-cancan-100 hover:text-mulberry font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-ferra-200 dark:border-ferra-800/80 flex flex-col gap-3">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-ferra-50 dark:bg-brandDark-850 border border-ferra-200 dark:border-ferra-800 text-sm font-medium text-ferra-800 dark:text-cancan-100"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-bloom" /> : <Moon className="w-4 h-4 text-mulberry" />}
              <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-ferra-50 dark:bg-brandDark-850 border border-ferra-200 dark:border-ferra-800 text-sm font-mono text-ferra-800 dark:text-cancan-200"
            >
              <Github className="w-4 h-4 text-mulberry" />
              <span>github.com/{personalInfo.handle}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-lg bg-mulberry text-white font-semibold text-sm shadow-md shadow-mulberry/30"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
