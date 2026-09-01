import React, { useState, useEffect } from 'react';
import { WebBackground } from './components/WebBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { DevelopmentFocus } from './components/DevelopmentFocus';
import { Workflow } from './components/Workflow';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'focus', 'workflow', 'resume', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Map secondary sub-sections to closest top-level nav item
            if (sectionId === 'focus' || sectionId === 'workflow') {
              setActiveSection('projects');
            } else {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#E21B2D] selection:text-white font-sans relative">
      {/* Spider-Web Ambient Vector Background Layer */}
      <WebBackground />

      {/* Sticky Superhero Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section (01 ABOUT KYLE) */}
        <About />

        {/* 3. Technical Skills (02 MY POWERS + Spider-Web Skill Network) */}
        <Skills />

        {/* 4. Projects Section (03 MY PROJECTS + Real-Time Inventory Monitoring System) */}
        <Projects />

        {/* 5. Development Focus (04 WHAT I BUILD) */}
        <DevelopmentFocus />

        {/* 6. Development Workflow (MY WORKFLOW - 5-stage web timeline) */}
        <Workflow />

        {/* 7. Resume Section (SECRET FILE - Superhero Mission Dossier) */}
        <ResumeSection />

        {/* 8. Contact Section (05 LET'S CONNECT + Direct Dispatch Form) */}
        <Contact />
      </main>

      {/* 9. Dark Superhero Footer */}
      <Footer />
    </div>
  );
}
