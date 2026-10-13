import React from 'react';
import { User, Code2, GraduationCap, Compass, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-slate-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-emerald-400 font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>Background & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Driven by curiosity, grounded in engineering craftsmanship.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a software engineer focused on building practical, high-impact systems. My journey spans full-stack web platforms, machine-learning computer vision pipelines, and localized digital tools.
              </p>
              <p>
                Whether fine-tuning 33-point body landmarking algorithms for real-time WebGL fitting rooms, or crafting zero-latency offline-first point-of-sale systems for local retail merchants, I believe technology should feel effortless, reliable, and deeply useful.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modern React & Component Design</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Python & Computer Vision (MediaPipe)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>REST API Engineering & Security</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Docker & Automated Testing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Highlights / Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-7 space-y-6">
              <div className="flex items-center gap-3 pb-5 border-b border-slate-800">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold font-mono">
                  LME
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-emerald-400">
                    Software & AI Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Location</span>
                  <span className="text-slate-200 font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">GitHub</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline"
                  >
                    @{personalInfo.handle}
                  </a>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-slate-200">Web & Computer Vision</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Work Status</span>
                  <span className="text-emerald-300 font-semibold">Available for Hire</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs flex items-center justify-center transition-colors shadow-sm"
                >
                  Start a Conversation
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
