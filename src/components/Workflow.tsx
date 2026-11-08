import React from 'react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F] bg-[#FAF8F5]/30 dark:bg-[#181311]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Méthodologie Éprouvée
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Processus de Travail en 4 Étapes
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Une démarche claire, transparente et cadrée du premier message jusqu'au lancement officiel de votre site.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WORKFLOW_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative flex flex-col justify-between rounded-xl border border-[#E8E1D8] bg-white p-6 shadow-xs dark:border-[#2A231F] dark:bg-[#1C1613]"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-[#9C7F70] dark:text-[#B79D8E] tabular-nums">
                  {step.step}
                </span>

                <h3 className="mt-4 text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 h-1 w-8 rounded-full bg-[#E8E1D8] dark:bg-[#332B25]"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
