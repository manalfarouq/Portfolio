import React from 'react';
import { X, Download } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CV_PATH = '/cv-farouqi-manal.pdf';
const CV_DOWNLOAD_NAME = 'CV_Farouqi_Manal_IA_Data.pdf';

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="bg-[#FAF8F4] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl border border-[#E2DDD5] overflow-hidden flex flex-col my-8">

        {/* Modal Top Actions Header */}
        <div className="p-4 bg-white border-b border-[#E2DDD5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#EFEBE4] text-[#171717] border border-[#E2DDD5]">
              {CV_DOWNLOAD_NAME}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FBF6ED] text-[#8C6D38] border border-[#B08D57] hidden sm:inline">
              Format Officiel 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={CV_PATH}
              download={CV_DOWNLOAD_NAME}
              className="px-4 py-2 rounded-full bg-[#0F5132] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0B3D26] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Télécharger le PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#EFEBE4] text-[#171717] hover:bg-[#171717] hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-[#525659] overflow-hidden">
          <iframe
            src={CV_PATH}
            title="CV Farouqi Manal"
            className="w-full h-full min-h-[70vh]"
          />
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 bg-[#FAF8F4] border-t border-[#E2DDD5] flex items-center justify-between text-xs text-[#6C6C66] shrink-0">
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