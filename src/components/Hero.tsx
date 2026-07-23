import React from 'react';
import { ArrowDownRight, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  spotlightActive?: boolean;
  onOpenPrompt: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrompt }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-28 border-b border-[#E2DDD5] bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-[#171717]">
        
        {/* Main Spacious Hero Content */}
        <div className="max-w-4xl space-y-8 py-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E2DDD5] shadow-xs">
            <div className="w-2 h-2 rounded-full bg-[#0F5132] animate-pulse"></div>
            <span className="micro-label text-[#171717]">{PERSONAL_INFO.status}</span>
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl font-bold tracking-tight leading-[0.95] text-[#171717]">
            FAROUQI <br />
            <span className="italic font-serif font-normal text-[#0F5132]">
              MANAL
            </span>
          </h1>

          <p className="font-serif text-2xl sm:text-3xl text-[#171717] font-normal leading-snug">
            Développeuse en Intelligence Artificielle & Data Science
          </p>

          <p className="text-base sm:text-lg text-[#4A4A45] font-normal leading-relaxed max-w-2xl">
            Conception d'architectures d'IA robustes : Machine Learning prédictif, Computer Vision temps réel, systèmes RAG multi-agents et déploiement MLOps.
          </p>

          {/* Primary CTA Buttons */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-[#171717] text-white hover:bg-[#333330] transition-all shadow-xs flex items-center gap-2"
            >
              <span>Découvrir les Projets</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="#notebooks"
              className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest bg-[#0F5132] text-white hover:bg-[#0B3D26] transition-all flex items-center gap-2 shadow-xs"
            >
              <Terminal className="w-4 h-4" />
              <span>Démos & Notebooks</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-4 rounded-full font-bold text-xs uppercase tracking-widest border border-[#171717] text-[#171717] bg-white hover:bg-[#171717] hover:text-white transition-all flex items-center gap-2 shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Direct</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-8 flex items-center gap-8 micro-label border-t border-[#E2DDD5]">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#171717] flex items-center gap-2 transition-colors">
              <Github className="w-4 h-4 text-[#171717]" /> GitHub
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#171717] flex items-center gap-2 transition-colors">
              <Linkedin className="w-4 h-4 text-[#171717]" /> LinkedIn
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#171717] flex items-center gap-2 transition-colors">
              <Mail className="w-4 h-4 text-[#171717]" /> {PERSONAL_INFO.email}
            </a>
          </div>

        </div>

        {/* Minimal Marquee Band */}
        <div className="mt-12 pt-6 pb-2 border-t border-b border-[#E2DDD5] overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-10 micro-label text-[#4A4A45]">
            <span className="text-[#0F5132] font-bold">✦ Python & Scikit-learn</span>
            <span>TensorFlow & Keras</span>
            <span className="text-[#0F5132] font-bold">✦ YOLOv8 & OpenCV</span>
            <span>LightGBM (MAE 1,33, R² 0,86)</span>
            <span className="text-[#0F5132] font-bold">✦ RAG & ChromaDB</span>
            <span>LangChain & Azure AI NER (92,4%)</span>
            <span className="text-[#0F5132] font-bold">✦ FastAPI & Docker</span>
            <span>Terraform & CI/CD</span>
            <span className="text-[#0F5132] font-bold">✦ PostgreSQL & SQL</span>
          </div>
        </div>

      </div>
    </section>
  );
};



