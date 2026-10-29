import React, { useState } from 'react';
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Enterprise Full-Stack & LMS',
    'AI & Computer Vision',
    'Distributed Web Apps',
    'Brand & Web Systems'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const flagshipProject = projects.find(p => p.id === 'aces') || projects[0];
  const secondaryProjects = filteredProjects.filter(p => selectedCategory !== 'All' ? true : p.id !== 'aces');

  return (
    <section id="projects" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Taste-Skill: Direct title, <= 2 lines, no eyebrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5]">
              Featured Systems & Case Studies
            </h2>
            <p className="text-sm sm:text-base text-[#5C3340] dark:text-[#D9C5CE] mt-2 max-w-xl">
              Production architectures anchored by enterprise academic platforms, intelligent computer vision, and local-first distributed systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  selectedCategory === category
                    ? 'bg-[#BF5670] text-white font-medium'
                    : 'bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670]'
                }`}
              >
                {category === 'Enterprise Full-Stack & LMS' ? 'ACES LMS / Enterprise' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Primary Flagship Feature Case Study: ACES LMS */}
        {selectedCategory === 'All' && flagshipProject && (
          <div className="mb-12 rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] p-7 sm:p-9">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2.5 py-1 rounded bg-[#BF5670] text-white font-semibold">
                    Primary Flagship System
                  </span>
                  <span className="text-xs text-[#734652] dark:text-[#D9BBAF]">
                    {flagshipProject.category} · {flagshipProject.year}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#3A1E26] dark:text-[#FDF7F5] tracking-tight">
                  {flagshipProject.title}: {flagshipProject.subtitle}
                </h3>

                <p className="text-sm sm:text-base text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed">
                  {flagshipProject.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2">
                  {flagshipProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A1E26] dark:text-[#FDF7F5]">
                      <CheckCircle2 className="w-4 h-4 text-[#BF5670] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags & Action */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-[#EDE0DC] dark:bg-[#341A23] text-[11px] text-[#734652] dark:text-[#D9C5CE]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={flagshipProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#BF5670] hover:bg-[#a8445e] text-white text-xs font-medium transition-colors ml-auto active:scale-95"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Backend Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right: Technical Spec Card */}
              <div className="lg:col-span-5 rounded-xl bg-[#EDE0DC] dark:bg-[#341A23] border border-[#D9BBAF]/80 dark:border-[#734652] p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#D9BBAF]/60 dark:border-[#734652]/60 text-xs">
                  <span className="font-bold text-[#3A1E26] dark:text-[#FDF7F5]">Institutional Specifications</span>
                  <span className="text-[#BF5670] dark:text-[#D9B0C3]">Production Ready</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {flagshipProject.metrics.map((m, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-[11px] text-[#734652] dark:text-[#D9BBAF]">
                        {m.label}
                      </div>
                      <div className="text-sm font-bold text-[#3A1E26] dark:text-[#FDF7F5]">
                        {m.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#D9BBAF]/60 dark:border-[#734652]/60">
                  <a
                    href="#architecture"
                    className="text-xs text-[#BF5670] dark:text-[#D9B0C3] hover:underline flex items-center gap-1"
                  >
                    <span>Inspect ACES LMS Auth & Query pipeline live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Secondary Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] p-6 flex flex-col justify-between hover:border-[#BF5670] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs pb-3 mb-4 border-b border-[#D9BBAF]/50 dark:border-[#734652]/50">
                  <span className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold">
                    {project.category}
                  </span>
                  <span className="text-[#734652] dark:text-[#D9BBAF]">
                    {project.year || '2026'}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#3A1E26] dark:text-[#FDF7F5] tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-[#734652] dark:text-[#D9BBAF] mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 p-3 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23]/60 border border-[#D9BBAF]/40 dark:border-[#734652]/40">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3A1E26] dark:text-[#FDF7F5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BF5670] shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-0.5 rounded bg-[#EDE0DC] dark:bg-[#341A23] text-[10px] text-[#734652] dark:text-[#D9C5CE]">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#D9BBAF]/40 dark:border-[#734652]/40 flex items-center justify-between text-xs">
                  <span className="text-[#734652] dark:text-[#D9BBAF] text-[11px] truncate mr-2">
                    {project.role}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#BF5670] dark:text-[#D9B0C3] font-semibold hover:underline flex items-center gap-1 shrink-0"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <span>Source</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
