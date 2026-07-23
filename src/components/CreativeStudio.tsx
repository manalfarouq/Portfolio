import React from 'react';
import { CREATIVE_SKILLS } from '../data';
import { Film, Users, Sparkles, Lightbulb, MessageSquareQuote } from 'lucide-react';

export const CreativeStudio: React.FC = () => {
  return (
    <section id="studio" className="py-24 bg-[#FAF8F4] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 micro-label text-[#171717]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F5132]"></div>
              <span>04. Sensibilité Artistique & Soft Skills</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] mt-2">
              Photographie & Théâtre
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4A4A45] font-normal leading-relaxed">
            Pourquoi le théâtre et la photographie font la différence dans l'IA : structurer une narration visuelle, incarner des personas virtuels crédibles et communiquer des concepts complexes avec clarté.
          </p>
        </div>

        {/* Creative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {CREATIVE_SKILLS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-[#E2DDD5] p-8 shadow-xs hover:border-[#171717] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#EFEBE4] text-[#0F5132] border border-[#E2DDD5]">
                    {item.category}
                  </span>
                  <span className="micro-label text-[#6C6C66]">
                    {item.period}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#171717]">
                  {item.title}
                </h3>
                <p className="micro-label text-[#6C6C66] mt-1 font-semibold">
                  {item.institution}
                </p>

                <p className="text-sm text-[#4A4A45] font-normal leading-relaxed mt-4">
                  {item.description}
                </p>

                {item.quote && (
                  <div className="mt-6 p-4 rounded-lg bg-[#FAF8F4] border-l-2 border-[#0F5132] flex items-start gap-3">
                    <MessageSquareQuote className="w-5 h-5 text-[#0F5132] shrink-0 mt-0.5" />
                    <p className="text-xs font-serif italic text-[#171717]">
                      "{item.quote}"
                    </p>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2DDD5] flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded bg-[#EFEBE4] text-[#4A4A45] border border-[#E2DDD5]"
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Banner */}
        <div className="bg-white rounded-xl p-8 border border-[#E2DDD5] shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5]">
              <Users className="w-6 h-6 text-[#0F5132] mx-auto mb-2" />
              <div className="font-serif font-bold text-base text-[#171717]">Travail en Équipe</div>
              <p className="micro-label text-[#6C6C66] mt-1">Collaboration agile & synergie d'idées</p>
            </div>

            <div className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5]">
              <Sparkles className="w-6 h-6 text-[#0F5132] mx-auto mb-2" />
              <div className="font-serif font-bold text-base text-[#171717]">Veille Technologique</div>
              <p className="micro-label text-[#6C6C66] mt-1">Suivi continu des avancées GenAI & Paper IA</p>
            </div>

            <div className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5]">
              <Lightbulb className="w-6 h-6 text-[#0F5132] mx-auto mb-2" />
              <div className="font-serif font-bold text-base text-[#171717]">Résolution de Problèmes</div>
              <p className="micro-label text-[#6C6C66] mt-1">Esprit analytique & logique mathématique</p>
            </div>

            <div className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5]">
              <Film className="w-6 h-6 text-[#0F5132] mx-auto mb-2" />
              <div className="font-serif font-bold text-base text-[#171717]">Storytelling & Pitch</div>
              <p className="micro-label text-[#6C6C66] mt-1">Vulgarisation & clarté de présentation</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};



