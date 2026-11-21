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

function BentoCard({ project, locale, isWide, onSelect, onDelete }: BentoCardProps) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });
  const [imgFailed, setImgFailed] = useState(false);
  const [previewModuleId, setPreviewModuleId] = useState<string | null>(
    project.modules?.[0]?.id ?? null
  );

  const activeModule =
    project.modules?.find((m) => m.id === previewModuleId) ?? project.modules?.[0] ?? null;
  const displayImageUrl = activeModule ? activeModule.imageUrl : project.imageUrl;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setSpotlight({ x, y, active: true });
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
      className={`luxury-surface group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#F5F2EB]/12 transition-all duration-300 hover:border-[#F5F2EB]/40 ${
        isWide ? 'lg:col-span-2' : 'lg:col-span-1'
      }`}
    >
      {/* Top specular broken-white hairline */}
      <div
        aria-hidden="true"
        className="gold-hairline pointer-events-none absolute top-0 inset-x-10 h-[1px] opacity-50 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Pointer-following warm broken-white spotlight sheen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(600px circle at ${spotlight.x}% ${spotlight.y}%, rgba(245, 242, 235, 0.09), transparent 60%)`,
        }}
      />

      {/* Full-Width Uncropped Media Stage on Top */}
      <div className="relative p-5 pb-0 sm:p-6 sm:pb-0 lg:p-7 lg:pb-0">
        <button
          type="button"
          onClick={() => onSelect(activeModule?.id)}
          aria-label={
            locale === 'id'
              ? `Buka detail karya ${project.title}`
              : `Open project details for ${project.title}`
          }
          className="relative block w-full overflow-hidden rounded-2xl border border-[#F5F2EB]/[0.14] bg-[#070709] text-left shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F2EB]"
        >
          {/* Minimal Atelier Window Header Bar */}
          <div className="flex items-center justify-between border-b border-[#F5F2EB]/[0.08] bg-[#111115] px-3.5 py-2.5 text-[11px] text-[#A8A298]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F5F2EB]" />
              <span className="font-mono text-[#E6E0D4]">{project.slug}.app</span>
              {activeModule && (
                <span className="hidden sm:inline rounded border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.06] px-1.5 py-0.5 font-mono text-[10px] text-[#F5F2EB]">
                  {activeModule.tabLabel[locale]}
                </span>
              )}
            </div>
            {project.modules && project.modules.length > 0 ? (
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#F5F2EB]">
                <Crosshair className="h-3 w-3" aria-hidden="true" />
                <span>
                  {project.modules.length} {locale === 'id' ? 'Layar Modul' : 'Module Screens'}
                </span>
              </span>
            ) : (
              project.hotspots.length > 0 && (
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#F5F2EB]">
                  <Crosshair className="h-3 w-3" aria-hidden="true" />
                  <span>
                    {project.hotspots.length} {locale === 'id' ? 'Pin UI' : 'UI Pins'}
                  </span>
                </span>
              )
            )}
          </div>

          <div className="relative w-full overflow-hidden bg-[#060608]">
            {displayImageUrl && !imgFailed ? (
              <img
                key={displayImageUrl}
                src={displayImageUrl}
                alt={`${project.title} — ${
                  activeModule ? activeModule.title[locale] : project.subtitle[locale]
                }`}
                referrerPolicy="no-referrer"
                onError={() => setImgFailed(true)}
                className="block h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            ) : (
              <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#17171B] to-[#0B0B0E] p-6 text-center">
                <Layers className="h-7 w-7 text-[#F5F2EB]" aria-hidden="true" />
                <span className="font-display text-base font-semibold text-[#F5F2EB]">
                  {project.title}
                </span>
              </div>
            )}

            {/* Subtle hover overlay prompt */}
            <div className="pointer-events-none absolute right-4 bottom-4 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="btn-gold-luxury inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold text-[#050506]">
                <span>{locale === 'id' ? 'Inspeksi UI' : 'Inspect UI'}</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Detailed Explanation & Luxury Metadata Below the Image */}
      <div className="relative flex flex-1 flex-col justify-between p-5 sm:p-6 lg:p-7">
        <div>
          <div className="mb-3 flex items-center justify-between gap-3 text-xs text-[#A8A298]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-[#F5F2EB]/25 bg-[#F5F2EB]/10 px-2 py-0.5 font-mono text-[11px] font-semibold tabular-nums text-[#F5F2EB]">
                {project.indexLabel}
              </span>
              <span className="font-medium text-[#E6E0D4]">{project.categoryLabel[locale]}</span>
              <span aria-hidden="true" className="text-zinc-600">
                ·
              </span>
              <span className="text-[#A8A298]">{project.client}</span>
            </div>
            <span className="font-mono text-[11px] tabular-nums text-[#8C867B]">
              {project.year}
            </span>
          </div>

          <h3 className="font-display text-xl font-bold tracking-tight text-[#F5F2EB] sm:text-2xl">
            <button
              type="button"
              onClick={() => onSelect(activeModule?.id)}
              className="text-left transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F2EB]"
            >
              {project.title}
            </button>
          </h3>

          <p className="mt-1 text-xs font-medium text-[#D6D0C4]">{project.subtitle[locale]}</p>

          <p className="mt-3 text-sm leading-relaxed text-[#A8A298]">
            {activeModule ? activeModule.description[locale] : project.summary[locale]}
          </p>

          {/* Interactive Module Switcher Pills inside Bento Card */}
          {project.modules && project.modules.length > 0 && (
            <div className="mt-4 rounded-2xl border border-[#F5F2EB]/10 bg-[#0A0A0D]/95 p-3">
              <div className="mb-2 flex items-center justify-between text-[11px]">
                <span className="font-mono uppercase tracking-[0.12em] text-[#F5F2EB]">
                  {locale === 'id'
                    ? 'Pratinjau 7 Modul Operasional'
                    : '7 Operational Modules Preview'}
                </span>
                <button
                  type="button"
                  onClick={() => onSelect(activeModule?.id)}
                  className="font-mono text-[10px] text-[#C8C1B2] underline decoration-[#F5F2EB]/40 underline-offset-4 hover:text-[#F5F2EB]"
                >
                  {locale === 'id' ? 'Buka Layar Penuh' : 'Open Full Screen'}
                </button>
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
                      className={`rounded-lg px-2.5 py-1 font-mono text-[11px] transition-all ${
                        isModActive
                          ? 'btn-gold-luxury text-[#050506] font-bold'
                          : 'border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] text-[#C8C1B2] hover:border-[#F5F2EB]/35 hover:text-[#F5F2EB]'
                      }`}
                    >
                      {mod.tabLabel[locale]}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {project.metrics.length > 0 && (
            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl border border-[#F5F2EB]/[0.08] bg-[#F5F2EB]/[0.02] p-3.5">
              {project.metrics.map((m) => (
                <div key={m.label.id}>
                  <p className="font-mono text-sm font-bold tabular-nums text-[#F5F2EB] sm:text-base">
                    {m.value}
                  </p>
                  <p className="mt-0.5 text-[11px] text-[#A8A298]">{m.label[locale]}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Metadata Row (Smoked Glass Tech Stack Capsules + Action) */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F2EB]/[0.08] pt-4">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] px-2.5 py-0.5 font-mono text-[11px] text-[#D6D0C4]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {project.isCustom && onDelete && (
              <button
                type="button"
                onClick={onDelete}
                aria-label={
                  locale === 'id'
                    ? `Hapus karya ${project.title}`
                    : `Remove project ${project.title}`
                }
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#F5F2EB]/12 text-[#A8A298] transition-colors hover:border-red-400/40 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
              >
                <Trash2 className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={() => onSelect(activeModule?.id)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F5F2EB] transition-colors hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F2EB]"
            >
              <span>{locale === 'id' ? 'Studi Kasus' : 'Case Study'}</span>
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
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
    { key: 'all', label: locale === 'id' ? 'Semua' : 'All' },
    { key: 'dashboard', label: locale === 'id' ? 'Dashboard & Data' : 'Dashboard & Data' },
    { key: 'automation', label: locale === 'id' ? 'Otomasi Dokumen' : 'Document Tools' },
    { key: 'web-app', label: locale === 'id' ? 'Aplikasi Web' : 'Web Apps' },
  ];

  return (
    <section id="karya" className="relative mx-auto max-w-[1360px] px-6 py-24 lg:px-10 lg:py-32">
      {/* Section Heading */}
      <div className="flex flex-col justify-between gap-6 border-b border-[#F5F2EB]/[0.09] pb-8 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#D6D0C4]">
            <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
            <span>{locale === 'id' ? '01. Karya Pilihan' : '01. Selected Works'}</span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-[#F5F2EB] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.1] [text-wrap:balance]">
            {locale === 'id' ? (
              <>
                Produk digital &amp; sistem web nyata yang dibangun dengan{' '}
                <span className="font-serif italic font-normal text-gold-gradient">
                  standar tinggi.
                </span>
              </>
            ) : (
              <>
                Shipped digital products and web systems built with{' '}
                <span className="font-serif italic font-normal text-gold-gradient">
                  bespoke craft.
                </span>
              </>
            )}
          </h2>
        </div>

        <button
          type="button"
          onClick={onOpenAddModal}
          className="inline-flex min-h-[44px] items-center gap-2 self-start rounded-xl border border-[#F5F2EB]/25 bg-[#F5F2EB]/[0.06] px-4 py-2.5 text-sm font-semibold text-[#F5F2EB] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all hover:border-[#F5F2EB]/60 hover:bg-[#F5F2EB]/12 lg:self-auto whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          <span>{locale === 'id' ? 'Tambah Karya' : 'Add Project'}</span>
        </button>
      </div>

      {/* Controls Bar: Category Filter Tabs + Search + View Mode Switcher */}
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Interactive Filter Segmented Control */}
        <div
          role="tablist"
          aria-label={locale === 'id' ? 'Filter kategori karya' : 'Filter projects by category'}
          className="flex flex-wrap items-center gap-1 rounded-2xl border border-[#F5F2EB]/10 bg-[#0C0C0F] p-1.5 shadow-[inset_0_1px_0_0_rgba(245,242,235,0.06)]"
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
                className={`relative rounded-xl px-4 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                  active ? 'text-[#050506] font-bold' : 'text-[#A8A298] hover:text-[#F5F2EB]'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="worksFilterActiveBg"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                    className="btn-gold-luxury absolute inset-0 rounded-xl"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  <span>{option.label}</span>
                  <span className="font-mono text-[11px] tabular-nums opacity-75">({count})</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input & View Switcher */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 sm:w-64 sm:flex-none">
            <label htmlFor="works-search" className="sr-only">
              {locale === 'id' ? 'Cari karya berdasarkan judul atau stack' : 'Search works'}
            </label>
            <Search
              className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#8C867B]"
              aria-hidden="true"
            />
            <input
              id="works-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                locale === 'id' ? 'Cari karya atau klien...' : 'Search works or clients...'
              }
              className="min-h-[44px] w-full rounded-2xl border border-[#F5F2EB]/12 bg-[#0C0C0F] py-2 pr-4 pl-10 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/50 focus:outline-none"
            />
          </div>

          <div
            role="group"
            aria-label={locale === 'id' ? 'Ubah tampilan daftar karya' : 'Switch portfolio layout'}
            className="inline-flex items-center gap-1 rounded-2xl border border-[#F5F2EB]/10 bg-[#0C0C0F] p-1.5"
          >
            <button
              type="button"
              onClick={() => setViewMode('bento')}
              aria-pressed={viewMode === 'bento'}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                viewMode === 'bento'
                  ? 'bg-[#F5F2EB]/15 text-[#F5F2EB] font-semibold'
                  : 'text-[#A8A298] hover:text-[#F5F2EB]'
              }`}
            >
              <LayoutGrid className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{locale === 'id' ? 'Tampilan Bento' : 'Bento Grid'}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('index')}
              aria-pressed={viewMode === 'index'}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB] ${
                viewMode === 'index'
                  ? 'bg-[#F5F2EB]/15 text-[#F5F2EB] font-semibold'
                  : 'text-[#A8A298] hover:text-[#F5F2EB]'
              }`}
            >
              <List className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{locale === 'id' ? 'Tampilan Indeks' : 'Editorial Index'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Results Output */}
      {filtered.length === 0 ? (
        <div className="luxury-surface mt-12 rounded-3xl border border-[#F5F2EB]/12 px-6 py-16 text-center">
          <p className="font-display text-lg font-semibold text-[#F5F2EB]">
            {locale === 'id'
              ? 'Belum ada karya yang cocok dengan filter ini.'
              : 'No projects match your current filter.'}
          </p>
          <p className="mt-2 text-sm text-[#A8A298]">
            {locale === 'id'
              ? 'Coba reset pencarian atau tambahkan karya baru ke kategori ini.'
              : 'Reset your filters or add a new project into this category.'}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setQuery('');
              }}
              className="btn-gold-luxury rounded-xl px-5 py-2.5 text-sm font-bold text-[#050506]"
            >
              {locale === 'id' ? 'Reset Filter' : 'Reset Filters'}
            </button>
            <button
              type="button"
              onClick={onOpenAddModal}
              className="rounded-xl border border-[#F5F2EB]/20 px-5 py-2.5 text-sm font-medium text-[#F5F2EB] hover:bg-[#F5F2EB]/5"
            >
              {locale === 'id' ? 'Tambah Karya Baru' : 'Add New Project'}
            </button>
          </div>
        </div>
      ) : viewMode === 'bento' ? (
        /* Dynamic Bento Grid */
        <div
          data-testid="works-bento-grid"
          className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2"
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
        /* Editorial Index with Live Crossfading Preview Stage */
        <div
          data-testid="works-editorial-index"
          className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12"
        >
          <div className="divide-y divide-[#F5F2EB]/[0.08] border-y border-[#F5F2EB]/[0.08] lg:col-span-7">
            {filtered.map((project) => {
              const isHighlighted = activePreviewProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredIndexId(project.id)}
                  onFocus={() => setHoveredIndexId(project.id)}
                  className={`group relative px-4 py-6 transition-colors ${
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
                    className="flex w-full flex-col gap-3 text-left sm:flex-row sm:items-center sm:justify-between focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F2EB]"
                  >
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`font-mono text-xs tabular-nums transition-colors ${
                          isHighlighted ? 'text-[#F5F2EB] font-bold' : 'text-[#8C867B]'
                        }`}
                      >
                        {project.indexLabel}
                      </span>
                      <div>
                        <span
                          className={`block font-display text-2xl font-bold tracking-tight transition-transform duration-200 group-hover:translate-x-1.5 ${
                            isHighlighted ? 'text-[#F5F2EB]' : 'text-[#C8C1B2]'
                          }`}
                        >
                          {project.title}
                        </span>
                        <span className="mt-1 block text-xs text-[#A8A298]">
                          {project.categoryLabel[locale]} · {project.client} · {project.year}
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#A8A298] transition-colors group-hover:text-[#F5F2EB] whitespace-nowrap shrink-0">
                      <span>{locale === 'id' ? 'Inspeksi' : 'Inspect'}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Sticky Live Hover Preview Panel */}
          <div className="lg:sticky lg:top-28 lg:col-span-5">
            {activePreviewProject && (
              <div className="luxury-surface relative overflow-hidden rounded-3xl border border-[#F5F2EB]/15 p-6">
                <div
                  aria-hidden="true"
                  className="gold-hairline pointer-events-none absolute top-0 inset-x-8 h-[1px]"
                />
                <div className="mb-3 flex items-center justify-between text-xs text-[#A8A298]">
                  <span className="font-semibold text-[#F5F2EB]">{activePreviewProject.title}</span>
                  <span className="rounded bg-[#F5F2EB]/[0.08] px-2 py-0.5 font-mono tabular-nums text-[#F5F2EB]">
                    {activePreviewProject.year}
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[#F5F2EB]/[0.12] bg-[#08080A]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePreviewProject.id}
                      src={activePreviewProject.imageUrl}
                      alt={activePreviewProject.title}
                      referrerPolicy="no-referrer"
                      initial={{ opacity: 0, y: 8, scale: 1.01 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="block h-auto w-full object-contain"
                    />
                  </AnimatePresence>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#C8C1B2]">
                  {activePreviewProject.summary[locale]}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectProject(activePreviewProject)}
                  className="btn-gold-luxury mt-5 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-[#050506]"
                >
                  <span>
                    {locale === 'id' ? 'Buka Studi Kasus Lengkap' : 'Open Full Case Study'}
                  </span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
