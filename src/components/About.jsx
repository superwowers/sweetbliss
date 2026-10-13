import React from 'react';
import { User, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#BF5670] dark:text-[#D9B0C3] font-semibold">
              <User className="w-3.5 h-3.5" />
              <span>Background & Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] leading-tight">
              Driven by curiosity, grounded in engineering craftsmanship.
            </h2>

            <div className="space-y-4 text-[#5C3340] dark:text-[#D9C5CE] text-sm sm:text-base leading-relaxed">
              <p>
                I am a software engineer focused on building practical, high-impact systems. My journey spans full-stack web platforms, machine-learning computer vision pipelines, and localized digital tools.
              </p>
              <p>
                Whether fine-tuning 33-point body landmarking algorithms for real-time WebGL fitting rooms, or crafting zero-latency offline-first point-of-sale systems for local retail merchants, I believe technology should feel effortless, reliable, and deeply useful.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>Modern React & Component Design</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>Python & Computer Vision (MediaPipe)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>REST API Engineering & Security</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>Docker & Automated Testing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Highlights / Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] p-7 space-y-6 shadow-xl">
              <div className="flex items-center gap-3 pb-5 border-b border-[#D9BBAF] dark:border-[#734652]">
                <div className="w-12 h-12 rounded-xl bg-[#734652] border-2 border-[#BF5670] flex items-center justify-center text-white font-bold font-mono text-lg shadow-sm">
                  LME
                </div>
                <div>
                  <h3 className="font-bold text-[#3A1E26] dark:text-[#FDF7F5] text-base">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-mono text-[#BF5670] dark:text-[#D9B0C3] font-medium">
                    Software & AI Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                  <span className="text-[#734652] dark:text-[#D9BBAF]">Location</span>
                  <span className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                  <span className="text-[#734652] dark:text-[#D9BBAF]">GitHub</span>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold hover:underline"
                  >
                    @{personalInfo.handle}
                  </a>
                </div>
                <div className="flex justify-between py-1 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                  <span className="text-[#734652] dark:text-[#D9BBAF]">Specialization</span>
                  <span className="text-[#3A1E26] dark:text-[#FDF7F5]">Web & Computer Vision</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#734652] dark:text-[#D9BBAF]">Work Status</span>
                  <span className="text-[#BF5670] dark:text-[#D9B0C3] font-bold">Available for Hire</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="w-full py-3 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-semibold text-xs flex items-center justify-center transition-colors shadow-md shadow-[#BF5670]/30"
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
