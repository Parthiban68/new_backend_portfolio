import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Download, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { useLenis } from "lenis/react";
import OptionWheel from "../ui/OptionWheel/OptionWheel";
import ConnectLinks from "./ConnectLinks";

type ThemeMode = "light" | "dark" | "system";

interface NavItem {
  id: string;
  label: string;
  path: string;
  sectionId?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "HOME", path: "/" },
  { id: "about", label: "ABOUT", path: "/about-me" },
  { id: "experience", label: "EXPERIENCE", path: "/about-me", sectionId: "experience" },
  { id: "projects", label: "PROJECTS", path: "/projects" },
  { id: "contact", label: "CONTACT", path: "/contact" },
];

const EASE_OUT: [number, number, number, number] = [0.25, 0.8, 0.25, 1];

interface WheelLayout {
  twoColumn: boolean;
  height: number;
  fontSize: number;
  spacing: number;
  inset: number;
  tilt: number;
  curve: number;
  blur: number;
  smoothing: number;
}

const getWheelLayout = (): WheelLayout => {
  if (typeof window === "undefined") {
    return {
      twoColumn: false,
      height: 360,
      fontSize: 2.2,
      spacing: 1.5,
      inset: 20,
      tilt: 6,
      curve: 0.9,
      blur: 0.5,
      smoothing: 150,
    };
  }

  const width = window.innerWidth;
  const height = window.visualViewport?.height ?? window.innerHeight;
  const rows = Math.max(NAV_ITEMS.length - 1, 1);
  const spacing = width < 480 ? 1.5 : width < 768 ? 1.55 : 1.65;
  const twoColumn = width >= 560 && height < 640;
  const containerHeight = Math.max(
    150,
    Math.min(
      height * (twoColumn || width >= 640 ? 0.72 : 0.64),
      height - (twoColumn ? 190 : width < 640 ? 330 : width < 1024 ? 310 : 190),
      680
    )
  );
  const fontByHeight = (containerHeight * 0.9) / (rows * spacing * 16);
  const fontByWidth =
    width < 360 ? 1.8 : width < 480 ? 2.2 : width < 640 ? 2.8 : width < 768 ? 3.2 : width < 1024 ? 3.7 : width < 1280 ? 4.1 : 4.6;
  const fontSize = Math.max(1.4, Math.min(fontByWidth, fontByHeight));
  const inset =
    width < 360 ? 14 : width < 480 ? 20 : width < 640 ? 34 : width < 768 ? 52 : width < 1024 ? 80 : width < 1280 ? 130 : 190;

  return {
    twoColumn,
    height: Math.round(containerHeight),
    fontSize,
    spacing,
    inset,
    tilt: width < 640 ? 6 : 7,
    curve: width < 640 ? 0.85 : 1,
    blur: width < 640 ? 0.4 : 0.6,
    smoothing: width < 640 ? 150 : 170,
  };
};

