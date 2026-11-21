export type Locale = 'id' | 'en';

export type ProjectCategory = 'all' | 'dashboard' | 'automation' | 'web-app';

export type ViewMode = 'bento' | 'index';

export interface LocalizedText {
  id: string;
  en: string;
}

export interface ProjectHotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectMetric {
  label: LocalizedText;
  value: string;
}

export interface ProjectModuleScreen {
  id: string;
  tabLabel: LocalizedText;
  badge: LocalizedText;
  title: LocalizedText;
  imageUrl: string;
  description: LocalizedText;
  capabilities: LocalizedText[];
  hotspots: ProjectHotspot[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  indexLabel: string;
  title: string;
  subtitle: LocalizedText;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: LocalizedText;
  client: string;
  year: string;
  role: LocalizedText;
  imageUrl: string;
  accentHex: string;
  featured: boolean;
  summary: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  highlights: LocalizedText[];
  stack: string[];
  metrics: ProjectMetric[];
  hotspots: ProjectHotspot[];
  modules?: ProjectModuleScreen[];
  liveUrl?: string;
  isCustom?: boolean;
}

export interface NewProjectInput {
  title: string;
  client: string;
  year: string;
  category: Exclude<ProjectCategory, 'all'>;
  summary: string;
  stackText: string;
  imageUrl: string;
  liveUrl?: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface ValidationResult<T extends string> {
  isValid: boolean;
  errors: Partial<Record<T, string>>;
}
