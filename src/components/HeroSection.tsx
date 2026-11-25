import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
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

function splitLeadText(text: string): { lead: string; rest: string } {
  const colonIdx = text.indexOf(':');
  if (colonIdx > 0 && colonIdx < 75) {
    return {
      lead: text.slice(0, colonIdx).trim(),
      rest: text.slice(colonIdx + 1).trim(),
    };
  }
  return { lead: '', rest: text };
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
  const [showHeroPins, setShowHeroPins] = useState(true);
  const [activeHeroHotspotId, setActiveHeroHotspotId] = useState<string | null>(null);
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
  const currentHotspots = activeModule
    ? activeModule.hotspots
    : activeProject?.hotspots ?? [];

  useEffect(() => {
    setActiveHeroHotspotId(currentHotspots[0]?.id ?? null);
  }, [activeProject?.id, activeModule?.id]);

  const activeHotspot =
    currentHotspots.find((h) => h.id === activeHeroHotspotId) ?? currentHotspots[0] ?? null;

  const handleCycle = (delta: number) => {
    setActiveIndex((prev) => cycleIndex(prev, featuredProjects.length, delta));
  };

  const handleSelectModule = (modId: string) => {
    if (!activeProject) return;
    setActiveModuleIdMap((prev) => ({
      ...prev,
      [activeProject.id]: modId,
    }));
  };

  const metrics = [
    {
      index: '01',
      value: `0${projects.length}`,
      label: locale === 'id' ? 'Sistem Produksi Aktif' : 'Live Production Systems',
      note:
        locale === 'id'
          ? 'Pictomatic POS · BAST · SPK Adabtiv'
          : 'Pictomatic POS · BAST · SPK Adabtiv',
    },
    {
      index: '02',
      value: '11 Modul',
      label: locale === 'id' ? 'Ekosistem Photobooth & POS' : 'Photobooth & POS Suite',
      note:
        locale === 'id'
          ? '7 layar utama + analitik & CMS kiosk'
          : '7 core screens + analytics & kiosk CMS',
    },
    {
      index: '03',
      value: '22.900x',
      label: locale === 'id' ? 'Interaksi Aset Kreatif' : 'Creative Asset Interactions',
      note:
        locale === 'id'
          ? '16 stiker aktif · 6 pack · frame & GIF'
          : '16 active stickers · 6 packs · frames & GIFs',
    },
    {
      index: '04',
      value: '< 3 Mnt',
      label: locale === 'id' ? 'Otomasi Dokumen Resmi A4' : 'A4 Legal Doc Turnaround',
      note:
        locale === 'id'
          ? 'Paste Ctrl+V, preset industri & PDF'
          : 'Ctrl+V paste, industry presets & PDF',
    },
  ];

  const capabilityItems = activeModule
    ? activeModule.capabilities
    : activeProject?.highlights ?? [];

  return (
    <section id="beranda" className="relative overflow-hidden bg-studio-grid">
      {/* Subtle Broken-White Architectural Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 left-1/2 h-[480px] w-[920px] -translate-x-1/2 rounded-full bg-[#F5F2EB]/[0.05] blur-[150px]"
      />

      <div className="mx-auto max-w-[1380px] px-5 pt-5 pb-10 lg:px-8 lg:pt-6 lg:pb-14">
        {/* 1. Compact Executive Metadata Bar */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#F5F2EB]/[0.1] pb-3.5">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-[#A8A298]">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-[#F5F2EB]/25 bg-[#F5F2EB]/[0.07] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#F5F2EB]">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              <span>{locale === 'id' ? 'Arsip Karya Produksi' : 'Production Works Archive'}</span>
            </span>
            <span className="text-[#F5F2EB] font-semibold">Muhammad Fachrezi</span>
            <span className="text-zinc-600" aria-hidden="true">
              ·
            </span>
            <span className="text-[#D6D0C4]">
              Principal UI/UX Designer &amp; Frontend Engineer
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onExploreWorks}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.04] px-3 py-1.5 text-xs font-semibold text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 hover:bg-[#F5F2EB]/[0.08]"
            >
              <span>{locale === 'id' ? 'Indeks Semua Karya' : 'All Works Index'}</span>
              <ArrowDownRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <div
              role="group"
              aria-label={locale === 'id' ? 'Pilih bahasa' : 'Select language'}
              className="inline-flex items-center gap-1 rounded-xl border border-[#F5F2EB]/15 bg-[#0A0A0D] p-1"
            >
              <button
                type="button"
                onClick={() => onToggleLocale('id')}
                aria-pressed={locale === 'id'}
                className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold transition-all ${
                  locale === 'id'
                    ? 'btn-gold-luxury text-[#040405]'
                    : 'text-[#A8A298] hover:text-[#F5F2EB]'
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => onToggleLocale('en')}
                aria-pressed={locale === 'en'}
                className={`rounded-lg px-2.5 py-1 font-mono text-[11px] font-bold transition-all ${
                  locale === 'en'
                    ? 'btn-gold-luxury text-[#040405]'
                    : 'text-[#A8A298] hover:text-[#F5F2EB]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        {/* 2. Monumental Full-Width Command Showroom */}
        <div className="luxury-surface relative overflow-hidden rounded-3xl border border-[#F5F2EB]/18 p-4 sm:p-6">
          <div
            aria-hidden="true"
            className="gold-hairline pointer-events-none absolute top-0 inset-x-10 h-[1px]"
          />

          {/* Row A: 3-Column Project Deck Matrix */}
          <div className="mb-4 grid grid-cols-1 gap-2.5 md:grid-cols-3">
            {featuredProjects.map((proj, idx) => {
              const selected = idx === safeIndex;
              const modCount = proj.modules?.length ?? 0;
              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-3.5 text-left transition-all focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                    selected
                      ? 'border-[#F5F2EB]/55 bg-[#141419] shadow-[inset_0_1px_0_0_rgba(245,242,235,0.22)]'
                      : 'border-[#F5F2EB]/10 bg-[#0A0A0D]/90 hover:border-[#F5F2EB]/25 hover:bg-[#101015]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded px-2 py-0.5 font-mono text-[11px] font-bold tabular-nums ${
                          selected
                            ? 'btn-gold-luxury text-[#040405]'
                            : 'border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.05] text-[#D6D0C4]'
                        }`}
                      >
                        {proj.indexLabel}
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[#F5F2EB]">
                        {proj.title}
                      </span>
                    </div>
                    <span className="rounded-md border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.04] px-2 py-0.5 font-mono text-[10px] text-[#C8C1B2]">
                      {modCount > 0
                        ? `${modCount} ${locale === 'id' ? 'Modul' : 'Modules'}`
                        : `${proj.hotspots.length} ${locale === 'id' ? 'Pin UI' : 'UI Pins'}`}
                    </span>
                  </div>

                  <p className="mt-2 line-clamp-1 text-xs text-[#A8A298]">
                    {proj.client} · {proj.categoryLabel[locale]}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Row B: Interactive Module Command Strip (When Project Has Modules like Pictomatic or BAST) */}
          {projectModules.length > 0 && activeProject && (
            <div className="mb-4 rounded-2xl border border-[#F5F2EB]/14 bg-[#09090C] p-3">
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#F5F2EB]">
                    {locale === 'id'
                      ? `Eksplorasi ${projectModules.length} Layar Modul ${activeProject.title}`
                      : `Explore ${projectModules.length} ${activeProject.title} Module Screens`}
                  </span>
                  {activeModule && (
                    <span className="hidden sm:inline rounded border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.08] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#F5F2EB]">
                      {activeModule.badge[locale]}
                    </span>
                  )}
                </div>
                <span className="font-mono text-[11px] text-[#A8A298]">
                  {locale === 'id' ? 'Klik tab modul untuk ganti layar' : 'Click module tab to switch screen'}
                </span>
              </div>

              <div
                className={`grid grid-cols-2 gap-1.5 ${
                  projectModules.length === 4
                    ? 'sm:grid-cols-4'
                    : projectModules.length === 5
                      ? 'sm:grid-cols-5'
                      : 'sm:grid-cols-4 lg:grid-cols-7'
                }`}
              >
                {projectModules.map((mod) => {
                  const isModSelected = activeModule?.id === mod.id;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => handleSelectModule(mod.id)}
                      className={`rounded-xl px-3 py-2 text-left font-mono text-[11px] transition-all ${
                        isModSelected
                          ? 'btn-gold-luxury text-[#040405] font-bold shadow-md'
                          : 'border border-[#F5F2EB]/10 bg-[#111116] text-[#C8C1B2] hover:border-[#F5F2EB]/35 hover:text-[#F5F2EB]'
                      }`}
                    >
                      <span className="block truncate">{mod.tabLabel[locale]}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Row C: Full-Width Uncropped Screen Stage with Live Interactive UI Pins */}
          <div className="overflow-hidden rounded-2xl border border-[#F5F2EB]/20 bg-[#060608] shadow-2xl">
            {/* Browser Chrome Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F5F2EB]/[0.1] bg-[#0F0F14] px-3.5 py-2.5 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EB]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EB]/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F5F2EB]/75" />
                </div>
                <div className="flex items-center gap-2 rounded-md border border-[#F5F2EB]/12 bg-[#070709] px-2.5 py-1 font-mono text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5F2EB]" />
                  <span className="text-[#F5F2EB]">
                    {activeProject?.slug}
                    {activeModule ? `/${activeModule.id}` : ''}.app
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {currentHotspots.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowHeroPins((prev) => !prev)}
                    aria-pressed={showHeroPins}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#F5F2EB]/15 bg-[#15151C] px-2.5 py-1 font-mono text-[11px] font-medium text-[#E6E0D4] transition-colors hover:border-[#F5F2EB]/40"
                  >
                    {showHeroPins ? (
                      <EyeOff className="h-3 w-3 text-[#F5F2EB]" aria-hidden="true" />
                    ) : (
                      <Eye className="h-3 w-3 text-[#A8A298]" aria-hidden="true" />
                    )}
                    <span>
                      {showHeroPins
                        ? locale === 'id'
                          ? `Pin UI Aktif (${currentHotspots.length})`
                          : `UI Pins On (${currentHotspots.length})`
                        : locale === 'id'
                          ? 'Tampilkan Pin UI'
                          : 'Show UI Pins'}
                    </span>
                  </button>
                )}

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => handleCycle(-1)}
                    aria-label={locale === 'id' ? 'Proyek sebelumnya' : 'Previous project'}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[#F5F2EB]/15 bg-[#15151C] text-[#F5F2EB] hover:border-[#F5F2EB]/45"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCycle(1)}
                    aria-label={locale === 'id' ? 'Proyek berikutnya' : 'Next project'}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[#F5F2EB]/15 bg-[#15151C] text-[#F5F2EB] hover:border-[#F5F2EB]/45"
                  >
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>

                {activeProject && (
                  <button
                    type="button"
                    onClick={() => onInspectProject(activeProject, activeModule?.id)}
                    className="btn-gold-luxury inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-[11px] font-bold text-[#040405]"
                  >
                    <Eye className="h-3 w-3" aria-hidden="true" />
                    <span>{locale === 'id' ? 'Layar Penuh & Detail' : 'Full Screen & Details'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Uncropped Full Screenshot + Interactive Numbered Pins */}
            <div className="relative w-full bg-[#050507]">
              <AnimatePresence mode="wait">
                {activeProject && (
                  <motion.div
                    key={`${activeProject.id}-${activeModule?.id ?? 'main'}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="relative w-full"
                  >
                    {displayImageUrl && !imageErrorMap[displayImageUrl] ? (
                      <img
                        src={displayImageUrl}
                        alt={`${activeProject.title} — ${displayTitle}`}
                        referrerPolicy="no-referrer"
                        onError={() =>
                          setImageErrorMap((prev) => ({ ...prev, [displayImageUrl]: true }))
                        }
                        onClick={() => onInspectProject(activeProject, activeModule?.id)}
                        className="block h-auto w-full cursor-pointer object-contain select-none"
                      />
                    ) : (
                      <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 bg-[#101014] p-8 text-center">
                        <Layers className="h-8 w-8 text-[#F5F2EB]" aria-hidden="true" />
                        <p className="font-display text-lg font-semibold text-[#F5F2EB]">
                          {activeProject.title}
                        </p>
                      </div>
                    )}

                    {/* Interactive Hotspot Pins Directly on Hero Screen */}
                    {showHeroPins &&
                      currentHotspots.map((spot, idx) => {
                        const isPinSelected = activeHotspot?.id === spot.id;
                        return (
                          <button
                            key={spot.id}
                            type="button"
                            onClick={() => setActiveHeroHotspotId(spot.id)}
                            aria-label={`Pin ${idx + 1}: ${spot.title[locale]}`}
                            aria-pressed={isPinSelected}
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full font-mono text-xs font-bold shadow-xl transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-white ${
                              isPinSelected
                                ? 'scale-110 bg-[#F5F2EB] text-[#040405] ring-4 ring-[#F5F2EB]/40'
                                : 'bg-[#040405]/90 text-[#F5F2EB] ring-2 ring-[#F5F2EB]/85 hover:bg-[#F5F2EB] hover:text-[#040405]'
                            }`}
                          >
                            {isPinSelected && (
                              <span
                                aria-hidden="true"
                                className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-[#F5F2EB]"
                              />
                            )}
                            <span className="relative z-10">{idx + 1}</span>
                          </button>
                        );
                      })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Compact Live Hotspot Callout Bar Directly Under the Screenshot */}
            {currentHotspots.length > 0 && activeHotspot && (
              <div className="flex flex-col justify-between gap-3 border-t border-[#F5F2EB]/12 bg-[#0B0B10] px-4 py-3 lg:flex-row lg:items-center">
                <div className="flex items-start gap-3 sm:items-center">
                  <span className="btn-gold-luxury inline-flex h-6 shrink-0 items-center gap-1 rounded-full px-2.5 font-mono text-[11px] font-bold text-[#040405]">
                    <Crosshair className="h-3 w-3" aria-hidden="true" />
                    <span>
                      PIN 0{currentHotspots.findIndex((h) => h.id === activeHotspot.id) + 1}
                    </span>
                  </span>
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-[#F5F2EB]">{activeHotspot.title[locale]}: </span>
                    <span className="text-[#C8C1B2]">{activeHotspot.description[locale]}</span>
                  </div>
                </div>

                {/* Quick Pin Number Selector Pills */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="mr-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8C867B]">
                    {locale === 'id' ? 'Pilih Pin:' : 'Inspect Pin:'}
                  </span>
                  {currentHotspots.map((spot, idx) => {
                    const isPinSelected = activeHotspot.id === spot.id;
                    return (
                      <button
                        key={spot.id}
                        type="button"
                        onClick={() => setActiveHeroHotspotId(spot.id)}
                        className={`inline-flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold transition-all ${
                          isPinSelected
                            ? 'btn-gold-luxury text-[#040405]'
                            : 'border border-[#F5F2EB]/15 bg-[#14141B] text-[#C8C1B2] hover:border-[#F5F2EB]/40 hover:text-[#F5F2EB]'
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Row D: High-Density 12-Column Architectural Specification Bento Below the Screen */}
          {activeProject && (
            <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* Left 5 Columns: Core Module / Project Identity, Summary & Metrics */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#F5F2EB]/14 bg-[#0A0A0E] p-5 lg:col-span-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="rounded border border-[#F5F2EB]/30 bg-[#F5F2EB]/10 px-2 py-0.5 font-mono text-[11px] font-bold text-[#F5F2EB]">
                      {activeProject.indexLabel} · {activeProject.title}
                    </span>
                    {activeModule && (
                      <span className="rounded border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.05] px-2 py-0.5 font-mono text-[11px] text-[#E6E0D4]">
                        {activeModule.tabLabel[locale]}
                      </span>
                    )}
                    <span className="font-mono text-[11px] text-[#A8A298]">
                      {activeProject.client}
                    </span>
                  </div>

                  <h2 className="mt-2.5 font-display text-xl font-bold leading-snug tracking-tight text-[#F5F2EB] sm:text-2xl">
                    {displayTitle}
                  </h2>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#C8C1B2]">
                    {displayDescription}
                  </p>
                </div>

                <div className="mt-5 space-y-3.5 border-t border-[#F5F2EB]/[0.08] pt-4">
                  {activeProject.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {activeProject.metrics.map((m) => (
                        <div
                          key={m.label.id}
                          className="rounded-xl border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] px-3 py-2"
                        >
                          <p className="font-mono text-sm font-bold tabular-nums text-[#F5F2EB]">
                            {m.value}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-[#A8A298]">
                            {m.label[locale]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {activeProject.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] px-2 py-0.5 font-mono text-[10px] text-[#D6D0C4]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => onInspectProject(activeProject, activeModule?.id)}
                      className="btn-gold-luxury inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold text-[#040405]"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>
                        {locale === 'id' ? 'Buka Studi Kasus Lengkap' : 'Open Full Case Study'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right 7 Columns: Structured 3-Point Functional Specification Breakdown */}
              <div className="flex flex-col justify-between rounded-2xl border border-[#F5F2EB]/14 bg-[#0A0A0E] p-5 lg:col-span-7">
                <div>
                  <div className="mb-3 flex items-center justify-between border-b border-[#F5F2EB]/[0.08] pb-2.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-[#F5F2EB]">
                      {activeModule
                        ? locale === 'id'
                          ? `Spesifikasi Fungsi & Kapabilitas — ${activeModule.tabLabel[locale]}`
                          : `Functional Specification — ${activeModule.tabLabel[locale]}`
                        : locale === 'id'
                          ? `Spesifikasi Arsitektur — ${activeProject.title}`
                          : `Architectural Specification — ${activeProject.title}`}
                    </span>
                    <span className="font-mono text-[11px] text-[#A8A298]">
                      {capabilityItems.length}{' '}
                      {locale === 'id' ? 'Poin Kapabilitas Inti' : 'Core Capabilities'}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {capabilityItems.map((item, idx) => {
                      const { lead, rest } = splitLeadText(item[locale]);
                      return (
                        <div
                          key={idx}
                          className="flex items-start gap-3 rounded-xl border border-[#F5F2EB]/[0.08] bg-[#101016] p-3.5 text-xs sm:text-sm leading-relaxed"
                        >
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 font-mono text-[11px] font-bold text-[#F5F2EB]">
                            0{idx + 1}
                          </span>
                          <p className="text-[#D6D0C4]">
                            {lead ? (
                              <>
                                <strong className="font-semibold text-[#F5F2EB]">{lead}:</strong>{' '}
                                {rest}
                              </>
                            ) : (
                              rest
                            )}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Problem vs Solution Strip inside Right Panel */}
                <div className="mt-3.5 grid grid-cols-1 gap-2.5 border-t border-[#F5F2EB]/[0.08] pt-3.5 sm:grid-cols-2">
                  <div className="rounded-xl border border-[#F5F2EB]/[0.07] bg-[#F5F2EB]/[0.02] p-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#A8A298]">
                      {locale === 'id' ? 'Tantangan Operasional' : 'Operational Challenge'}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[#C8C1B2]">
                      {activeProject.challenge[locale]}
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#F5F2EB]/[0.07] bg-[#F5F2EB]/[0.02] p-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#F5F2EB]">
                      {locale === 'id' ? 'Solusi Rekayasa' : 'Engineered Solution'}
                    </span>
                    <p className="mt-1 text-xs leading-relaxed text-[#C8C1B2]">
                      {activeProject.solution[locale]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. High-Density 4-Column Executive Proof Strip */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="luxury-surface-subtle group relative overflow-hidden rounded-2xl border border-[#F5F2EB]/12 p-4 transition-colors duration-200 hover:border-[#F5F2EB]/35"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold text-[#C8C1B2]">
                  {metric.index}
                </span>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#F5F2EB]/60" aria-hidden="true" />
              </div>
              <p className="mt-2 font-mono text-xl font-bold tracking-tight tabular-nums text-[#F5F2EB] sm:text-2xl">
                {metric.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#F5F2EB]">
                {metric.label}
              </p>
              <p className="mt-0.5 text-[11px] text-[#A8A298]">{metric.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
