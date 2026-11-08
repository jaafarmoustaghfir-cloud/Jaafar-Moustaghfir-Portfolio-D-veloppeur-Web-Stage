import React from 'react';
import { Check, MessageCircle, FileText, ArrowUpRight } from 'lucide-react';
import { PACKS, PERSONAL_INFO } from '../data/portfolioData';

interface PacksPricingProps {
  onSelectPackForQuote: (packName: string) => void;
}

export const PacksPricing: React.FC<PacksPricingProps> = ({ onSelectPackForQuote }) => {
  return (
    <section id="packs" className="scroll-mt-16 py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F] bg-[#FAF8F5]/50 dark:bg-[#181311]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Formules & Tarification Claire
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Packs & Commande Simple
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Chaque projet étant unique, les devis sont ajustés au plus près de votre cahier des charges. Aucun faux tarif inventé.
          </p>
        </div>

        {/* 3 Packs Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {PACKS.map((pack) => {
            const encodedWhatsAppMsg = encodeURIComponent(pack.whatsAppMsg);
            const whatsAppUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=${encodedWhatsAppMsg}`;

            return (
              <div
                key={pack.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all ${
                  pack.isFeatured
                    ? 'border-2 border-[#9C7F70] bg-white shadow-md dark:border-[#9C7F70] dark:bg-[#1C1613]'
                    : 'border border-[#E8E1D8] bg-white shadow-xs dark:border-[#2A231F] dark:bg-[#1A1412]'
                }`}
              >
                {/* Popular tag */}
                {pack.isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#9C7F70] px-3 py-0.5 text-[11px] font-semibold text-white tracking-wide uppercase">
                    Recommandé
                  </div>
                )}

                <div>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                      {pack.name}
                    </h3>
                  </div>

                  <p className="mt-2 text-xs text-[#695043] dark:text-[#C2B3A1]">
                    {pack.tagline}
                  </p>

                  {/* Price Block: [À REMPLIR] transparent representation */}
                  <div className="mt-5 rounded-lg border border-[#E8E1D8] bg-[#FAF8F5] p-3 text-center dark:border-[#2A231F] dark:bg-[#251E1A]">
                    <span className="text-sm font-semibold tracking-wide text-[#9C7F70] dark:text-[#B79D8E]">
                      Tarif : {pack.priceNote}
                    </span>
                    <p className="text-[11px] text-[#836758] dark:text-[#A89582] mt-0.5">
                      Sur devis gratuit selon vos fonctionnalités
                    </p>
                  </div>

                  <div className="mt-3 text-[11px] text-[#836758] dark:text-[#A89582]">
                    <span className="font-medium text-[#1D1815] dark:text-[#E8E1D8]">Idéal pour : </span>
                    {pack.idealFor}
                  </div>

                  {/* Feature list */}
                  <div className="mt-6 border-t border-[#E8E1D8]/70 pt-5 dark:border-[#2A231F]">
                    <p className="text-xs font-semibold text-[#1D1815] dark:text-[#E8E1D8]">
                      Prestations comprises :
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {pack.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#695043] dark:text-[#C2B3A1]">
                          <Check className="h-4 w-4 text-[#9C7F70] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2 Action Buttons: Devis + WhatsApp */}
                <div className="mt-8 space-y-2.5 pt-4">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#9C7F70] py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#836758]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Commander sur WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectPackForQuote(pack.name)}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E8E1D8] bg-white py-2.5 text-xs font-semibold text-[#1D1815] transition-colors hover:bg-[#FAF8F5] dark:border-[#332B25] dark:bg-[#1C1613] dark:text-[#E8E1D8] dark:hover:bg-[#251E1A]"
                  >
                    <FileText className="h-4 w-4 text-[#9C7F70]" />
                    <span>Demander un devis détaillé</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance strip */}
        <div className="mt-10 text-center text-xs text-[#836758] dark:text-[#A89582]">
          Livraison avec code source, hébergement opérationnel et explications claires pour la gestion quotidienne.
        </div>

      </div>
    </section>
  );
};
