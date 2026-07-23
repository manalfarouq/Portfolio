import React, { useState } from 'react';
import { PROJECTS } from '../data';
import { Terminal, Github, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectDemo: (demoKey: 'f1' | 'emotion' | 'hr' | 'zoroxp') => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectDemo }) => {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="projects" className="py-24 bg-[#FAF8F4] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 micro-label text-[#171717]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F5132]"></div>
              <span>01. Réalisations Phares</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] mt-2">
              Projets & Modèles IA
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4A4A45] font-normal leading-relaxed">
            Architectures de haute précision : modèles prédictifs, vision temps réel et systèmes RAG multi-agents avec métriques réelles et notebooks exécutables.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => {
            const isExpanded = !!expandedProjects[project.id];
            const isPhare = project.badge.includes("Phare") || project.badge.includes("⭐");
            
            return (
              <div
                key={project.id}
                className="group bg-white rounded-xl border border-[#E2DDD5] p-8 shadow-xs hover:border-[#171717] transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="micro-label text-[#6C6C66]">
                      PROJET 0{idx + 1} • {project.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${
                        isPhare
                          ? 'bg-[#FBF6ED] text-[#8C6D38] border-[#B08D57]'
                          : 'bg-[#EFEBE4] text-[#0F5132] border-[#C8DEC3]'
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#171717]">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0F5132] mt-1">
                    {project.subtitle}
                  </p>

                  {/* Concise 1-Sentence Description */}
                  <p className="text-sm text-[#4A4A45] font-medium leading-relaxed mt-4">
                    {project.description}
                  </p>

                  {/* Accordion for Full Technical Details */}
                  <div className="mt-4">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="text-[11px] font-bold text-[#171717] hover:text-[#0F5132] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
                    >
                      <span>{isExpanded ? "Masquer l'architecture complète" : "Voir l'architecture complète"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5] space-y-2 text-xs text-[#4A4A45] animate-fade-in">
                        {project.fullDetails.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0F5132] shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Section: Metrics & Actions */}
                <div className="mt-6 pt-6 border-t border-[#E2DDD5] space-y-5">
                  
                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 px-3 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5]">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <span className="block text-lg font-serif font-bold text-[#171717]">{m.value}</span>
                        <span className="micro-label text-[9px] text-[#6C6C66] block leading-tight">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills (Warm Neutral) */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded bg-[#EFEBE4] text-[#4A4A45] border border-[#E2DDD5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-1">
                    {project.demoKey && (
                      <button
                        onClick={() => onSelectDemo(project.demoKey!)}
                        className="px-5 py-2.5 rounded-full bg-[#171717] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#333330] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Notebook & Démo →</span>
                      </button>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-[#4A4A45] hover:text-[#171717] underline transition-colors flex items-center gap-1.5"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code GitHub</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};