const useWheelLayout = () => {
  const [layout, setLayout] = useState<WheelLayout>(getWheelLayout);

  useEffect(() => {
    const update = () => setLayout(getWheelLayout());
    window.addEventListener("resize", update, { passive: true });
    window.addEventListener("orientationchange", update);
    window.visualViewport?.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  return layout;
};

const getStoredTheme = (): ThemeMode => {
  if (typeof window === "undefined") return "system";
  const saved = localStorage.getItem("app-theme");
  return saved === "light" || saved === "dark" || saved === "system" ? saved : "system";
};

const resolveIsDark = (mode: ThemeMode) =>
  mode === "dark" ||
  (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

const applyTheme = (newTheme: ThemeMode, persist = false) => {
  if (typeof document === "undefined") return false;
  if (persist) {
    try {
      localStorage.setItem("app-theme", newTheme);
    } catch {
      // Ignore storage failures
    }
  }

  const root = document.documentElement;
  const isDark = resolveIsDark(newTheme);

  root.classList.toggle("dark", isDark);
  root.dataset.theme = isDark ? "dark" : "light";
  return isDark;
};

const THEME_OPTIONS: { id: ThemeMode; label: string; icon: typeof Sun }[] = [
  { id: "light", label: "Light", icon: Sun },
  { id: "dark", label: "Dark", icon: Moon },
  { id: "system", label: "Auto", icon: Monitor },
];

function SegmentedThemeToggle({
  theme,
  onSelect,
}: {
  theme: ThemeMode;
  onSelect: (theme: ThemeMode) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Color theme"
      className="flex items-center gap-0.5 rounded-full border border-[#d9d5cb] bg-white/70 p-0.5 backdrop-blur-sm dark:border-[#2c2a24] dark:bg-white/[0.06]"
    >
      {THEME_OPTIONS.map(({ id, label, icon: Icon }) => {
        const isActive = theme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            aria-pressed={isActive}
            title={`Set theme to ${label}`}
            className={`flex h-8 items-center gap-1.5 rounded-full px-2.5 text-[10px] font-medium transition-colors ${
              isActive
                ? "bg-[#15130d] text-[#f7f5f1] dark:bg-[#f5f3ee] dark:text-[#15130d]"
                : "text-[#8a8578] hover:text-[#15130d] dark:text-[#8a8578] dark:hover:text-[#f5f3ee]"
            }`}
          >
            <Icon size={12} />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default function EditorialNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [pendingNav, setPendingNav] = useState<NavItem | null>(null);
  const [theme, setTheme] = useState<ThemeMode>(getStoredTheme);
  const [isDarkTheme, setIsDarkTheme] = useState(() => resolveIsDark(getStoredTheme()));
  const wheelLayout = useWheelLayout();
  const menuLayoutClass = wheelLayout.twoColumn
    ? "grid grid-cols-[minmax(170px,0.6fr)_minmax(0,1.4fr)] grid-rows-[auto_minmax(0,1fr)_auto] items-center gap-x-6 gap-y-4 px-6 pt-16"
    : "flex flex-col items-center justify-center gap-5 px-4 pt-14 sm:gap-8 sm:pt-20";
  const navigate = useNavigate();
  const location = useLocation();
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => NAV_ITEMS.map((item) => item.label), []);

  const getCurrentIndex = useCallback(() => {
    const path = location.pathname;
    const hash = location.hash;

    if (path === "/") return NAV_ITEMS.findIndex((item) => item.id === "home");
    if (path === "/about-me") {
      if (hash === "#experience") return NAV_ITEMS.findIndex((item) => item.id === "experience");
      return NAV_ITEMS.findIndex((item) => item.id === "about");
    }
    if (path === "/projects") return NAV_ITEMS.findIndex((item) => item.id === "projects");
    if (path === "/contact") return NAV_ITEMS.findIndex((item) => item.id === "contact");
    return 0;
  }, [location.hash, location.pathname]);

  useEffect(() => {
    applyTheme(theme);

    if (theme !== "system") return;

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => setIsDarkTheme(applyTheme("system"));

    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, [theme]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (lenis) lenis.stop();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }
      if (event.key === "Tab" && overlayRef.current) {
        const focusableElements = overlayRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.setTimeout(() => closeRef.current?.focus(), shouldReduceMotion ? 0 : 160);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      if (lenis) lenis.start();
    };
  }, [isOpen, lenis, shouldReduceMotion]);

  const handleOpen = useCallback(() => {
    setSelectedIndex(getCurrentIndex());
    setIsOpen(true);
  }, [getCurrentIndex]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), shouldReduceMotion ? 0 : 200);
  }, [shouldReduceMotion]);

  const selectTheme = useCallback((next: ThemeMode) => {
    setTheme(next);
    setIsDarkTheme(applyTheme(next, true));
  }, []);

  const navigateToItem = useCallback(
    (item: NavItem) => {
      if (item.sectionId && item.path === location.pathname) {
        const target = document.getElementById(item.sectionId);
        if (target) {
          if (lenis) {
            lenis.scrollTo(target, { offset: -140 });
          } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          handleClose();
          return;
        }
      }

      if (item.sectionId && item.path !== location.pathname) {
        navigate(item.path);
        setPendingNav(item);
        handleClose();
        return;
      }

      navigate(item.path);
      handleClose();
    },
    [handleClose, lenis, location.pathname, navigate]
  );

  useEffect(() => {
    if (!pendingNav || !pendingNav.sectionId) return;
    if (location.pathname !== pendingNav.path) return;

    const target = document.getElementById(pendingNav.sectionId);
    if (!target) return;

    const timeout = window.setTimeout(() => {
      if (lenis) {
        lenis.scrollTo(target, { offset: -140 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setPendingNav(null);
    }, 220);

    return () => window.clearTimeout(timeout);
  }, [lenis, location.pathname, pendingNav]);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.6,
        ease: EASE_OUT,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
        ease: EASE_OUT,
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.7,
        delay: shouldReduceMotion ? 0 : 0.08,
        ease: EASE_OUT,
      },
    },
    exit: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 16,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.4,
        ease: EASE_OUT,
      },
    },
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[90] px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8 lg:pt-5">
        <div className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between rounded-2xl border border-[#d3d0ca] bg-white/95 px-4 shadow-[0_8px_30px_rgba(21,19,13,0.06)] backdrop-blur-md dark:border-white/10 dark:bg-[#111009]/95 sm:h-20 sm:px-6 lg:h-[70px] lg:px-8">
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault();
              if (location.pathname === "/") {
                if (lenis) {
                  lenis.scrollTo(0, { immediate: true });
                } else {
                  window.scrollTo({ top: 0, behavior: "auto" });
                }
                return;
              }
              navigate("/");
              handleClose();
            }}
            className="shrink-0 font-['Outfit'] text-[13px] font-black uppercase tracking-[0.2em] text-[#15130d] transition-opacity hover:opacity-70 dark:text-[#f5f3ee] sm:text-base sm:tracking-[0.24em]"
          >
            PARTHIBAN
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/resume.pdf"
              download="Parthiban_Software_Engineer.pdf"
              aria-label="Download Parthiban's resume"
              className="flex h-9 items-center gap-1.5 rounded-full border border-[#15130d] bg-white px-3.5 font-['Outfit'] text-[10px] font-black uppercase tracking-[0.2em] text-[#15130d] transition-colors hover:bg-[#15130d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15130d] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-[#f5f3ee] dark:bg-transparent dark:text-[#f5f3ee] dark:hover:bg-[#f5f3ee] dark:hover:text-[#15130d] dark:focus-visible:ring-[#f5f3ee] dark:focus-visible:ring-offset-[#111009] sm:h-10 sm:px-5 sm:text-[11px] sm:tracking-[0.24em]"
            >
              <span className="hidden sm:inline">RESUME</span>
              <Download size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>

            <button
              ref={triggerRef}
              type="button"
              onClick={handleOpen}
              aria-expanded={isOpen}
              aria-haspopup="dialog"
              aria-controls="editorial-nav-menu"
              aria-label="Open navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#15130d] transition-colors hover:bg-[#15130d]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15130d] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-[#f5f3ee] dark:hover:bg-white/10 dark:focus-visible:ring-[#f5f3ee] dark:focus-visible:ring-offset-[#111009] sm:h-10 sm:w-10"
            >
              <Menu size={22} strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={overlayRef}
            id="editorial-nav-menu"
            className="fixed inset-0 z-[200] bg-white text-[#15130d] dark:bg-[#0b0a07] dark:text-[#f5f3ee]"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                handleClose();
              }
            }}
          >
            <div className="absolute right-3 top-3 z-30 flex items-center gap-2 sm:right-6 sm:top-6 lg:right-10 lg:top-8">
              <SegmentedThemeToggle theme={theme} onSelect={selectTheme} />
              <button
                ref={closeRef}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClose();
                }}
                aria-label="Close navigation menu"
                title="Close menu"
                className="flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-[#d9d5cb] bg-white/70 px-2.5 text-[#15130d] transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#15130d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f1] dark:border-[#2c2a24] dark:bg-white/5 dark:text-[#f5f3ee] dark:hover:bg-white/10 dark:focus-visible:ring-[#f5f3ee] dark:focus-visible:ring-offset-[#0b0a07]"
              >
                <span className="hidden font-['Outfit'] text-[10px] font-black uppercase tracking-[0.3em] sm:inline">
                  Close
                </span>
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <motion.div
              className={`relative mx-auto h-full w-full max-w-[1500px] pb-4 lg:grid lg:grid-cols-[minmax(280px,0.9fr)_minmax(0,2.1fr)] lg:grid-rows-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-x-12 lg:gap-y-5 lg:px-12 lg:pt-20 ${menuLayoutClass}`}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="order-1 col-span-2 row-start-1 flex flex-col items-center gap-2 text-center lg:order-none">
                <span className="font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.5em] text-[#8a8578] dark:text-[#b9b3a3] sm:text-[10px] sm:tracking-[0.6em]">
                  NAVIGATION
                </span>
                <span className="max-w-[70vw] truncate font-['JetBrains_Mono'] text-[9px] uppercase tracking-[0.35em] text-[#8a8578] dark:text-[#b9b3a3] sm:text-[10px] sm:tracking-[0.4em]">
                  {NAV_ITEMS[selectedIndex]?.label}
                </span>
              </div>

              <div className="order-4 col-start-1 row-start-2 lg:-mb-80 flex w-full items-center justify-center lg:order-none lg:justify-start lg:self-center">
                <ConnectLinks />
              </div>

              <div className="order-2 col-start-2 row-start-2 flex w-full flex-col items-center justify-center self-center lg:order-none">
                <div
                  className="relative w-full max-w-[1200px]"
                  style={{ height: `${wheelLayout.height}px` }}
                >
                  <OptionWheel
                    items={items}
                    defaultSelected={getCurrentIndex()}
                    onChange={(index) => {
                      setSelectedIndex(index);
                    }}
                    onItemClick={(index) => {
                      const item = NAV_ITEMS[index];
                      if (item) {
                        navigateToItem(item);
                      }
                    }}
                    side="right"
                    textColor={isDarkTheme ? "#8a8578" : "#b3ada0"}
                    activeColor={isDarkTheme ? "#f5f3ee" : "#15130d"}
                    fontSize={wheelLayout.fontSize}
                    spacing={wheelLayout.spacing}
                    curve={wheelLayout.curve}
                    tilt={wheelLayout.tilt}
                    blur={wheelLayout.blur}
                    fade={0.18}
                    minOpacity={0.12}
                    smoothing={wheelLayout.smoothing}
                    inset={wheelLayout.inset}
                    loop={false}
                    draggable
                    soundUrl="/sounds/menu-tick.mp3"
                    soundVolume={0.16}
                  />
                </div>
              </div>

              <div className="order-3 col-span-2 row-start-3 flex w-full justify-center lg:order-none">
                <span className="text-center font-['JetBrains_Mono'] text-[8px] uppercase tracking-[0.35em] text-[#8a8578] dark:text-[#b9b3a3] sm:text-[9px] sm:tracking-[0.5em]">
                  SCROLL TO SELECT · TAP ACTIVE ITEM
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
