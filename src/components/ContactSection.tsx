import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onOpenPrompt: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPrompt }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F4] text-[#171717] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E2DDD5] pb-8">
          <div>
            <div className="flex items-center gap-2 micro-label text-[#171717]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0F5132]"></div>
              <span>05. Entrons en Contact</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[#171717] mt-2">
              Travaillons Ensemble
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#4A4A45] font-normal leading-relaxed">
            Recherche activement des opportunités en Ingénierie IA, Data Science et R&D au Maroc ou à l'international.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E2DDD5] hover:border-[#171717] transition-all shadow-xs"
              >
                <div className="w-12 h-12 rounded-lg bg-[#EFEBE4] border border-[#E2DDD5] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#0F5132]" />
                </div>
                <div>
                  <span className="block micro-label text-[#6C6C66] uppercase">Adresse Email</span>
                  <span className="text-sm font-semibold text-[#171717] group-hover:underline transition-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E2DDD5] hover:border-[#171717] transition-all shadow-xs"
              >
                <div className="w-12 h-12 rounded-lg bg-[#EFEBE4] border border-[#E2DDD5] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#0F5132]" />
                </div>
                <div>
                  <span className="block micro-label text-[#6C6C66] uppercase">Téléphone</span>
                  <span className="text-sm font-semibold text-[#171717] group-hover:underline transition-all">
                    {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E2DDD5] shadow-xs">
                <div className="w-12 h-12 rounded-lg bg-[#EFEBE4] border border-[#E2DDD5] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#0F5132]" />
                </div>
                <div>
                  <span className="block micro-label text-[#6C6C66] uppercase">Localisation</span>
                  <span className="text-sm font-semibold text-[#171717]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white border border-[#E2DDD5] micro-label text-[#171717] text-center hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-white border border-[#E2DDD5] micro-label text-[#171717] text-center hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all flex items-center justify-center gap-2 font-bold"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Brief Trigger */}
            <button
              onClick={onOpenPrompt}
              className="w-full py-3.5 rounded-xl bg-white border border-[#171717] text-[#171717] text-xs font-bold uppercase tracking-widest hover:bg-[#171717] hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4" />
              <span>Consulter le Brief & Cahier des Charges PDF</span>
            </button>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-xl border border-[#E2DDD5] shadow-xs">
            <h3 className="font-serif text-2xl font-bold mb-6 text-[#171717]">
              Envoyer un Message Direct
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-[#FBF6ED] border border-[#B08D57] text-[#171717] space-y-2 text-center animate-fade-in">
                <CheckCircle2 className="w-8 h-8 text-[#0F5132] mx-auto" />
                <h4 className="font-bold text-base">Message Envoyé avec Succès !</h4>
                <p className="micro-label text-[#4A4A45]">Merci pour votre message. Farouqi Manal vous répondra dans les plus brefs délais.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-medium">
                <div>
                  <label className="block micro-label text-[#6C6C66] uppercase mb-1">Votre Nom / Entreprise</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Sophie Martin (Recruteur RH)"
                    className="w-full bg-[#FAF8F4] border border-[#E2DDD5] rounded-xl p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                </div>

                <div>
                  <label className="block micro-label text-[#6C6C66] uppercase mb-1">Votre Email de Contact</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: contact@entreprise.com"
                    className="w-full bg-[#FAF8F4] border border-[#E2DDD5] rounded-xl p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  />
                </div>

                <div>
                  <label className="block micro-label text-[#6C6C66] uppercase mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Saisissez votre opportunité ou votre question..."
                    className="w-full bg-[#FAF8F4] border border-[#E2DDD5] rounded-xl p-3 text-[#171717] focus:outline-none focus:border-[#171717]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#171717] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#333330] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre le Message</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Copy */}
        <div className="mt-16 pt-8 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-center justify-between micro-label text-[#6C6C66] gap-4">
          <span>© 2026 FAROUQI MANAL — Développeuse IA & Data Science. Tous droits réservés.</span>
          <span>Design Swiss Minimalist Électronique & Éditorial.</span>
        </div>

      </div>
    </section>
  );
};



