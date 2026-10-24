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
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>Modern React & Component Design</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>Python & Computer Vision (MediaPipe)</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>REST API Engineering & Security</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-xs font-medium text-[#3A1E26] dark:text-[#FDF7F5] shadow-sm">
                <CheckCircle className="w-4 h-4 text-[#BF5670] shrink-0" />
                <span>Docker & Automated Testing</span>
              </div>
            </div>

          </div>

          {/* Right Column: Highlights / Quick Facts Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] overflow-hidden shadow-xl">
              {/* Featured Studio Portrait */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden border-b border-[#D9BBAF] dark:border-[#734652] bg-[#341A23]">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  loading="lazy"
                  width="600"
                  height="480"
                  className="w-full h-full object-cover object-[center_15%] hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F171F]/90 via-[#2F171F]/15 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight drop-shadow-sm">
                      {personalInfo.name}
                    </h3>
                    <p className="text-xs font-mono text-[#D9B0C3] font-medium">
                      Full-Stack & AI Systems Engineer
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#BF5670] text-white font-mono text-[10px] font-semibold shadow-sm">
                    @{personalInfo.handle}
                  </span>
                </div>
              </div>

              <div className="p-7 space-y-6">
                <div className="space-y-3.5 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                    <span className="text-[#734652] dark:text-[#D9BBAF]">Location</span>
                    <span className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">{personalInfo.location}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
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
                  <div className="flex justify-between py-1.5 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                    <span className="text-[#734652] dark:text-[#D9BBAF]">Specialization</span>
                    <span className="text-[#3A1E26] dark:text-[#FDF7F5]">Full-Stack & Vision AI</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#734652] dark:text-[#D9BBAF]">Availability</span>
                    <span className="text-[#BF5670] dark:text-[#D9B0C3] font-bold">Open to Opportunities</span>
                  </div>
                </div>

                <div className="pt-1">
                  <a
                    href="#contact"
                    className="w-full py-3 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-semibold text-xs flex items-center justify-center transition-colors shadow-md shadow-[#BF5670]/25"
                  >
                    Start a Conversation
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
