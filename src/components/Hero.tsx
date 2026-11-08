import React from 'react';
import { Briefcase, GraduationCap, School, MapPin, MessageCircle, Mail, ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { VisitorIntent } from '../types';

interface HeroProps {
  activeIntent: VisitorIntent;
  onSelectIntent: (intent: VisitorIntent) => void;
}

export const Hero: React.FC<HeroProps> = ({ activeIntent, onSelectIntent }) => {
  const handleIntentClick = (intent: VisitorIntent, targetId: string) => {
    onSelectIntent(intent);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Availability banner */}
        <div className="mb-6 inline-flex items-center gap-2 text-xs font-medium text-[#695043] dark:text-[#C2B3A1]">
          <span className="h-2 w-2 rounded-full bg-[#9C7F70]"></span>
          <span>Disponible pour un stage de 2 mois en France</span>
          <span aria-hidden="true">·</span>
          <span>Dates à convenir</span>
          <span aria-hidden="true">·</span>
          <span>ESTA Agadir</span>
        </div>

        {/* 2-Column Hero Split */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Typographic Hierarchy & Profile Selector */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-bold tracking-tight text-[#1D1815] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] dark:text-[#FAF8F5]">
              {PERSONAL_INFO.name}
            </h1>
            
            <p className="mt-3 text-lg font-medium text-[#9C7F70] dark:text-[#B79D8E]">
              Développeur Web & Étudiant en 2ème année DUT Génie Informatique (ESTA Agadir)
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
              Je crée des sites web simples, rapides et efficaces pour les entreprises, institutions et étudiants.
              Conception soignée, code propre et mise en ligne prête à l'emploi.
            </p>

            {/* Profile Selector - Key Requested Feature */}
            <div className="mt-8 rounded-xl border border-[#E8E1D8] bg-[#FAF8F5] p-4 dark:border-[#2A231F] dark:bg-[#1C1613]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9C7F70] dark:text-[#B79D8E]">
                Vous êtes ici pour :
              </p>
              
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                <button
                  type="button"
                  onClick={() => handleIntentClick('client', 'services')}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-3 text-left text-xs font-medium transition-all ${
                    activeIntent === 'client'
                      ? 'bg-[#9C7F70] text-white shadow-xs'
                      : 'border border-[#E8E1D8] bg-white text-[#1D1815] hover:border-[#9C7F70] dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]'
                  }`}
                >
                  <Briefcase className="h-4 w-4 shrink-0" />
                  <span className="leading-tight">Je cherche un site web</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIntentClick('recruiter', 'recrutement')}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-3 text-left text-xs font-medium transition-all ${
                    activeIntent === 'recruiter'
                      ? 'bg-[#9C7F70] text-white shadow-xs'
                      : 'border border-[#E8E1D8] bg-white text-[#1D1815] hover:border-[#9C7F70] dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]'
                  }`}
                >
                  <GraduationCap className="h-4 w-4 shrink-0" />
                  <span className="leading-tight">Je recrute un stagiaire</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleIntentClick('jury', 'parcours')}
                  className={`flex items-center gap-2 rounded-lg px-3.5 py-3 text-left text-xs font-medium transition-all ${
                    activeIntent === 'jury'
                      ? 'bg-[#9C7F70] text-white shadow-xs'
                      : 'border border-[#E8E1D8] bg-white text-[#1D1815] hover:border-[#9C7F70] dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]'
                  }`}
                >
                  <School className="h-4 w-4 shrink-0" />
                  <span className="leading-tight">Je suis une école / jury</span>
                </button>
              </div>
            </div>

            {/* Quick Contact & Action Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Bonjour%20Jaafar,%20j'ai%20d%C3%A9couvert%20votre%20portfolio...`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#9C7F70] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#836758]"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp : +212 772 908 456</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E8E1D8] bg-white px-4 py-2.5 text-xs font-medium text-[#1D1815] transition-colors hover:bg-[#FAF8F5] dark:border-[#332B25] dark:bg-[#1D1815] dark:text-[#E8E1D8] dark:hover:bg-[#251E1A]"
              >
                <Mail className="h-4 w-4 text-[#9C7F70]" />
                <span>M'envoyer un message</span>
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-[#836758] dark:text-[#A89582]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Basé à Agadir & Ouled Teima, Maroc · Mobilité pour stage en France</span>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Credentials Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-2xl border border-[#E8E1D8] bg-white p-3 shadow-xs dark:border-[#2A231F] dark:bg-[#1C1613]">
              <div className="overflow-hidden rounded-xl aspect-[4/5] bg-[#E8E1D8]/40 dark:bg-[#251E1A]">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt="Portrait de Jaafar Moustaghfir"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-102"
                  onError={(e) => {
                    // Fallback container if image cannot be loaded
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="h-full w-full flex flex-col items-center justify-center p-6 text-center bg-[#FAF8F5] dark:bg-[#1C1613]">
                          <span class="text-3xl font-bold text-[#9C7F70]">JM</span>
                          <span class="mt-2 text-sm font-semibold text-[#1D1815] dark:text-[#E8E1D8]">Jaafar Moustaghfir</span>
                          <span class="text-xs text-[#836758] dark:text-[#A89582]">DUT Génie Informatique · ESTA Agadir</span>
                        </div>
                      `;
                    }
                  }}
                />
              </div>

              {/* Verified academic badge footer */}
              <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#695043] dark:text-[#C2B3A1]">
                <div>
                  <p className="font-semibold text-[#1D1815] dark:text-[#FAF8F5]">DUT Génie Informatique</p>
                  <p className="text-[11px] text-[#836758] dark:text-[#A89582]">ESTA Agadir · Baccalauréat Mention Bien</p>
                </div>
                <span className="rounded-md bg-[#FAF8F5] px-2 py-1 text-[11px] font-medium text-[#9C7F70] dark:bg-[#251E1A] dark:text-[#B79D8E]">
                  Promotion 2026
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Adjacency proof row below hero */}
        <div className="mt-12 grid grid-cols-2 gap-4 border-t border-[#E8E1D8] pt-8 sm:grid-cols-4 dark:border-[#2A231F]">
          <div>
            <p className="text-2xl font-bold tracking-tight text-[#1D1815] dark:text-[#FAF8F5] tabular-nums">3</p>
            <p className="mt-1 text-xs text-[#695043] dark:text-[#A89582]">Sites réels actifs en ligne</p>
          </div>
          <div>
            <p className="text-2xl font-bold tracking-tight text-[#1D1815] dark:text-[#FAF8F5] tabular-nums">2 mois</p>
            <p className="mt-1 text-xs text-[#695043] dark:text-[#A89582]">Durée de stage recherchée</p>
          </div>
          <div>
            <p className="text-2xl font-bold tracking-tight text-[#1D1815] dark:text-[#FAF8F5]">C & Web</p>
            <p className="mt-1 text-xs text-[#695043] dark:text-[#A89582]">Compétences logicielles & frontend</p>
          </div>
          <div>
            <p className="text-2xl font-bold tracking-tight text-[#1D1815] dark:text-[#FAF8F5]">100%</p>
            <p className="mt-1 text-xs text-[#695043] dark:text-[#A89582]">Transparence : zéro faux chiffre</p>
          </div>
        </div>

      </div>
    </section>
  );
};
