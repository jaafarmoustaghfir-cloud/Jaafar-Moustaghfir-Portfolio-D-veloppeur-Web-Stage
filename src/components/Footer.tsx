import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8E1D8] bg-[#FAF8F5] py-12 dark:border-[#2A231F] dark:bg-[#14100E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Brand & info */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-[#1D1815] dark:text-[#FAF8F5]">
              {PERSONAL_INFO.name}
            </p>
            <p className="mt-1 text-xs text-[#836758] dark:text-[#A89582]">
              DUT Génie Informatique (ESTA Agadir) · Développeur Web & Concepteur Logiciel
            </p>
          </div>

          {/* Socials & Top Action */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Jaafar Moustaghfir"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] transition-colors hover:border-[#9C7F70] hover:text-[#9C7F70] dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:border-[#9C7F70]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil GitHub de Jaafar Moustaghfir"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] transition-colors hover:border-[#9C7F70] hover:text-[#9C7F70] dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:border-[#9C7F70]"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil Instagram de Jaafar Moustaghfir"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] transition-colors hover:border-[#9C7F70] hover:text-[#9C7F70] dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:border-[#9C7F70]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Retour en haut de page"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] transition-colors hover:bg-[#E8E1D8]/60 dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:bg-[#251E1A]"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

        </div>

        {/* Quiet copyright */}
        <div className="mt-8 border-t border-[#E8E1D8]/60 pt-6 text-center text-xs text-[#836758] dark:border-[#2A231F] dark:text-[#A89582]">
          <p>© {new Date().getFullYear()} Jaafar Moustaghfir. Portfolio polyvalent conçu pour le web, prêt pour déploiement Netlify.</p>
        </div>
      </div>
    </footer>
  );
};
