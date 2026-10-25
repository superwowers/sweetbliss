import React from 'react';
import { ArrowRight, ArrowDown, Github, MapPin, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Editorial Copy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE0DC] dark:bg-[#341A23] text-xs text-[#5C3340] dark:text-[#D9C5CE]">
              <span className="w-2 h-2 rounded-full bg-[#BF5670]"></span>
              <span className="font-medium text-[#3A1E26] dark:text-[#FDF7F5]">{personalInfo.status}</span>
            </div>

            {/* Headline - Taste-Skill: Confident scale, <=2 lines */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] leading-[1.05]">
                {personalInfo.name}
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-[#BF5670] dark:text-[#D9B0C3]">
                {personalInfo.title}
              </p>
            </div>

            {/* Supporting sentence directly below headline */}
            <p className="text-base sm:text-lg text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed max-w-xl">
              Building intuitive web applications, real-time computer vision pipelines with MediaPipe 33-point pose landmarking, and localized retail tools in the Philippines.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white font-medium text-sm transition-colors active:scale-95"
              >
                <span>Selected Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#EDE0DC] hover:bg-[#D9BBAF]/50 dark:bg-[#341A23] dark:hover:bg-[#43222C] text-[#3A1E26] dark:text-[#FDF7F5] text-sm font-medium transition-colors active:scale-95"
              >
                <span>Live System Pipeline</span>
                <ArrowDown className="w-4 h-4 text-[#BF5670]" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670] dark:hover:text-[#FDF7F5] text-sm transition-colors"
              >
                <Github className="w-4 h-4 text-[#BF5670]" />
                <span>@{personalInfo.handle}</span>
              </a>
            </div>

            {/* Technical Telemetry Summary Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#D9BBAF]/60 dark:border-[#734652]/60">
              {personalInfo.summaryStats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-lg font-bold text-[#3A1E26] dark:text-[#FDF7F5]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[#734652] dark:text-[#D9BBAF]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Authentic Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] overflow-hidden">
              
              {/* Natural 3:4 Portrait with tone-step backdrop */}
              <div className="relative aspect-[3/4] w-full bg-[#EDE0DC] dark:bg-[#261219] overflow-hidden">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  fetchPriority="high"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-[center_20%]"
                />
                
                {/* Clean, authentic name & role caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-[#2F171F]/90 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-base tracking-tight text-white">
                        {personalInfo.name}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#D9B0C3]">
                        <MapPin className="w-3.5 h-3.5 text-[#BF5670]" />
                        <span>{personalInfo.location}</span>
                        <span>•</span>
                        <span>@{personalInfo.handle}</span>
                      </div>
                    </div>
                    <span className="p-1.5 rounded-lg bg-[#BF5670] text-white" title="Verified Engineer">
                      <ShieldCheck className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Technical summary footer */}
              <div className="p-4 bg-[#FAF3F1] dark:bg-[#43222C] border-t border-[#D9BBAF]/50 dark:border-[#734652]/50 flex items-center justify-between text-xs">
                <span className="text-[#734652] dark:text-[#D9BBAF]">Core Engineering</span>
                <span className="font-semibold text-[#3A1E26] dark:text-[#FDF7F5]">AI Vision · Full-Stack · Docker</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
