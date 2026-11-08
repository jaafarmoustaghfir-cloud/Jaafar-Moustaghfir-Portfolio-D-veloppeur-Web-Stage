import React from 'react';
import { GraduationCap, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const CareerTimeline: React.FC = () => {
  return (
    <section id="parcours" className="scroll-mt-16 py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Formation & Engagement
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Parcours Académique & Associatif
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Un équilibre entre exigence scientifique, développement logiciel concret et investissement humain dans la vie de l'ESTA Agadir.
          </p>
        </div>

        {/* Timeline representation */}
        <div className="mt-12 space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-[#E8E1D8] sm:before:left-1/2 dark:before:bg-[#2A231F]">
          {TIMELINE.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Node icon */}
                <div className="absolute left-5 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-[#9C7F70] text-white shadow-xs sm:left-1/2 dark:border-[#151210]">
                  {item.category === 'education' ? (
                    <GraduationCap className="h-5 w-5" />
                  ) : (
                    <Users className="h-5 w-5" />
                  )}
                </div>

                {/* Content Box */}
                <div
                  className={`ml-14 sm:ml-0 sm:w-1/2 ${
                    isEven ? 'sm:pl-10' : 'sm:pr-10'
                  }`}
                >
                  <div className="rounded-2xl border border-[#E8E1D8] bg-white p-6 shadow-xs transition-colors hover:border-[#9C7F70] dark:border-[#2A231F] dark:bg-[#1C1613]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7F70] dark:text-[#B79D8E]">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{item.year}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#836758] dark:text-[#A89582]">
                        <MapPin className="h-3 w-3" />
                        <span>{item.location}</span>
                      </span>
                    </div>

                    <h3 className="mt-3 text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-[#836758] dark:text-[#B79D8E]">
                      {item.institution}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                      {item.description}
                    </p>

                    <div className="mt-4 border-t border-[#E8E1D8]/70 pt-3 dark:border-[#2A231F]">
                      <ul className="space-y-1.5">
                        {item.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-[#695043] dark:text-[#C2B3A1]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#9C7F70] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
