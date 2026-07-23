import React, { useState } from 'react';
import { EDUCATION_LIST, SKILL_CATEGORIES } from '../data';
import { GraduationCap, Languages } from 'lucide-react';

export const AboutEducation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  // Shortened tab labels for ultra-clean layout
  const shortCategoryTitles = [
    "IA & Machine Learning",
    "Computer Vision",
    "RAG & NLP Multi-Agents",
    "Cloud & MLOps Infra"
  ];

  return (
    <section id="about" className="py-24 bg-[#FAF8F4] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 micro-label text-[#171717]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F5132]"></div>
              <span>03. Expertise & Formations</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] mt-2">
              Parcours & Compétences
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4A4A45] font-normal leading-relaxed">
            Formation académique rigoureuse en génie informatique et data science, couplée à une solide maîtrise opérationnelle des architectures IA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Education Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#171717] flex items-center gap-2 mb-6">
              <GraduationCap className="w-6 h-6 text-[#0F5132]" />
              Diplômes & Formations
            </h3>

            <div className="relative border-l-2 border-[#171717]/20 pl-6 space-y-8">
              {EDUCATION_LIST.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0F5132] border-2 border-[#FAF8F4]"></div>

                  <div className="flex flex-wrap items-center justify-between gap-2 micro-label text-[#171717]">
                    <span className="font-bold">{item.period}</span>
                    <span className="text-[#6C6C66]">{item.location}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#171717] mt-1">
                    {item.degree}
                  </h4>
                  <p className="micro-label text-[#6C6C66]">
                    {item.institution}
                  </p>

                  {item.description && (
                    <p className="text-xs text-[#4A4A45] font-normal mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {item.highlight && (
                    <span className="inline-block mt-2 text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#EFEBE4] text-[#171717] border border-[#E2DDD5]">
                      ✦ {item.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Languages Box */}
            <div className="bg-white p-6 rounded-xl border border-[#E2DDD5] shadow-xs mt-8">
              <h4 className="font-serif text-base font-bold text-[#171717] flex items-center gap-2 mb-3">
                <Languages className="w-5 h-5 text-[#0F5132]" />
                Langues Pratiquées
              </h4>
              <div className="grid grid-cols-3 gap-3 text-center text-xs font-semibold">
                <div className="p-2.5 bg-[#FAF8F4] rounded-lg border border-[#E2DDD5]">
                  <span className="block font-bold text-[#171717]">Arabe / Amazigh</span>
                  <span className="micro-label text-[#6C6C66]">Maternelle</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F4] rounded-lg border border-[#E2DDD5]">
                  <span className="block font-bold text-[#171717]">Français</span>
                  <span className="micro-label text-[#6C6C66]">Bilingue</span>
                </div>
                <div className="p-2.5 bg-[#FAF8F4] rounded-lg border border-[#E2DDD5]">
                  <span className="block font-bold text-[#171717]">Anglais</span>
                  <span className="micro-label text-[#6C6C66]">Technique / B2</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Stack Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#171717] mb-6">
              Compétences Techniques Par Domaine
            </h3>

            {/* Category Filter Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`p-3 rounded-xl text-xs font-bold transition-all text-left border cursor-pointer ${
                    activeCategory === idx
                      ? 'bg-[#171717] text-white border-[#171717] shadow-xs'
                      : 'bg-white text-[#171717] border-[#E2DDD5] hover:border-[#171717]'
                  }`}
                >
                  <span className="block micro-label opacity-75 uppercase text-[#B08D57]">0{idx + 1}</span>
                  <span className="truncate block font-serif mt-0.5">{shortCategoryTitles[idx] || cat.title}</span>
                </button>
              ))}
            </div>

            {/* Selected Category Skill Cards */}
            <div className="bg-white p-8 rounded-xl border border-[#E2DDD5] shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-4">
                <h4 className="font-serif text-xl font-bold text-[#171717]">
                  {SKILL_CATEGORIES[activeCategory].title}
                </h4>
                <span className="micro-label text-[#6C6C66]">
                  {SKILL_CATEGORIES[activeCategory].skills.length} Compétences Clés
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
                  <div key={sIdx} className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5] hover:border-[#171717] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-[#171717]">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EFEBE4] text-[#171717] border border-[#E2DDD5]">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                      {skill.projects && (
                        <p className="micro-label text-[#6C6C66] flex items-center gap-1">
                          <span className="text-[#0F5132]">✦</span>
                          <span>{skill.projects}</span>
                        </p>
                      )}
                    </div>

                    <div className="shrink-0">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white text-[#171717] border border-[#E2DDD5]">
                        {skill.proficiency}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};



