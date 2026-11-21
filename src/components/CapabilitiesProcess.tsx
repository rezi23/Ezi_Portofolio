import { useState } from 'react';
import { ChevronDown, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { CAPABILITIES_DATA, PROCESS_STEPS } from '../data/projects';
import type { Locale } from '../types/portfolio';

interface CapabilitiesProcessProps {
  locale: Locale;
}

export function CapabilitiesProcess({ locale }: CapabilitiesProcessProps) {
  const [openIndex, setOpenIndex] = useState<string>('01');

  return (
    <>
      {/* Section 02: Capabilities */}
      <section
        id="kapabilitas"
        className="relative overflow-hidden border-t border-[#F5F2EB]/[0.09] bg-[#070709]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -left-32 h-[420px] w-[420px] rounded-full bg-[#F5F2EB]/[0.04] blur-[140px]"
        />

        <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Editorial Manifesto Column */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#D6D0C4]">
                  <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  <span>{locale === 'id' ? '02. Kapabilitas' : '02. Capabilities'}</span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[#F5F2EB] sm:text-4xl lg:text-[2.5rem] lg:leading-[1.1] [text-wrap:balance]">
                  {locale === 'id' ? (
                    <>
                      Gabungan rasa estetika dan eksekusi teknis yang{' '}
                      <span className="font-serif italic font-normal text-gold-gradient">
                        utuh.
                      </span>
                    </>
                  ) : (
                    <>
                      Bridging visual luxury with dependable{' '}
                      <span className="font-serif italic font-normal text-gold-gradient">
                        engineering.
                      </span>
                    </>
                  )}
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-[#A8A298]">
                  {locale === 'id'
                    ? 'Dari arsitektur informasi hingga kode produksi siap pakai — setiap keputusan desain mempertimbangkan kecepatan operasional, kemewahan visual, dan kemudahan adopsi oleh tim.'
                    : 'From early architecture to production code — every design choice prioritizes operational clarity, speed, and lasting visual authority.'}
                </p>
              </div>

              {/* Signature Craft Standard Card */}
              <div className="luxury-surface-subtle mt-8 rounded-2xl border border-[#F5F2EB]/12 p-5">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#F5F2EB]">
                  <Layers className="h-4 w-4" aria-hidden="true" />
                  <span className="font-mono uppercase tracking-[0.12em]">
                    {locale === 'id' ? 'Standar Eksekusi Studio' : 'Atelier Execution Standard'}
                  </span>
                </div>
                <p className="mt-2.5 text-xs leading-relaxed text-[#C8C1B2]">
                  {locale === 'id'
                    ? 'Setiap antarmuka dirancang tanpa ketergantungan pada template generik, dilengkapi tipografi presisi, aksesibilitas keyboard, dan performa tinggi.'
                    : 'Every interface is engineered without generic templates, featuring precision typography, keyboard accessibility, and high-frame-rate motion.'}
                </p>
              </div>
            </div>

            {/* Right Interactive Luxury Accordion Panels */}
            <div className="space-y-4 lg:col-span-7">
              {CAPABILITIES_DATA.map((cap) => {
                const isOpen = openIndex === cap.index;
                return (
                  <div
                    key={cap.index}
                    className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? 'luxury-surface border-[#F5F2EB]/35'
                        : 'border-[#F5F2EB]/[0.08] bg-[#0B0B0E] hover:border-[#F5F2EB]/20'
                    }`}
                  >
                    {isOpen && (
                      <div
                        aria-hidden="true"
                        className="gold-hairline pointer-events-none absolute top-0 inset-x-8 h-[1px]"
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? '' : cap.index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F2EB]"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="rounded-md border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-2.5 py-0.5 font-mono text-xs font-bold tabular-nums text-[#F5F2EB]">
                          {cap.index}
                        </span>
                        <span className="font-display text-xl font-bold text-[#F5F2EB] sm:text-2xl">
                          {cap.title[locale]}
                        </span>
                      </div>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                          isOpen
                            ? 'border-[#F5F2EB]/50 bg-[#F5F2EB] text-[#050506] rotate-180'
                            : 'border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.03] text-[#A8A298]'
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-[#F5F2EB]/[0.08] px-6 pt-5 pb-6">
                            <p className="max-w-2xl text-sm leading-relaxed text-[#C8C1B2]">
                              {cap.summary[locale]}
                            </p>
                            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-[#F5F2EB] sm:grid-cols-2">
                              {cap.deliverables[locale].map((item) => (
                                <li
                                  key={item}
                                  className="flex items-center gap-2.5 rounded-xl border border-[#F5F2EB]/[0.08] bg-[#F5F2EB]/[0.03] px-3.5 py-2.5"
                                >
                                  <CheckCircle2
                                    className="h-4 w-4 shrink-0 text-[#F5F2EB]"
                                    aria-hidden="true"
                                  />
                                  <span className="text-xs font-medium text-[#E6E0D4]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Process */}
      <section
        id="proses"
        className="relative overflow-hidden border-t border-[#F5F2EB]/[0.09] bg-[#050506] bg-studio-grid"
      >
        <div className="mx-auto max-w-[1360px] px-6 py-24 lg:px-10 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#D6D0C4]">
                <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                <span>{locale === 'id' ? '03. Cara Kerja' : '03. Process'}</span>
              </div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-[#F5F2EB] sm:text-4xl [text-wrap:balance]">
                {locale === 'id'
                  ? 'Empat langkah terukur dari ide hingga produk siap tayang.'
                  : 'Four clear stages from concept to launch-ready product.'}
              </h2>
            </div>
            <p className="max-w-md text-xs font-mono uppercase tracking-[0.14em] text-[#8C867B]">
              {locale === 'id'
                ? 'Metodologi Terstruktur · Transparan · Siap Produksi'
                : 'Structured Methodology · Transparent · Production-Ready'}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-surface group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F5F2EB]/[0.1] p-6 transition-all duration-300 hover:border-[#F5F2EB]/40"
              >
                <div
                  aria-hidden="true"
                  className="gold-hairline pointer-events-none absolute top-0 inset-x-6 h-[1px] opacity-40 transition-opacity group-hover:opacity-100"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-3 py-1 font-mono text-[11px] font-bold tabular-nums text-[#F5F2EB]">
                      PHASE {item.step}
                    </span>
                    <span className="font-serif text-lg italic text-[#78736A] transition-colors group-hover:text-[#F5F2EB]">
                      ✦
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-[#F5F2EB]">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#A8A298]">
                    {item.detail[locale]}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#F5F2EB]/[0.07] pt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C867B]">
                  <span>
                    {locale === 'id' ? 'Tahap' : 'Stage'} {item.step} / 04
                  </span>
                  <span className="text-[#F5F2EB]/70">●</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
