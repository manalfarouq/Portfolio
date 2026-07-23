import React, { useState } from 'react';
import { DETAILED_PROMPT_BRIEF } from '../data';
import { X, Copy, Check, FileText, ChevronDown, ChevronUp } from 'lucide-react';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>('concept');

  if (!isOpen) return null;

  const fullPromptText = `
=== CAHIER DES CHARGES & PROMPT DÉTAILLÉ : PORTFOLIO CRÉATIF FAROUQI MANAL ===

CONCEPT GÉNÉRAL :
"Swiss Minimalist / Editorial Monochromatic" — Un portfolio pour Farouqi Manal, Développeuse en IA & Science des Données, qui marie la rigueur scientifique du Machine Learning / Vision / NLP à une esthétique éditoriale claire, spacieuse et apaisante (Soie Douce).

DIRECTION ARTISTIQUE & PALETTE :
- Palette : Fond Soie Douce très doux (#F7F7F5), Cartes (#FFFFFF), Textes Noir Satin (#1C1C1A), Bordures subtiles (#E4E4E0) et Gris Taupe (#5C5C58).
- Typographie : Pairing à fort contraste avec 'Playfair Display' (Italique d'art pour les noms & titres) et 'Plus Jakarta Sans' (Rigueur technique pour le corps & données).

EXPÉRIENCE UTILISATEUR & PLAYGROUND IA :
1. F1 Live AI Commentator : Système multi-agents (4 personas : Analyste, Dramatique, Stats, Règlement FIA RAG 2025) générant des commentaires <500ms sur télémétrie YOLOv8 & LightGBM.
2. Détection Faciale & Émotionnelle : Canvas de vision par ordinateur avec maillage facial et jauges de confiance (95% précision CNN).
3. ZoroXP : Fenêtre rétro style Windows XP pour l'analyse de sentiment NLP en temps réel.
4. HR Pulse AI : Module RAG Azure AI NER pour l'extraction automatique des compétences requises d'une offre d'emploi.

STRUCTURE NAVIGATION :
- 01. Works (Projets Phares & Métriques MAE 1.33 / R² 0.86)
- 02. Playground IA (Simulateurs & prototypes interactifs réels)
- 03. About & Stack (Licence d'Excellence IA Agadir & Matrice de Compétences)
- 04. Studio & Théâtre (Photographie, Vidéographie & Storytelling)
- 05. Contact & Assistant CV IA
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(fullPromptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="bg-white w-full max-w-3xl rounded-xl border border-[#E2DDD5] shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-[#FAF8F4] text-[#171717] p-6 flex items-center justify-between border-b border-[#E2DDD5]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#EFEBE4] border border-[#E2DDD5] flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#0F5132]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#171717]">CAHIER DES CHARGES & PROMPT DÉTAILLÉ</h3>
              <p className="micro-label text-[#6C6C66]">Spécification complète du concept créatif, style visuel et UX</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#EFEBE4] text-[#6C6C66] hover:text-[#171717] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-[#171717]">
          
          <div className="p-4 rounded-lg bg-[#FAF8F4] border border-[#E2DDD5] flex items-center justify-between">
            <p className="text-xs text-[#4A4A45] font-normal">
              Voici le prompt rédigé sur mesure pour générer ou partager ce portfolio créatif. Cliquez ci-dessous pour le copier en un clic !
            </p>
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg bg-[#171717] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#333330] transition-all flex items-center gap-1.5 shrink-0 ml-4 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#0F5132]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copié !' : 'Copier le Prompt'}</span>
            </button>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {DETAILED_PROMPT_BRIEF.map((section) => {
              const isOpen = openAccordion === section.id;
              return (
                <div key={section.id} className="border border-[#E2DDD5] rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : section.id)}
                    className="w-full p-4 text-left font-serif font-bold text-base flex items-center justify-between bg-[#FAF8F4] hover:bg-[#EFEBE4] text-[#171717] transition-colors cursor-pointer"
                  >
                    <span>{section.title}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#171717]" /> : <ChevronDown className="w-4 h-4 text-[#6C6C66]" />}
                  </button>

                  {isOpen && (
                    <div className="p-4 border-t border-[#E2DDD5] space-y-3 bg-white text-xs">
                      <p className="font-semibold text-[#171717] italic">{section.summary}</p>
                      <ul className="space-y-1.5 pl-4 list-disc text-[#4A4A45]">
                        {section.details.map((d, idx) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Raw Text Preview Box */}
          <div>
            <span className="block micro-label text-[#6C6C66] uppercase mb-2">
              Aperçu Texte Brut du Prompt :
            </span>
            <pre className="p-4 rounded-lg bg-[#FAF8F4] text-[#171717] text-[11px] font-mono whitespace-pre-wrap overflow-x-auto leading-relaxed border border-[#E2DDD5]">
              {fullPromptText}
            </pre>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF8F4] p-4 border-t border-[#E2DDD5] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#EFEBE4] text-[#171717] text-xs font-bold uppercase tracking-wider hover:bg-[#171717] hover:text-white transition-colors cursor-pointer border border-[#E2DDD5]"
          >
            Fermer la Fenêtre
          </button>
        </div>

      </div>
    </div>
  );
};


