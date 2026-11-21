import type {
  ContactFormInput,
  Locale,
  NewProjectInput,
  ProjectCategory,
  ProjectItem,
  ValidationResult,
} from '../types/portfolio';

export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory,
  query = ''
): ProjectItem[] {
  const normalizedQuery = query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'all' || project.category === category;
    if (!matchesCategory) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    const searchable = [
      project.title,
      project.client,
      project.year,
      project.subtitle.id,
      project.subtitle.en,
      project.summary.id,
      project.summary.en,
      ...project.stack,
    ]
      .join(' ')
      .toLowerCase();

    return searchable.includes(normalizedQuery);
  });
}

export function cycleIndex(currentIndex: number, total: number, delta: number): number {
  if (total <= 0) {
    return 0;
  }
  return ((currentIndex + delta) % total + total) % total;
}

export function countProjectsByCategory(
  projects: ProjectItem[]
): Record<ProjectCategory, number> {
  const counts: Record<ProjectCategory, number> = {
    all: projects.length,
    dashboard: 0,
    automation: 0,
    'web-app': 0,
  };

  for (const project of projects) {
    counts[project.category] += 1;
  }

  return counts;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  input: ContactFormInput,
  locale: Locale = 'id'
): ValidationResult<'name' | 'email' | 'message'> {
  const errors: Partial<Record<'name' | 'email' | 'message', string>> = {};

  if (input.name.trim().length < 2) {
    errors.name =
      locale === 'id'
        ? 'Masukkan nama lengkap minimal 2 karakter.'
        : 'Please enter your name (at least 2 characters).';
  }

  if (!EMAIL_PATTERN.test(input.email.trim())) {
    errors.email =
      locale === 'id'
        ? 'Format email tidak valid. Contoh: nama@perusahaan.com'
        : 'Please enter a valid email address.';
  }

  if (input.message.trim().length < 10) {
    errors.message =
      locale === 'id'
        ? 'Ceritakan kebutuhan proyek minimal 10 karakter.'
        : 'Tell me about your project (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function validateNewProject(
  input: NewProjectInput,
  locale: Locale = 'id'
): ValidationResult<'title' | 'client' | 'summary' | 'year'> {
  const errors: Partial<Record<'title' | 'client' | 'summary' | 'year', string>> = {};

  if (input.title.trim().length < 2) {
    errors.title =
      locale === 'id'
        ? 'Judul karya wajib diisi minimal 2 karakter.'
        : 'Project title must be at least 2 characters.';
  }

  if (input.client.trim().length < 2) {
    errors.client =
      locale === 'id'
        ? 'Nama klien atau brand wajib diisi.'
        : 'Client or brand name is required.';
  }

  if (!/^\d{4}$/.test(input.year.trim())) {
    errors.year =
      locale === 'id'
        ? 'Tahun harus 4 digit angka (contoh: 2026).'
        : 'Year must be a 4-digit number (e.g., 2026).';
  }

  if (input.summary.trim().length < 12) {
    errors.summary =
      locale === 'id'
        ? 'Ringkasan proyek minimal 12 karakter.'
        : 'Project summary must be at least 12 characters.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function buildCustomProject(
  input: NewProjectInput,
  existingCount: number
): ProjectItem {
  const cleanTitle = input.title.trim();
  const cleanClient = input.client.trim();
  const cleanSummary = input.summary.trim();
  const cleanYear = input.year.trim();
  const parsedStack = input.stackText
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const categoryLabels: Record<Exclude<ProjectCategory, 'all'>, { id: string; en: string }> = {
    dashboard: { id: 'Dashboard & Analitik', en: 'Dashboard & Analytics' },
    automation: { id: 'Otomasi Dokumen', en: 'Document Automation' },
    'web-app': { id: 'Aplikasi Web & UI', en: 'Web App & UI' },
  };

  const nextNum = String(existingCount + 1).padStart(2, '0');
  const slug = cleanTitle
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  return {
    id: `custom-${slug || 'project'}-${Date.now()}`,
    slug: slug || `project-${nextNum}`,
    indexLabel: nextNum,
    title: cleanTitle,
    subtitle: {
      id: `${categoryLabels[input.category].id} untuk ${cleanClient}`,
      en: `${categoryLabels[input.category].en} for ${cleanClient}`,
    },
    category: input.category,
    categoryLabel: categoryLabels[input.category],
    client: cleanClient,
    year: cleanYear,
    role: {
      id: 'UI/UX Design & Frontend Engineering',
      en: 'UI/UX Design & Frontend Engineering',
    },
    imageUrl: input.imageUrl.trim(),
    accentHex: '#F5F2EB',
    featured: false,
    summary: {
      id: cleanSummary,
      en: cleanSummary,
    },
    challenge: {
      id: `Merancang antarmuka modern dan responsif untuk ${cleanClient} yang mudah digunakan sehari-hari.`,
      en: `Designing a modern, responsive interface for ${cleanClient} built for everyday operational clarity.`,
    },
    solution: {
      id: cleanSummary,
      en: cleanSummary,
    },
    highlights: [
      {
        id: 'Arsitektur antarmuka terstruktur dengan hierarki visual modern.',
        en: 'Structured interface architecture with modern visual hierarchy.',
      },
      {
        id: 'Interaksi cepat dan responsif di desktop maupun perangkat mobile.',
        en: 'Fast, responsive interactions across desktop and mobile devices.',
      },
    ],
    stack: parsedStack.length > 0 ? parsedStack : ['React', 'TypeScript', 'Tailwind CSS'],
    metrics: [
      { label: { id: 'Status', en: 'Status' }, value: 'Live' },
      { label: { id: 'Tahun Rilis', en: 'Release Year' }, value: cleanYear },
    ],
    hotspots: [],
    liveUrl: input.liveUrl?.trim() || undefined,
    isCustom: true,
  };
}
