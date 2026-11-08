import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Calendar } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS_DATA, TIMELINE } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1815]/80 p-3 sm:p-6 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl rounded-2xl bg-white p-6 sm:p-10 shadow-2xl dark:bg-[#1A1412] text-[#1D1815] dark:text-[#E8E1D8] border border-[#E8E1D8] dark:border-[#2A231F]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between border-b border-[#E8E1D8] pb-4 dark:border-[#2A231F] print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9C7F70]">
              Curriculum Vitae
            </span>
            <span className="text-xs text-[#836758] dark:text-[#A89582]">· Format Étudiant / Recruteur</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#9C7F70] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#836758]"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Imprimer / Sauvegarder en PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Fermer le CV"
              className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#251E1A]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div id="printable-cv" className="mt-6 space-y-6 print:mt-0 print:text-black">
          {/* Header */}
          <div className="border-b border-[#E8E1D8] pb-6 dark:border-[#2A231F]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={PERSONAL_INFO.name}
                  className="h-24 w-20 rounded-lg object-cover object-top border border-[#E8E1D8] shadow-xs dark:border-[#332B25] print:border-gray-300 shrink-0"
                />
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-[#1D1815] dark:text-white print:text-black">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="mt-1 text-sm font-semibold text-[#9C7F70] dark:text-[#B79D8E] print:text-[#695043]">
                    Étudiant en 2ème année DUT Génie Informatique (CDL)
                  </p>
                  <p className="mt-1 text-xs text-[#695043] dark:text-[#C2B3A1]">
                    École Supérieure de Technologie d'Agadir (ESTA) · Université Ibn Zohr
                  </p>
                </div>
              </div>

              <div className="space-y-1 text-xs text-[#695043] dark:text-[#C2B3A1]">
                <div className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5 text-[#9C7F70]" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-[#9C7F70]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#9C7F70]" />
                  <span>Agadir / Ouled Teima, Maroc</span>
                </div>
              </div>
            </div>

            {/* Objective Tag */}
            <div className="mt-4 rounded-lg bg-[#FAF8F5] p-3 text-xs text-[#1D1815] dark:bg-[#221B17] dark:text-[#E8E1D8] border border-[#E8E1D8] dark:border-[#2A231F]">
              <span className="font-bold text-[#9C7F70]">Objectif recherché : </span>
              Stage technique de fin d'études de 2 mois en France (développement logiciel ou web). Convention délivrée par l'Université Ibn Zohr.
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#9C7F70] dark:text-[#B79D8E]">
              Formation Académique
            </h2>
            <div className="mt-3 space-y-3">
              {TIMELINE.filter(t => t.category === 'education').map((edu, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between font-semibold text-[#1D1815] dark:text-white print:text-black">
                    <span>{edu.title} — {edu.institution}</span>
                    <span className="text-[#836758] dark:text-[#A89582]">{edu.year}</span>
                  </div>
                  <p className="mt-1 text-[#695043] dark:text-[#C2B3A1]">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#9C7F70] dark:text-[#B79D8E]">
              Projets Réalisés & En Ligne
            </h2>
            <div className="mt-3 space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="rounded-lg border border-[#E8E1D8]/70 p-3 text-xs dark:border-[#2A231F]">
                  <div className="flex justify-between font-semibold text-[#1D1815] dark:text-white print:text-black">
                    <span>{proj.title} ({proj.sector})</span>
                    <span className="text-[#9C7F70] text-[11px]">{proj.technologies.join(' · ')}</span>
                  </div>
                  <p className="mt-1 text-[#695043] dark:text-[#C2B3A1]">{proj.realization}</p>
                  <p className="mt-1 text-[11px] text-[#836758] dark:text-[#A89582]">
                    URL : {proj.url}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#9C7F70] dark:text-[#B79D8E]">
                Compétences Techniques
              </h2>
              <ul className="mt-2 text-xs space-y-1 text-[#695043] dark:text-[#C2B3A1]">
                {SKILLS_DATA.technical.map((st, i) => (
                  <li key={i}>
                    <strong>{st.name}</strong> ({st.level})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#9C7F70] dark:text-[#B79D8E]">
                Langues & Vie Associative
              </h2>
              <div className="mt-2 text-xs text-[#695043] dark:text-[#C2B3A1] space-y-2">
                <p><strong>Arabe :</strong> Langue maternelle</p>
                <p><strong>Français :</strong> Bon niveau (langue d'études supérieures)</p>
                <p><strong>Anglais :</strong> Niveau moyen (technique)</p>
                <p className="pt-1">
                  <strong>Vie associative :</strong> Responsable Pôle Média – Club Sportif ESTA Agadir (2026/2027) & membre actif de plusieurs clubs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom note */}
        <div className="mt-6 border-t border-[#E8E1D8] pt-4 text-center text-xs text-[#836758] dark:border-[#2A231F] dark:text-[#A89582] print:hidden">
          Pour toute demande de convention, entretien en visio ou dossier d'admission, contactez : {PERSONAL_INFO.email}
        </div>
      </div>
    </div>
  );
};
