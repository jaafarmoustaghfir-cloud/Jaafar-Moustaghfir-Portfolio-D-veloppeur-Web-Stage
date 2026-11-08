/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { PacksPricing } from './components/PacksPricing';
import { CareerTimeline } from './components/CareerTimeline';
import { SkillsLanguages } from './components/SkillsLanguages';
import { RecruiterSection } from './components/RecruiterSection';
import { Workflow } from './components/Workflow';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { VisitorIntent } from './types';
import { Check } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('jm_dark_mode');
      if (stored !== null) return stored === 'true';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeIntent, setActiveIntent] = useState<VisitorIntent>('all');
  const [selectedPackForQuote, setSelectedPackForQuote] = useState<string>('');
  const [cvModalOpen, setCvModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('jm_dark_mode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('jm_dark_mode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleSelectPackForQuote = (packName: string) => {
    setSelectedPackForQuote(packName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] text-[#1D1815] transition-colors duration-300 dark:bg-[#151210] dark:text-[#E8E1D8]">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onSelectIntent={setActiveIntent}
      />

      <main>
        {/* Hero Section with 3-profile selector */}
        <Hero
          activeIntent={activeIntent}
          onSelectIntent={setActiveIntent}
        />

        {/* 1. Projects Section */}
        <Projects />

        {/* 2. Services Section */}
        <Services />

        {/* 3. Packs & Order Section */}
        <PacksPricing onSelectPackForQuote={handleSelectPackForQuote} />

        {/* 4. Career & Student Life Timeline */}
        <CareerTimeline />

        {/* 5. Skills & Languages */}
        <SkillsLanguages />

        {/* 6. Section dedicated to Recruiters & Schools / Juries */}
        <RecruiterSection onOpenCvModal={() => setCvModalOpen(true)} />

        {/* 7. 4-Step Workflow */}
        <Workflow />

        {/* 8. FAQ */}
        <FAQ />

        {/* 9. Contact & Order Channels */}
        <Contact
          selectedPackForQuote={selectedPackForQuote}
          onClearSelectedPack={() => setSelectedPackForQuote('')}
          onShowToast={handleShowToast}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />

      {/* Gentle Floating Feedback Toast */}
      {toastMessage && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-xl border border-[#9C7F70] bg-[#1D1815] px-4 py-3 text-xs font-medium text-white shadow-xl backdrop-blur-md"
        >
          <Check className="h-4 w-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </aside>
      )}
    </div>
  );
}
