import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Activity,
  Terminal,
  Search,
  ArrowRight,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Sun,
  Moon,
  Monitor,
  Command,
  Check,
  Globe,
  Layers,
  FolderGit2,
  Briefcase,
  Code2,
  BookOpen,
  Mail,
  Cpu,
  Radio,
  ExternalLink,
  HomeIcon,
  FileText,
  FlaskConical,
  NotebookPen,
  BriefcaseBusiness,
  Home,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

// ============================================================================
// 1. TYPES & CONFIGURATION
// ============================================================================

export type ThemeMode = "light" | "dark" | "system";

export interface NavSection {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

/** this nav secction is for next phase */
// export const NAV_SECTIONS: NavSection[] = [
//   {
//     id: "home",
//     label: "Home",
//     href: "/",
//     icon: Home,
//   },
//   {
//     id: "projects",
//     label: "Projects",
//     href: "projects",
//     icon: FolderGit2,
//   },
//   {
//     id: "case-studies",
//     label: "Case Studies",
//     href: "#case-studies",
//     icon: BriefcaseBusiness,
//   },
//   {
//     id: "architecture",
//     label: "Architecture",
//     href: "#architecture",
//     icon: Cpu,
//   },
//   {
//     id: "engineering-notes",
//     label: "Engineering Notes",
//     href: "#engineering-notes",
//     icon: NotebookPen,
//   },
//   {
//     id: "playground",
//     label: "Playground",
//     href: "#playground",
//     icon: FlaskConical,
//   },
//   {
//     id: "contact",
//     label: "Contact",
//     href: "#contact",
//     icon: Mail,
//   },
// ];

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
   {
    id: "about",
    label: "About",
    href: "about-me",
    icon: FolderGit2,
  },
  {
    id: "projects",
    label: "Projects",
    href: "projects",
    icon: FolderGit2,
  },
  {
    id: "contact",
    label: "Contact",
    href: "contact",
    icon: Mail,
  },
];

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 origin-left z-[120]"
      style={{ scaleX }}
    />
  );
};

// ============================================================================
// 3. TELEMETRY & SYSTEM STATUS
// ============================================================================

