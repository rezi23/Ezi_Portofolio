import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildCustomProject,
  countProjectsByCategory,
  cycleIndex,
  filterProjects,
  validateContactForm,
  validateNewProject,
} from './portfolioLogic';
import { INITIAL_PROJECTS } from '../data/projects';
import type { ProjectItem } from '../types/portfolio';

const sampleProjects: ProjectItem[] = [
  {
    id: 'pictomatic',
    slug: 'pictomatic',
    indexLabel: '01',
    title: 'Pictomatic',
    subtitle: { id: 'Dashboard Booth', en: 'Booth Dashboard' },
    category: 'dashboard',
    categoryLabel: { id: 'Dashboard', en: 'Dashboard' },
    client: 'Pictomatic',
    year: '2026',
    role: { id: 'Product Designer', en: 'Product Designer' },
    imageUrl: '/assets/aistudio/image_a99dd8a9.png',
    accentHex: '#22C55E',
    featured: true,
    summary: { id: 'Analitik booth photobooth real-time.', en: 'Real-time photobooth analytics.' },
    challenge: { id: 'Data tersebar.', en: 'Scattered data.' },
    solution: { id: 'Satu dashboard terpusat.', en: 'One unified dashboard.' },
    highlights: [],
    stack: ['React', 'TypeScript'],
    metrics: [],
    hotspots: [],
  },
  {
    id: 'bast',
    slug: 'bast-generator',
    indexLabel: '02',
    title: 'Generator BAST Adabtiv',
    subtitle: { id: 'Otomasi BAST', en: 'BAST Automation' },
    category: 'automation',
    categoryLabel: { id: 'Otomasi Dokumen', en: 'Document Automation' },
    client: 'PT Inspirasi Suara Baik',
    year: '2026',
    role: { id: 'Frontend Engineer', en: 'Frontend Engineer' },
    imageUrl: '/assets/aistudio/image_4731c564.png',
    accentHex: '#4F46E5',
    featured: true,
    summary: { id: 'Pembuat BAST & bukti tayang resmi.', en: 'Official BAST & proof-of-post generator.' },
    challenge: { id: 'Manual di Word.', en: 'Manual Word docs.' },
    solution: { id: 'Live A4 preview & export PDF.', en: 'Live A4 preview & PDF export.' },
    highlights: [],
    stack: ['React', 'PDF Export'],
    metrics: [],
    hotspots: [],
  },
];

test('filterProjects filters by category and search query accurately', () => {
  assert.equal(filterProjects(sampleProjects, 'all').length, 2);
  assert.equal(filterProjects(sampleProjects, 'dashboard').length, 1);
  assert.equal(filterProjects(sampleProjects, 'automation')[0].id, 'bast');
  assert.equal(filterProjects(sampleProjects, 'all', 'photobooth')[0].id, 'pictomatic');
  assert.equal(filterProjects(sampleProjects, 'dashboard', 'garuda').length, 0);
});

test('cycleIndex wraps forward and backward safely', () => {
  assert.equal(cycleIndex(0, 3, 1), 1);
  assert.equal(cycleIndex(2, 3, 1), 0);
  assert.equal(cycleIndex(0, 3, -1), 2);
  assert.equal(cycleIndex(1, 0, 1), 0);
});

test('countProjectsByCategory computes accurate category totals', () => {
  const counts = countProjectsByCategory(sampleProjects);
  assert.deepEqual(counts, {
    all: 2,
    dashboard: 1,
    automation: 1,
    'web-app': 0,
  });
});

test('validateContactForm rejects invalid input and accepts complete input', () => {
  const bad = validateContactForm(
    { name: 'A', email: 'not-an-email', projectType: 'Web App', budget: '', message: 'pendek' },
    'id'
  );
  assert.equal(bad.isValid, false);
  assert.ok(bad.errors.name);
  assert.ok(bad.errors.email);
  assert.ok(bad.errors.message);

  const good = validateContactForm(
    {
      name: 'Raka Pratama',
      email: 'raka@studio.id',
      projectType: 'Web App',
      budget: 'Rp 15jt+',
      message: 'Halo, saya butuh redesign dashboard operasional kami.',
    },
    'id'
  );
  assert.equal(good.isValid, true);
  assert.deepEqual(good.errors, {});
});

test('validateNewProject and buildCustomProject create clean project records', () => {
  const invalid = validateNewProject(
    { title: '', client: '', year: '26', category: 'web-app', summary: 'hi', stackText: '', imageUrl: '' },
    'id'
  );
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.title);
  assert.ok(invalid.errors.client);
  assert.ok(invalid.errors.year);
  assert.ok(invalid.errors.summary);

  const validInput = {
    title: 'Kopi Kita POS',
    client: 'Kopi Kita',
    year: '2026',
    category: 'web-app' as const,
    summary: 'Aplikasi kasir dan manajemen inventaris kedai kopi multi-cabang.',
    stackText: 'React, Tailwind, Vite',
    imageUrl: '',
    liveUrl: 'https://example.com',
  };
  assert.equal(validateNewProject(validInput, 'id').isValid, true);

  const built = buildCustomProject(validInput, 3);
  assert.equal(built.indexLabel, '04');
  assert.equal(built.title, 'Kopi Kita POS');
  assert.deepEqual(built.stack, ['React', 'Tailwind', 'Vite']);
  assert.equal(built.isCustom, true);
});

test('Pictomatic project includes all 7 operational & creative modules with hotspots', () => {
  const pictomatic = INITIAL_PROJECTS.find((p) => p.id === 'pictomatic-dashboard');
  assert.ok(pictomatic, 'Pictomatic project should exist');
  assert.ok(pictomatic.modules, 'Pictomatic modules should be defined');
  assert.equal(pictomatic.modules.length, 7);

  const expectedModuleIds = [
    'overview',
    'statistics',
    'transaction',
    'kasir',
    'frame',
    'frame-gif',
    'sticker',
  ];
  assert.deepEqual(
    pictomatic.modules.map((m) => m.id),
    expectedModuleIds
  );

  for (const mod of pictomatic.modules) {
    assert.ok(mod.title.id.length > 10);
    assert.ok(mod.description.id.length > 40);
    assert.ok(mod.capabilities.length >= 3);
    assert.ok(mod.hotspots.length >= 3);
  }
});
