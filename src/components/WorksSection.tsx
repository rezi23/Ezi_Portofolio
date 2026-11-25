import { useState, type MouseEvent } from 'react';
import {
  ArrowUpRight,
  LayoutGrid,
  List,
  Plus,
  Search,
  Layers,
  Trash2,
  Crosshair,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Locale, ProjectCategory, ProjectItem, ViewMode } from '../types/portfolio';
import { countProjectsByCategory, filterProjects } from '../utils/portfolioLogic';

interface WorksSectionProps {
  locale: Locale;
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem, moduleId?: string) => void;
  onOpenAddModal: () => void;
  onDeleteCustomProject: (id: string) => void;
}

interface BentoCardProps {
  project: ProjectItem;
  locale: Locale;
  isWide: boolean;
  onSelect: (moduleId?: string) => void;
  onDelete?: () => void;
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

function BentoCard({ project, locale, isWide, onSelect, onDelete }: BentoCardProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });
  const [imgFailed, setImgFailed] = useState(false);
  const [previewModuleId, setPreviewModuleId] = useState<string | null>(
    project.modules?.[0]?.id ?? null
  );

  const activeModule =
    project.modules?.find((m) => m.id === previewModuleId) ?? project.modules?.[0] ?? null;
  const displayImageUrl = activeModule ? activeModule.imageUrl : project.imageUrl;
  const activeCapabilities = activeModule ? activeModule.capabilities : project.highlights;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
      className={`luxury-surface group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F5F2EB]/15 transition-all duration-300 hover:border-[#F5F2EB]/45 ${
        isWide ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
    >
      {/* Top specular broken-white hairline */}
      <div
        aria-hidden="true"
        className="gold-hairline pointer-events-none absolute top-0 inset-x-10 h-[1px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Pointer-following warm broken-white spotlight sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, rgba(245, 242, 235, 0.08), transparent 60%)`,
        }}
      />

      {/* 1. Card Top Header Bar: Index, Title, Client & Metrics */}
      <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-[#F5F2EB]/[0.09] bg-[#0B0B0F] px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="btn-gold-luxury rounded-lg px-2.5 py-0.5 font-mono text-xs font-bold tabular-nums text-[#040405]">
            {project.indexLabel}
          </span>
          <h3 className="font-display text-lg font-bold tracking-tight text-[#F5F2EB] sm:text-xl">
            <button
              type="button"
              onClick={() => onSelect(activeModule?.id)}
              className="text-left transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
            >
              {project.title}
            </button>
          </h3>
          <span className="rounded-md border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.04] px-2 py-0.5 font-mono text-[11px] text-[#D6D0C4]">
            {project.client}
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-[#A8A298]">
            · {project.categoryLabel[locale]} ({project.year})
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.metrics.map((m) => (
            <div
              key={m.label.id}
              className="hidden sm:flex items-center gap-1.5 rounded-lg border border-[#F5F2EB]/12 bg-[#121218] px-2.5 py-1 text-[11px]"
            >
              <span className="font-mono font-bold text-[#F5F2EB]">{m.value}</span>
              <span className="text-[#A8A298]">{m.label[locale]}</span>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onSelect(activeModule?.id)}
            className="btn-gold-luxury inline-flex items-center gap-1 rounded-xl px-3.5 py-1.5 text-xs font-bold text-[#040405]"
          >
            <span>{locale === 'id' ? 'Studi Kasus' : 'Case Study'}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* 2. Interactive Module Switcher Bar (When Project Has Modules like Pictomatic) */}
      {project.modules && project.modules.length > 0 && (
        <div className="relative border-b border-[#F5F2EB]/[0.08] bg-[#08080B] px-5 py-3 sm:px-6">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-[11px]">
            <span className="font-mono font-bold uppercase tracking-[0.14em] text-[#F5F2EB]">
              {locale === 'id'
                ? `Pilih Layar Modul (${project.modules.length} Modul Operasional & Kreatif)`
                : `Select Module Screen (${project.modules.length} Operational & Creative Modules)`}
            </span>
            {activeModule && (
              <span className="rounded border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.06] px-2 py-0.5 font-mono text-[10px] text-[#E6E0D4]">
                {activeModule.badge[locale]}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.modules.map((mod) => {
              const isModActive = activeModule?.id === mod.id;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => {
                    setPreviewModuleId(mod.id);
                    setImgFailed(false);
                  }}
                  className={`rounded-lg px-2.5 py-1.5 font-mono text-[11px] transition-all ${
                    isModActive
                      ? 'btn-gold-luxury text-[#040405] font-bold shadow-sm'
                      : 'border border-[#F5F2EB]/10 bg-[#121217] text-[#C8C1B2] hover:border-[#F5F2EB]/35 hover:text-[#F5F2EB]'
                  }`}
                >
                  {mod.tabLabel[locale]}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 3. Full-Width Uncropped Media Stage */}
      <div className="relative p-4 pb-0 sm:p-5 sm:pb-0">
        <button
          type="button"
          onClick={() => onSelect(activeModule?.id)}
          aria-label={
            locale === 'id'
              ? `Buka detail karya ${project.title}`
              : `Open project details for ${project.title}`
          }
          className="relative block w-full overflow-hidden rounded-2xl border border-[#F5F2EB]/16 bg-[#060608] text-left shadow-2xl focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
        >
          {/* Minimal Atelier Window Header Bar */}
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/[0.08] bg-[#101015] px-3.5 py-2 text-[11px] text-[#A8A298]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F5F2EB]" />
              <span className="font-mono text-[#E6E0D4]">
                {project.slug}
                {activeModule ? `/${activeModule.id}` : ''}.app
              </span>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#F5F2EB]">
              <Crosshair className="h-3 w-3" aria-hidden="true" />
              <span>
                {activeModule ? activeModule.hotspots.length : project.hotspots.length}{' '}
                {locale === 'id' ? 'Titik Pin UI' : 'UI Hotspot Pins'}
              </span>
            </span>
          </div>

          <div className="relative w-full overflow-hidden bg-[#050507]">
            {displayImageUrl && !imgFailed ? (
              <img
                key={displayImageUrl}
                src={displayImageUrl}
                alt={`${project.title} — ${
                  activeModule ? activeModule.title[locale] : project.subtitle[locale]
                }`}
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="block h-auto w-full object-contain"
              />
            ) : (
              <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 bg-[#111116] p-6 text-center">
                <Layers className="h-7 w-7 text-[#F5F2EB]" aria-hidden="true" />
                <span className="font-display text-base font-semibold text-[#F5F2EB]">
                  {project.title}
                </span>
              </div>
            )}
          </div>
        </button>
      </div>

      {/* 4. Dense, Complete, Structured Explanation Below Screenshot */}
      <div className="relative flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div>
          <p className="font-display text-base font-bold text-[#F5F2EB] sm:text-lg">
            {activeModule ? activeModule.title[locale] : project.subtitle[locale]}
          </p>

          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#C8C1B2]">
            {activeModule ? activeModule.description[locale] : project.summary[locale]}
          </p>

          {/* Compact Capability Breakdown List */}
          {activeCapabilities.length > 0 && (
            <div
              className={`mt-4 grid grid-cols-1 gap-2.5 ${
                isWide ? 'md:grid-cols-3' : ''
              }`}
            >
              {activeCapabilities.slice(0, 3).map((cap, idx) => {
                const { lead, rest } = splitLeadText(cap[locale]);
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-xl border border-[#F5F2EB]/[0.08] bg-[#0D0D12] p-3 text-xs leading-relaxed text-[#D6D0C4]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F5F2EB]"
                      aria-hidden="true"
                    />
                    <span>
                      {lead ? (
                        <>
                          <strong className="font-semibold text-[#F5F2EB]">{lead}:</strong> {rest}
                        </>
                      ) : (
                        rest
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer Metadata Row (Tech Stack Capsules + Action) */}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#F5F2EB]/[0.08] pt-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-[#D6D0C4]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            {project.isCustom && onDelete && (
              <button
                type="button"
                onClick={onDelete}
                aria-label={
                  locale === 'id'
                    ? `Hapus karya ${project.title}`
                    : `Remove project ${project.title}`
                }
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#F5F2EB]/12 text-[#A8A298] transition-colors hover:border-red-400/40 hover:text-red-300"
              >
                <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={() => onSelect(activeModule?.id)}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] text-[#F5F2EB] transition-colors hover:text-white"
            >
              <span>
                {locale === 'id' ? 'Inspeksi Layar & Pin UI' : 'Inspect Screen & UI Pins'}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function WorksSection({
  locale,
  projects,
  onSelectProject,
  onOpenAddModal,
  onDeleteCustomProject,
}: WorksSectionProps) {
  const [category, setCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('bento');
  const [query, setQuery] = useState('');
  const [hoveredIndexId, setHoveredIndexId] = useState<string | null>(null);

  const counts = countProjectsByCategory(projects);
  const filtered = filterProjects(projects, category, query);
  const activePreviewProject =
    filtered.find((item) => item.id === hoveredIndexId) ?? filtered[0] ?? null;

  const filterOptions: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: locale === 'id' ? 'Semua Sistem' : 'All Systems' },
    { key: 'dashboard', label: locale === 'id' ? 'Dashboard & POS' : 'Dashboard & POS' },
    { key: 'automation', label: locale === 'id' ? 'Otomasi Dokumen' : 'Document Tools' },
    { key: 'web-app', label: locale === 'id' ? 'Aplikasi Web' : 'Web Apps' },
  ];

  return (
    <section id="karya" className="relative mx-auto max-w-[1380px] px-5 py-16 lg:px-8 lg:py-20">
      {/* Compact Monumental Section Header + Controls in One Cohesive Block */}
      <div className="flex flex-col justify-between gap-4 border-b border-[#F5F2EB]/[0.1] pb-6 lg:flex-row lg:items-end">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#D6D0C4]">
            <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
            <span>
              {locale === 'id'
                ? '01. Katalog Karya & Arsitektur Sistem'
                : '01. Selected Works & System Architecture'}
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F2EB] sm:text-3xl lg:text-4xl">
            {locale === 'id' ? (
              <>
                Produk web &amp; sistem operasional nyata berstandar{' '}
                <span className="font-serif italic font-normal text-gold-gradient">produksi.</span>
              </>
            ) : (
              <>
                Production-grade digital products and operational{' '}
                <span className="font-serif italic font-normal text-gold-gradient">systems.</span>
              </>
            )}
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenAddModal}
            className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#F5F2EB]/25 bg-[#F5F2EB]/[0.06] px-3.5 py-2 text-xs font-bold text-[#F5F2EB] transition-all hover:border-[#F5F2EB]/60 hover:bg-[#F5F2EB]/12"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{locale === 'id' ? 'Tambah Karya' : 'Add Project'}</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs + Search + View Switcher */}
      <div className="mt-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="tablist"
          aria-label={locale === 'id' ? 'Filter kategori karya' : 'Filter projects by category'}
          className="flex flex-wrap items-center gap-1 rounded-xl border border-[#F5F2EB]/12 bg-[#0B0B0E] p-1"
        >
          {filterOptions.map((option) => {
            const active = category === option.key;
            const count = counts[option.key];
            return (
              <button
                key={option.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCategory(option.key)}
                className={`relative rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  active ? 'text-[#040405] font-bold' : 'text-[#A8A298] hover:text-[#F5F2EB]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="worksFilterActiveBg"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="btn-gold-luxury absolute inset-0 rounded-lg"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  <span>{option.label}</span>
                  <span className="font-mono text-[10px] tabular-nums opacity-75">({count})</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="relative flex-1 sm:w-60 sm:flex-none">
            <label htmlFor="works-search" className="sr-only">
              {locale === 'id' ? 'Cari karya' : 'Search works'}
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-[#8C867B]"
              aria-hidden="true"
            />
            <input
              id="works-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                locale === 'id' ? 'Cari karya, klien, stack...' : 'Search works, clients, stack...'
              }
              className="min-h-[38px] w-full rounded-xl border border-[#F5F2EB]/12 bg-[#0B0B0E] py-1.5 pr-3 pl-9 text-xs text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/50 focus:outline-none"
            />
          </div>

          <div
            role="group"
            aria-label={locale === 'id' ? 'Ubah tampilan daftar karya' : 'Switch portfolio layout'}
            className="inline-flex items-center gap-1 rounded-xl border border-[#F5F2EB]/12 bg-[#0B0B0E] p-1"
          >
            <button
              type="button"
              onClick={() => setViewMode('bento')}
              aria-pressed={viewMode === 'bento'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'bento'
                  ? 'bg-[#F5F2EB]/15 text-[#F5F2EB] font-semibold'
                  : 'text-[#A8A298] hover:text-[#F5F2EB]'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Bento</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('index')}
              aria-pressed={viewMode === 'index'}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                viewMode === 'index'
                  ? 'bg-[#F5F2EB]/15 text-[#F5F2EB] font-semibold'
                  : 'text-[#A8A298] hover:text-[#F5F2EB]'
              }`}
            >
              <List className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{locale === 'id' ? 'Indeks' : 'Index'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Output */}
      {filtered.length === 0 ? (
        <div className="luxury-surface mt-8 rounded-3xl border border-[#F5F2EB]/12 px-6 py-12 text-center">
          <p className="font-display text-base font-semibold text-[#F5F2EB]">
            {locale === 'id'
              ? 'Tidak ada karya yang cocok dengan filter ini.'
              : 'No projects match your current filter.'}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setQuery('');
              }}
              className="btn-gold-luxury rounded-xl px-4 py-2 text-xs font-bold text-[#040405]"
            >
              {locale === 'id' ? 'Reset Filter' : 'Reset Filters'}
            </button>
          </div>
        </div>
      ) : viewMode === 'bento' ? (
        <div
          data-testid="works-bento-grid"
          className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <BentoCard
                key={project.id}
                project={project}
                locale={locale}
                isWide={idx === 0 && filtered.length >= 3}
                onSelect={(moduleId) => onSelectProject(project, moduleId)}
                onDelete={
                  project.isCustom ? () => onDeleteCustomProject(project.id) : undefined
                }
              />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div
          data-testid="works-editorial-index"
          className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-12"
        >
          <div className="divide-y divide-[#F5F2EB]/[0.08] border-y border-[#F5F2EB]/[0.08] lg:col-span-7">
            {filtered.map((project) => {
              const isHighlighted = activePreviewProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndexId(project.id)}
                  onFocus={() => setHoveredIndexId(project.id)}
                  className={`group relative px-4 py-5 transition-colors ${
                    isHighlighted ? 'bg-[#F5F2EB]/[0.03]' : ''
                  }`}
                >
                  {isHighlighted && (
                    <motion.span
                      layoutId="editorialActiveBar"
                      className="btn-gold-luxury absolute inset-y-0 left-0 w-1"
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="flex w-full flex-col gap-2 text-left sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isHighlighted ? 'text-[#F5F2EB] font-bold' : 'text-[#8C867B]'
                        }`}
                      >
                        {project.indexLabel}
                      </span>
                      <div>
                        <span
                          className={`block font-display text-xl font-bold tracking-tight ${
                            isHighlighted ? 'text-[#F5F2EB]' : 'text-[#C8C1B2]'
                          }`}
                        >
                          {project.title}
                        </span>
                        <span className="mt-0.5 block text-xs text-[#A8A298]">
                          {project.categoryLabel[locale]} · {project.client} · {project.year}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.06em] text-[#D6D0C4] group-hover:text-[#F5F2EB]">
                      <span>{locale === 'id' ? 'Inspeksi' : 'Inspect'}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Sticky Live Hover Preview Panel */}
          <div className="lg:sticky lg:top-24 lg:col-span-5">
            {activePreviewProject && (
              <div className="luxury-surface relative overflow-hidden rounded-3xl border border-[#F5F2EB]/15 p-5">
                <div
                  aria-hidden="true"
                  className="gold-hairline pointer-events-none absolute top-0 inset-x-8 h-[1px]"
                />
                <div className="mb-3 flex items-center justify-between text-xs text-[#A8A298]">
                  <span className="font-bold text-[#F5F2EB]">{activePreviewProject.title}</span>
                  <span className="rounded bg-[#F5F2EB]/[0.08] px-2 py-0.5 font-mono tabular-nums text-[#F5F2EB]">
                    {activePreviewProject.year}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[#F5F2EB]/15 bg-[#08080A]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePreviewProject.id}
                      src={activePreviewProject.imageUrl}
                      alt={activePreviewProject.title}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.22 }}
                      className="block h-auto w-full object-contain"
                    />
                  </AnimatePresence>
                </div>

                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#C8C1B2]">
                  {activePreviewProject.summary[locale]}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectProject(activePreviewProject)}
                  className="btn-gold-luxury mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-[0.06em] text-[#040405]"
                >
                  <span>
                    {locale === 'id' ? 'Buka Studi Kasus Lengkap' : 'Open Full Case Study'}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
