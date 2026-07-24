import React from 'react';
import { FileText, Download, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  onOpenPrompt: () => void;
  onOpenCv: () => void;
  spotlightActive: boolean;
  setSpotlightActive: (active: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPrompt,
  onOpenCv,
  activeSection,
}) => {
  const navItems = [
    { id: 'projects', label: '01. Projets' },
    { id: 'notebooks', label: '02. Démos & Notebooks' },
    { id: 'about', label: '03. Parcours' },
    { id: 'studio', label: '04. Studio & Art' },
    { id: 'contact', label: '05. Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E2DDD5] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="group flex items-center gap-3">
          <img
            src="/manal.png"
            alt="Farouqi Manal"
            className="w-14 h-14 rounded-full object-cover object-top border border-[#E2DDD5] group-hover:scale-105 transition-all"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-all hover:text-[#171717] ${
                activeSection === item.id
                  ? 'text-[#171717] font-bold border-b-2 border-[#171717] pb-1'
                  : 'text-[#4A4A45]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Download CV PDF Button */}
          <button
            onClick={onOpenCv}
            className="px-3.5 py-2 rounded-full bg-[#0F5132] text-white text-xs font-bold hover:bg-[#0B3D26] transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            title="Télécharger le CV de Farouqi Manal en format PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider">CV (PDF)</span>
          </button>

          {/* Prompt Detailed Brief Button */}
          <button
            onClick={onOpenPrompt}
            className="px-3.5 py-2 rounded-full bg-white border border-[#171717] text-[#171717] text-xs font-bold hover:bg-[#171717] hover:text-white transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="text-[11px] uppercase tracking-wider hidden sm:inline">Brief / Prompt</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:flex items-center gap-1 text-xs font-bold text-[#4A4A45] hover:text-[#171717] transition-colors uppercase tracking-wider ml-1"
          >
            GitHub
            <ArrowUpRight className="w-4 h-4 text-[#171717]" />
          </a>
        </div>
      </div>
    </header>
  );
};