const SystemTelemetry: React.FC = () => {
  const [latency, setLatency] = useState<number>(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 12); // Simulated live ping
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2.5  text-[10px] tracking-tight">
      {/* Status Badge */}
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400 font-semibold">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span>SYSTEM ONLINE</span>
      </div>

      {/* Latency Telemetry */}
      <div className="hidden lg:flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
        <Radio className="w-3 h-3 text-cyan-500 animate-pulse" />
        <span>us-east-1</span>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
          {latency}ms
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 4. SEGMENTED THEME TOGGLE
// ============================================================================

const SegmentedThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const saved = (localStorage.getItem("app-theme") as ThemeMode) || "light";
    applyTheme(saved);
  }, []);

  const applyTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);

    const root = document.documentElement;
    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);
  };

  const options: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: "light", label: "Light", icon: <Sun size={11} /> },
    { id: "dark", label: "Dark", icon: <Moon size={11} /> },
    { id: "system", label: "Auto", icon: <Monitor size={11} /> },
  ];

  return (
    <div className="flex items-center p-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      {options.map((opt) => {
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => applyTheme(opt.id)}
            className={`relative flex items-center gap-1 px-2 py-1 text-[10px]  font-medium transition-colors z-10 ${
              isActive
                ? "text-zinc-950 dark:text-white"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
            title={`Set theme to ${opt.label}`}
          >
            {isActive && (
              <motion.div
                layoutId="theme-active-pill"
                className="absolute inset-0 bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 rounded-[5px] shadow-sm"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              {opt.icon}
              <span className="hidden xl:inline">{opt.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

// ============================================================================
// 5. RESUME DOWNLOAD BUTTON
// ============================================================================

const ResumeButton: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloading) return;

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Trigger native download action
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Parthiban_Backend_Engineeer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setDownloaded(false), 3000);
    }, 1200);
  };

  return (
    <button
      onClick={handleDownload}
      className="relative group overflow-hidden px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border border-zinc-800 dark:border-zinc-200  text-[11px] font-semibold tracking-tight transition-all duration-200 hover:ring-2 hover:ring-emerald-500/40 active:scale-[0.98]"
    >
      <div className="flex items-center gap-1.5">
        <AnimatePresence mode="wait" initial={false}>
          {downloaded ? (
            <motion.span
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-emerald-400 dark:text-emerald-600"
            >
              <Check size={12} />
            </motion.span>
          ) : downloading ? (
            <motion.span
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            >
              <Activity
                size={12}
                className="text-cyan-400 dark:text-cyan-600"
              />
            </motion.span>
          ) : (
            <motion.span
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <Download size={12} />
            </motion.span>
          )}
        </AnimatePresence>
        <span>
          {downloaded ? "Saved!" : downloading ? "Fetching..." : "Resume.pdf"}
        </span>
      </div>
    </button>
  );
};

// ============================================================================
// 6. RAYCAST-STYLE COMMAND PALETTE (⌘K)
// ============================================================================

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const CommandPalette = ({
  isOpen,
  onClose,
  activeSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // SCROLL LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case the component unmounts while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredSections = NAV_SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = useCallback(
    (href: string) => {
      onClose();
      window.location.hash = href;
    },
    [onClose],
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredSections.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredSections.length) %
            (filteredSections.length || 1),
        );
      } else if (e.key === "Enter" && filteredSections[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredSections[selectedIndex].href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredSections, selectedIndex, handleSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop Overlay - Updated for Light/Dark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-500/20 dark:bg-zinc-950/70 backdrop-blur-md"
          />

          {/* Raycast Modal Window - Updated for Light/Dark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl text-zinc-900 dark:text-zinc-100 font-sans z-10"
          >
            {/* Search Input Bar */}
            {/* <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
              <Search size={16} className="text-zinc-400 dark:text-zinc-500" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section..."
                className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 outline-none font-medium"
              />
              <span className="text-[10px] text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                ESC
              </span>
            </div> */}

            {/* List Items */}
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
              <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                Navigation Options
              </div>

              {filteredSections.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        size={16}
                        className={
                          isSelected
                            ? "text-emerald-500"
                            : "text-zinc-400 dark:text-zinc-500"
                        }
                      />
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 leading-none">
                          active
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 text-xs">
                      <span>Jump</span>
                      <ArrowRight size={12} />
                    </div>
                  </button>
                );
              })}

              {filteredSections.length === 0 && (
                <div className="p-8 text-center text-sm text-zinc-500">
                  No matching section found for "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/50 text-[11px] text-zinc-500">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="text-zinc-400 dark:text-zinc-500">↑↓</kbd>{" "}
                  Navigate
                </span>
                <span>
                  <kbd className="text-zinc-400 dark:text-zinc-500">↵</kbd>{" "}
                  Select
                </span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-500 font-semibold">
                PARTHIBAN ARCHITECTURE CORE
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// 7. MOBILE SLIDE-OVER DRAWER
// ============================================================================

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  // SCROLL LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case the component unmounts while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] md:hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col shadow-2xl text-zinc-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2  text-xs font-bold tracking-tight">
                <Terminal size={14} className="text-emerald-500" />
                <span>SYSTEM_MENU.SH</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-md border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="mb-6 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="font-bold text-sm text-white">PARTHIBAN</div>
              <div className="text-[11px]  text-zinc-400 mt-0.5">
                Backend Systems Engineer
              </div>
              <div className="text-[10px]  text-emerald-400 mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Distributed Systems & Infra</span>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col gap-1 mb-auto">
              {NAV_SECTIONS.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                
                return (
                  <NavLink 
                    key={section.id}
                    to={section.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-zinc-800 text-emerald-400 border border-zinc-700/50"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className={
                          isActive ? "text-emerald-400" : "text-zinc-500"
                        }
                      />
                      <span>{section.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    )}
                  </NavLink >
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs  text-zinc-400">Appearance</span>
                <SegmentedThemeToggle />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs  text-zinc-300 hover:text-white"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs  text-zinc-300 hover:text-white"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-zinc-950  text-xs font-bold hover:bg-emerald-400 transition-colors"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// 8. MAIN NAVBAR CONTROL CENTER
// ============================================================================

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Route-aware active section: derive the active nav item from the URL
  useEffect(() => {
    const path = location.pathname;
    const hash = location.hash;

    const match = NAV_SECTIONS.find((section) => {
      if (section.href.startsWith("#")) {
        return path === "/" && hash === section.href;
      }
      const target = section.href === "/" ? "/" : `/${section.href.replace(/^\//, "")}`;
      return path === target;
    });

    setActiveSection(match ? match.id : "home");
  }, [location]);

  // Scroll shrink observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section Observer (IntersectionObserver)
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -60% 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    NAV_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <ScrollProgressBar />

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        activeSection={activeSection}
      />

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#09090B]/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-md py-1.5"
            : "bg-white/40 dark:bg-[#09090B]/40 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          {/* ========================================================================= */}
          {/* ROW 1: TOP STATUS & BRAND BAR                                            */}
          {/* ========================================================================= */}
          <div className="flex items-center justify-between">
            {/* Left: System Status Telemetry */}
            <div className="flex items-center gap-4">
              <SystemTelemetry />
            </div>

            {/* Center: Brand Identity */}
            <div className="flex flex-col items-center ">
              <a
                href="#"
                className="group flex items-center gap-1.5 font-sans font-bold text-zinc-900 dark:text-zinc-100 tracking-tight transition-transform"
              >
                <motion.span
                  animate={{ scale: isScrolled ? 0.92 : 1 }}
                  className="text-[10px] md:text-xs font-black uppercase tracking-tighter mono cursor-pointer leading-none text-black dark:text-white text-center"
                >
                  PARTHIBAN_ARCHITECTURE
                </motion.span>
              </a>
              <span className="hidden sm:block text-[9px]  tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                Building Scalable Infrastructure
              </span>
            </div>

            {/* <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter mono glitch-text cursor-pointer leading-none text-black dark:text-white text-center">
                PARTHIBAN_ARCHITECTURE_CORE_v2.5
              </span>
              <span className="text-[7px] md:text-[8px] mono text-black/20 dark:text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em] mt-1 whitespace-nowrap">
                Industrial Backend Engineer
              </span> */}

            {/* Right: Actions, Socials & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Build Metadata Info */}
              {/* <div className="hidden xl:flex flex-col items-end  text-[9px] text-zinc-400 dark:text-zinc-500 border-r border-zinc-200 dark:border-zinc-800 pr-3">
                <span className="text-zinc-700 dark:text-zinc-300 font-semibold">
                  Build v2.0.0
                </span>
                <span>Last deploy: 2m ago</span>
              </div> */}

              {/* Theme Toggle */}
              <div className="hidden sm:block">
                <SegmentedThemeToggle />
              </div>

              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-1 text-zinc-500 dark:text-zinc-400 pl-1 border-l border-zinc-200 dark:border-zinc-800">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
              </div>

              {/* Resume Download */}
              <div className="hidden sm:block border-l border-zinc-200 dark:border-zinc-800 pl-2">
                <ResumeButton />
              </div>

              {/* Mobile Drawer Trigger Button */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                aria-label="Open Navigation Menu"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ROW 2: CENTERED SECTION NAVIGATION BAR                                    */}
          {/* ========================================================================= */}
          <div className="hidden md:flex items-center justify-center pt-2 border-t border-zinc-200/50 dark:border-zinc-800/40">
            <nav className="flex items-center gap-1 sm:gap-2 relative">
              {NAV_SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                const Icon = section.icon;

                return section.href.startsWith("#") ? (
                  <a
                    key={section.id}
                    href={section.href}
                    className={`relative px-3 py-1.5 text-xs tracking-tight transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? "text-zinc-950 dark:text-white font-bold"
                        : "dark:text-zinc-300 font-light hover:text-zinc-600 hover:font-medium dark:hover:text-zinc-300"
                    }`}
                  >
                    <Icon
                      size={13}
                      className={isActive ? "text-emerald-500" : "opacity-60 "}
                    />
                    <span>{section.label}</span>

                    {/* Smooth Animated Active Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-underline"
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                ) : (
                  <NavLink
                    key={section.id}
                    to={section.href}
                    end={section.href === "/"}
                    className={`relative px-3 py-1.5 text-xs tracking-tight transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? "text-zinc-950 dark:text-white font-bold"
                        : "dark:text-zinc-300 font-light hover:text-zinc-600 hover:font-medium dark:hover:text-zinc-300"
                    }`}
                  >
                    <Icon
                      size={13}
                      className={isActive ? "text-emerald-500" : "opacity-60 "}
                    />
                    <span>{section.label}</span>

                    {/* Smooth Animated Active Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-underline"
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </NavLink>
                );
              })}

              {/* Command Palette Hotkey Trigger Button */}
              <button
                onClick={() => setIsPaletteOpen(true)}
                className="group ml-3 flex items-center justify-center lg:justify-between h-8 w-8 lg:w-48 shrink-0 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur lg:px-3 text-sm text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all duration-200"
                title="Open Command Palette (⌘K)"
              >
                <div className="flex items-center gap-2">
                  <Command
                    size={14}
                    className="text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors"
                  />
                  <span className="hidden lg:inline text-xs">
                    Search nodes...
                  </span>
                </div>
                <kbd className="hidden lg:block rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px]  text-zinc-500">
                  ⌘K
                </kbd>
              </button>
            </nav>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
