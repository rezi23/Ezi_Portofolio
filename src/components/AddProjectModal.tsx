import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import { Upload, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import type { Locale, NewProjectInput, ProjectCategory } from '../types/portfolio';
import { validateNewProject } from '../utils/portfolioLogic';

interface AddProjectModalProps {
  isOpen: boolean;
  locale: Locale;
  onClose: () => void;
  onAddProject: (input: NewProjectInput) => void;
}

const DEFAULT_FORM: NewProjectInput = {
  title: '',
  client: '',
  year: '2026',
  category: 'web-app',
  summary: '',
  stackText: 'React, TypeScript, Tailwind CSS',
  imageUrl: '',
  liveUrl: '',
};

export function AddProjectModal({
  isOpen,
  locale,
  onClose,
  onAddProject,
}: AddProjectModalProps) {
  const [form, setForm] = useState<NewProjectInput>(DEFAULT_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<'title' | 'client' | 'summary' | 'year', string>>
  >({});
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setForm((prev) => ({ ...prev, imageUrl: reader.result as string }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validateNewProject(form, locale);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    onAddProject(form);
    setForm(DEFAULT_FORM);
    setFileName('');
    setErrors({});
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-project-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="luxury-surface relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-[#F5F2EB]/20 bg-[#0A0A0E] p-6 sm:p-7"
          >
            <div
              aria-hidden="true"
              className="gold-hairline pointer-events-none absolute top-0 inset-x-10 h-[1px]"
            />
            <div className="flex items-start justify-between gap-4 border-b border-[#F5F2EB]/[0.09] pb-4">
              <div>
                <h2 id="add-project-title" className="font-display text-xl font-bold text-[#F5F2EB]">
                  {locale === 'id' ? 'Tambah Karya ke Portofolio' : 'Add Project to Portfolio'}
                </h2>
                <p className="mt-1 text-xs text-[#A8A298]">
                  {locale === 'id'
                    ? 'Tersimpan otomatis di browser Anda sehingga langsung tampil di galeri.'
                    : 'Saved locally in your browser and displayed immediately in the gallery.'}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={
                  locale === 'id' ? 'Tutup formulir tambah karya' : 'Close add project form'
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#F5F2EB]/15 text-[#D6D0C4] hover:bg-[#F5F2EB]/5 hover:text-[#F5F2EB]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="proj-title"
                    className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                  >
                    {locale === 'id' ? 'Nama Karya *' : 'Project Title *'}
                  </label>
                  <input
                    id="proj-title"
                    type="text"
                    value={form.title}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, title: e.target.value }));
                      setErrors((prev) => ({ ...prev, title: undefined }));
                    }}
                    placeholder="Contoh: Sistem Kasir Kopi"
                    className="min-h-[42px] w-full rounded-lg border border-[#F5F2EB]/15 bg-[#121217] px-3.5 py-2 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/60 focus:outline-none"
                  />
                  {errors.title && <p className="mt-1 text-xs text-red-400">{errors.title}</p>}
                </div>

                <div>
                  <label
                    htmlFor="proj-client"
                    className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                  >
                    {locale === 'id' ? 'Klien / Brand *' : 'Client / Brand *'}
                  </label>
                  <input
                    id="proj-client"
                    type="text"
                    value={form.client}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, client: e.target.value }));
                      setErrors((prev) => ({ ...prev, client: undefined }));
                    }}
                    placeholder="Contoh: PT Kreasi Digital"
                    className="min-h-[42px] w-full rounded-lg border border-[#F5F2EB]/15 bg-[#121217] px-3.5 py-2 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/60 focus:outline-none"
                  />
                  {errors.client && <p className="mt-1 text-xs text-red-400">{errors.client}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="proj-category"
                    className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                  >
                    {locale === 'id' ? 'Kategori' : 'Category'}
                  </label>
                  <select
                    id="proj-category"
                    value={form.category}
                    onChange={(e) =>
                      setForm((prev) => ({
                        ...prev,
                        category: e.target.value as Exclude<ProjectCategory, 'all'>,
                      }))
                    }
                    className="min-h-[42px] w-full rounded-lg border border-[#F5F2EB]/15 bg-[#121217] px-3.5 py-2 text-sm text-[#F5F2EB] focus:border-[#F5F2EB]/60 focus:outline-none"
                  >
                    <option value="web-app">
                      {locale === 'id' ? 'Aplikasi Web & UI' : 'Web App & UI'}
                    </option>
                    <option value="dashboard">
                      {locale === 'id' ? 'Dashboard & Data' : 'Dashboard & Data'}
                    </option>
                    <option value="automation">
                      {locale === 'id' ? 'Otomasi Dokumen' : 'Document Automation'}
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="proj-year"
                    className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                  >
                    {locale === 'id' ? 'Tahun *' : 'Year *'}
                  </label>
                  <input
                    id="proj-year"
                    type="text"
                    value={form.year}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, year: e.target.value }));
                      setErrors((prev) => ({ ...prev, year: undefined }));
                    }}
                    className="min-h-[42px] w-full rounded-lg border border-[#F5F2EB]/15 bg-[#121217] px-3.5 py-2 font-mono text-sm text-[#F5F2EB] focus:border-[#F5F2EB]/60 focus:outline-none"
                  />
                  {errors.year && <p className="mt-1 text-xs text-red-400">{errors.year}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="proj-summary"
                  className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                >
                  {locale === 'id' ? 'Ringkasan Proyek *' : 'Project Summary *'}
                </label>
                <textarea
                  id="proj-summary"
                  rows={3}
                  value={form.summary}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, summary: e.target.value }));
                    setErrors((prev) => ({ ...prev, summary: undefined }));
                  }}
                  placeholder={
                    locale === 'id'
                      ? 'Jelaskan secara singkat apa yang dibangun dan dampaknya...'
                      : 'Briefly describe what you designed or engineered...'
                  }
                  className="w-full rounded-lg border border-[#F5F2EB]/15 bg-[#121217] px-3.5 py-2.5 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#F5F2EB]/60 focus:outline-none"
                />
                {errors.summary && <p className="mt-1 text-xs text-red-400">{errors.summary}</p>}
              </div>

              <div>
                <label
                  htmlFor="proj-stack"
                  className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                >
                  {locale === 'id'
                    ? 'Teknologi (pisahkan dengan koma)'
                    : 'Tech Stack (comma separated)'}
                </label>
                <input
                  id="proj-stack"
                  type="text"
                  value={form.stackText}
                  onChange={(e) => setForm((prev) => ({ ...prev, stackText: e.target.value }))}
                  className="min-h-[42px] w-full rounded-lg border border-[#F5F2EB]/15 bg-[#121217] px-3.5 py-2 text-sm text-[#F5F2EB] focus:border-[#F5F2EB]/60 focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="proj-image-file"
                  className="mb-1.5 block text-xs font-medium text-[#D6D0C4]"
                >
                  {locale === 'id'
                    ? 'Unggah Screenshot UI (Opsional)'
                    : 'Upload UI Screenshot (Optional)'}
                </label>
                <label
                  htmlFor="proj-image-file"
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-[#F5F2EB]/25 bg-[#121217] px-4 py-3 text-xs text-[#D6D0C4] transition-colors hover:border-[#F5F2EB]/60"
                >
                  <span className="inline-flex items-center gap-2 truncate">
                    <Upload className="h-4 w-4 shrink-0 text-[#F5F2EB]" aria-hidden="true" />
                    <span className="truncate">
                      {fileName ||
                        (locale === 'id'
                          ? 'Pilih gambar PNG/JPG dari komputer...'
                          : 'Choose a PNG/JPG screenshot...')}
                    </span>
                  </span>
                  <span className="font-medium text-[#F5F2EB] shrink-0">
                    {locale === 'id' ? 'Pilih File' : 'Browse'}
                  </span>
                  <input
                    id="proj-image-file"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only"
                  />
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-[#F5F2EB]/[0.09] pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-[42px] rounded-lg border border-[#F5F2EB]/15 px-4 py-2 text-sm font-medium text-[#D6D0C4] hover:bg-[#F5F2EB]/5"
                >
                  {locale === 'id' ? 'Batal' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="btn-gold-luxury min-h-[42px] rounded-lg px-5 py-2 text-sm font-bold text-[#050506]"
                >
                  {locale === 'id' ? 'Simpan Karya' : 'Save Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
