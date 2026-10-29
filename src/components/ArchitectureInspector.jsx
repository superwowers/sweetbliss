import React, { useState } from 'react';
import { Play, RotateCw, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import { interactiveSystems } from '../data/portfolioData';

export default function ArchitectureInspector() {
  const [activeSystemId, setActiveSystemId] = useState('aces');
  const [selectedNodeIndex, setSelectedNodeIndex] = useState(0);
  const [simulating, setSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(0);

  const currentSystem = interactiveSystems.find(s => s.id === activeSystemId) || interactiveSystems[0];
  const currentNode = currentSystem.nodes[selectedNodeIndex] || currentSystem.nodes[0];

  const handleSystemChange = (id) => {
    setActiveSystemId(id);
    setSelectedNodeIndex(0);
    setSimulating(false);
    setSimulationStep(0);
  };

  const handleSimulateCycle = () => {
    if (simulating) return;
    setSimulating(true);
    setSimulationStep(0);
    setSelectedNodeIndex(0);

    const interval = setInterval(() => {
      setSimulationStep((prev) => {
        const next = prev + 1;
        if (next >= currentSystem.nodes.length) {
          clearInterval(interval);
          setSimulating(false);
          return prev;
        }
        setSelectedNodeIndex(next);
        return next;
      });
    }, 650);
  };

  return (
    <section id="architecture" className="py-20 border-t border-[#D9BBAF] dark:border-[#734652] bg-[#EDE0DC]/40 dark:bg-[#261219]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title - Taste Skill: Direct headline, no eyebrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#3A1E26] dark:text-[#FDF7F5]">
              Interactive Architecture Inspector
            </h2>
            <p className="text-sm sm:text-base text-[#5C3340] dark:text-[#D9C5CE] mt-2 max-w-xl">
              Inspect the real-time execution pipelines, data transformations, and payload telemetry of Lauren's production architectures.
            </p>
          </div>

          {/* System Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] self-start md:self-auto">
            {interactiveSystems.map((sys) => (
              <button
                key={sys.id}
                onClick={() => handleSystemChange(sys.id)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  activeSystemId === sys.id
                    ? 'bg-[#BF5670] text-white'
                    : 'text-[#734652] dark:text-[#D9C5CE] hover:text-[#BF5670] hover:bg-[#F5E9E5] dark:hover:bg-[#341A23]'
                }`}
              >
                {sys.name}
              </button>
            ))}
          </div>
        </div>

        {/* Live Architecture Console - marked with data-ui for taste-skill */}
        <div data-ui="true" className="rounded-2xl bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF] dark:border-[#734652] overflow-hidden">
          
          {/* Console Header Bar */}
          <div className="px-5 py-4 bg-[#EDE0DC] dark:bg-[#341A23] border-b border-[#D9BBAF] dark:border-[#734652] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#BF5670]" />
              <div>
                <span className="font-bold text-sm text-[#3A1E26] dark:text-[#FDF7F5] mr-2">
                  {currentSystem.name}
                </span>
                <span className="text-xs text-[#734652] dark:text-[#D9BBAF]">
                  [{currentSystem.domain}]
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs px-3 py-1 rounded-md bg-[#FAF3F1] dark:bg-[#43222C] border border-[#D9BBAF]/70 dark:border-[#734652]">
                <Activity className="w-3.5 h-3.5 text-[#BF5670]" />
                <span className="text-[#734652] dark:text-[#D9BBAF]">{currentSystem.metricLabel}:</span>
                <span className="font-bold text-[#3A1E26] dark:text-[#FDF7F5]">{currentSystem.metricValue}</span>
              </div>

              <button
                onClick={handleSimulateCycle}
                disabled={simulating}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#BF5670] hover:bg-[#a8445e] disabled:opacity-60 text-white text-xs transition-colors active:scale-95"
              >
                {simulating ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Run Simulation</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Pipeline Nodes Strip */}
          <div className="p-5 border-b border-[#D9BBAF]/60 dark:border-[#734652]/60 bg-[#F5E9E5]/60 dark:bg-[#391c25]/40 overflow-x-auto">
            <div className="flex items-center gap-3 min-w-[620px]">
              {currentSystem.nodes.map((node, index) => {
                const isSelected = selectedNodeIndex === index;
                const isStepActive = simulating && simulationStep === index;

                return (
                  <React.Fragment key={node.step}>
                    <button
                      onClick={() => {
                        setSelectedNodeIndex(index);
                        setSimulating(false);
                      }}
                      className={`flex-1 p-3.5 rounded-xl border text-left transition-colors relative ${
                        isSelected || isStepActive
                          ? 'bg-[#FAF3F1] dark:bg-[#43222C] border-[#BF5670]'
                          : 'bg-[#EDE0DC]/70 dark:bg-[#341A23]/60 border-[#D9BBAF]/80 dark:border-[#734652]/80 hover:border-[#BF5670]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className={`font-bold ${isSelected ? 'text-[#BF5670] dark:text-[#D9B0C3]' : 'text-[#734652] dark:text-[#D9BBAF]'}`}>
                          {node.step}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#EDE0DC] dark:bg-[#261219] text-[#734652] dark:text-[#D9C5CE]">
                          {node.tech}
                        </span>
                      </div>
                      <div className="text-xs font-bold text-[#3A1E26] dark:text-[#FDF7F5] truncate">
                        {node.name}
                      </div>
                    </button>

                    {index < currentSystem.nodes.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-[#BF5670] shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Detailed Inspector View */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Phase Details & Explanation */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="text-xs text-[#BF5670] dark:text-[#D9B0C3] font-semibold">
                  Phase: {currentNode.step}
                </div>
                <h3 className="text-xl font-bold text-[#3A1E26] dark:text-[#FDF7F5] mt-0.5">
                  {currentNode.name}
                </h3>
              </div>

              <p className="text-sm text-[#5C3340] dark:text-[#D9C5CE] leading-relaxed">
                {currentNode.description}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#EDE0DC] dark:bg-[#341A23] border border-[#D9BBAF]/60 dark:border-[#734652]/60">
                  <div className="text-[11px] text-[#734652] dark:text-[#D9BBAF]">Runtime Technology</div>
                  <div className="text-xs font-bold text-[#3A1E26] dark:text-[#FDF7F5] mt-0.5">
                    {currentNode.tech}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#EDE0DC] dark:bg-[#341A23] border border-[#D9BBAF]/60 dark:border-[#734652]/60">
                  <div className="text-[11px] text-[#734652] dark:text-[#D9BBAF]">Execution Status</div>
                  <div className="text-xs font-bold text-[#BF5670] dark:text-[#D9B0C3] mt-0.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#BF5670]" />
                    <span>{currentNode.status}</span>
                  </div>
                </div>
              </div>

              <div className="text-xs text-[#734652] dark:text-[#D9C5CE]">
                Associated Project: <strong className="text-[#3A1E26] dark:text-[#FDF7F5]">{currentSystem.project}</strong> · Verified accuracy: <strong className="text-[#3A1E26] dark:text-[#FDF7F5]">{currentSystem.accuracy}</strong>
              </div>
            </div>

            {/* Right: Live Telemetry Payload (JSON) */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="text-xs text-[#734652] dark:text-[#D9BBAF] mb-1.5 flex items-center justify-between">
                <span>Normalized State Payload</span>
                <span className="text-[10px] text-[#BF5670]">JSON · Verified</span>
              </div>

              <div className="p-4 rounded-xl bg-[#2F171F] dark:bg-[#261219] border border-[#734652] text-[#FDF7F5] text-xs overflow-x-auto flex-1 flex flex-col justify-between">
                <pre className="text-[11px] leading-relaxed text-[#D9C5CE]">
                  <code>{JSON.stringify(currentNode.payload, null, 2)}</code>
                </pre>
                
                <div className="pt-3 mt-3 border-t border-[#734652]/50 text-[10px] text-[#D9B0C3] flex items-center justify-between">
                  <span>Pipeline: {currentSystem.id}.internal</span>
                  <span>Node: {currentNode.step}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
