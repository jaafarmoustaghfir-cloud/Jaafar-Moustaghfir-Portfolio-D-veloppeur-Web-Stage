import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, MessageSquare, Maximize2, X } from 'lucide-react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projets" className="scroll-mt-16 py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Réalisations Concrètes
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Projets Réels en Ligne
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Chaque site ci-dessous est accessible publiquement, testable par les citoyens ou clients, et hébergé en conditions réelles.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E8E1D8] bg-white transition-all hover:border-[#9C7F70] hover:shadow-sm dark:border-[#2A231F] dark:bg-[#1C1613] dark:hover:border-[#9C7F70]"
            >
              <div>
                {/* Image Screenshot Frame with zoom button */}
                <div className="group relative aspect-video w-full overflow-hidden bg-[#FAF8F5] dark:bg-[#251E1A]">
                  <img
                    src={project.imageUrl}
                    alt={`Capture d'écran du projet ${project.title}`}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-103"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`Agrandir la capture de ${project.title}`}
                    className="absolute top-2.5 right-2.5 flex h-8 w-8 items-center justify-center rounded-md bg-[#1D1815]/75 text-white opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100 hover:bg-[#1D1815]"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-2.5 left-2.5 rounded bg-[#1D1815]/80 px-2 py-0.5 text-[11px] font-medium text-white backdrop-blur-xs">
                    {project.sector}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                      {project.title}
                    </h3>
                    {project.logoUrl && (
                      <img
                        src={project.logoUrl}
                        alt={`Emblème ${project.title}`}
                        className="h-8 w-8 rounded-full object-cover shadow-xs border border-[#E8E1D8] dark:border-[#332B25] shrink-0"
                      />
                    )}
                  </div>

                  {/* Highlight pill-less note */}
                  {project.metricsOrHighlight && (
                    <p className="mt-1 text-xs font-medium text-[#9C7F70] dark:text-[#B79D8E]">
                      {project.metricsOrHighlight}
                    </p>
                  )}

                  {/* What was done */}
                  <div className="mt-4">
                    <p className="text-xs font-semibold text-[#1D1815] dark:text-[#E8E1D8]">
                      Ce que j'ai réalisé :
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                      {project.realization}
                    </p>
                  </div>

                  {/* User benefit */}
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-[#1D1815] dark:text-[#E8E1D8]">
                      Bénéfice utilisateur :
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                      {project.userBenefit}
                    </p>
                  </div>

                  {/* Tech stack: Clean unboxed text with typographic separators */}
                  <div className="mt-4 border-t border-[#E8E1D8]/60 pt-3 dark:border-[#2A231F]">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-[#836758] dark:text-[#A89582]">
                      {project.technologies.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span>{tech}</span>
                          {idx < project.technologies.length - 1 && <span aria-hidden="true">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-1.5 rounded-lg border border-[#9C7F70] bg-transparent py-2.5 text-xs font-semibold text-[#836758] transition-colors hover:bg-[#9C7F70] hover:text-white dark:border-[#9C7F70] dark:text-[#B79D8E] dark:hover:bg-[#9C7F70] dark:hover:text-white"
                >
                  <span>Visiter le site en ligne</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects on request notice */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-dashed border-[#E8E1D8] bg-[#FAF8F5] p-5 sm:flex-row dark:border-[#332B25] dark:bg-[#1A1513]">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#9C7F70] shrink-0" />
            <p className="text-sm font-medium text-[#1D1815] dark:text-[#FAF8F5]">
              D'autres projets et prototypes sont disponibles sur demande.
            </p>
          </div>
          <a
            href={`https://wa.me/${PERSONAL_INFO.phoneClean}?text=Bonjour%20Jaafar,%20je%20souhaiterais%20d%C3%A9couvrir%20vos%20autres%20projets...`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-medium text-[#1D1815] border border-[#E8E1D8] hover:border-[#9C7F70] dark:bg-[#251E1A] dark:border-[#332B25] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]"
          >
            <MessageSquare className="h-3.5 w-3.5 text-[#9C7F70]" />
            <span>Demander d'autres démos</span>
          </a>
        </div>

      </div>

      {/* Lightbox Modal for screenshot inspection */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1815]/80 p-4 backdrop-blur-xs"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-2xl bg-white p-4 shadow-xl dark:bg-[#1C1613]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E8E1D8] pb-3 dark:border-[#2A231F]">
              <div className="flex items-center gap-3">
                {selectedProject.logoUrl && (
                  <img
                    src={selectedProject.logoUrl}
                    alt={selectedProject.title}
                    className="h-9 w-9 rounded-full object-cover border border-[#E8E1D8] dark:border-[#332B25] shrink-0"
                  />
                )}
                <div>
                  <h3 className="text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-[#9C7F70] dark:text-[#B79D8E]">{selectedProject.sector}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Fermer la vue agrandie"
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#251E1A] text-[#1D1815] dark:text-[#FAF8F5]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-black">
              <img
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-2">
              <p className="text-xs text-[#695043] dark:text-[#C2B3A1]">
                {selectedProject.metricsOrHighlight}
              </p>
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#9C7F70] px-4 py-2 text-xs font-semibold text-white hover:bg-[#836758]"
              >
                <span>Accéder au site officiel</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
