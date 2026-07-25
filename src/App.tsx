import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutEducation } from './components/AboutEducation';
import { CreativeStudio } from './components/CreativeStudio';
import { ContactSection } from './components/ContactSection';
import { PromptModal } from './components/PromptModal';
import { CvModal } from './components/CvModal';
import { CvChatAssistant } from './components/CvChatAssistant';

export default function App() {
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [spotlightActive, setSpotlightActive] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'studio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#171717] flex flex-col font-sans selection:bg-[#171717] selection:text-white">
      <Header
        onOpenPrompt={() => setPromptModalOpen(true)}
        onOpenCv={() => setCvModalOpen(true)}
        spotlightActive={spotlightActive}
        setSpotlightActive={setSpotlightActive}
        activeSection={activeSection}
      />

      <main className="flex-1">
        <Hero
          spotlightActive={spotlightActive}
          onOpenPrompt={() => setPromptModalOpen(true)}
        />

        <ProjectsSection />

        <AboutEducation />

        <CreativeStudio />

        <ContactSection onOpenPrompt={() => setPromptModalOpen(true)} />
      </main>

      <PromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />

      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      <CvChatAssistant />
    </div>
  );
}
