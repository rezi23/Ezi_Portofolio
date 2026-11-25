import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Send, Sparkles, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import type { ContactFormInput, Locale } from '../types/portfolio';
import { validateContactForm } from '../utils/portfolioLogic';

interface ContactSectionProps {
  locale: Locale;
}

const EMAIL_ADDRESS = 'mhmdfachrezii@gmail.com';

const INITIAL_CONTACT: ContactFormInput = {
  name: '',
  email: '',
  projectType: 'Web App / Dashboard',
  budget: 'Fleksibel',
  message: '',
};

const BUDGET_PILLS_ID = ['Fleksibel', '< Rp 10 Jt', 'Rp 10 Jt – 25 Jt', 'Rp 25 Jt+'];
const BUDGET_PILLS_EN = ['Flexible', '< $1,000', '$1,000 – $2,500', '$2,500+'];

export function ContactSection({ locale }: ContactSectionProps) {
  const [form, setForm] = useState<ContactFormInput>(INITIAL_CONTACT);
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'message', string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<ContactFormInput | null>(null);
  const [copied, setCopied] = useState(false);

  const budgetOptions = locale === 'id' ? BUDGET_PILLS_ID : BUDGET_PILLS_EN;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validateContactForm(form, locale);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedRecord({ ...form });
    setForm(INITIAL_CONTACT);
  };

  return (
    <>
      <section
        id="kontak"
        className="relative overflow-hidden border-t border-[#F5F2EB]/[0.09] bg-[#070709]"
      >
        {/* Warm broken-white ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/3 h-[460px] w-[620px] rounded-full bg-[#F5F2EB]/[0.045] blur-[150px]"
        />

        <div className="mx-auto max-w-[1380px] px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Left Editorial Pitch & Direct Concierge Card */}
            <div className="flex flex-col justify-between lg:col-span-5">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#D6D0C4]">
                  <Sparkles className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  <span>
                    {locale === 'id' ? '04. Kolaborasi & Kontak' : '04. Contact & Collaboration'}
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-[#F5F2EB] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.08] [text-wrap:balance]">
                  {locale === 'id' ? (
                    <>
                      Punya ide produk atau web yang ingin dibuat{' '}
                      <span className="font-serif italic font-normal text-gold-gradient">
                        berbeda?
                      </span>
                    </>
                  ) : (
                    <>
                      Have a web product or interface ready to stand{' '}
                      <span className="font-serif italic font-normal text-gold-gradient">
                        apart?
                      </span>
                    </>
                  )}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[#C8C1B2]">
                  {locale === 'id'
                    ? 'Terbuka untuk komisi desain UI/UX eksklusif, pembangunan website modern, dashboard operasional, maupun sistem otomasi bisnis.'
                    : 'Available for select UI/UX design commissions, modern web builds, operational dashboards, and custom business workflow tools.'}
                </p>

                {/* Response SLA Badge */}
                <div className="mt-6 inline-flex items-center gap-2.5 rounded-xl border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] px-3.5 py-2 text-xs text-[#D6D0C4]">
                  <Clock className="h-4 w-4 text-[#F5F2EB]" aria-hidden="true" />
                  <span>
                    {locale === 'id'
                      ? 'Respon langsung dalam < 24 jam kerja'
                      : 'Direct response within < 24 business hours'}
                  </span>
                </div>
              </div>

              {/* Luxury Direct Email Card */}
              <div className="luxury-surface-subtle mt-10 rounded-3xl border border-[#F5F2EB]/12 p-6">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-[#D6D0C4]">
                  <Mail className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                  <span>{locale === 'id' ? 'Saluran Langsung' : 'Direct Concierge'}</span>
                </div>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="font-display text-lg font-bold text-[#F5F2EB] transition-colors hover:text-white"
                  >
                    {EMAIL_ADDRESS}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    aria-label={locale === 'id' ? 'Salin alamat email' : 'Copy email address'}
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-xl border border-[#F5F2EB]/18 bg-[#121216] px-3.5 py-1.5 text-xs font-semibold text-[#F5F2EB] transition-all hover:border-[#F5F2EB]/50 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#F5F2EB]"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#F5F2EB]" aria-hidden="true" />
                        <span className="text-[#F5F2EB]">
                          {locale === 'id' ? 'Tersalin' : 'Copied'}
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#A8A298]" aria-hidden="true" />
                        <span>{locale === 'id' ? 'Salin' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Interactive Brief Form */}
            <div className="luxury-surface relative overflow-hidden rounded-3xl border border-[#F5F2EB]/15 p-6 sm:p-8 lg:col-span-7">
              <div
                aria-hidden="true"
                className="gold-hairline pointer-events-none absolute top-0 inset-x-10 h-[1px]"
              />

              {submittedRecord ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-8"
                >
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F5F2EB]/30 bg-[#F5F2EB]/10 px-3 py-1 font-mono text-xs font-semibold text-[#F5F2EB]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{locale === 'id' ? 'Pesan Terkirim' : 'Brief Received'}</span>
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-[#F5F2EB]">
                    {locale === 'id'
                      ? `Terima kasih, ${submittedRecord.name}.`
                      : `Thank you, ${submittedRecord.name}.`}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#C8C1B2]">
                    {locale === 'id'
                      ? `Ringkasan proyek (${submittedRecord.projectType} · Estimasi: ${submittedRecord.budget}) Anda telah dicatat. Saya akan membalas ke ${submittedRecord.email} secepatnya.`
                      : `Your project brief (${submittedRecord.projectType} · Estimate: ${submittedRecord.budget}) has been recorded. I will follow up at ${submittedRecord.email} shortly.`}
                  </p>
                  <div className="mt-6 rounded-2xl border border-[#F5F2EB]/10 bg-[#F5F2EB]/[0.03] p-4 text-sm text-[#E6E0D4]">
                    <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#8C867B]">
                      {locale === 'id' ? 'Catatan Anda' : 'Your Note'}
                    </p>
                    <p className="mt-1.5">{submittedRecord.message}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmittedRecord(null)}
                    className="mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#F5F2EB]/20 px-5 py-2.5 text-sm font-semibold text-[#F5F2EB] hover:bg-[#F5F2EB]/5"
                  >
                    <span>
                      {locale === 'id' ? 'Kirim Pesan Lainnya' : 'Send Another Inquiry'}
                    </span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                      >
                        {locale === 'id' ? 'Nama Anda *' : 'Your Name *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, name: e.target.value }));
                          setErrors((prev) => ({ ...prev, name: undefined }));
                        }}
                        placeholder={locale === 'id' ? 'Nama lengkap' : 'Full name'}
                        className="min-h-[46px] w-full rounded-xl border border-[#F5F2EB]/15 bg-[#111115] px-4 py-2.5 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/60 focus:outline-none"
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                      >
                        {locale === 'id' ? 'Email *' : 'Email *'}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((prev) => ({ ...prev, email: e.target.value }));
                          setErrors((prev) => ({ ...prev, email: undefined }));
                        }}
                        placeholder="nama@perusahaan.com"
                        className="min-h-[46px] w-full rounded-xl border border-[#F5F2EB]/15 bg-[#111115] px-4 py-2.5 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/60 focus:outline-none"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-type"
                        className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                      >
                        {locale === 'id' ? 'Jenis Proyek' : 'Project Type'}
                      </label>
                      <select
                        id="contact-type"
                        value={form.projectType}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, projectType: e.target.value }))
                        }
                        className="min-h-[46px] w-full rounded-xl border border-[#F5F2EB]/15 bg-[#111115] px-4 py-2.5 text-sm text-[#F5F2EB] focus:border-[#F5F2EB]/60 focus:outline-none"
                      >
                        <option value="Web App / Dashboard">
                          {locale === 'id'
                            ? 'Aplikasi Web / Dashboard Analitik'
                            : 'Web App / Analytics Dashboard'}
                        </option>
                        <option value="UI/UX & Design System">
                          {locale === 'id'
                            ? 'Desain UI/UX & Sistem Desain'
                            : 'UI/UX & Design System'}
                        </option>
                        <option value="Document / Internal Tool">
                          {locale === 'id'
                            ? 'Alat Otomasi & Web Internal'
                            : 'Document & Internal Automation Tool'}
                        </option>
                        <option value="Landing Page & Portfolio">
                          {locale === 'id'
                            ? 'Website Profil & Landing Page Interaktif'
                            : 'Interactive Website & Landing Page'}
                        </option>
                      </select>
                    </div>

                    <div>
                      <span className="mb-1.5 block text-xs font-medium text-[#D6D0C4]">
                        {locale === 'id' ? 'Estimasi Anggaran' : 'Estimated Budget'}
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {budgetOptions.map((pill) => {
                          const selected = form.budget === pill;
                          return (
                            <button
                              key={pill}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, budget: pill }))}
                              className={`min-h-[44px] rounded-xl border px-2.5 py-1.5 font-mono text-xs transition-all ${
                                selected
                                  ? 'btn-gold-luxury border-transparent text-[#050506] font-bold'
                                  : 'border-[#F5F2EB]/12 bg-[#111115] text-[#A8A298] hover:border-[#F5F2EB]/30 hover:text-[#F5F2EB]'
                              }`}
                            >
                              {pill}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                    >
                      {locale === 'id' ? 'Ceritakan Kebutuhan Proyek *' : 'Project Details *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm((prev) => ({ ...prev, message: e.target.value }));
                        setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder={
                        locale === 'id'
                          ? 'Contoh: Kami butuh redesain dashboard dan frontend React untuk operasional tim...'
                          : 'Share your goals, timeline, and what we are building together...'
                      }
                      className="w-full rounded-xl border border-[#F5F2EB]/15 bg-[#111115] px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/60 focus:outline-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-gold-luxury inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-bold text-[#050506] transition-transform duration-150 active:scale-[0.99] sm:w-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F5F2EB]"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {locale === 'id' ? 'Kirim Ringkasan Proyek' : 'Send Project Brief'}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Editorial Colophon Footer */}
      <footer className="border-t border-[#F5F2EB]/[0.09] bg-[#050506]">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-4 px-6 py-9 text-xs text-[#8C867B] sm:flex-row sm:items-center lg:px-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-sm font-bold text-[#F5F2EB]">
              Fachrezi<span className="text-[#C8C1B2]">.</span>
            </span>
            <span aria-hidden="true">·</span>
            <p>
              © {new Date().getFullYear()} Muhammad Fachrezi ·{' '}
              {locale === 'id'
                ? 'Atelier Desain & Rekayasa Web'
                : 'Interface Design & Web Engineering Atelier'}
            </p>
          </div>
          <a
            href="#beranda"
            className="inline-flex items-center gap-1.5 rounded-full border border-[#F5F2EB]/15 bg-[#F5F2EB]/[0.04] px-4 py-2 font-medium text-[#F5F2EB] transition-colors hover:border-[#F5F2EB]/50 hover:bg-[#F5F2EB]/10"
          >
            <span>{locale === 'id' ? 'Kembali ke Atas' : 'Back to Top'}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
