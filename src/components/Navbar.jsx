import React, { useState, useEffect } from 'react';
import { Github, Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        ? 'bg-[#120a10]/85 backdrop-blur-md border-b border-ferra-800/60 shadow-lg shadow-black/30 py-3.5' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-ferra/30 border border-mulberry/40 flex items-center justify-center text-bloom font-mono font-bold text-sm group-hover:border-mulberry group-hover:bg-mulberry/25 transition-all duration-300 shadow-sm shadow-mulberry/20">
            LME
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-cancan-100 group-hover:text-bloom transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] font-mono text-cancan/70">
              @{personalInfo.handle}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-cancan-200">
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

          <div className="flex items-center gap-3 pl-4 border-l border-ferra-800">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brandDark-900 border border-ferra-800 hover:border-mulberry/50 hover:bg-brandDark-850 text-xs font-mono text-cancan-200 transition-all hover:text-white"
            >
              <Github className="w-3.5 h-3.5 text-mulberry" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3 text-cancan/60" />
            </a>

            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-lg bg-mulberry hover:bg-mulberry-400 text-white text-xs font-semibold tracking-wide transition-all shadow-sm shadow-mulberry/30 hover:shadow-mulberry/50"
            >
              Let's Talk
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-brandDark-900 border border-ferra-800 text-cancan-200"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4 text-mulberry" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-brandDark-900 border border-ferra-800 text-cancan-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brandDark-900 border-b border-ferra-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-cancan-100 hover:text-mulberry font-medium py-1 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-ferra-800/80 flex flex-col gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brandDark-850 border border-ferra-800 text-sm font-mono text-cancan-200"
            >
              <Github className="w-4 h-4 text-mulberry" />
              <span>github.com/{personalInfo.handle}</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center py-2.5 rounded-lg bg-mulberry text-white font-semibold text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
