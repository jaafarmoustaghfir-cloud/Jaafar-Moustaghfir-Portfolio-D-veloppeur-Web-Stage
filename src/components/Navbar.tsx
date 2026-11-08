import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onSelectIntent?: (intent: 'client' | 'recruiter' | 'jury') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, onToggleDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Projets', href: '#projets' },
    { label: 'Services & Packs', href: '#services' },
    { label: 'Parcours', href: '#parcours' },
    { label: 'Recrutement & Stage', href: '#recrutement' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E8E1D8] bg-[#F8F5F1]/95 backdrop-blur-md transition-colors dark:border-[#2A231F] dark:bg-[#151210]/95">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title, single line text wordmark */}
        <a
          href="#"
          className="text-base font-semibold tracking-tight text-[#1D1815] transition-colors hover:text-[#9C7F70] dark:text-[#E8E1D8] dark:hover:text-[#B79D8E] whitespace-nowrap shrink-0"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: 4-5 single line text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#695043] dark:text-[#C2B3A1]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#1D1815] transition-colors dark:hover:text-[#FAF8F5] whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] transition-colors hover:bg-[#E8E1D8]/60 dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:bg-[#221B17]"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <a
            href="#packs"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#9C7F70] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:bg-[#836758] whitespace-nowrap shrink-0"
          >
            <span>Commander / Devis</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Ouvrir le menu de navigation"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#1D1815] dark:border-[#332B25] dark:text-[#E8E1D8]"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E8E1D8] bg-[#FAF8F5] px-4 py-4 dark:border-[#2A231F] dark:bg-[#181412]">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-[#1D1815] hover:bg-[#E8E1D8]/50 dark:text-[#E8E1D8] dark:hover:bg-[#251E1A]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#packs"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#9C7F70] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#836758]"
            >
              <span>Commander / Devis</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
