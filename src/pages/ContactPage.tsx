import "./ContactPage.css";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import type { FormEvent, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Loader2,
  Mail,
  MapPin,
  Timer,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface PathDef {
  id: string;
  d: string;
  g: number;
  w?: number;
  dash?: "fwd" | "alt";
  lit?: boolean;
  main?: boolean;
}

const DESKTOP_PATHS: PathDef[] = [
  { id: "d1", d: "M-200 200 C 220 178, 380 260, 600 230 C 820 200, 980 340, 1160 360 C 1300 372, 1420 400, 1620 420", g: 0 },
  { id: "d2", d: "M-220 900 C 240 860, 400 960, 640 930 C 880 900, 1020 1020, 1160 1040 C 1300 1060, 1420 1090, 1620 1120", g: 0 },
  { id: "d3", d: "M-180 1250 C 200 1210, 340 1310, 560 1270 C 780 1230, 940 1340, 1080 1360 C 1240 1380, 1400 1410, 1600 1440", g: 0 },
  { id: "d4", d: "M-240 1500 C 180 1460, 340 1560, 560 1520 C 780 1480, 920 1580, 1060 1600 C 1220 1630, 1380 1660, 1600 1690", g: 0 },
  { id: "d5", d: "M-160 120 C 120 180, 200 320, 260 480 C 320 640, 420 800, 500 980 C 560 1110, 640 1240, 760 1360 C 820 1430, 900 1500, 1000 1560", g: 1 },
  { id: "d6", d: "M300 -40 C 280 140, 360 300, 340 460 C 320 620, 400 780, 460 960 C 500 1080, 560 1200, 640 1320", g: 1, dash: "fwd" },
  { id: "d7", d: "M700 -20 C 680 160, 760 320, 740 480 C 720 640, 800 820, 860 1000 C 900 1120, 960 1240, 1040 1360", g: 1 },
  { id: "d8", d: "M1100 -60 C 1080 140, 1140 300, 1120 460 C 1100 580, 1140 660, 1180 740", g: 1, lit: true },
  { id: "d9", d: "M1400 -80 C 1360 120, 1300 260, 1260 420 C 1240 520, 1280 620, 1320 720 C 1350 800, 1380 860, 1420 920", g: 1 },
  { id: "d10", d: "M-140 520 C 180 490, 320 570, 540 540 C 760 510, 920 640, 1100 680 C 1220 706, 1320 730, 1440 750", g: 1, dash: "fwd" },
  { id: "d11", d: "M-200 1080 C 120 1120, 260 1160, 400 1180 C 560 1200, 700 1240, 860 1280 C 960 1300, 1040 1330, 1120 1360", g: 2 },
  { id: "d12", d: "M150 1180 C 300 1220, 420 1260, 560 1280 C 700 1300, 820 1340, 960 1380 C 1040 1400, 1120 1430, 1180 1460", g: 2 },
  { id: "d13", d: "M1000 1080 C 1040 1160, 1080 1220, 1160 1280 C 1200 1320, 1240 1360, 1290 1400", g: 2, dash: "alt", lit: true },
  { id: "d14", d: "M1300 1100 C 1240 1180, 1200 1240, 1160 1320 C 1130 1380, 1110 1440, 1100 1500", g: 2, lit: true },
  { id: "d15", d: "M-140 1400 C 160 1440, 300 1480, 460 1500 C 620 1520, 760 1560, 900 1600 C 1000 1630, 1100 1660, 1200 1690", g: 2 },
  { id: "d16", d: "M600 230 C 620 280, 660 320, 720 340", g: 2 },
  { id: "d17", d: "M540 540 C 560 600, 600 640, 680 660", g: 2 },
  { id: "d18", d: "M260 480 C 300 560, 320 620, 280 700", g: 2 },
  { id: "d19", d: "M460 960 C 500 1020, 540 1060, 600 1090", g: 2 },
  { id: "d20", d: "M860 1000 C 900 1060, 960 1100, 1040 1120", g: 2 },
  { id: "d21", d: "M560 1270 C 600 1330, 640 1370, 720 1390", g: 2 },
  { id: "d22", d: "M-200 320 C 100 300, 300 350, 520 340 C 740 330, 900 480, 1040 520 C 1120 542, 1180 548, 1220 552", g: 3, main: true, dash: "fwd" },
];

const MOBILE_PATHS: PathDef[] = [
  { id: "m1", d: "M60 -40 C 50 200, 80 400, 60 620 C 40 840, 80 1080, 60 1300 C 50 1520, 70 1760, 60 2000", g: 0 },
  { id: "m2", d: "M360 -60 C 340 200, 370 440, 350 680 C 330 920, 360 1180, 340 1420 C 330 1680, 350 1940, 340 2200", g: 0 },
  { id: "m3", d: "M180 -20 C 170 260, 200 520, 180 760 C 160 1000, 190 1240, 170 1480 C 160 1720, 180 1980, 170 2240", g: 0 },
  { id: "m4", d: "M-60 700 C 60 760, 100 860, 120 1020 C 140 1180, 160 1320, 160 1500", g: 0 },
  { id: "m5", d: "M-20 1000 C 60 1120, 90 1240, 110 1400 C 126 1520, 140 1640, 150 1760", g: 1 },
  { id: "m6", d: "M300 300 C 280 460, 290 620, 270 780 C 250 940, 260 1100, 240 1260", g: 1, dash: "fwd" },
  { id: "m7", d: "M440 900 C 380 960, 340 1060, 310 1200 C 290 1320, 280 1460, 280 1620", g: 1 },
  { id: "m8", d: "M40 1600 C 80 1720, 110 1840, 130 2000 C 150 2160, 170 2300, 180 2460", g: 2 },
  { id: "m9", d: "M380 1700 C 320 1820, 280 1940, 240 2100 C 210 2220, 200 2360, 200 2500", g: 2 },
  { id: "m10", d: "M120 2200 C 140 2320, 150 2440, 158 2560", g: 2 },
  { id: "m11", d: "M-40 240 C 60 400, 90 560, 100 720 C 110 940, 140 1160, 150 1400 C 158 1540, 168 1640, 180 1720", g: 3, main: true, dash: "fwd" },
];

interface NodeDef {
  x: number;
  y: number;
  r: number;
  hot?: boolean;
  m?: boolean;
}

const DESKTOP_NODES: NodeDef[] = [
  { x: 520, y: 340, r: 2.4 },
  { x: 900, y: 480, r: 2.4 },
  { x: 1040, y: 560, r: 2.6, hot: true },
  { x: 1120, y: 460, r: 2.2, hot: true },
  { x: 1140, y: 700, r: 2.2, hot: true },
  { x: 1320, y: 720, r: 2.2, hot: true },
  { x: 600, y: 232, r: 2 },
  { x: 540, y: 540, r: 2 },
  { x: 262, y: 480, r: 1.8 },
  { x: 460, y: 960, r: 2.4 },
  { x: 860, y: 1000, r: 2 },
  { x: 560, y: 1270, r: 2.2 },
  { x: 1180, y: 520, r: 2 },
  { x: 400, y: 1180, r: 1.8 },
  { x: 720, y: 340, r: 1.8 },
  { x: 680, y: 660, r: 2 },
  { x: 600, y: 1090, r: 1.8 },
  { x: 760, y: 1360, r: 2 },
];

const MOBILE_NODES: NodeDef[] = [
  { x: 100, y: 720, r: 2, m: true },
  { x: 150, y: 1400, r: 2.2, m: true },
  { x: 180, y: 1720, r: 2.6, m: true },
  { x: 350, y: 680, r: 2, m: true },
  { x: 130, y: 2000, r: 2, m: true },
  { x: 240, y: 2100, r: 2, m: true },
  { x: 270, y: 780, r: 1.8 },
  { x: 280, y: 1620, r: 2 },
  { x: 60, y: 1300, r: 1.8 },
];

const MARKERS = [
  { x: 170, y: 120, label: "IDEA" },
  { x: 600, y: 200, label: "DISCUSS" },
  { x: 900, y: 300, label: "BUILD" },
  { x: 1110, y: 410, label: "SHIP" },
  { x: 1280, y: 545, label: "CONNECT" },
];

const PROJECT_TYPES = [
  "Product Development",
  "Frontend Engineering",
  "Full-Stack Development",
  "Backend / API Architecture",
  "SaaS Development",
  "UI / UX Collaboration",
  "Other",
];

const TIMELINES = [
  "Not sure yet",
  "Within a month",
  "1–3 months",
  "3–6 months",
  "Ongoing / retainer",
];

const INFO_ROWS: {
  label: string;
  value: string;
  href?: string;
  Icon: LucideIcon;
}[] = [
  {
    label: "Email",
    value: "parthibanm1268@gmail.com",
    href: "mailto:parthibanm1268@gmail.com",
    Icon: Mail,
  },
  { label: "Location", value: "Coimbatore, India · Working worldwide", Icon: MapPin },
  { label: "Response", value: "Usually within 24–48 hours", Icon: Timer },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function pathClass(p: PathDef, active: boolean) {
  if (p.lit && active) {
    return p.dash ? "conn-dash-alt conn-lit" : "conn-lit";
  }
  if (p.main) {
    return `conn-main${active ? " is-active" : ""}`;
  }
  if (p.dash === "alt") return "conn-dash-alt";
  if (p.dash === "fwd") return "conn-dash";
  return "stroke-black/5 dark:stroke-white/5";
}

/* ------------------------------------------------------------------ */
/*  Connection Field (background)                                      */
/* ------------------------------------------------------------------ */

function ConnectionField({ active }: { active: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 16, mass: 0.9 });
  const sy = useSpring(my, { stiffness: 50, damping: 16, mass: 0.9 });

  const shiftA = { x: useTransform(sx, (v) => v * 9), y: useTransform(sy, (v) => v * 7) };
  const shiftB = { x: useTransform(sx, (v) => v * -7), y: useTransform(sy, (v) => v * -5) };
  const shiftC = { x: useTransform(sx, (v) => v * 5), y: useTransform(sy, (v) => v * 12) };
  const shiftD = { x: useTransform(sx, (v) => v * 3), y: useTransform(sy, (v) => v * 3) };

  useEffect(() => {
    if (reduced) return;
    const onPointerMove = (e: PointerEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      if (x < -0.5 || x > 0.5 || y < -0.5 || y > 0.5) {
        mx.set(0);
        my.set(0);
        return;
      }
      mx.set(x);
      my.set(y);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reduced, mx, my]);

  const paths = isDesktop ? DESKTOP_PATHS : MOBILE_PATHS;
  const nodes = isDesktop ? DESKTOP_NODES : MOBILE_NODES;
  const viewBox = isDesktop ? "0 0 1440 1700" : "0 0 420 2600";

  const renderPaths = (group: number) =>
    paths
      .filter((p) => p.g === group)
      .map((p) => (
        <path
          key={p.id}
          d={p.d}
          fill="none"
          strokeWidth={p.w ?? 1}
          strokeLinecap="round"
          className={pathClass(p, active)}
        />
      ));

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 select-none text-[#111] dark:text-white"
    >
      <svg
        className="h-full w-full"
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g style={reduced ? undefined : shiftA}>{renderPaths(0)}</motion.g>
        <motion.g style={reduced ? undefined : shiftB} className="hidden md:block">
          {renderPaths(1)}
        </motion.g>
        <motion.g style={reduced ? undefined : shiftC} className="hidden md:block">
          {renderPaths(2)}
        </motion.g>
        <motion.g style={reduced ? undefined : shiftD}>
          {renderPaths(3)}
          <g className="hidden md:block">
            {nodes.map((n, i) => {
              if (!isDesktop && !n.m) return null;
              return (
                <circle
                  key={i}
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  className={
                    n.hot
                      ? active
                        ? "fill-black/70 transition-opacity duration-500 dark:fill-white/70"
                        : "fill-black/25 transition-opacity duration-500 dark:fill-white/25"
                      : "fill-black/25 dark:fill-white/25"
                  }
                />
              );
            })}
            {MARKERS.map((marker) => (
              <g key={marker.label}>
                <circle cx={marker.x} cy={marker.y} r="2" className="fill-black/30 dark:fill-white/30" />
                <text
                  x={marker.x + 11}
                  y={marker.y + 3.5}
                  fontSize="9"
                  letterSpacing="0.34em"
                  className="fill-black/25 dark:fill-white/25"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {marker.label}
                </text>
              </g>
            ))}
          </g>
        </motion.g>
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Headline reveal                                                    */
/* ------------------------------------------------------------------ */

function RevealLine({
  children,
  delay,
  className,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <span className={`block overflow-hidden pb-[0.1em] -mb-[0.1em] ${className ?? ""}`}>
      <motion.span
        className="block will-change-transform"
        initial={reduced ? { opacity: 0 } : { y: "108%" }}
        animate={reduced ? { opacity: 1 } : { y: 0 }}
        transition={{ duration: 0.95, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA + floating connection node                                     */
/* ------------------------------------------------------------------ */

function CtaGroup({
  active,
  onHoverChange,
}: {
  active: boolean;
  onHoverChange: (v: boolean) => void;
}) {
  const scrollToForm = () => {
    document.getElementById("project-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      onFocus={() => onHoverChange(true)}
      onBlur={() => onHoverChange(false)}
    >
      <svg
        className="pointer-events-none absolute -top-[150px] left-0 z-0 h-[150px] w-full text-black/45 dark:text-white/45"
        viewBox="0 0 300 150"
        fill="none"
        aria-hidden="true"
      >
        <motion.path
          d="M 36 10 C 110 18, 196 70, 272 146"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          initial={{ pathLength: 0.2, opacity: 0.3 }}
          animate={{ pathLength: active ? 1 : 0.2, opacity: active ? 0.8 : 0.3 }}
          transition={{ duration: 0.85, ease: EASE }}
        />
        <motion.circle
          cx="188"
          cy="66"
          r="2"
          fill="currentColor"
          animate={{ opacity: active ? 0.9 : 0.1 }}
          transition={{ duration: 0.45 }}
        />
        <motion.circle
          cx="232"
          cy="92"
          r="2"
          fill="currentColor"
          animate={{ opacity: active ? 0.9 : 0.1 }}
          transition={{ duration: 0.45, delay: 0.12 }}
        />
      </svg>

      <div className="relative z-[1] flex items-center gap-5 md:gap-7">
        <a
          href="#project-form"
          onClick={(e) => {
            e.preventDefault();
            scrollToForm();
          }}
          className="group inline-flex h-[56px] items-center gap-3 rounded-[14px] bg-[#111] pl-7 pr-6 text-[15px] font-medium text-white transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:bg-[#1c1c1c] hover:shadow-[0_14px_34px_-10px_rgba(17,17,17,0.35)] focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAF8] dark:bg-white dark:text-[#111] dark:hover:bg-neutral-200 dark:focus-visible:ring-white/50 dark:focus-visible:ring-offset-[#0B0B0C]"
        >
          <span>Start a conversation</span>
          <ArrowUpRight
            className="h-[18px] w-[18px] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
            strokeWidth={1.8}
          />
        </a>

        <div className="relative flex items-center justify-center">
          <motion.div
            animate={active ? { scale: 1.14 } : { scale: [1, 1.045, 1] }}
            transition={
              active
                ? { type: "spring", stiffness: 380, damping: 24 }
                : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
            }
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-black/20 dark:border-white/25 md:h-16 md:w-16"
          >
            <ArrowUpRight
              className="h-[18px] w-[18px] text-[#111] dark:text-white md:h-5 md:w-5"
              strokeWidth={1.75}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Form                                                               */
/* ------------------------------------------------------------------ */

function Field({
  id,
  label,
  className = "",
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2.5 block text-[11px] uppercase tracking-[0.16em] text-[#6B6B6B] dark:text-neutral-400"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function SelectControl({
  id,
  placeholder,
  options,
}: {
  id: string;
  placeholder: string;
  options: string[];
}) {
  return (
    <div className="relative">
      <select id={id} name={id} defaultValue="" className="field cursor-pointer appearance-none pr-10">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9A9A9A]" />
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const reduced = useReducedMotion();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 1300);
  };

  const handleReset = () => setStatus("idle");

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: reduced ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: EASE }}
      aria-label="Project brief form"
      className="relative overflow-hidden rounded-[16px] border border-black/[0.07] bg-white p-6 shadow-[0_1px_0_rgba(17,17,17,0.02),0_24px_60px_-28px_rgba(17,17,17,0.16)] dark:border-white/10 dark:bg-[#131316] dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.7)] sm:p-8 md:p-10"
    >
      {status === "sent" ? (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex min-h-[420px] flex-col items-center justify-center py-12 text-center"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.15 }}
            className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-black/15 dark:border-white/20"
          >
            <Check className="h-6 w-6" strokeWidth={1.75} />
          </motion.div>
          <h4 className="text-3xl font-semibold tracking-[-0.02em] text-[#111] dark:text-neutral-50">
            Message received.
          </h4>
          <p className="mt-3 text-[16px] text-[#6B6B6B] dark:text-neutral-400">
            I&rsquo;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={handleReset}
            className="mt-9 text-[13px] font-medium text-[#6B6B6B] underline underline-offset-4 transition-colors hover:text-[#111] focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-2 dark:hover:text-white dark:focus-visible:ring-white/40"
          >
            Send another brief
          </button>
        </motion.div>
      ) : (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field id="name" label="Name">
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className="field"
              />
            </Field>
            <Field id="email" label="Email">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="field"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Field id="projectType" label="Project type">
              <SelectControl id="projectType" placeholder="Select a project type" options={PROJECT_TYPES} />
            </Field>
            <Field id="timeline" label="Timeline">
              <SelectControl id="timeline" placeholder="Select a timeline" options={TIMELINES} />
            </Field>
          </div>
          <Field id="details" label="Project details">
            <textarea
              id="details"
              name="details"
              rows={5}
              required
              placeholder="What are you building, who is it for, and what would a successful outcome look like?"
              className="field"
            />
          </Field>
          <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex h-[52px] items-center justify-center gap-2.5 rounded-[12px] bg-[#111] px-7 text-[15px] font-medium text-white transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[1px] hover:bg-[#1c1c1c] hover:shadow-[0_12px_28px_-10px_rgba(17,17,17,0.35)] disabled:pointer-events-none disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-[#111] dark:hover:bg-neutral-200 dark:focus-visible:ring-white/50 dark:focus-visible:ring-offset-[#131316]"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-[18px] w-[18px] animate-spin" />
                  <span>Connecting&hellip;</span>
                </>
              ) : (
                <>
                  <span>Send project brief</span>
                  <ArrowUpRight
                    className="h-[18px] w-[18px] transition-transform duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-[1px] group-hover:-translate-y-[1px]"
                    strokeWidth={1.8}
                  />
                </>
              )}
            </button>
            <p className="text-[12px] text-[#9A9A9A] dark:text-neutral-500">
              No spam &mdash; just a thoughtful reply.
            </p>
          </div>
        </div>
      )}
    </motion.form>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [isConnecting, setIsConnecting] = useState(false);
  const reduced = useReducedMotion();
  const handleConnectingChange = useCallback((v: boolean) => setIsConnecting(v), []);

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FAFAF8] text-[#111] transition-colors duration-300 dark:bg-[#0B0B0C] dark:text-neutral-50"
    >
      <ConnectionField active={isConnecting} />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-16">
        <header className="flex flex-col pt-32 pb-16 md:pt-44 md:pb-20 lg:min-h-[82vh] lg:justify-between lg:pb-24 lg:pt-36">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-[7px] w-[7px]">
              <span className="absolute inset-0 rounded-full bg-[#111] dark:bg-white" />
              <span className="avail-ping absolute inset-0 rounded-full bg-[#111] dark:bg-white" />
            </span>
            <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-[#6B6B6B] dark:text-neutral-400 md:text-[11px]">
              Available for thoughtful collaborations
            </p>
          </motion.div>

          <h2 className="mt-12 max-w-[18ch] text-[clamp(56px,7.8vw,126px)] font-semibold leading-[0.9] tracking-[-0.045em] text-[#111] dark:text-neutral-50 md:mt-16">
            <RevealLine delay={0.1}>Let&rsquo;s build</RevealLine>
            <RevealLine delay={0.19} className="lg:ml-[0.85em]">
              something worth
            </RevealLine>
            <RevealLine delay={0.28} className="lg:ml-[1.7em]">
              <span className="text-[#6B6B6B] dark:text-neutral-500">connecting</span> over.
            </RevealLine>
          </h2>

          <div className="mt-16 grid grid-cols-1 items-end gap-10 md:mt-24 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
              className="max-w-[600px] text-[17px] leading-[1.65] text-[#6B6B6B] dark:text-neutral-400 md:text-[19px]"
            >
              I enjoy turning complex ideas into reliable products &mdash; from polished
              interfaces to scalable systems behind them. If you&rsquo;re building
              something meaningful, let&rsquo;s talk.
            </motion.p>

            <CtaGroup active={isConnecting} onHoverChange={handleConnectingChange} />
          </div>
        </header>

        <div className="grid grid-cols-1 items-start gap-14 pb-24 pt-4 md:pb-32 md:pt-8 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-5 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#6B6B6B] dark:text-neutral-400">
                Start a project
              </p>
              <h3 className="mt-5 max-w-[12ch] text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#111] dark:text-neutral-50 md:text-5xl">
                Tell me what you&rsquo;re building.
              </h3>
              <p className="mt-6 max-w-[430px] text-[16px] leading-[1.65] text-[#6B6B6B] dark:text-neutral-400">
                Share a few details and I&rsquo;ll come back with honest thoughts. No
                pressure &mdash; if we&rsquo;re not the right fit, I&rsquo;ll point you
                somewhere useful.
              </p>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
              className="mt-12"
            >
              {INFO_ROWS.map((row) => {
                const Icon = row.Icon;
                return (
                  <div
                    key={row.label}
                    className="flex items-start gap-5 border-t border-black/[0.06] py-6 last:border-b dark:border-white/10"
                  >
                    <Icon
                      className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#6B6B6B] dark:text-neutral-400"
                      strokeWidth={1.5}
                    />
                    <div className="min-w-0">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-[#6B6B6B] dark:text-neutral-500">
                        {row.label}
                      </dt>
                      <dd className="mt-1.5 text-[15px] font-medium text-[#111] dark:text-neutral-100">
                        {row.href ? (
                          <a
                            href={row.href}
                            className="transition-colors hover:text-black/70 hover:underline hover:underline-offset-4 focus-visible:underline focus-visible:underline-offset-4 dark:hover:text-white/80"
                          >
                            {row.value}
                          </a>
                        ) : (
                          row.value
                        )}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </motion.dl>
          </aside>

          <div id="project-form" className="scroll-mt-28 lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
