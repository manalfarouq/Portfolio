import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { AiDemosPlayground } from './components/AiDemosPlayground';
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
  const [selectedDemo, setSelectedDemo] = useState<'f1' | 'emotion' | 'hr' | 'zoroxp'>('f1');
  const [activeSection, setActiveSection] = useState('projects');

  // Handle section jumping to notebooks with specific demo preselected
  const handleSelectDemo = (demoKey: 'f1' | 'emotion' | 'hr' | 'zoroxp') => {
    setSelectedDemo(demoKey);
    const notebooksEl = document.getElementById('notebooks') || document.getElementById('playground');
    if (notebooksEl) {
      notebooksEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'notebooks', 'about', 'studio', 'contact'];
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
      {/* Header */}
      <Header
        onOpenPrompt={() => setPromptModalOpen(true)}
        onOpenCv={() => setCvModalOpen(true)}
        spotlightActive={spotlightActive}
        setSpotlightActive={setSpotlightActive}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          spotlightActive={spotlightActive}
          onOpenPrompt={() => setPromptModalOpen(true)}
        />

        <ProjectsSection onSelectDemo={handleSelectDemo} />

        <AiDemosPlayground
          selectedDemo={selectedDemo}
          setSelectedDemo={setSelectedDemo}
        />

        <AboutEducation />

        <CreativeStudio />

        <ContactSection onOpenPrompt={() => setPromptModalOpen(true)} />
      </main>

      {/* Prompt / Brief Modal */}
      <PromptModal
        isOpen={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
      />

      {/* Official PDF CV Modal */}
      <CvModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />

      {/* CV AI Chatbot Assistant */}
      <CvChatAssistant />
    </div>
  );
}

