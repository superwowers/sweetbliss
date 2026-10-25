import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Sun, Moon } from 'lucide-react';
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
    { name: 'Selected Work', href: '#projects' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
      scrolled 
        ? 'bg-[#F5E9E5]/95 dark:bg-[#2F171F]/95 border-b border-[#D9BBAF] dark:border-[#734652] py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-8 h-8 rounded-lg object-cover object-[center_20%] border border-[#D9BBAF] dark:border-[#734652] group-hover:border-[#BF5670] transition-colors"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] group-hover:text-[#BF5670] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-[#734652] dark:text-[#D9BBAF]">
              @{personalInfo.handle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          <div className="flex items-center gap-6 text-xs sm:text-sm font-medium text-[#734652] dark:text-[#D9C5CE]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#BF5670] dark:hover:text-[#D9B0C3] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-[#D9BBAF] dark:border-[#734652]">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] hover:border-[#BF5670] text-[#734652] dark:text-[#D9B0C3] transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#D9B0C3]" />
              ) : (
                <Moon className="w-4 h-4 text-[#734652]" />
              )}
            </button>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] hover:border-[#BF5670] text-xs text-[#3A1E26] dark:text-[#FDF7F5] transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-[#BF5670]" />
              <span>GitHub</span>
            </a>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-[#BF5670] hover:bg-[#a8445e] text-white text-xs font-medium tracking-wide transition-colors active:scale-95"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#734652] dark:text-[#D9B0C3]"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#3A1E26] dark:text-[#FDF7F5]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#D9BBAF] dark:border-[#734652] bg-[#FAF3F1] dark:bg-[#43222C] px-4 py-5 space-y-4">
          <div className="flex flex-col space-y-3 font-medium text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#3A1E26] dark:text-[#FDF7F5] hover:text-[#BF5670] py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#D9BBAF]/50 dark:border-[#734652]/60 flex items-center justify-between">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs text-[#734652] dark:text-[#D9C5CE]"
            >
              <Github className="w-3.5 h-3.5 text-[#BF5670]" />
              <span>@{personalInfo.handle}</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-[#BF5670] text-white text-xs font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}

    </header>
  );
}
