import React from 'react';
import { X, Download, Printer, CheckCircle2, GraduationCap, Briefcase, Award, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST } from '../data';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#FAF8F4] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-[#E2DDD5] overflow-hidden flex flex-col my-8">
        
        {/* Modal Top Actions Header */}
        <div className="p-4 bg-white border-b border-[#E2DDD5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#EFEBE4] text-[#171717] border border-[#E2DDD5]">
              CV_Farouqi_Manal_IA_Data.pdf
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FBF6ED] text-[#8C6D38] border border-[#B08D57] hidden sm:inline">
              Format Officiel 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-[#0F5132] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3D26] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>
            
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#EFEBE4] text-[#171717] hover:bg-[#171717] hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content Body */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 bg-white text-[#171717]">
          
          {/* CV Header */}
          <div className="border-b-2 border-[#171717] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717]">
                FAROUQI MANAL
              </h1>
              <p className="font-serif text-xl font-medium text-[#0F5132] mt-1">
                Développeuse en Intelligence Artificielle & Data Science
              </p>
            </div>

            <div className="space-y-1 text-xs text-[#4A4A45] font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0F5132]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0F5132]" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0F5132]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Profil Synthèse */}
          <div>
            <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#171717] border-b border-[#E2DDD5] pb-1 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#0F5132]" />
              Profil Professionnel
            </h2>
            <p className="text-xs text-[#4A4A45] leading-relaxed">
              Ingénieure diplômée spécialisée en Intelligence Artificielle, Machine Learning et Data Science. Expertise reconnue dans la conception de modèles prédictifs (LightGBM), de vision par ordinateur (YOLOv8, CNN Keras) et d'architectures RAG multi-agents (LangChain, ChromaDB, Gemini). Solide maîtrise MLOps (FastAPI, Docker, Terraform) et passionnée par l'innovation technologique.
            </p>
          </div>

          {/* Key Projects / Experiences */}
          <div>
            <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#171717] border-b border-[#E2DDD5] pb-1 mb-4 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#0F5132]" />
              Projets Réalisés & Modèles
            </h2>

            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5]">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-base font-bold text-[#171717]">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-[#EFEBE4] text-[#0F5132]">
                      {proj.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-[#4A4A45] mt-1">
                    {proj.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span key={tech} className="text-[9px] font-mono px-2 py-0.5 bg-white border border-[#E2DDD5] rounded text-[#171717]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formations & Diplômes */}
          <div>
            <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#171717] border-b border-[#E2DDD5] pb-1 mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#0F5132]" />
              Formations Académiques
            </h2>

            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs pb-2 border-b border-[#FAF8F4]">
                  <div>
                    <span className="font-bold text-[#171717] block text-sm">{edu.degree}</span>
                    <span className="text-[#6C6C66]">{edu.institution} — {edu.location}</span>
                  </div>
                  <span className="font-mono text-[#0F5132] font-bold">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences Clés Grid */}
          <div>
            <h2 className="font-serif text-lg font-bold uppercase tracking-wider text-[#171717] border-b border-[#E2DDD5] pb-1 mb-3">
              Stack Technique
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 bg-[#FAF8F4] rounded border border-[#E2DDD5]">
                <strong className="block text-[#171717]">Langages :</strong>
                <span className="text-[#4A4A45]">Python, SQL, C++, HTML/CSS</span>
              </div>
              <div className="p-2.5 bg-[#FAF8F4] rounded border border-[#E2DDD5]">
                <strong className="block text-[#171717]">ML & DL :</strong>
                <span className="text-[#4A4A45]">Scikit-learn, TensorFlow, Keras, LightGBM</span>
              </div>
              <div className="p-2.5 bg-[#FAF8F4] rounded border border-[#E2DDD5]">
                <strong className="block text-[#171717]">Vision & NLP :</strong>
                <span className="text-[#4A4A45]">YOLOv8, OpenCV, spaCy, LangChain</span>
              </div>
              <div className="p-2.5 bg-[#FAF8F4] rounded border border-[#E2DDD5]">
                <strong className="block text-[#171717]">Cloud & MLOps :</strong>
                <span className="text-[#4A4A45]">FastAPI, Docker, Azure AI, Terraform</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-[#FAF8F4] border-t border-[#E2DDD5] flex items-center justify-between text-xs text-[#6C6C66]">
          <span>Farouqi Manal — Portfolio Officiel</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-[#171717] text-white font-bold text-xs hover:bg-[#333330] transition-all cursor-pointer"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
