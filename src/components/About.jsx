import React from 'react';
import { User, CheckCircle, Palette } from 'lucide-react';
import { personalInfo, brandPalette } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-ferra-200 dark:border-ferra-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-mulberry dark:text-bloom font-semibold">
              <User className="w-3.5 h-3.5 text-mulberry" />
              <span>Background & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ferra-950 dark:text-white leading-tight">
              Driven by curiosity, grounded in engineering craftsmanship.
            </h2>

            <div className="space-y-4 text-ferra-700 dark:text-cancan-200 text-sm sm:text-base leading-relaxed">
              <p>
                I am a software engineer focused on building practical, high-impact systems. My journey spans full-stack web platforms, machine-learning computer vision pipelines, and localized digital tools.
              </p>
              <p>
                Whether fine-tuning 33-point body landmarking algorithms for real-time WebGL fitting rooms, or crafting zero-latency offline-first point-of-sale systems for local retail merchants, I believe technology should feel effortless, reliable, and deeply useful.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-brandDark-900/70 border border-ferra-200 dark:border-ferra-800 text-xs text-ferra-800 dark:text-cancan-100 shadow-sm dark:shadow-none">
                <CheckCircle className="w-4 h-4 text-mulberry shrink-0" />
                <span>Modern React & Component Design</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-brandDark-900/70 border border-ferra-200 dark:border-ferra-800 text-xs text-ferra-800 dark:text-cancan-100 shadow-sm dark:shadow-none">
                <CheckCircle className="w-4 h-4 text-mulberry shrink-0" />
                <span>Python & Computer Vision (MediaPipe)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-brandDark-900/70 border border-ferra-200 dark:border-ferra-800 text-xs text-ferra-800 dark:text-cancan-100 shadow-sm dark:shadow-none">
                <CheckCircle className="w-4 h-4 text-mulberry shrink-0" />
                <span>REST API Engineering & Security</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white dark:bg-brandDark-900/70 border border-ferra-200 dark:border-ferra-800 text-xs text-ferra-800 dark:text-cancan-100 shadow-sm dark:shadow-none">
                <CheckCircle className="w-4 h-4 text-mulberry shrink-0" />
                <span>Docker & Automated Testing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Highlights / Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-brandDark-900 border border-ferra-200 dark:border-ferra-800 p-7 space-y-6 shadow-xl shadow-ferra-950/5 dark:shadow-xl">
              <div className="flex items-center gap-3 pb-5 border-b border-ferra-200 dark:border-ferra-800/80">
                <div className="w-12 h-12 rounded-xl bg-ferra-100 dark:bg-ferra/40 border border-mulberry/40 flex items-center justify-center text-ferra-900 dark:text-bloom font-bold font-mono text-lg">
                  LME
                </div>
                <div>
                  <h3 className="font-bold text-ferra-950 dark:text-white text-base">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-mulberry dark:text-bloom">
                    Software & AI Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-ferra-100 dark:border-ferra-800/60">
                  <span className="text-ferra-600 dark:text-cancan/70">Location</span>
                  <span className="text-ferra-900 dark:text-cancan-100 font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-ferra-100 dark:border-ferra-800/60">
                  <span className="text-ferra-600 dark:text-cancan/70">GitHub</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-mulberry dark:text-bloom hover:underline"
                  >
                    @{personalInfo.handle}
                  </a>
                </div>
                <div className="flex justify-between py-1 border-b border-ferra-100 dark:border-ferra-800/60">
                  <span className="text-ferra-600 dark:text-cancan/70">Specialization</span>
                  <span className="text-ferra-900 dark:text-cancan-100">Web & Computer Vision</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-ferra-600 dark:text-cancan/70">Work Status</span>
                  <span className="text-mulberry dark:text-bloom font-semibold">Available for Hire</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-mulberry hover:bg-mulberry-400 text-white font-semibold text-xs flex items-center justify-center transition-colors shadow-md shadow-mulberry/30"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Palette Showcase Strip */}
        <div className="rounded-2xl bg-white/80 dark:bg-brandDark-900/60 border border-ferra-200 dark:border-ferra-800/80 p-6 sm:p-8 shadow-sm dark:shadow-none">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-4 border-b border-ferra-200 dark:border-ferra-800/80">
            <div className="flex items-center gap-2 text-xs font-mono text-mulberry dark:text-bloom uppercase tracking-wider font-semibold">
              <Palette className="w-4 h-4 text-mulberry" />
              <span>Identity Design System • EPS Branding Palette</span>
            </div>
            <span className="text-[11px] font-mono text-ferra-500 dark:text-cancan/60">epsbranding.com</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {brandPalette.map((color) => (
              <div
                key={color.name}
                className="rounded-xl p-3 bg-ferra-50/70 dark:bg-brandDark-950/70 border border-ferra-200/80 dark:border-ferra-800/60 flex flex-col justify-between gap-3 group hover:border-mulberry/40 transition-colors"
              >
                <div
                  className="w-full h-12 rounded-lg border border-black/10 dark:border-white/10 shadow-inner"
                  style={{ backgroundColor: color.hex }}
                />
                <div className="space-y-0.5">
                  <div className="font-mono text-xs font-bold text-ferra-950 dark:text-white group-hover:text-mulberry dark:group-hover:text-bloom transition-colors">
                    {color.name}
                  </div>
                  <div className="font-mono text-[11px] text-ferra-700 dark:text-cancan-200">
                    {color.hex}
                  </div>
                  <div className="font-mono text-[10px] text-ferra-500 dark:text-cancan/50">
                    {color.pantone}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
