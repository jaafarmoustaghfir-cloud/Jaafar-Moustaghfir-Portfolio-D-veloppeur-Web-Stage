import React from 'react';
import { Globe, Building2, BookOpen, Smartphone, CloudCheck, Wrench, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

export const Services: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'vitrine':
        return <Globe className="h-5 w-5 text-[#9C7F70]" />;
      case 'institutions':
        return <Building2 className="h-5 w-5 text-[#9C7F70]" />;
      case 'edtech':
        return <BookOpen className="h-5 w-5 text-[#9C7F70]" />;
      case 'mobile':
        return <Smartphone className="h-5 w-5 text-[#9C7F70]" />;
      case 'deploiement':
        return <CloudCheck className="h-5 w-5 text-[#9C7F70]" />;
      case 'maintenance':
      default:
        return <Wrench className="h-5 w-5 text-[#9C7F70]" />;
    }
  };

  return (
    <section id="services" className="scroll-mt-16 py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Prestations & Expertises
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Services Web Dédiés
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Des solutions numériques pensées pour répondre concrètement aux objectifs de votre activité sans jargon inutile.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-xl border border-[#E8E1D8] bg-white p-6 transition-all hover:border-[#9C7F70] hover:shadow-xs dark:border-[#2A231F] dark:bg-[#1C1613] dark:hover:border-[#9C7F70]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FAF8F5] dark:bg-[#251E1A]">
                    {getIcon(service.id)}
                  </div>
                  <span className="text-xs font-medium text-[#836758] dark:text-[#B79D8E]">
                    {service.badge}
                  </span>
                </div>

                <h3 className="mt-5 text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                  {service.description}
                </p>

                <div className="mt-4 border-t border-[#E8E1D8]/60 pt-4 dark:border-[#2A231F]">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9C7F70] dark:text-[#B79D8E]">
                    Inclus :
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#695043] dark:text-[#C2B3A1]">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#9C7F70] mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <a
                  href="#packs"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9C7F70] hover:text-[#836758] dark:text-[#B79D8E] dark:hover:text-[#D9CEBF]"
                >
                  <span>Voir les packs associés</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
