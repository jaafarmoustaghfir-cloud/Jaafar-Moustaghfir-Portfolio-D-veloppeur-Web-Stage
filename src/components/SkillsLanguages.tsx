import React from 'react';
import { Code, HeartHandshake, Languages } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsLanguages: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F] bg-[#FAF8F5]/40 dark:bg-[#181311]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Savoir-Faire & Langues
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Compétences Techniques & Humaines
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Des fondations solides en algorithmique (C) associées à la pratique quotidienne des technologies web modernes.
          </p>
        </div>

        {/* 3 Columns: Tech, Human Skills, Languages */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Column 1: Technical Skills */}
          <div className="rounded-2xl border border-[#E8E1D8] bg-white p-6 dark:border-[#2A231F] dark:bg-[#1C1613]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF8F5] dark:bg-[#251E1A]">
                <Code className="h-4 w-4 text-[#9C7F70]" />
              </div>
              <h3 className="text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                Compétences Techniques
              </h3>
            </div>

            <div className="mt-6 divide-y divide-[#E8E1D8]/60 dark:divide-[#2A231F]">
              {SKILLS_DATA.technical.map((skill, idx) => (
                <div key={idx} className="py-3 first:pt-0 last:pb-0 flex items-center justify-between text-xs">
                  <div>
                    <p className="font-semibold text-[#1D1815] dark:text-[#FAF8F5]">{skill.name}</p>
                    <p className="text-[11px] text-[#836758] dark:text-[#A89582]">{skill.category}</p>
                  </div>
                  <span className="font-medium text-[#9C7F70] dark:text-[#B79D8E]">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Soft Skills & Mindset */}
          <div className="rounded-2xl border border-[#E8E1D8] bg-white p-6 dark:border-[#2A231F] dark:bg-[#1C1613]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF8F5] dark:bg-[#251E1A]">
                <HeartHandshake className="h-4 w-4 text-[#9C7F70]" />
              </div>
              <h3 className="text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                Qualités Humaines & Méthode
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {SKILLS_DATA.humanSkills.map((item, idx) => (
                <div key={idx} className="rounded-xl border border-[#E8E1D8]/60 bg-[#FAF8F5] p-3.5 dark:border-[#2A231F] dark:bg-[#221B17]">
                  <p className="text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-[#695043] dark:text-[#C2B3A1]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Languages */}
          <div className="rounded-2xl border border-[#E8E1D8] bg-white p-6 dark:border-[#2A231F] dark:bg-[#1C1613]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FAF8F5] dark:bg-[#251E1A]">
                <Languages className="h-4 w-4 text-[#9C7F70]" />
              </div>
              <h3 className="text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                Langues Pratiquées
              </h3>
            </div>

            <div className="mt-6 space-y-4">
              {SKILLS_DATA.languages.map((lang, idx) => (
                <div key={idx} className="rounded-xl border border-[#E8E1D8]/60 bg-[#FAF8F5] p-3.5 dark:border-[#2A231F] dark:bg-[#221B17]">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-[#1D1815] dark:text-[#FAF8F5]">{lang.lang}</p>
                    <span className="text-xs font-semibold text-[#9C7F70] dark:text-[#B79D8E]">{lang.level}</span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-[#695043] dark:text-[#C2B3A1]">
                    {lang.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-[#E8E1D8] p-3 text-[11px] text-[#836758] dark:border-[#2A231F] dark:text-[#A89582]">
              Cursus universitaire intégralement dispensé en langue française à l'ESTA Agadir.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
