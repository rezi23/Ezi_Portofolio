import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Eye,
  Layers,
  Sparkles,
  Crosshair,
  CheckCircle2,
  LayoutGrid,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Locale, ProjectItem } from '../types/portfolio';
import { cycleIndex } from '../utils/portfolioLogic';

interface HeroSectionProps {
  locale: Locale;
  onToggleLocale: (next: Locale) => void;
  projects: ProjectItem[];
  onInspectProject: (project: ProjectItem, moduleId?: string) => void;
  onExploreWorks: () => void;
}

export function HeroSection({
  locale,
  onToggleLocale,
  projects,
  onInspectProject,
  onExploreWorks,
}: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeModuleIdMap, setActiveModuleIdMap] = useState<Record<string, string>>({});
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const featuredProjects = projects.slice(0, Math.max(projects.length, 1));
  const safeIndex = activeIndex % featuredProjects.length;
  const activeProject = featuredProjects[safeIndex];

  const projectModules = activeProject?.modules ?? [];
  const selectedModuleId = activeProject
    ? activeModuleIdMap[activeProject.id] ?? projectModules[0]?.id
    : undefined;
  const activeModule =
    projectModules.find((m) => m.id === selectedModuleId) ?? projectModules[0] ?? null;

  const displayImageUrl = activeModule ? activeModule.imageUrl : activeProject?.imageUrl ?? '';
  const displayTitle = activeModule
    ? activeModule.title[locale]
    : activeProject?.subtitle[locale] ?? '';
  const displayDescription = activeModule
    ? activeModule.description[locale]
    : activeProject?.summary[locale] ?? '';
  const displayHotspotCount = activeModule
    ? activeModule.hotspots.length
    : activeProject?.hotspots.length ?? 0;

  const handleCycle = (delta: number) => {
    setActiveIndex((prev) => cycleIndex(prev, featuredProjects.length, delta));
  };

  const metrics = [
    {
      index: '01',
      value: `${projects.length}`,
      label: locale === 'id' ? 'Produk & Web Selesai' : 'Shipped Web Products',
      note: locale === 'id' ? 'Arsitektur siap produksi & teruji' : 'Production-ready custom builds',
    },
    {
      index: '02',
      value: '11+',
      label: locale === 'id' ? 'Modul Dashboard & POS' : 'Dashboard & POS Modules',
      note: locale === 'id' ? 'Analitik multi-cabang real-time' : 'Real-time multi-branch analytics',
    },
    {
      index: '03',
      value: '< 3 Mnt',
      label: locale === 'id' ? 'Efisiensi Dokumen Resmi' : 'Official Doc Turnaround',
      note: locale === 'id' ? 'Otomasi BAST & SPK presisi A4' : 'BAST & SPK legal A4 automation',
    },
    {
      index: '04',
      value: '100%',
      label: locale === 'id' ? 'Desain & Kode Kustom' : 'Bespoke UI & Engineering',
      note: locale === 'id' ? 'Standar kerajinan digital tinggi' : 'Zero generic boilerplate',
    },
  ];

  return (
    <section id="beranda" className="relative overflow-hidden bg-studio-grid">
      {/* Multi-layered luxury broken-white ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[540px] w-[860px] -translate-x-1/2 rounded-full bg-[#F5F2EB]/[0.055] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-24 h-[380px] w-[420px] rounded-full bg-[#F5F2EB]/[0.03] blur-[130px]"
      />

      <div className="mx-auto max-w-[1360px] px-6 pt-6 pb-12 lg:px-10 lg:pt-8 lg:pb-16">
        {/* Top Atelier Metadata Bar: Credentials, Edition & Bilingual Toggle */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F2EB]/[0.09] pb-4">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#A8A298]">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#F5F2EB]">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              <span>{locale === 'id' ? 'Etalase Karya Utama' : 'Live Product Showcase'}</span>
            </span>
            <span className="text-zinc-700" aria-hidden="true">
              /
            </span>
            <span className="text-[#F5F2EB] font-semibold">Muhammad Fachrezi</span>
            <span className="text-zinc-600" aria-hidden="true">
              ·
            </span>
            <span>Principal Interface Designer &amp; Frontend Engineer</span>
            <span className="hidden sm:inline text-zinc-600" aria-hidden="true">
              ·
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-[#8C867B]">
              IDN / GMT+7
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onExploreWorks}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.04] px-3.5 py-1.5 text-xs font-medium text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 hover:bg-[#F5F2EB]/[0.08]"
            >
              <span>{locale === 'id' ? 'Indeks Semua Karya' : 'All Works Index'}</span>
              <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <div
              role="group"
              aria-label={locale === 'id' ? 'Pilih bahasa' : 'Select language'}
              className="inline-flex items-center gap-1 rounded-full border border-[#F5F2EB]/15 bg-[#0C0C0F] p-1 shadow-[inset_0_1px_0_0_rgba(245,242,235,0.08)]"
            >
              <button
                type="button"
                onClick={() => onToggleLocale('id')}
                aria-pressed={locale === 'id'}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                  locale === 'id'
                    ? 'btn-gold-luxury text-[#050506] font-bold'
                    : 'text-[#A8A298] hover:text-[#F5F2EB]'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onToggleLocale('en')}
                aria-pressed={locale === 'en'}
                className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                  locale === 'en'
                    ? 'btn-gold-luxury text-[#050506] font-bold'
                    : 'text-[#A8A298] hover:text-[#F5F2EB]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* Full-Width Interactive Showcase Stage: Uncropped Full Screenshot on Top + Detailed Explanation Below */}
        <div className="luxury-surface relative flex flex-col justify-between overflow-hidden rounded-[28px] border border-[#F5F2EB]/15 p-5 sm:p-7 lg:p-8">
          {/* Top Specular Broken-White Accent Line */}
          <div
            aria-hidden="true"
            className="gold-hairline pointer-events-none absolute top-0 inset-x-12 h-[1px]"
          />

          {/* Soft Warm Ivory Ambient Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-28 right-12 h-72 w-72 rounded-full bg-[#F5F2EB]/[0.06] blur-[100px]"
          />

          {/* 1. Top Project Deck Switcher Tabs + Prev/Next Controls */}
          <div className="relative z-10 mb-5 flex flex-col justify-between gap-4 border-b border-[#F5F2EB]/[0.08] pb-5 lg:flex-row lg:items-center">
            <div className="flex flex-wrap items-center gap-2">
              {featuredProjects.map((proj, idx) => {
                const selected = idx === safeIndex;
                return (
                  <button
                    key={proj.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`group relative inline-flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-left transition-all focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                      selected
                        ? 'btn-gold-luxury border-transparent text-[#050506] font-bold shadow-lg'
                        : 'border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] text-[#C8C1B2] hover:border-[#F5F2EB]/25 hover:bg-[#F5F2EB]/[0.06] hover:text-[#F5F2EB]'
                    }`}
                  >
                    <span
                      className={`font-mono text-xs tabular-nums ${
                        selected ? 'text-[#050506]/70 font-bold' : 'text-[#8C867B]'
                      }`}
                    >
                      {proj.indexLabel}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">{proj.title}</span>
                    <span
                      className={`hidden sm:inline rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                        selected
                          ? 'bg-[#050506]/10 text-[#050506]/80'
                          : 'bg-[#F5F2EB]/[0.06] text-[#A8A298]'
                      }`}
                    >
                      {proj.client}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between gap-2 sm:justify-end">
              {displayHotspotCount > 0 && (
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.04] px-3 py-1.5 font-mono text-[11px] text-[#E6E0D4]">
                  <Crosshair className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  <span>
                    {displayHotspotCount}{' '}
                    {locale === 'id' ? 'Titik Inspeksi UI' : 'UI Hotspots'}
                  </span>
                </span>
              )}

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleCycle(-1)}
                  aria-label={
                    locale === 'id' ? 'Karya sebelumnya di sorotan' : 'Previous featured work'
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5F2EB]/15 bg-[#121216] text-[#F5F2EB] transition-all hover:border-[#F5F2EB]/45 hover:bg-[#F5F2EB]/10 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => handleCycle(1)}
                  aria-label={
                    locale === 'id' ? 'Karya berikutnya di sorotan' : 'Next featured work'
                  }
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5F2EB]/15 bg-[#121216] text-[#F5F2EB] transition-all hover:border-[#F5F2EB]/45 hover:bg-[#F5F2EB]/10 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Interactive Sub-Module Switcher Bar (when active project has multiple modules like Pictomatic) */}
          {projectModules.length > 0 && activeProject && (
            <div className="relative z-10 mb-5 rounded-2xl border border-[#F5F2EB]/12 bg-[#0A0A0D]/95 p-3.5">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 px-1">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#D6D0C4]">
                  <LayoutGrid className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  <span>
                    {locale === 'id'
                      ? `Pilih Layar Modul ${activeProject.title} (${projectModules.length} Modul Terintegrasi)`
                      : `Select ${activeProject.title} Module Screen (${projectModules.length} Integrated Modules)`}
                  </span>
                </span>
                {activeModule && (
                  <span className="rounded-md border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.07] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#F5F2EB]">
                    {activeModule.badge[locale]}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {projectModules.map((mod) => {
                  const isModSelected = activeModule?.id === mod.id;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() =>
                        setActiveModuleIdMap((prev) => ({
                          ...prev,
                          [activeProject.id]: mod.id,
                        }))
                      }
                      className={`rounded-xl px-3.5 py-2 font-mono text-xs transition-all ${
                        isModSelected
                          ? 'btn-gold-luxury text-[#050506] font-bold shadow-sm'
                          : 'border border-[#F5F2EB]/10 bg-[#121216] text-[#BEB8AE] hover:border-[#F5F2EB]/35 hover:text-[#F5F2EB]'
                      }`}
                    >
                      {mod.tabLabel[locale]}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3. Full-Width Uncropped Browser Viewport (100% Width, Natural Aspect Ratio) */}
          <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-[#F5F2EB]/18 bg-[#070709] shadow-2xl">
            {/* Luxury Anodized Browser Chrome */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F5F2EB]/[0.09] bg-[#101014] px-4 py-3 text-xs text-[#A8A298]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EB]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EB]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EB]/75" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#F5F2EB]/[0.09] bg-[#08080A] px-3 py-1 font-mono text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5F2EB]" />
                  <span className="text-[#F5F2EB]">
                    {activeProject?.slug}
                    {activeModule ? `/${activeModule.id}` : ''}.app
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline font-mono text-[11px] text-[#D6D0C4]">
                  {activeProject?.categoryLabel[locale]}
                </span>
                <span className="rounded bg-[#F5F2EB]/[0.08] px-2 py-0.5 font-mono text-[11px] tabular-nums text-[#F5F2EB]">
                  {activeProject?.year}
                </span>
                {activeProject && (
                  <button
                    type="button"
                    onClick={() => onInspectProject(activeProject, activeModule?.id)}
                    className="btn-gold-luxury inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-[11px] font-bold text-[#050506]"
                  >
                    <Eye className="h-3 w-3" aria-hidden="true" />
                    <span>{locale === 'id' ? 'Inspeksi Pin UI' : 'Inspect UI Pins'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Uncropped Full Screenshot Display (h-auto object-contain so zero cropping occurs) */}
            <div className="relative w-full bg-[#060608]">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.button
                    key={`${activeProject.id}-${activeModule?.id ?? 'main'}`}
                    type="button"
                    onClick={() => onInspectProject(activeProject, activeModule?.id)}
                    aria-label={
                      locale === 'id'
                        ? `Buka studi kasus interaktif ${activeProject.title}`
                        : `Open interactive case study for ${activeProject.title}`
                    }
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="group relative block w-full cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#F5F2EB]"
                  >
                    {displayImageUrl && !imageErrorMap[displayImageUrl] ? (
                      <img
                        src={displayImageUrl}
                        alt={`${activeProject.title} — ${displayTitle}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setImageErrorMap((prev) => ({ ...prev, [displayImageUrl]: true }))
                        }
                        className="block h-auto w-full object-contain"
                      />
                    ) : (
                      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#141418] to-[#09090B] p-8 text-center">
                        <Layers className="h-8 w-8 text-[#F5F2EB]" aria-hidden="true" />
                        <p className="font-display text-lg font-semibold text-[#F5F2EB]">
                          {activeProject.title}
                        </p>
                      </div>
                    )}
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* 4. Full-Width Architectural Explanation & Specification Panel BELOW the Screenshot */}
          {activeProject && (
            <div className="relative z-10 mt-6 rounded-2xl border border-[#F5F2EB]/14 bg-[#0B0B0E]/95 p-6 sm:p-7">
              {/* Header Row: Badges & Primary Inspect CTA */}
              <div className="flex flex-col justify-between gap-4 border-b border-[#F5F2EB]/[0.08] pb-5 lg:flex-row lg:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 text-xs">
                    <span className="rounded-md border border-[#F5F2EB]/30 bg-[#F5F2EB]/10 px-2.5 py-1 font-mono text-xs font-bold text-[#F5F2EB]">
                      {activeProject.indexLabel} · {activeProject.title}
                    </span>
                    {activeModule && (
                      <span className="rounded-md border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.06] px-2.5 py-1 font-mono text-xs font-semibold text-[#E6E0D4]">
                        {activeModule.tabLabel[locale]} — {activeModule.badge[locale]}
                      </span>
                    )}
                    <span className="font-mono text-xs text-[#A8A298]">
                      {activeProject.client} · {activeProject.role[locale]}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-[#F5F2EB] sm:text-3xl">
                    {displayTitle}
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    type="button"
                    onClick={() => onInspectProject(activeProject, activeModule?.id)}
                    className="btn-gold-luxury inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-bold uppercase tracking-[0.06em] text-[#050506] transition-all duration-200 active:scale-[0.98]"
                  >
                    <Eye className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {locale === 'id'
                        ? `Buka Studi Kasus & Pin UI ${activeProject.title}`
                        : `Open ${activeProject.title} Case Study & Pins`}
                    </span>
                  </button>
                </div>
              </div>

              {/* Full Unclamped Narrative Explanation */}
              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#D6D0C4]">
                {displayDescription}
              </p>

              {/* 3-Column Capabilities / Highlights Grid Below Description */}
              <div className="mt-6">
                <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.15em] text-[#A8A298]">
                  {activeModule
                    ? locale === 'id'
                      ? `Detail Fitur & Kapabilitas — ${activeModule.tabLabel[locale]}`
                      : `Feature & Capability Breakdown — ${activeModule.tabLabel[locale]}`
                    : locale === 'id'
                      ? 'Sorotan Arsitektur & Fitur Utama'
                      : 'Key Architectural & Feature Highlights'}
                </p>
                <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
                  {(activeModule ? activeModule.capabilities : activeProject.highlights.slice(0, 3)).map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 rounded-xl border border-[#F5F2EB]/[0.09] bg-[#F5F2EB]/[0.025] p-4 text-xs sm:text-sm leading-relaxed text-[#E6E0D4]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#F5F2EB]"
                          aria-hidden="true"
                        />
                        <span>{item[locale]}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Bottom Bar: Project Metrics & Tech Stack */}
              <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#F5F2EB]/[0.08] pt-5 lg:flex-row lg:items-center">
                {activeProject.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:items-center">
                    {activeProject.metrics.map((m) => (
                      <div
                        key={m.label.id}
                        className="rounded-xl border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] px-4 py-2.5"
                      >
                        <p className="font-mono text-base font-bold tabular-nums text-[#F5F2EB]">
                          {m.value}
                        </p>
                        <p className="mt-0.5 text-[11px] text-[#A8A298]">{m.label[locale]}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-1.5">
                  {activeProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.04] px-3 py-1 font-mono text-xs text-[#D6D0C4]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Full-Width 4-Column Architectural Proof Strip */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="luxury-surface-subtle group relative overflow-hidden rounded-2xl border border-[#F5F2EB]/[0.09] p-5 transition-colors duration-200 hover:border-[#F5F2EB]/35"
            >
              <div
                aria-hidden="true"
                className="gold-hairline pointer-events-none absolute top-0 inset-x-6 h-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[#C8C1B2]">{metric.index}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5F2EB]/40 transition-colors group-hover:bg-[#F5F2EB]" />
              </div>
              <p className="mt-3 font-mono text-2xl font-bold tracking-tight tabular-nums text-[#F5F2EB] sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#F5F2EB]">{metric.label}</p>
              <p className="mt-0.5 text-xs text-[#A8A298]">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
