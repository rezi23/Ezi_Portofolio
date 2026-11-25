import type { Locale } from '../types/portfolio';

interface MarqueeDividerProps {
  locale: Locale;
}

export function MarqueeDivider({ locale }: MarqueeDividerProps) {
  const items =
    locale === 'id'
      ? [
          { text: 'Arsitektur Antarmuka Eksekutif', tag: 'UI/UX ARCHITECTURE' },
          { text: 'Monitoring Statistik Pendapatan Real-Time', tag: 'LIVE ANALYTICS' },
          { text: 'Terminal Kasir POS & Audit Kiosk', tag: 'POS & LEDGER' },
          { text: 'CMS Distribusi Frame, GIF & Stiker', tag: 'REMOTE KIOSK CMS' },
          { text: 'Otomasi Dokumen Resmi BAST & SPK A4', tag: 'LEGAL AUTOMATION' },
          { text: 'Sistem Token Desain 3-Lapis', tag: 'W3C DESIGN TOKENS' },
        ]
      : [
          { text: 'Executive Interface Architecture', tag: 'UI/UX ARCHITECTURE' },
          { text: 'Real-Time Revenue Analytics Monitoring', tag: 'LIVE ANALYTICS' },
          { text: 'POS Cashier Terminal & Kiosk Auditing', tag: 'POS & LEDGER' },
          { text: 'Remote Frame, GIF & Sticker CMS', tag: 'REMOTE KIOSK CMS' },
          { text: 'Official A4 BAST & SPK Document Automation', tag: 'LEGAL AUTOMATION' },
          { text: '3-Layer Design Token Architecture', tag: 'W3C DESIGN TOKENS' },
        ];

  const repeated = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#F5F2EB]/[0.1] bg-[#070709] py-3.5 select-none"
    >
      <div className="gold-hairline pointer-events-none absolute top-0 inset-x-0 h-[1px] opacity-50" />
      <div className="mask-horizontal-fade">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {repeated.map((item, idx) => (
            <div key={`${item.text}-${idx}`} className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <span className="font-serif text-base italic text-[#F5F2EB] sm:text-lg">
                  {item.text}
                </span>
                <span className="rounded-md border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.05] px-2 py-0.5 font-mono text-[10px] tracking-[0.15em] text-[#D6D0C4]">
                  {item.tag}
                </span>
              </div>
              <span className="font-mono text-xs text-[#78736A]">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
