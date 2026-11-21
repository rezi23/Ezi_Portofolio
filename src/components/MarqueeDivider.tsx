import type { Locale } from '../types/portfolio';

interface MarqueeDividerProps {
  locale: Locale;
}

export function MarqueeDivider({ locale }: MarqueeDividerProps) {
  const items =
    locale === 'id'
      ? [
        { text: 'Desain Antarmuka Eksekutif', tag: 'UI/UX CRAFT' },
        { text: 'Dashboard Analitik Real-Time', tag: 'DATA SYSTEMS' },
        { text: 'Otomasi Dokumen Resmi A4', tag: 'LEGAL AUTOMATION' },
        { text: 'Rekayasa Frontend React & TypeScript', tag: 'ARCHITECTURE' },
        { text: 'Koreografi Gerak & Mikro-Interaksi', tag: 'KINETIC MOTION' },
        { text: 'Sistem Desain Skala Produk', tag: 'DESIGN TOKENS' },
      ]
      : [
        { text: 'Executive Interface Craft', tag: 'UI/UX CRAFT' },
        { text: 'Real-Time Analytics Dashboards', tag: 'DATA SYSTEMS' },
        { text: 'Official A4 Document Automation', tag: 'LEGAL AUTOMATION' },
        { text: 'React & TypeScript Architecture', tag: 'ENGINEERING' },
        { text: 'Precision Motion Choreography', tag: 'KINETIC MOTION' },
        { text: 'Scalable Product Design Systems', tag: 'DESIGN TOKENS' },
      ];

  const repeated = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-[#F5F2EB]/[0.09] bg-[#070709] py-5 select-none"
    >
      <div className="gold-hairline pointer-events-none absolute top-0 inset-x-0 h-[1px] opacity-50" />
      <div className="mask-horizontal-fade">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {repeated.map((item, idx) => (
            <div key={`${item.text}-${idx}`} className="flex items-center gap-10">
              <div className="flex items-center gap-3.5">
                <span className="font-serif text-xl italic text-[#F5F2EB]">{item.text}</span>
                <span className="rounded-full border border-[#F5F2EB]/20 bg-[#F5F2EB]/[0.05] px-2.5 py-0.5 font-mono text-[10px] tracking-[0.16em] text-[#D6D0C4]">
                  {item.tag}
                </span>
              </div>
              <span className="text-sm text-[#CFC8B8]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
