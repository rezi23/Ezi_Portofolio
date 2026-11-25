import { Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { CAPABILITIES_DATA, PROCESS_STEPS } from '../data/projects';
import type { Locale } from '../types/portfolio';

interface CapabilitiesProcessProps {
  locale: Locale;
}

export function CapabilitiesProcess({ locale }: CapabilitiesProcessProps) {
  return (
    <>
      {/* Section 02: High-Density 3-Column Capabilities Matrix (All Visible Immediately) */}
      <section
        id="kapabilitas"
        className="relative overflow-hidden border-t border-[#F5F2EB]/[0.1] bg-[#070709]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -left-32 h-[380px] w-[380px] rounded-full bg-[#F5F2EB]/[0.035] blur-[140px]"
        />

        <div className="mx-auto max-w-[1380px] px-5 py-16 lg:px-8 lg:py-20">
          {/* Header Row */}
          <div className="flex flex-col justify-between gap-4 border-b border-[#F5F2EB]/[0.1] pb-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D6D0C4]">
                <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                <span>
                  {locale === 'id'
                    ? '02. Kapabilitas Teknis & Desain'
                    : '02. Design & Engineering Capabilities'}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F2EB] sm:text-3xl lg:text-4xl">
                {locale === 'id' ? (
                  <>
                    Tiga pilar eksekusi dari sistem desain hingga{' '}
                    <span className="font-serif italic font-normal text-gold-gradient">
                      kode produksi.
                    </span>
                  </>
                ) : (
                  <>
                    Three execution pillars from design systems to{' '}
                    <span className="font-serif italic font-normal text-gold-gradient">
                      production code.
                    </span>
                  </>
                )}
              </h2>
            </div>

            <div className="inline-flex items-center gap-2 rounded-xl border border-[#F5F2EB]/14 bg-[#0C0C10] px-3.5 py-2 text-xs text-[#D6D0C4]">
              <Layers className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
              <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
                {locale === 'id'
                  ? 'Standar Token 3-Lapis · WCAG AA · React 19'
                  : '3-Layer Tokens · WCAG AA · React 19'}
              </span>
            </div>
          </div>

          {/* 3-Column Simultaneous Bento Grid (Zero Hidden Content) */}
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {CAPABILITIES_DATA.map((cap, idx) => (
              <motion.div
                key={cap.index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="luxury-surface group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F5F2EB]/15 p-6 transition-all duration-300 hover:border-[#F5F2EB]/45"
              >
                <div
                  aria-hidden="true"
                  className="gold-hairline pointer-events-none absolute top-0 inset-x-8 h-[1px] opacity-50 transition-opacity group-hover:opacity-100"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="btn-gold-luxury rounded-lg px-2.5 py-0.5 font-mono text-xs font-bold tabular-nums text-[#040405]">
                      {cap.index}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8C867B]">
                      {locale === 'id' ? 'Pilar Inti' : 'Core Pillar'}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-bold text-[#F5F2EB]">
                    {cap.title[locale]}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#C8C1B2]">
                    {cap.summary[locale]}
                  </p>
                </div>

                <ul className="mt-5 space-y-2 border-t border-[#F5F2EB]/[0.08] pt-4">
                  {cap.deliverables[locale].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 rounded-xl border border-[#F5F2EB]/[0.08] bg-[#101016] px-3 py-2 text-xs font-medium text-[#E6E0D4]"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-[#F5F2EB]"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Process */}
      <section
        id="proses"
        className="relative overflow-hidden border-t border-[#F5F2EB]/[0.1] bg-[#040405] bg-studio-grid"
      >
        <div className="mx-auto max-w-[1380px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-4 border-b border-[#F5F2EB]/[0.1] pb-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D6D0C4]">
                <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                <span>
                  {locale === 'id' ? '03. Metodologi Rekayasa' : '03. Engineering Methodology'}
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F2EB] sm:text-3xl lg:text-4xl">
                {locale === 'id'
                  ? 'Empat tahapan terukur dari pemetaan alur hingga rilis produksi.'
                  : 'Four disciplined stages from workflow mapping to production launch.'}
              </h2>
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#8C867B]">
              {locale === 'id'
                ? 'Terstruktur · Teruji Unit Test · Siap Operasional'
                : 'Structured · Unit-Tested · Operational-Ready'}
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="luxury-surface group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#F5F2EB]/14 p-5 transition-all duration-300 hover:border-[#F5F2EB]/45"
              >
                <div
                  aria-hidden="true"
                  className="gold-hairline pointer-events-none absolute top-0 inset-x-6 h-[1px] opacity-40 transition-opacity group-hover:opacity-100"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-2.5 py-0.5 font-mono text-[11px] font-bold tabular-nums text-[#F5F2EB]">
                      PHASE {item.step}
                    </span>
                    <span className="font-mono text-[11px] text-[#8C867B]">
                      {item.step} / 04
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#F5F2EB]">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#C8C1B2]">
                    {item.detail[locale]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
