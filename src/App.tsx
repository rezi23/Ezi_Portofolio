import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { AddProjectModal } from './components/AddProjectModal';
import { CapabilitiesProcess } from './components/CapabilitiesProcess';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { MarqueeDivider } from './components/MarqueeDivider';
import { Navbar } from './components/Navbar';
import { WorksSection } from './components/WorksSection';
import { INITIAL_PROJECTS } from './data/projects';
import type { Locale, NewProjectInput, ProjectItem } from './types/portfolio';
import { buildCustomProject, cycleIndex } from './utils/portfolioLogic';

const STORAGE_KEY = 'fachrezi_portfolio_custom_projects_v1';

function loadSavedCustomProjects(): ProjectItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function App() {
  const [locale, setLocale] = useState<Locale>('id');
  const [customProjects, setCustomProjects] = useState<ProjectItem[]>(() =>
    loadSavedCustomProjects()
  );
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(null);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('beranda');

  const allProjects = [...INITIAL_PROJECTS, ...customProjects];
  const selectedIndex = allProjects.findIndex((p) => p.id === selectedProjectId);
  const selectedProject = selectedIndex >= 0 ? allProjects[selectedIndex] : null;

  const handleOpenProjectModal = (project: ProjectItem, moduleId?: string) => {
    setSelectedProjectId(project.id);
    setSelectedModuleId(moduleId ?? project.modules?.[0]?.id ?? null);
  };

  // Scroll progress hairline bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001,
  });

  // Persist custom projects
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(customProjects));
    } catch {
      // Storage quota fallback silently ignored
    }
  }, [customProjects]);

  // Lightweight IntersectionObserver for active nav indicator
  useEffect(() => {
    const sectionIds = ['beranda', 'karya', 'kapabilitas', 'proses', 'kontak'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToElement = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAddProject = (input: NewProjectInput) => {
    const created = buildCustomProject(input, allProjects.length);
    setCustomProjects((prev) => [...prev, created]);
  };

  const handleDeleteCustomProject = (id: string) => {
    setCustomProjects((prev) => prev.filter((item) => item.id !== id));
    if (selectedProjectId === id) {
      setSelectedProjectId(null);
    }
  };

  const handleCycleModal = (delta: number) => {
    if (selectedIndex < 0 || allProjects.length === 0) return;
    const nextIdx = cycleIndex(selectedIndex, allProjects.length, delta);
    const nextProj = allProjects[nextIdx];
    setSelectedProjectId(nextProj.id);
    setSelectedModuleId(nextProj.modules?.[0]?.id ?? null);
  };

  return (
    <div className="min-h-screen bg-[#050506] text-[#F5F2EB] selection:bg-[#F5F2EB] selection:text-[#050506]">
      {/* Scroll Progress Broken-White Hairline */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="btn-gold-luxury fixed top-0 right-0 left-0 z-50 h-[2px] origin-left"
      />

      <Navbar
        locale={locale}
        activeSection={activeSection}
        onNavigateContact={() => scrollToElement('kontak')}
      />

      <main>
        <HeroSection
          locale={locale}
          onToggleLocale={setLocale}
          projects={allProjects}
          onInspectProject={handleOpenProjectModal}
          onExploreWorks={() => scrollToElement('karya')}
        />

        <MarqueeDivider locale={locale} />

        <WorksSection
          locale={locale}
          projects={allProjects}
          onSelectProject={handleOpenProjectModal}
          onOpenAddModal={() => setAddModalOpen(true)}
          onDeleteCustomProject={handleDeleteCustomProject}
        />

        <CapabilitiesProcess locale={locale} />

        <ContactSection locale={locale} />
      </main>

      <CaseStudyModal
        project={selectedProject}
        initialModuleId={selectedModuleId}
        locale={locale}
        onClose={() => {
          setSelectedProjectId(null);
          setSelectedModuleId(null);
        }}
        onNavigate={handleCycleModal}
        totalProjects={allProjects.length}
      />

      <AddProjectModal
        isOpen={addModalOpen}
        locale={locale}
        onClose={() => setAddModalOpen(false)}
        onAddProject={handleAddProject}
      />
    </div>
  );
}
