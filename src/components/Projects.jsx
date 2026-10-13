import React, { useState } from 'react';
import { Sparkles, Github, Cpu, CheckCircle2, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI & Computer Vision', 'Full-Stack', 'Web Apps'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#BF5670] dark:text-[#D9B0C3] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5]">
              Featured Projects & Architectures
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] self-start md:self-auto shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-[#BF5670] text-white font-semibold shadow-md shadow-[#BF5670]/30'
                    : 'text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670] hover:bg-[#F5E9E5] dark:hover:bg-[#341A23]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl glow-card"
            >
              <div>
                {/* Top bar with Category & GitHub link */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#BF5670]/15 dark:bg-[#BF5670]/30 border border-[#BF5670]/40 text-[11px] font-mono text-[#BF5670] dark:text-[#D9B0C3] font-semibold">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670] transition-colors p-1"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4 text-[#BF5670]" />
                    <span className="hidden sm:inline">Source</span>
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#3A1E26] dark:text-[#FDF7F5] group-hover:text-[#BF5670] dark:group-hover:text-[#D9B0C3] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#BF5670] dark:text-[#D9BBAF] mt-1 mb-3 font-medium">
                  {project.subtitle}
                </p>

                {/* Main Description */}
                <p className="text-sm text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 mb-6 bg-[#EDE0DC] dark:bg-[#341A23] rounded-xl p-3.5 border border-[#D9BBAF] dark:border-[#734652]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#734652] dark:text-[#D9BBAF] font-semibold mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#BF5670]" />
                    <span>Key Architectural Highlights</span>
                  </div>
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-[#3A1E26] dark:text-[#FDF7F5]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#BF5670] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer with tags and stats */}
              <div className="pt-4 border-t border-[#D9BBAF] dark:border-[#734652]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#F5E9E5] dark:bg-[#341A23] text-[#734652] dark:text-[#D9BBAF] text-[11px] font-mono border border-[#D9BBAF] dark:border-[#734652]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-[#734652] dark:text-[#D9C5CE] text-[11px]">
                    {project.stats}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#BF5670] dark:text-[#D9B0C3] hover:text-[#a8445e] transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Explore Repo</span>
                    <ChevronRight className="w-4 h-4 text-[#BF5670]" />
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
