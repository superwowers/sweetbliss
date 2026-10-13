import React from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Rich atmospheric glows using Mulberry, Bloom, and Ferra */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#BF5670]/25 via-[#D9B0C3]/20 to-[#734652]/30 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#FAF3F1] dark:bg-[#43222C] border border-[#BF5670]/50 text-xs font-mono text-[#BF5670] dark:text-[#D9B0C3] shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF5670] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BF5670]"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] leading-[1.1]">
                Engineering robust <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF5670] via-[#734652] to-[#BF5670] dark:from-[#D9B0C3] dark:via-[#D9BBAF] dark:to-[#BF5670]">
                  web apps & AI systems
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#734652] dark:text-[#D9C5CE] max-w-xl font-normal leading-relaxed pt-1">
                Hi, I'm <strong className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">{personalInfo.name}</strong>. I architect performant full-stack platforms, computer vision pipelines, and human-centered software.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-[#BF5670]/30 hover:shadow-[#BF5670]/50 active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF3F1] hover:bg-[#EDE0DC] text-[#3A1E26] border border-[#D9BBAF] dark:bg-[#43222C] dark:hover:bg-[#4d2833] dark:text-[#FDF7F5] dark:border-[#734652] text-sm font-medium transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D9BBAF] dark:border-[#734652]">
              <div>
                <div className="text-2xl font-bold font-mono text-[#BF5670] dark:text-[#D9B0C3]">33-Pt</div>
                <div className="text-xs text-[#734652] dark:text-[#D9BBAF] font-medium">Pose AI Landmarking</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#3A1E26] dark:text-[#FDF7F5]">Full-Stack</div>
                <div className="text-xs text-[#734652] dark:text-[#D9BBAF] font-medium">React, Python & Node</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#BF5670]">100%</div>
                <div className="text-xs text-[#734652] dark:text-[#D9BBAF] font-medium">Responsive & Tested</div>
              </div>
            </div>

          </div>

          {/* Terminal / Code Visual Preview */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] shadow-xl dark:shadow-2xl overflow-hidden font-mono text-xs backdrop-blur-sm">
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#EDE0DC] dark:bg-[#341A23] border-b border-[#D9BBAF] dark:border-[#734652] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#734652]" />
                  <div className="w-3 h-3 rounded-full bg-[#BF5670]" />
                  <div className="w-3 h-3 rounded-full bg-[#D9B0C3]" />
                </div>
                <div className="text-[11px] text-[#734652] dark:text-[#D9C5CE] flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-[#BF5670]" />
                  <span>developer@lauren: ~</span>
                </div>
                <div className="w-8" />
              </div>

              {/* Code Content */}
              <div className="p-5 space-y-3.5 text-[#3A1E26] dark:text-[#FDF7F5] leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 text-[#734652] dark:text-[#D9C5CE]">
                  <span className="text-[#BF5670] font-bold">❯</span>
                  <span>cat developer-profile.json</span>
                </div>
                
                <div className="space-y-1 pl-2 border-l-2 border-[#BF5670]">
                  <p><span className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold">"engineer":</span> <span className="text-[#734652] dark:text-[#D9BBAF]">"{personalInfo.name}"</span>,</p>
                  <p><span className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold">"github":</span> <span className="text-[#734652] dark:text-[#D9BBAF]">"@{personalInfo.handle}"</span>,</p>
                  <p><span className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold">"specialties":</span> [</p>
                  <p className="pl-4 text-[#734652] dark:text-[#D9C5CE]">"AI Virtual Fitting Room & MediaPipe",</p>
                  <p className="pl-4 text-[#734652] dark:text-[#D9C5CE]">"Modern React 19 & Tailwind CSS",</p>
                  <p className="pl-4 text-[#734652] dark:text-[#D9C5CE]">"FastAPI, Node.js & REST Architectures"</p>
                  <p>],</p>
                  <p><span className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold">"openTo":</span> <span className="text-[#BF5670] font-medium">["Internships", "Full-Time", "Freelance"]</span></p>
                </div>

                <div className="pt-2 flex items-center gap-2 text-[#734652] dark:text-[#D9C5CE]">
                  <span className="text-[#BF5670] font-bold">❯</span>
                  <span className="text-[#3A1E26] dark:text-[#FDF7F5]">gh repo list {personalInfo.handle} --limit 3</span>
                </div>
                <div className="text-[11px] pl-2 space-y-1">
                  <div className="text-[#BF5670] dark:text-[#D9B0C3] font-medium">✓ FITWISE [AI Body Sizing & 3D WebGL]</div>
                  <div className="text-[#BF5670] dark:text-[#D9B0C3] font-medium">✓ aces-backend [Enterprise Management]</div>
                  <div className="text-[#BF5670] dark:text-[#D9B0C3] font-medium">✓ SARISARISTORE [Local Retail Ledger POS]</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
