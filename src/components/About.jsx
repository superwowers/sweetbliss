import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    { title: "Computer Vision & Pose AI", desc: "MediaPipe 33-point body landmarking, spatial depth calculations, and biomechanical measurement extraction." },
    { title: "Modern Reactive Frontends", desc: "React 19 concurrent architectures, optimistic state updates, accessible semantic layouts, and WebGL rendering." },
    { title: "Resilient Backends & Security", desc: "Python/FastAPI microservices, Node.js REST architectures, cryptographic JWT token validation, and RBAC." },
    { title: "Offline-First & Local Persistence", desc: "Sub-5ms client transactions via IndexedDB, conflict resolution engines, and containerized Docker environments." }
  ];

  return (
    <section id="about" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Portrait Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] overflow-hidden">
              
              <div className="relative aspect-[3/4] w-full bg-[#EDE0DC] dark:bg-[#261219] overflow-hidden">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  loading="lazy"
                  width="768"
                  height="1024"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>

              {/* Bio Details Footer */}
              <div className="p-6 space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                  <span className="text-[#734652] dark:text-[#D9BBAF]">Location</span>
                  <span className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
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
                <div className="flex justify-between items-center py-1.5 border-b border-[#D9BBAF]/50 dark:border-[#734652]/60">
                  <span className="text-[#734652] dark:text-[#D9BBAF]">Specialization</span>
                  <span className="text-[#3A1E26] dark:text-[#FDF7F5] font-semibold">AI & Full-Stack</span>
                </div>
                <div className="flex justify-between items-center pt-1 text-[#734652] dark:text-[#D9BBAF]">
                  <span>Status</span>
                  <span className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold">Active & Available</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Editorial Narrative & Principles */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] leading-tight">
              Curiosity-driven engineering grounded in practical utility.
            </h2>

            <div className="space-y-4 text-[#5C3340] dark:text-[#D9C5CE] text-sm sm:text-base leading-relaxed">
              <p>
                I am a full-stack developer and AI systems engineer based in the Philippines. My work is centered on building software that solves concrete, physical-world friction—whether that means extracting real-time anatomical body measurements from a laptop webcam or creating a zero-latency digital cash register for a neighborhood merchant.
              </p>
              <p>
                In an era dominated by repetitive design templates and disconnected APIs, I focus on end-to-end craftsmanship: architecting responsive user interfaces with React 19 and Tailwind CSS, writing resilient Python and Node.js backend services, containerizing with Docker, and guaranteeing system reliability through automated testing.
              </p>
            </div>

            {/* Core Competency Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-4 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23]/60 border border-[#D9BBAF]/50 dark:border-[#734652]/60 space-y-1"
                >
                  <div className="font-bold text-xs sm:text-sm text-[#3A1E26] dark:text-[#FDF7F5]">
                    {pillar.title}
                  </div>
                  <p className="text-xs text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
