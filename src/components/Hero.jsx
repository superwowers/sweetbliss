import React from 'react';
import { ArrowDown, Sparkles, Terminal, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle atmospheric glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Engineering robust <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  web apps & AI systems
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed pt-1">
                Hi, I'm <strong className="text-white font-semibold">{personalInfo.name}</strong>. I architect performant full-stack platforms, computer vision pipelines, and human-centered software.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 text-sm font-medium transition-all active:scale-[0.98]"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">33-Pt</div>
                <div className="text-xs text-slate-400 font-medium">Pose AI Landmarking</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white">Full-Stack</div>
                <div className="text-xs text-slate-400 font-medium">React, Python & Node</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400">100%</div>
                <div className="text-xs text-slate-400 font-medium">Responsive & Tested</div>
              </div>
            </div>

          </div>

          {/* Terminal / Code Visual Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0f172a]/90 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs backdrop-blur-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#0c1222] border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>developer@lauren: ~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Code Content */}
              <div className="p-5 space-y-3.5 text-slate-300 leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400">❯</span>
                  <span>cat developer-profile.json</span>
                </div>
                
                <div className="text-slate-300 space-y-1 pl-2 border-l border-emerald-500/30">
                  <p><span className="text-emerald-400 font-semibold">"engineer":</span> <span className="text-teal-200">"{personalInfo.name}"</span>,</p>
                  <p><span className="text-emerald-400 font-semibold">"github":</span> <span className="text-teal-200">"@{personalInfo.handle}"</span>,</p>
                  <p><span className="text-emerald-400 font-semibold">"specialties":</span> [</p>
                  <p className="pl-4 text-cyan-300">"AI Virtual Fitting Room & MediaPipe",</p>
                  <p className="pl-4 text-cyan-300">"Modern React 19 & Tailwind CSS",</p>
                  <p className="pl-4 text-cyan-300">"FastAPI, Node.js & REST Architectures"</p>
                  <p>],</p>
                  <p><span className="text-emerald-400 font-semibold">"openTo":</span> <span className="text-amber-300">["Internships", "Full-Time", "Freelance"]</span></p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400">❯</span>
                  <span className="text-slate-200">gh repo list {personalInfo.handle} --limit 3</span>
                </div>
                <div className="text-[11px] text-slate-400 pl-2 space-y-1">
                  <div className="text-emerald-300">✓ FITWISE [AI Body Sizing & 3D WebGL]</div>
                  <div className="text-emerald-300">✓ aces-backend [Enterprise Management]</div>
                  <div className="text-emerald-300">✓ SARISARISTORE [Local Retail Ledger POS]</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
