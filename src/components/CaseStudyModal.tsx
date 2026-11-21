import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  EyeOff,
  Layers,
  X,
  ZoomIn,
  ZoomOut,
  Sparkles,
  LayoutGrid,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Locale, ProjectItem } from '../types/portfolio';
import { cycleIndex } from '../utils/portfolioLogic';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  initialModuleId?: string | null;
  locale: Locale;
  onClose: () => void;
  onNavigate: (delta: number) => void;
  totalProjects: number;
}

export function CaseStudyModal({
  project,
  initialModuleId,
  locale,
  onClose,
  onNavigate,
  totalProjects,
}: CaseStudyModalProps) {
  const [activeModuleId, setActiveModuleId] = useState<string | null>(null);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
  const [showHotspots, setShowHotspots] = useState(true);
  const [zoomed, setZoomed] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const modules = project?.modules ?? [];
  const activeModuleIndex = modules.findIndex((m) => m.id === activeModuleId);
  const activeModule =
    activeModuleIndex >= 0 ? modules[activeModuleIndex] : modules[0] ?? null;

  const activeImageUrl = activeModule ? activeModule.imageUrl : project?.imageUrl ?? '';
  const currentHotspots = activeModule ? activeModule.hotspots : project?.hotspots ?? [];

  // Sync initial module and first hotspot when project or initialModuleId changes
  useEffect(() => {
    if (project) {
      const targetModule =
        project.modules?.find((m) => m.id === initialModuleId) ??
        project.modules?.[0] ??
        null;
      setActiveModuleId(targetModule?.id ?? null);
      const initialSpots = targetModule ? targetModule.hotspots : project.hotspots;
      setActiveHotspotId(initialSpots[0]?.id ?? null);
      setZoomed(false);
      setImgFailed(false);
    }
  }, [project, initialModuleId]);

  const handleSelectModule = (moduleId: string, scrollTop = false) => {
    if (!project?.modules) return;
    const found = project.modules.find((m) => m.id === moduleId);
    if (!found) return;
    setActiveModuleId(found.id);
    setActiveHotspotId(found.hotspots[0]?.id ?? null);
    setZoomed(false);
    setImgFailed(false);
    if (scrollTop && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCycleModule = (delta: number) => {
    if (modules.length <= 1) return;
    const currentIdx = activeModuleIndex >= 0 ? activeModuleIndex : 0;
    const nextIdx = cycleIndex(currentIdx, modules.length, delta);
    handleSelectModule(modules[nextIdx].id);
  };

  // Escape & Arrow keyboard navigation
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNavigate(1);
      } else if (event.key === 'ArrowLeft') {
        onNavigate(-1);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose, onNavigate]);

  const activeHotspot =
    currentHotspots.find((h) => h.id === activeHotspotId) ?? currentHotspots[0] ?? null;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 backdrop-blur-xl sm:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-surface relative flex max-h-[92vh] w-full max-w-[1280px] flex-col overflow-hidden rounded-3xl border border-[#F5F2EB]/20 bg-[#09090C]"
          >
            {/* Top specular broken-white line */}
            <div
              aria-hidden="true"
              className="gold-hairline pointer-events-none absolute top-0 inset-x-12 h-[1px]"
            />

            {/* Modal Top Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F5F2EB]/[0.09] bg-[#0C0C10]/95 px-5 py-4 sm:px-7">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#A8A298]">
                  <span className="rounded border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-2 py-0.5 font-mono text-[11px] font-bold tabular-nums text-[#F5F2EB]">
                    {project.indexLabel}
                  </span>
                  <span className="font-medium text-[#E6E0D4]">
                    {project.categoryLabel[locale]}
                  </span>
                  <span className="text-zinc-600" aria-hidden="true">
                    ·
                  </span>
                  <span>{project.client}</span>
                  <span className="text-zinc-600" aria-hidden="true">
                    ·
                  </span>
                  <span className="font-mono tabular-nums text-[#A8A298]">{project.year}</span>
                </div>
                <h2
                  id="case-study-title"
                  className="mt-1 truncate font-display text-xl font-bold text-[#F5F2EB] sm:text-2xl"
                >
                  {project.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {currentHotspots.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowHotspots((prev) => !prev)}
                    aria-pressed={showHotspots}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#F5F2EB]/15 bg-[#131318] px-3.5 py-2 text-xs font-medium text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                  >
                    {showHotspots ? (
                      <EyeOff className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                    ) : (
                      <Eye className="h-3.5 w-3.5 text-[#A8A298]" aria-hidden="true" />
                    )}
                    <span className="hidden sm:inline">
                      {showHotspots
                        ? locale === 'id'
                          ? 'Sembunyikan Pin'
                          : 'Hide Pins'
                        : locale === 'id'
                          ? 'Tampilkan Pin'
                          : 'Show Pins'}
                    </span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setZoomed((prev) => !prev)}
                  aria-pressed={zoomed}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#F5F2EB]/15 bg-[#131318] px-3.5 py-2 text-xs font-medium text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                >
                  {zoomed ? (
                    <ZoomOut className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  ) : (
                    <ZoomIn className="h-3.5 w-3.5 text-[#A8A298]" aria-hidden="true" />
                  )}
                  <span>{zoomed ? '100%' : 'Zoom 1.5x'}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label={locale === 'id' ? 'Tutup studi kasus' : 'Close case study'}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5F2EB]/15 bg-[#131318] text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/50 hover:text-white focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable Body */}
            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
              {/* Multi-Module Interactive Switcher Bar (when project has modules) */}
              {modules.length > 0 && activeModule && (
                <div className="mb-6 rounded-2xl border border-[#F5F2EB]/12 bg-[#0C0C10] p-3.5 sm:p-4">
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <LayoutGrid className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F5F2EB]">
                        {locale === 'id'
                          ? `Eksplorasi Modul Antarmuka (${
                              (activeModuleIndex >= 0 ? activeModuleIndex : 0) + 1
                            }/${modules.length})`
                          : `Interactive Module Explorer (${
                              (activeModuleIndex >= 0 ? activeModuleIndex : 0) + 1
                            }/${modules.length})`}
                      </span>
                      <span className="hidden sm:inline text-zinc-600" aria-hidden="true">
                        ·
                      </span>
                      <span className="hidden sm:inline rounded-md border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.07] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#F5F2EB]">
                        {activeModule.badge[locale]}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => handleCycleModule(-1)}
                        aria-label={locale === 'id' ? 'Modul sebelumnya' : 'Previous module'}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#F5F2EB]/15 bg-[#15151B] text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCycleModule(1)}
                        aria-label={locale === 'id' ? 'Modul berikutnya' : 'Next module'}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#F5F2EB]/15 bg-[#15151B] text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40"
                      >
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div
                    role="tablist"
                    aria-label={locale === 'id' ? 'Pilih layar modul' : 'Select module screen'}
                    className="flex flex-wrap items-center gap-1.5"
                  >
                    {modules.map((mod) => {
                      const isSelected = activeModule.id === mod.id;
                      return (
                        <button
                          key={mod.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => handleSelectModule(mod.id)}
                          className={`relative rounded-xl px-3.5 py-2 text-xs font-medium transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                            isSelected
                              ? 'btn-gold-luxury text-[#050506] font-bold shadow-md'
                              : 'border border-[#F5F2EB]/10 bg-[#131318] text-[#C8C1B2] hover:border-[#F5F2EB]/30 hover:text-[#F5F2EB]'
                          }`}
                        >
                          {mod.tabLabel[locale]}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Interactive Screenshot Stage + Side-by-Side Live Hotspot Inspector */}
              <div className="grid grid-cols-1 items-start gap-6 border-b border-[#F5F2EB]/[0.09] pb-8 lg:grid-cols-12">
                <div
                  className={`overflow-hidden rounded-2xl border border-[#F5F2EB]/15 bg-[#060608] shadow-2xl ${
                    currentHotspots.length > 0 || activeModule ? 'lg:col-span-8' : 'lg:col-span-12'
                  }`}
                >
                  <div className="overflow-auto">
                    <div
                      className={`relative mx-auto transition-transform duration-300 ease-out origin-top-left ${
                        zoomed ? 'w-[150%]' : 'w-full'
                      }`}
                    >
                      {activeImageUrl && !imgFailed ? (
                        <img
                          key={activeImageUrl}
                          src={activeImageUrl}
                          alt={
                            activeModule
                              ? `${project.title} — ${activeModule.title[locale]}`
                              : `${project.title} full interface screenshot`
                          }
                          referrerPolicy="no-referrer"
                          onError={() => setImgFailed(true)}
                          className="block h-auto w-full select-none"
                        />
                      ) : (
                        <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 bg-[#111115] p-10 text-center">
                          <Layers className="h-10 w-10 text-[#F5F2EB]" aria-hidden="true" />
                          <p className="font-display text-xl font-semibold text-[#F5F2EB]">
                            {project.title}
                          </p>
                        </div>
                      )}

                      {/* Interactive UI Hotspot Pins with Pulsing Broken-White Halo */}
                      {showHotspots &&
                        currentHotspots.map((spot, idx) => {
                          const isSelected = activeHotspot?.id === spot.id;
                          return (
                            <button
                              key={spot.id}
                              type="button"
                              onClick={() => setActiveHotspotId(spot.id)}
                              aria-label={`Pin ${idx + 1}: ${spot.title[locale]}`}
                              aria-pressed={isSelected}
                              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                              className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full font-mono text-xs font-bold shadow-lg transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                                isSelected
                                  ? 'scale-110 bg-[#F5F2EB] text-[#050506] ring-4 ring-[#F5F2EB]/40'
                                  : 'bg-[#050506]/90 text-[#F5F2EB] ring-2 ring-[#F5F2EB]/80 hover:bg-[#F5F2EB] hover:text-[#050506]'
                              }`}
                            >
                              {isSelected && (
                                <span
                                  aria-hidden="true"
                                  className="animate-pulse-ring pointer-events-none absolute inset-0 rounded-full border-2 border-[#F5F2EB]"
                                />
                              )}
                              <span className="relative z-10">{idx + 1}</span>
                            </button>
                          );
                        })}
                    </div>
                  </div>

                  {/* Active Module Description Banner Directly Below Screenshot */}
                  {activeModule && (
                    <div className="border-t border-[#F5F2EB]/[0.09] bg-[#0A0A0E] p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-md border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-[#F5F2EB]">
                          {activeModule.tabLabel[locale]}
                        </span>
                        <span className="rounded-md border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-[#D6D0C4]">
                          {activeModule.badge[locale]}
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-display text-lg font-bold text-[#F5F2EB] sm:text-xl">
                        {activeModule.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#C8C1B2]">
                        {activeModule.description[locale]}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {activeModule.capabilities.map((cap, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 rounded-xl border border-[#F5F2EB]/[0.08] bg-[#F5F2EB]/[0.02] px-3.5 py-2.5 text-xs leading-relaxed text-[#E6E0D4]"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0 text-[#F5F2EB]"
                              aria-hidden="true"
                            />
                            <span>{cap[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Live Side-by-Side Hotspot Breakdown Panel */}
                {currentHotspots.length > 0 && activeHotspot && (
                  <div className="flex flex-col justify-between gap-4 lg:col-span-4">
                    <div className="luxury-surface-subtle relative overflow-hidden rounded-2xl border border-[#F5F2EB]/25 p-5">
                      <div
                        aria-hidden="true"
                        className="gold-hairline pointer-events-none absolute top-0 inset-x-6 h-[1px]"
                      />
                      <p className="inline-flex items-center gap-1.5 font-mono text-xs text-[#F5F2EB]">
                        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{locale === 'id' ? 'Sorotan Titik UI' : 'Active UI Annotation'}</span>
                      </p>
                      <h3 className="mt-2 font-display text-lg font-bold text-[#F5F2EB]">
                        {activeHotspot.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#C8C1B2]">
                        {activeHotspot.description[locale]}
                      </p>
                    </div>

                    <div>
                      <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#A8A298]">
                        {locale === 'id'
                          ? 'Inspektor Fitur Antarmuka'
                          : 'Interface Feature Inspector'}
                      </p>
                      <div className="flex flex-col gap-1.5">
                        {currentHotspots.map((spot, idx) => {
                          const isSelected = activeHotspot.id === spot.id;
                          return (
                            <button
                              key={spot.id}
                              type="button"
                              onClick={() => setActiveHotspotId(spot.id)}
                              className={`flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-left text-xs transition-all focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                                isSelected
                                  ? 'border-[#F5F2EB]/40 bg-[#F5F2EB]/[0.08] text-[#F5F2EB] font-semibold'
                                  : 'border-transparent text-[#A8A298] hover:bg-[#F5F2EB]/[0.04] hover:text-[#F5F2EB]'
                              }`}
                            >
                              <span
                                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold ${
                                  isSelected
                                    ? 'btn-gold-luxury text-[#050506]'
                                    : 'bg-[#F5F2EB]/10 text-[#D6D0C4]'
                                }`}
                              >
                                {idx + 1}
                              </span>
                              <span className="truncate">{spot.title[locale]}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Comprehensive Deep-Dive Breakdown of All Modules (when project has modules) */}
              {modules.length > 0 && (
                <div className="mt-8 border-b border-[#F5F2EB]/[0.09] pb-8">
                  <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#D6D0C4]">
                        {locale === 'id'
                          ? 'Dokumentasi Arsitektur Modul Lengkap'
                          : 'Complete Module Architecture Breakdown'}
                      </span>
                      <h3 className="mt-1 font-display text-xl font-bold text-[#F5F2EB] sm:text-2xl">
                        {locale === 'id'
                          ? `7 Modul Inti Ekosistem ${project.title}`
                          : `7 Core Modules of the ${project.title} Ecosystem`}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A8A298]">
                      {locale === 'id'
                        ? 'Klik kartu modul mana saja untuk menginspeksi tangkapan layar penuh di atas.'
                        : 'Click any module card to inspect its interactive screen above.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {modules.map((mod) => {
                      const isCurrent = activeModule?.id === mod.id;
                      return (
                        <div
                          key={mod.id}
                          className={`group flex flex-col justify-between rounded-2xl border p-5 transition-all ${
                            isCurrent
                              ? 'border-[#F5F2EB]/45 bg-[#121217] shadow-lg'
                              : 'border-[#F5F2EB]/[0.09] bg-[#0C0C10] hover:border-[#F5F2EB]/25'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <span className="rounded-md border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-[#F5F2EB]">
                                {mod.tabLabel[locale]}
                              </span>
                              <span className="rounded-full border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-[#D6D0C4]">
                                {mod.badge[locale]}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleSelectModule(mod.id, true)}
                              className="mt-3 block w-full overflow-hidden rounded-xl border border-[#F5F2EB]/12 bg-[#070709] text-left"
                            >
                              <img
                                src={mod.imageUrl}
                                alt={mod.title[locale]}
                                referrerPolicy="no-referrer"
                                className="block h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                              />
                            </button>

                            <h4 className="mt-3.5 font-display text-base font-bold text-[#F5F2EB] sm:text-lg">
                              {mod.title[locale]}
                            </h4>
                            <p className="mt-2 text-xs leading-relaxed text-[#C8C1B2]">
                              {mod.description[locale]}
                            </p>

                            <ul className="mt-3.5 space-y-1.5">
                              {mod.capabilities.map((cap, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs leading-relaxed text-[#D6D0C4]"
                                >
                                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5F2EB]" />
                                  <span>{cap[locale]}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-4 border-t border-[#F5F2EB]/[0.07] pt-3">
                            <button
                              type="button"
                              onClick={() => handleSelectModule(mod.id, true)}
                              className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                                isCurrent
                                  ? 'text-[#F5F2EB]'
                                  : 'text-[#C8C1B2] hover:text-[#F5F2EB]'
                              }`}
                            >
                              <span>
                                {isCurrent
                                  ? locale === 'id'
                                    ? 'Sedang Ditampilkan di Kanvas Utama'
                                    : 'Currently Active on Main Canvas'
                                  : locale === 'id'
                                    ? 'Inspeksi Layar Modul Ini'
                                    : 'Inspect This Module Screen'}
                              </span>
                              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Narrative Architecture Breakdown */}
              <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-7">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#F5F2EB]">
                      {locale === 'id' ? 'Tantangan' : 'The Challenge'}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#C8C1B2]">
                      {project.challenge[locale]}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display text-lg font-bold text-[#F5F2EB]">
                      {locale === 'id' ? 'Pendekatan & Solusi' : 'Approach & Solution'}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#C8C1B2]">
                      {project.solution[locale]}
                    </p>
                  </div>

                  {project.highlights.length > 0 && (
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#F5F2EB]">
                        {locale === 'id' ? 'Detail Utama' : 'Key Highlights'}
                      </h3>
                      <ul className="mt-3 space-y-2.5 text-sm text-[#E6E0D4]">
                        {project.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 rounded-xl border border-[#F5F2EB]/[0.08] bg-[#F5F2EB]/[0.02] p-3"
                          >
                            <span className="font-mono text-xs font-bold text-[#F5F2EB]">
                              0{idx + 1}.
                            </span>
                            <span>{item[locale]}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right Metadata Column (Luxury Specification Sheet) */}
                <div className="space-y-6 border-t border-[#F5F2EB]/[0.09] pt-6 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  {project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label.id}
                          className="rounded-2xl border border-[#F5F2EB]/[0.09] bg-[#F5F2EB]/[0.02] p-3.5"
                        >
                          <p className="font-mono text-lg font-bold tabular-nums text-[#F5F2EB]">
                            {m.value}
                          </p>
                          <p className="mt-1 text-xs text-[#A8A298]">{m.label[locale]}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <dl className="space-y-4 rounded-2xl border border-[#F5F2EB]/[0.09] bg-[#F5F2EB]/[0.02] p-5 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8C867B]">
                        {locale === 'id' ? 'Peran' : 'Role'}
                      </dt>
                      <dd className="mt-1 font-semibold text-[#F5F2EB]">{project.role[locale]}</dd>
                    </div>
                    <div className="border-t border-[#F5F2EB]/[0.07] pt-3">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8C867B]">
                        {locale === 'id' ? 'Klien / Produk' : 'Client / Product'}
                      </dt>
                      <dd className="mt-1 font-semibold text-[#F5F2EB]">{project.client}</dd>
                    </div>
                    <div className="border-t border-[#F5F2EB]/[0.07] pt-3">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8C867B]">
                        {locale === 'id' ? 'Teknologi & Craft' : 'Technology & Craft'}
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.04] px-2.5 py-0.5 font-mono text-xs text-[#E6E0D4]"
                          >
                            {tech}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold-luxury inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold text-[#050506]"
                    >
                      <span>{locale === 'id' ? 'Kunjungi Situs' : 'Visit Live Site'}</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer: Next / Previous Project Cycling */}
            {totalProjects > 1 && (
              <div className="flex items-center justify-between border-t border-[#F5F2EB]/[0.09] bg-[#070709] px-5 py-3.5 sm:px-7">
                <button
                  type="button"
                  onClick={() => onNavigate(-1)}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.03] px-3.5 py-2 text-sm font-medium text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                >
                  <ArrowLeft className="h-4 w-4 text-[#F5F2EB]" aria-hidden="true" />
                  <span>{locale === 'id' ? 'Proyek Sebelumnya' : 'Previous Project'}</span>
                </button>

                <span className="hidden sm:inline font-mono text-[11px] text-[#8C867B]">
                  ESC · ← / →
                </span>

                <button
                  type="button"
                  onClick={() => onNavigate(1)}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.03] px-3.5 py-2 text-sm font-medium text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                >
                  <span>{locale === 'id' ? 'Proyek Berikutnya' : 'Next Project'}</span>
                  <ArrowRight className="h-4 w-4 text-[#F5F2EB]" aria-hidden="true" />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
