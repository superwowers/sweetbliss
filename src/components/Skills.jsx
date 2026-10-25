import React, { useState } from 'react';
import { skillsMatrix, engineeringPrinciples } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'AI, Vision & 3D Graphics',
    'Frontend Architecture & Modern Web',
    'Backend Systems, Security & Databases',
    'Reliability, Tooling & DevOps'
  ];

  const displayedGroups = selectedCategory === 'All'
    ? skillsMatrix
    : skillsMatrix.filter(group => group.category === selectedCategory);

  return (
    <section id="skills" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Taste Skill: Direct headline, no eyebrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5]">
              Technical Skills & Architecture Matrix
            </h2>
            <p className="text-sm sm:text-base text-[#5C3340] dark:text-[#D9C5CE] mt-2 max-w-2xl leading-relaxed">
              Every capability is backed by real project implementation in production—ranging from 33-point computer vision mathematics to offline-first transactional ledgers.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#BF5670] text-white font-medium'
                    : 'bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670]'
                }`}
              >
                {cat === 'All' ? 'All Disciplines' : cat.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="space-y-10">
          {displayedGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] p-6 sm:p-8"
            >
              {/* Category Title & Description */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 mb-6 border-b border-[#D9BBAF]/60 dark:border-[#734652]/60">
                <h3 className="text-xl font-bold text-[#3A1E26] dark:text-[#FDF7F5] tracking-tight">
                  {group.category}
                </h3>
                <span className="text-xs text-[#734652] dark:text-[#D9BBAF]">
                  {group.description}
                </span>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23]/60 border border-[#D9BBAF]/50 dark:border-[#734652]/60 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-bold text-sm text-[#3A1E26] dark:text-[#FDF7F5]">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#FAF3F1] dark:bg-[#43222C] text-[#BF5670] dark:text-[#D9B0C3] border border-[#D9BBAF]/60 dark:border-[#734652]">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#D9BBAF]/40 dark:border-[#734652]/40 flex items-center justify-between text-[11px]">
                      <span className="text-[#734652] dark:text-[#D9BBAF]">Production Scope:</span>
                      <span className="font-semibold text-[#3A1E26] dark:text-[#FDF7F5]">
                        {skill.provenance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Principles Table (Taste Skill: Solid information, no generic 3-card icons) */}
        <div className="mt-14 rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-[#3A1E26] dark:text-[#FDF7F5]">
              Core Engineering Tenets
            </h3>
            <p className="text-xs sm:text-sm text-[#734652] dark:text-[#D9C5CE] mt-1">
              Guiding architectural laws enforced across all full-stack applications and AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringPrinciples.map((principle) => (
              <div
                key={principle.id}
                className="p-5 rounded-xl bg-[#EDE0DC]/60 dark:bg-[#341A23]/60 border border-[#D9BBAF]/60 dark:border-[#734652]/60 space-y-2"
              >
                <div className="font-bold text-sm text-[#3A1E26] dark:text-[#FDF7F5]">
                  {principle.title}
                </div>
                <div className="text-xs font-medium text-[#BF5670] dark:text-[#D9B0C3]">
                  "{principle.statement}"
                </div>
                <p className="text-xs text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed pt-1">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
