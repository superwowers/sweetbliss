import React from 'react';
import { Layers, Terminal, Cpu, ShieldCheck } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const principles = [
    {
      title: "Clean Modular Code",
      desc: "Architecting readable, single-responsibility components and decoupled API layers that scale seamlessly.",
      icon: Terminal
    },
    {
      title: "Production Performance",
      desc: "Optimizing bundle weight, responsive layout shifts, and API query efficiency for sub-second interactions.",
      icon: Cpu
    },
    {
      title: "Resilient Architectures",
      desc: "Robust input validation, error handling boundaries, and automated testing with Vitest and Playwright.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-[#D9BBAF] dark:border-[#734652] bg-[#EDE0DC]/40 dark:bg-[#261219]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-[#BF5670] dark:text-[#D9B0C3] font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5] mb-3">
            Core Stack & Tooling
          </h2>
          <p className="text-[#734652] dark:text-[#D9C5CE] text-sm sm:text-base leading-relaxed">
            A battle-tested repertoire covering modern client-side reactive architectures, high-throughput microservices, and AI computer vision algorithms.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[#D9BBAF] dark:border-[#734652]">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#BF5670]" />
                  <h3 className="font-mono text-sm font-bold text-[#3A1E26] dark:text-[#FDF7F5] uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#3A1E26] dark:text-[#FDF7F5] font-medium">{skill.name}</span>
                        <span className="text-[#BF5670] dark:text-[#D9B0C3] font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#EDE0DC] dark:bg-[#261219] overflow-hidden border border-[#D9BBAF]/60 dark:border-[#734652]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#734652] via-[#BF5670] to-[#D9B0C3] transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border-2 border-[#D9BBAF] dark:border-[#734652] flex items-start gap-4 shadow-sm"
              >
                <div className="p-2.5 rounded-xl bg-[#BF5670]/15 dark:bg-[#BF5670]/30 border border-[#BF5670]/40 text-[#BF5670] shrink-0">
                  <Icon className="w-5 h-5 text-[#BF5670]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#3A1E26] dark:text-[#FDF7F5] mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
