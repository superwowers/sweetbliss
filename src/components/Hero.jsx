import React from 'react';
import { Sparkles, Terminal, ArrowRight } from 'lucide-react';
import { personalInfo, brandPalette } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle atmospheric glow behind hero with Mulberry & Bloom */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-r from-mulberry/15 via-bloom/15 to-ferra/10 dark:from-mulberry/20 dark:via-bloom/15 dark:to-ferra/25 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-brandDark-900/90 border border-mulberry/30 text-xs font-mono text-mulberry dark:text-bloom shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mulberry opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mulberry"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ferra-950 dark:text-white leading-[1.1]">
                Engineering robust <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mulberry via-ferra-600 to-mulberry dark:from-cancan dark:via-bloom dark:to-mulberry">
                  web apps & AI systems
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-ferra-700 dark:text-cancan-200 max-w-xl font-normal leading-relaxed pt-1">
                Hi, I'm <strong className="text-ferra-950 dark:text-white font-semibold">{personalInfo.name}</strong>. I architect performant full-stack platforms, computer vision pipelines, and human-centered software.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-mulberry hover:bg-mulberry-400 text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-mulberry/25 hover:shadow-mulberry/40 active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-ferra-50 text-ferra-800 border border-ferra-200 dark:bg-brandDark-900 dark:hover:bg-brandDark-800 dark:text-cancan-100 dark:border-ferra-700/80 text-sm font-medium transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-ferra-200 dark:border-ferra-800/80">
              <div>
                <div className="text-2xl font-bold font-mono text-mulberry dark:text-bloom">33-Pt</div>
                <div className="text-xs text-ferra-600 dark:text-cancan/80 font-medium">Pose AI Landmarking</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-ferra-950 dark:text-white">Full-Stack</div>
                <div className="text-xs text-ferra-600 dark:text-cancan/80 font-medium">React, Python & Node</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-mulberry">100%</div>
                <div className="text-xs text-ferra-600 dark:text-cancan/80 font-medium">Responsive & Tested</div>
              </div>
            </div>

          </div>

          {/* Terminal / Code Visual Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-brandDark-900/95 border border-ferra-200 dark:border-ferra-800 shadow-xl shadow-ferra-950/5 dark:shadow-2xl dark:shadow-black/80 overflow-hidden font-mono text-xs backdrop-blur-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-ferra-50 dark:bg-[#180e16] border-b border-ferra-200 dark:border-ferra-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-mulberry/80" />
                  <div className="w-3 h-3 rounded-full bg-bloom/80" />
                  <div className="w-3 h-3 rounded-full bg-cancan/80" />
                </div>
                <div className="text-[11px] text-ferra-600 dark:text-cancan/70 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-mulberry" />
                  <span>developer@lauren: ~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Code Content */}
              <div className="p-5 space-y-3.5 text-ferra-800 dark:text-cancan-200 leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 text-ferra-500 dark:text-cancan/70">
                  <span className="text-mulberry">❯</span>
                  <span>cat developer-profile.json</span>
                </div>
                
                <div className="space-y-1 pl-2 border-l border-mulberry/40">
                  <p><span className="text-mulberry dark:text-bloom font-semibold">"engineer":</span> <span className="text-ferra-950 dark:text-white">"{personalInfo.name}"</span>,</p>
                  <p><span className="text-mulberry dark:text-bloom font-semibold">"github":</span> <span className="text-ferra-950 dark:text-white">"@{personalInfo.handle}"</span>,</p>
                  <p><span className="text-mulberry dark:text-bloom font-semibold">"specialties":</span> [</p>
                  <p className="pl-4 text-ferra-700 dark:text-cancan">"AI Virtual Fitting Room & MediaPipe",</p>
                  <p className="pl-4 text-ferra-700 dark:text-cancan">"Modern React 19 & Tailwind CSS",</p>
                  <p className="pl-4 text-ferra-700 dark:text-cancan">"FastAPI, Node.js & REST Architectures"</p>
                  <p>],</p>
                  <p><span className="text-mulberry dark:text-bloom font-semibold">"openTo":</span> <span className="text-mulberry font-medium">["Internships", "Full-Time", "Freelance"]</span></p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-ferra-500 dark:text-cancan/70">
                  <span className="text-mulberry">❯</span>
                  <span className="text-ferra-800 dark:text-cancan-100">gh repo list {personalInfo.handle} --limit 3</span>
                </div>
                <div className="text-[11px] pl-2 space-y-1">
                  <div className="text-mulberry dark:text-bloom">✓ FITWISE [AI Body Sizing & 3D WebGL]</div>
                  <div className="text-mulberry dark:text-bloom">✓ aces-backend [Enterprise Management]</div>
                  <div className="text-mulberry dark:text-bloom">✓ SARISARISTORE [Local Retail Ledger POS]</div>
                </div>
              </div>

              {/* Palette Strip at bottom of terminal card */}
              <div className="px-5 py-2.5 bg-ferra-50/80 dark:bg-[#160d14] border-t border-ferra-200 dark:border-ferra-900/80 flex items-center justify-between text-[10px] text-ferra-600 dark:text-cancan/60">
                <span className="tracking-widest uppercase font-semibold">EPS BRANDING PALETTE</span>
                <div className="flex items-center gap-1.5">
                  {brandPalette.map((p) => (
                    <span
                      key={p.name}
                      title={`${p.name} (${p.hex})`}
                      className="w-3.5 h-3.5 rounded-full border border-black/10 dark:border-white/20 inline-block transition-transform hover:scale-125 shadow-sm"
                      style={{ backgroundColor: p.hex }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
