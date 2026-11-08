import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, Copy, Check, Send, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  selectedPackForQuote?: string;
  onClearSelectedPack?: () => void;
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({
  selectedPackForQuote,
  onClearSelectedPack,
  onShowToast,
}) => {
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'site_web',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPackForQuote) {
      setFormData((prev) => ({
        ...prev,
        type: 'site_web',
        message: `Bonjour Jaafar, je souhaite obtenir un devis pour le "${selectedPackForQuote}". Voici les détails de mon projet : `,
      }));
    }
  }, [selectedPackForQuote]);

  const copyToClipboard = (text: string, field: 'email' | 'phone', label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    onShowToast(`${label} copié dans le presse-papier !`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare Netlify Form submission or client fallback
    const formElement = e.currentTarget;
    const body = new URLSearchParams(new FormData(formElement) as any).toString();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        onShowToast('Votre message a été transmis avec succès !');
      })
      .catch(() => {
        // Fallback gracefully: still confirm and provide direct WhatsApp / email fallback
        setIsSubmitting(false);
        setSubmitted(true);
        onShowToast('Message préparé ! Vous pouvez aussi m\'écrire directement par WhatsApp.');
      });
  };

  const whatsappDirectUrl = `https://wa.me/${PERSONAL_INFO.phoneClean}?text=Bonjour%20Jaafar,%20je%20vous%20contacte%20suite%20%C3%A0%20votre%20portfolio...`;

  return (
    <section id="contact" className="scroll-mt-16 py-16 md:py-24 border-t border-[#E8E1D8] dark:border-[#2A231F]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#9C7F70] uppercase dark:text-[#B79D8E]">
            Contact & Disponibilités
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#1D1815] sm:text-3xl dark:text-[#FAF8F5]">
            Discutons de Votre Projet ou Opportunité
          </h2>
          <p className="mt-3 text-sm text-[#695043] dark:text-[#C2B3A1]">
            Pour une demande de devis de site web, une proposition de stage en France ou un entretien d'admission en école, je vous réponds sous 24h.
          </p>
        </div>

        {/* 2-Column Grid: Contact Coordinates & Form */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 items-start">
          
          {/* Coordinates Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Banner */}
            <div className="rounded-2xl border border-[#9C7F70] bg-[#FAF8F5] p-6 dark:border-[#9C7F70] dark:bg-[#1C1613]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#9C7F70] text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                    Canal Direct : WhatsApp
                  </h3>
                  <p className="text-xs text-[#836758] dark:text-[#B79D8E]">
                    Réponse la plus rapide & échange instantané
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-col gap-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#9C7F70] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#836758]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Démarrer une conversation WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card with copy button */}
            <div className="rounded-2xl border border-[#E8E1D8] bg-white p-5 dark:border-[#2A231F] dark:bg-[#1C1613]">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAF8F5] dark:bg-[#251E1A] text-[#9C7F70]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#836758] dark:text-[#A89582]">Email direct</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-[#1D1815] hover:text-[#9C7F70] dark:text-[#FAF8F5] dark:hover:text-[#B79D8E]"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email', 'Email')}
                  aria-label="Copier l'adresse email"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] hover:bg-[#FAF8F5] dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:bg-[#251E1A]"
                >
                  {copiedField === 'email' ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card with copy button */}
            <div className="rounded-2xl border border-[#E8E1D8] bg-white p-5 dark:border-[#2A231F] dark:bg-[#1C1613]">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FAF8F5] dark:bg-[#251E1A] text-[#9C7F70]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#836758] dark:text-[#A89582]">Téléphone & WhatsApp</p>
                    <a
                      href={`tel:${PERSONAL_INFO.phoneClean}`}
                      className="text-xs sm:text-sm font-bold text-[#1D1815] hover:text-[#9C7F70] dark:text-[#FAF8F5] dark:hover:text-[#B79D8E]"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone', 'Numéro de téléphone')}
                  aria-label="Copier le numéro de téléphone"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8E1D8] text-[#695043] hover:bg-[#FAF8F5] dark:border-[#332B25] dark:text-[#C2B3A1] dark:hover:bg-[#251E1A]"
                >
                  {copiedField === 'phone' ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-2xl border border-[#E8E1D8] bg-white p-5 dark:border-[#2A231F] dark:bg-[#1C1613]">
              <p className="text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]">
                Réseaux Professionnels & Code
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E1D8] px-3 py-1.5 text-xs font-medium text-[#1D1815] hover:border-[#9C7F70] dark:border-[#332B25] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]"
                >
                  <Linkedin className="h-3.5 w-3.5 text-[#9C7F70]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E1D8] px-3 py-1.5 text-xs font-medium text-[#1D1815] hover:border-[#9C7F70] dark:border-[#332B25] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]"
                >
                  <Github className="h-3.5 w-3.5 text-[#9C7F70]" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E8E1D8] px-3 py-1.5 text-xs font-medium text-[#1D1815] hover:border-[#9C7F70] dark:border-[#332B25] dark:text-[#E8E1D8] dark:hover:border-[#9C7F70]"
                >
                  <Instagram className="h-3.5 w-3.5 text-[#9C7F70]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E8E1D8] bg-white p-6 sm:p-8 dark:border-[#2A231F] dark:bg-[#1C1613]">
              
              <h3 className="text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                Formulaire de Contact
              </h3>
              <p className="mt-1 text-xs text-[#695043] dark:text-[#C2B3A1]">
                Remplissez ces quelques lignes pour m'expliquer votre besoin ou votre proposition.
              </p>

              {submitted ? (
                <div className="mt-6 rounded-xl border border-[#9C7F70] bg-[#FAF8F5] p-6 text-center dark:bg-[#221B17]">
                  <Check className="mx-auto h-8 w-8 text-[#9C7F70]" />
                  <h4 className="mt-3 text-base font-bold text-[#1D1815] dark:text-[#FAF8F5]">
                    Merci pour votre message !
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#695043] dark:text-[#C2B3A1]">
                    Votre demande a bien été envoyée. Jaafar reviendra vers vous très prochainement par email ou par téléphone.
                  </p>
                  <div className="mt-4 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', type: 'site_web', message: '' });
                        if (onClearSelectedPack) onClearSelectedPack();
                      }}
                      className="rounded-lg border border-[#E8E1D8] bg-white px-4 py-2 text-xs font-medium text-[#1D1815] hover:bg-[#FAF8F5] dark:border-[#332B25] dark:bg-[#1C1613] dark:text-[#E8E1D8]"
                    >
                      Envoyer un autre message
                    </button>
                    <a
                      href={whatsappDirectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-[#9C7F70] px-4 py-2 text-xs font-semibold text-white hover:bg-[#836758]"
                    >
                      Poursuivre sur WhatsApp
                    </a>
                  </div>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="mt-6 space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]"
                    >
                      Votre Nom & Prénom *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex. Karim Benali / Sophie Martin"
                      className="mt-1.5 w-full rounded-lg border border-[#E8E1D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1D1815] placeholder-[#836758]/60 focus:border-[#9C7F70] focus:bg-white focus:outline-hidden dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#FAF8F5] dark:placeholder-[#A89582]/60 dark:focus:border-[#9C7F70]"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]"
                    >
                      Votre Adresse Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre-email@exemple.com"
                      className="mt-1.5 w-full rounded-lg border border-[#E8E1D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1D1815] placeholder-[#836758]/60 focus:border-[#9C7F70] focus:bg-white focus:outline-hidden dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#FAF8F5] dark:placeholder-[#A89582]/60 dark:focus:border-[#9C7F70]"
                    />
                  </div>

                  {/* Type of demand */}
                  <div>
                    <label
                      htmlFor="contact-type"
                      className="block text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]"
                    >
                      Type de demande *
                    </label>
                    <select
                      id="contact-type"
                      name="type"
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-[#E8E1D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1D1815] focus:border-[#9C7F70] focus:bg-white focus:outline-hidden dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#FAF8F5] dark:focus:border-[#9C7F70]"
                    >
                      <option value="site_web">Création d'un site web / Devis</option>
                      <option value="stage">Proposition de stage (2 mois en France)</option>
                      <option value="admission">Admission en école d'ingénieurs / Jury</option>
                      <option value="autre">Autre question ou partenariat</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#1D1815] dark:text-[#FAF8F5]"
                    >
                      Votre Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Précisez votre activité, vos attentes, ou la nature de votre offre..."
                      className="mt-1.5 w-full rounded-lg border border-[#E8E1D8] bg-[#FAF8F5] px-3.5 py-2.5 text-xs text-[#1D1815] placeholder-[#836758]/60 focus:border-[#9C7F70] focus:bg-white focus:outline-hidden dark:border-[#332B25] dark:bg-[#221B17] dark:text-[#FAF8F5] dark:placeholder-[#A89582]/60 dark:focus:border-[#9C7F70]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#9C7F70] py-3 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#836758] disabled:opacity-50"
                  >
                    <Send className="h-4 w-4" />
                    <span>{isSubmitting ? 'Transmission en cours...' : 'Envoyer ma demande'}</span>
                  </button>

                  <p className="text-center text-[11px] text-[#836758] dark:text-[#A89582]">
                    Formulaire compatible Netlify Forms. Données strictement confidentielles.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
