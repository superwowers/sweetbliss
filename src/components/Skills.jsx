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
    <section id="skills" className="py-24 border-t border-ferra-800/80 bg-brandDark-950/50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-bloom font-semibold mb-2">
            <Layers className="w-3.5 h-3.5 text-mulberry" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Core Stack & Tooling
          </h2>
          <p className="text-cancan/80 text-sm sm:text-base leading-relaxed">
            A battle-tested repertoire covering modern client-side reactive architectures, high-throughput microservices, and AI computer vision algorithms.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl bg-brandDark-900/80 border border-ferra-800/90 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-6 pb-3 border-b border-ferra-800/80">
                  <div className="w-2.5 h-2.5 rounded-full bg-mulberry" />
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    {category.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-cancan-100">{skill.name}</span>
                        <span className="text-bloom font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-brandDark-950 overflow-hidden border border-ferra-900/60">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-mulberry via-bloom to-cancan transition-all duration-700"
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
                className="p-6 rounded-2xl bg-brandDark-900/50 border border-ferra-800/70 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-ferra/30 border border-ferra-600/50 text-bloom shrink-0">
                  <Icon className="w-5 h-5 text-mulberry" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-cancan/80 leading-relaxed">
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
