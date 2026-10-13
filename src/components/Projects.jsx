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
    <section id="projects" className="py-24 border-t border-ferra-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-bloom font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-mulberry" />
              <span>Engineered Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Featured Projects & Architectures
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-brandDark-900 border border-ferra-800/90 self-start md:self-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-mulberry text-white font-semibold shadow-sm shadow-mulberry/30'
                    : 'text-cancan/70 hover:text-white hover:bg-brandDark-800'
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
              className="group rounded-2xl bg-brandDark-900/80 border border-ferra-800/80 hover:border-mulberry/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 glow-card"
            >
              <div>
                {/* Top bar with Category & GitHub link */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-ferra/25 border border-ferra-600/40 text-[11px] font-mono text-bloom font-medium">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cancan/70 hover:text-mulberry transition-colors p-1"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4" />
                    <span className="hidden sm:inline">Source</span>
                  </a>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-bloom transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-cancan/90 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Main Description */}
                <p className="text-sm text-cancan-100/90 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 mb-6 bg-brandDark-950/60 rounded-xl p-3.5 border border-ferra-900/80">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-cancan/70 font-semibold mb-1.5 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-mulberry" />
                    <span>Key Architectural Highlights</span>
                  </div>
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2 text-xs text-cancan-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-mulberry shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer with tags and stats */}
              <div className="pt-4 border-t border-ferra-900/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-brandDark-850 text-cancan-200 text-[11px] font-mono border border-ferra-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-cancan/60 text-[11px]">
                    {project.stats}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-bloom hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
                  >
                    <span>Explore Repo</span>
                    <ChevronRight className="w-4 h-4 text-mulberry" />
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
