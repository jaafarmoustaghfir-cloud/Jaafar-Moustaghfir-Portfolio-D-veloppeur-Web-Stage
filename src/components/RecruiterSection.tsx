import React from 'react';
import { FileText, CalendarCheck, MapPin, Check, Building, GraduationCap, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface RecruiterSectionProps {
  onOpenCvModal: () => void;
}

export const RecruiterSection: React.FC<RecruiterSectionProps> = ({ onOpenCvModal }) => {
  return (
    <section id="recrutement" className="scroll-mt-16 py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Opportunité de Stage & Poursuite d'Études
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Pour les Recruteurs & Écoles d'Ingénieurs
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Un profil d'ingénierie rigoureux, pragmatique et déjà rompu aux exigences du déploiement en production.
          </p>
        </div>

        {/* 2-Column Split: Motivation Statement & Practical Internship Facts */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Motivation Paragraph & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-[#E8E1D8] bg-white p-6 sm:p-8 dark:border-[#2A231F] dark:bg-[#1C1613]">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9C7F70] dark:text-[#B79D8E]">
                <GraduationCap className="h-4 w-4" />
                <span>Lettre d'intention & motivation</span>
              </div>

              <h3 className="mt-3 text-lg font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                Pourquoi m'accueillir dans votre équipe ?
              </h3>

              <div className="mt-4 space-y-3.5 text-xs sm:text-sm leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                <p>
                  Actuellement en 2ème année de DUT Génie Informatique (spécialité Conception et Développement de Logiciels) à l'ESTA Agadir, je recherche activement un <strong>stage technique de 2 mois en France</strong>.
                </p>
                <p>
                  Mon cursus m'a inculqué une solide culture de l'algorithmique et de la programmation système en <strong>langage C</strong>, renforcée par une maîtrise autonome des <strong>technologies web</strong>. J'ai d'ores et déjà conçu et mis en production des projets concrets pour des institutions citoyennes (Commune d'Ouled Teima) et des entreprises (Sky Souss Cars).
                </p>
                <p>
                  Investi dans la vie associative en tant que <strong>Responsable du Pôle Média</strong> du Club Sportif de l'ESTA, j'apporte enthousiasme, rigueur, écoute et une réelle capacité à collaborer au sein d'une équipe pluridisciplinaire.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-[#E8E1D8]/70 pt-5 dark:border-[#2A231F]">
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 rounded-lg bg-[#9C7F70] px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#836758]"
              >
                <FileText className="h-4 w-4" />
                <span>Consulter / Télécharger mon CV</span>
              </button>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Proposition%20de%20Stage%20/%20Entretien%20-%20Jaafar%20Moustaghfir`}
                className="inline-flex items-center gap-2 rounded-lg border border-[#E8E1D8] bg-[#FAF8F5] px-4 py-2.5 text-xs font-medium text-[#1D1815] transition-colors hover:bg-white dark:border-[#332B25] dark:bg-[#251E1A] dark:text-[#E8E1D8]"
              >
                <Mail className="h-4 w-4 text-[#9C7F70]" />
                <span>Proposer un échange</span>
              </a>
            </div>
          </div>

          {/* Practical Internship & Candidacy Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-[#E8E1D8] bg-[#FAF8F5] p-6 sm:p-8 dark:border-[#2A231F] dark:bg-[#181311]">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#9C7F70] dark:text-[#B79D8E]">
                Fiche de Synthèse
              </span>
              
              <h3 className="mt-2 text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                Conditions du Stage
              </h3>

              <div className="mt-6 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <CalendarCheck className="h-4 w-4 text-[#9C7F70] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1D1815] dark:text-[#FAF8F5]">Durée : 2 mois</p>
                    <p className="text-[#695043] dark:text-[#C2B3A1]">Période et dates flexibles à convenir avec l'entreprise.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-[#9C7F70] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1D1815] dark:text-[#FAF8F5]">Localisation : France</p>
                    <p className="text-[#695043] dark:text-[#C2B3A1]">Mobilité géographique complète sur le territoire français.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building className="h-4 w-4 text-[#9C7F70] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1D1815] dark:text-[#FAF8F5]">Cadre administratif</p>
                    <p className="text-[#695043] dark:text-[#C2B3A1]">Convention de stage officielle délivrée par l'Université Ibn Zohr (ESTA Agadir).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-[#9C7F70] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#1D1815] dark:text-[#FAF8F5]">Missions adaptées</p>
                    <p className="text-[#695043] dark:text-[#C2B3A1]">Développement web frontend/fullstack, développement applicatif C/logiciel, refonte d'outils internes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-[#E8E1D8] bg-white p-4 dark:border-[#2A231F] dark:bg-[#1C1613]">
              <p className="text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]">
                Poursuite d'études ciblée :
              </p>
              <p className="mt-1 text-[11px] text-[#695043] dark:text-[#C2B3A1]">
                Admission sur titre en cycle d'ingénieur en informatique ou master spécialisé.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
