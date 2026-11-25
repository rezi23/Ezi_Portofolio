import { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Locale } from '../types/portfolio';

interface NavbarProps {
  locale: Locale;
  activeSection: string;
  onNavigateContact: () => void;
}

export function Navbar({ locale, activeSection, onNavigateContact }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'karya', href: '#karya', index: '01', label: locale === 'id' ? 'Karya' : 'Works' },
    {
      id: 'kapabilitas',
      href: '#kapabilitas',
      index: '02',
      label: locale === 'id' ? 'Kapabilitas' : 'Capabilities',
    },
    { id: 'proses', href: '#proses', index: '03', label: locale === 'id' ? 'Proses' : 'Process' },
    { id: 'kontak', href: '#kontak', index: '04', label: locale === 'id' ? 'Kontak' : 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[#F5F2EB]/[0.1] bg-[#040405]/90 backdrop-blur-xl">
      {/* Subtle top broken-white specular hairline */}
      <div aria-hidden="true" className="gold-hairline h-[1px] w-full opacity-70" />

      <div className="mx-auto flex h-16 max-w-[1380px] items-center justify-between gap-4 px-5 lg:px-8">
        {/* Zone 1: Atelier Monogram & Wordmark */}
        <div className="flex items-center gap-3.5">
          <a
            href="#beranda"
            className="group inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F2EB]"
          >
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#F5F2EB]/40 bg-gradient-to-b from-[#F5F2EB]/20 to-[#F5F2EB]/5 font-serif text-sm italic font-semibold text-[#F5F2EB] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35)] transition-transform duration-200 group-hover:scale-105"
            >
              F
            </span>
            <span className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-[#F5F2EB] leading-none">
                Fachrezi<span className="text-[#C8C1B2]">.</span>
              </span>
              <span className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-[#9E988E]">
                Digital Atelier
              </span>
            </span>
          </a>

          {/* Subtle Availability Jewel Pill on Large Screens */}
          <div className="hidden xl:inline-flex items-center gap-2 rounded-full border border-[#F5F2EB]/12 bg-[#F5F2EB]/[0.03] px-2.5 py-1 text-[11px] text-[#D6D0C4]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F5F2EB] opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#F5F2EB]" />
            </span>
            <span>
              {locale === 'id' ? 'Tersedia untuk Komisi Pilihan' : 'Available for Select Commissions'}
            </span>
          </div>
        </div>

        {/* Zone 2: High-Density Glass Capsule Navigation Links */}
        <nav
          aria-label={locale === 'id' ? 'Navigasi utama' : 'Primary navigation'}
          className="hidden md:flex items-center gap-1 rounded-full border border-[#F5F2EB]/14 bg-[#0A0A0D]/95 p-1 text-xs font-medium text-[#A8A298] shadow-[inset_0_1px_0_0_rgba(245,242,235,0.08)]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative rounded-full px-3.5 py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5F2EB] ${
                  isActive ? 'text-[#040405] font-bold' : 'hover:text-[#F5F2EB]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    className="btn-gold-luxury absolute inset-0 rounded-full"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-1.5">
                  <span
                    className={`font-mono text-[10px] tabular-nums ${
                      isActive ? 'text-[#040405]/70' : 'text-[#D6D0C4]/75'
                    }`}
                  >
                    {item.index}
                  </span>
                  <span>{item.label}</span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Luxury Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onNavigateContact}
            className="btn-gold-luxury hidden sm:inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#040405] transition-all duration-200 active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F2EB]"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{locale === 'id' ? 'Mulai Proyek' : 'Start Project'}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={
              mobileOpen
                ? locale === 'id'
                  ? 'Tutup menu navigasi'
                  : 'Close navigation menu'
                : locale === 'id'
                  ? 'Buka menu navigasi'
                  : 'Open navigation menu'
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#F5F2EB]/15 bg-[#0E0E11] text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/40 hover:bg-[#F5F2EB]/5 md:hidden focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            aria-label={locale === 'id' ? 'Navigasi mobile' : 'Mobile navigation'}
            className="border-t border-[#F5F2EB]/10 bg-[#08080A]/98 px-5 py-5 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] items-center justify-between border-b border-[#F5F2EB]/[0.07] py-2 text-sm font-medium text-[#F5F2EB] hover:text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#C8C1B2]">{item.index}.</span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#9E988E]" aria-hidden="true" />
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onNavigateContact();
                }}
                className="btn-gold-luxury mt-2 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-[#040405]"
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{locale === 'id' ? 'Mulai Proyek' : 'Start Project'}</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
