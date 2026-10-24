import React from 'react';
import { Terminal, ArrowRight, ShieldCheck, MapPin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle executive atmospheric lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[760px] h-[420px] bg-gradient-to-r from-[#BF5670]/20 via-[#D9B0C3]/15 to-[#734652]/25 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Executive Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF3F1]/90 dark:bg-[#43222C]/90 border border-[#D9BBAF] dark:border-[#734652] text-xs font-mono text-[#734652] dark:text-[#D9C5CE] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BF5670] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BF5670]"></span>
              </span>
              <span className="font-medium text-[#3A1E26] dark:text-[#FDF7F5]">{personalInfo.status}</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#BF5670] dark:text-[#D9B0C3] font-semibold">
                {personalInfo.title}
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] leading-[1.08]">
                Engineering resilient <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BF5670] via-[#734652] to-[#BF5670] dark:from-[#D9B0C3] dark:via-[#D9BBAF] dark:to-[#BF5670]">
                  web platforms & AI systems.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#5C3340] dark:text-[#D9C5CE] max-w-xl font-normal leading-relaxed pt-1">
                I'm <strong className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">{personalInfo.name}</strong>—a software engineer specializing in production-grade full-stack architectures, real-time computer vision pipelines, and intuitive digital products.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-[#BF5670]/25 hover:shadow-[#BF5670]/40 active:scale-[0.98]"
              >
                <span>View Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FAF3F1] hover:bg-[#EDE0DC] text-[#3A1E26] border border-[#D9BBAF] dark:bg-[#43222C] dark:hover:bg-[#4d2833] dark:text-[#FDF7F5] dark:border-[#734652] text-sm font-semibold transition-all shadow-sm active:scale-[0.98]"
              >
                <span>Schedule a Conversation</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670] dark:hover:text-[#FDF7F5] text-sm font-mono transition-colors"
              >
                <Github className="w-4 h-4 text-[#BF5670]" />
                <span>@{personalInfo.handle}</span>
              </a>
            </div>

            {/* Executive Metrics Bar */}
            <div className="grid grid-cols-3 gap-6 pt-7 border-t border-[#D9BBAF]/80 dark:border-[#734652]/80">
              <div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#3A1E26] dark:text-[#FDF7F5]">33-Point</div>
                <div className="text-xs text-[#734652] dark:text-[#D9BBAF] font-medium mt-0.5">3D Pose & Vision AI</div>
              </div>
              <div className="border-l border-[#D9BBAF]/60 dark:border-[#734652]/60 pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#BF5670] dark:text-[#D9B0C3]">End-to-End</div>
                <div className="text-xs text-[#734652] dark:text-[#D9BBAF] font-medium mt-0.5">React 19, FastAPI & Node</div>
              </div>
              <div className="border-l border-[#D9BBAF]/60 dark:border-[#734652]/60 pl-6">
                <div className="text-xl sm:text-2xl font-bold font-mono text-[#3A1E26] dark:text-[#FDF7F5]">Production</div>
                <div className="text-xs text-[#734652] dark:text-[#D9BBAF] font-medium mt-0.5">Docker & Automated QA</div>
              </div>
            </div>

          </div>

          {/* Right Column: Executive Engineer Portrait & System Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] shadow-2xl overflow-hidden backdrop-blur-sm">
              
              {/* Top Window Bar */}
              <div className="px-4 py-3 bg-[#EDE0DC]/90 dark:bg-[#341A23] border-b border-[#D9BBAF] dark:border-[#734652] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#734652]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#BF5670]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D9B0C3]" />
                </div>
                <div className="text-[11px] font-mono text-[#734652] dark:text-[#D9C5CE] flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-[#BF5670]" />
                  <span>engineer.profile — verified</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Portrait Showcase Header */}
              <div className="p-6 pb-5 border-b border-[#D9BBAF]/70 dark:border-[#734652]/70 bg-gradient-to-b from-[#F5E9E5]/60 to-transparent dark:from-[#341A23]/50">
                <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-center gap-5">
                  <div className="relative shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#BF5670] shadow-lg bg-[#341A23]">
                      <img
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        fetchPriority="high"
                        width="256"
                        height="256"
                        className="w-full h-full object-cover object-[center_15%]"
                      />
                    </div>
                    <span
                      className="absolute -bottom-1.5 -right-1.5 p-1.5 rounded-lg bg-[#BF5670] text-white shadow-md border-2 border-[#FAF3F1] dark:border-[#43222C]"
                      title="Verified Software Engineer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  <div className="text-center sm:text-left lg:text-center xl:text-left space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#BF5670]/15 dark:bg-[#BF5670]/25 text-[#BF5670] dark:text-[#D9B0C3] font-mono text-[10px] font-semibold uppercase tracking-wider">
                      Software Engineer
                    </div>
                    <h2 className="text-xl font-bold text-[#3A1E26] dark:text-[#FDF7F5] tracking-tight">
                      {personalInfo.name}
                    </h2>
                    <div className="flex items-center justify-center sm:justify-start lg:justify-center xl:justify-start gap-2 text-xs font-mono text-[#734652] dark:text-[#D9BBAF]">
                      <MapPin className="w-3.5 h-3.5 text-[#BF5670] shrink-0" />
                      <span>{personalInfo.location}</span>
                      <span>•</span>
                      <span>@{personalInfo.handle}</span>
                    </div>
                    <p className="text-xs text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed pt-0.5">
                      Building scalable web applications, AI vision pipelines & enterprise APIs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Technical Telemetry Readout */}
              <div className="p-5 space-y-3 font-mono text-xs text-[#3A1E26] dark:text-[#FDF7F5] leading-relaxed">
                <div className="flex items-center justify-between text-[11px] text-[#734652] dark:text-[#D9BBAF] uppercase tracking-wider font-semibold">
                  <span>Core Architecture Focus</span>
                  <span className="text-[#BF5670] dark:text-[#D9B0C3]">v2026.1</span>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  <div className="px-3.5 py-2.5 rounded-xl bg-[#F5E9E5] dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] flex items-center justify-between">
                    <span className="text-[#5C3340] dark:text-[#D9C5CE]">AI & Vision</span>
                    <span className="font-semibold text-[#3A1E26] dark:text-[#FDF7F5]">MediaPipe • WebGL • FastAPI</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-xl bg-[#F5E9E5] dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] flex items-center justify-between">
                    <span className="text-[#5C3340] dark:text-[#D9C5CE]">Frontend</span>
                    <span className="font-semibold text-[#3A1E26] dark:text-[#FDF7F5]">React 19 • Tailwind CSS</span>
                  </div>
                  <div className="px-3.5 py-2.5 rounded-xl bg-[#F5E9E5] dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] flex items-center justify-between">
                    <span className="text-[#5C3340] dark:text-[#D9C5CE]">Backend & Ops</span>
                    <span className="font-semibold text-[#3A1E26] dark:text-[#FDF7F5]">Node.js • REST • Docker</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
