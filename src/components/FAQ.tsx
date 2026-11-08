import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/portfolioData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Questions Fréquentes
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Foire Aux Questions
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Des réponses directes et sans détour sur le déroulement pratique de votre projet.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="mt-12 space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-[#E8E1D8] bg-white transition-colors dark:border-[#2A231F] dark:bg-[#1C1613]"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[#FAF8F5] dark:hover:bg-[#251E1A]"
                >
                  <span className="text-sm font-bold text-[#1D1815] dark:text-[#FAF8F5] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#9C7F70] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-[#E8E1D8]/60 p-5 pt-3 text-xs sm:text-sm leading-relaxed text-[#695043] dark:border-[#2A231F] dark:text-[#C2B3A1]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
