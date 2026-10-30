import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import BackgroundElements from "./components/BackgroundElements";
import LeftContent from "./components/LeftContent";
import RightNetwork from "./components/RightNetwork";
import { NavLink } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const META =
  "font-mono text-[9px] uppercase tracking-[0.26em] text-white/45 sm:text-[10px]";

function PanelBody() {
  return (
    <>
      {/* <div className="flex items-center justify-between border-b border-black/10 pb-3 font-mono text-[9px] uppercase tracking-[0.26em] text-black/45 max-[360px]:pb-2 sm:pb-4 sm:text-[10px]">
        <span>01 / Introduction</span>
        <span className="hidden sm:inline">Parthiban M — Backend Engineer</span>
        <span className="sm:hidden">PB / 2026</span>
      </div> */}
      

      <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-8 py-6 max-[360px]:py-3 sm:py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
        <LeftContent />
        <div className="hidden min-h-0 items-center justify-center lg:flex mt-10">
          <RightNetwork />
        </div>
      </div>

      <div
        data-hero-reveal
        className="flex items-center justify-between gap-3 border-t border-black/10 pt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-black/45 max-[360px]:pt-2 sm:pt-4 sm:text-[10px]"
      >
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
          <span className="leading-tight">
            Available for new backend projects
          </span>
        </span>
        <span className="hidden items-center gap-2 sm:flex">
          Scroll to continue <span aria-hidden="true">↓</span>
        </span>
      </div>
    </>
  );
}

function StaticHero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full bg-white text-[#12100c] dark:bg-[#0a0a0a] dark:text-white"
    >
      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-6 pb-6 pt-24 sm:px-10 sm:pb-8 sm:pt-28 lg:px-14 lg:pt-32">
        <PanelBody />
      </div>
    </section>
  );
}

function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const topMetaRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);
  const lineOneRef = useRef<HTMLParagraphElement>(null);
  const lineThreeRef = useRef<HTMLParagraphElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const centerWordRef = useRef<HTMLDivElement>(null);
  const exitLayerRef = useRef<HTMLDivElement>(null);
  const lightLayerRef = useRef<HTMLDivElement>(null);
  const panelBgRef = useRef<HTMLDivElement>(null);
  const panelContentRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const topMeta = topMetaRef.current;
      const zoom = zoomRef.current;
      const lineOne = lineOneRef.current;
      const lineThree = lineThreeRef.current;
      const scrollHint = scrollHintRef.current;
      const centerWord = centerWordRef.current;
      const exitLayer = exitLayerRef.current;
      const lightLayer = lightLayerRef.current;
      const panelBg = panelBgRef.current;
      const panelContent = panelContentRef.current;
      const progress = progressRef.current;

      if (
        !section ||
        !topMeta ||
        !zoom ||
        !lineOne ||
        !lineThree ||
        !scrollHint ||
        !centerWord ||
        !exitLayer ||
        !lightLayer ||
        !panelBg ||
        !panelContent ||
        !progress
      ) {
        return;
      }

      const revealItems = gsap.utils.toArray<HTMLElement>(
        "[data-hero-reveal]",
        section,
      );
      const media = gsap.utils.toArray<HTMLElement>(
        "[data-hero-media]",
        section,
      );

      gsap.set(panelContent, { opacity: 0, pointerEvents: "none" });
      gsap.set(panelBg, { scaleX: 0 });
      gsap.set(centerWord, { opacity: 0, scale: 0.3 });
      gsap.set(exitLayer, { opacity: 0 });
      gsap.set(progress, { scaleX: 0 });
      gsap.set(revealItems, { opacity: 0, y: 28 });
      gsap.set(media, { opacity: 0, y: 34, scale: 0.97 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });

      tl.to(progress, { scaleX: 1, duration: 1 }, 0)
        .to(topMeta, { opacity: 0, duration: 0.12 }, 0.02)
        .to(scrollHint, { opacity: 0, duration: 0.1 }, 0.03)
        .to(zoom, { scale: 3.4, duration: 0.4, ease: "power2.in" }, 0.04)
        .to(
          lineOne,
          { yPercent: -118, duration: 0.34, ease: "power2.in" },
          0.04,
        )
        .to(
          lineThree,
          { yPercent: 65, opacity: 0.12, duration: 0.38, ease: "power1.in" },
          0.08,
        )
        .to(centerWord, { opacity: 1, duration: 0.08 }, 0.26)
        .to(
          centerWord,
          {
            scale: () => (window.innerWidth < 768 ? 4.8 : 3.8),
            duration: 0.28,
            ease: "power2.out",
          },
          0.26,
        )
        .to(panelBg, { scaleX: 1, duration: 0.18, ease: "power1.inOut" }, 0.46)
        .set(exitLayer, { opacity: 1 }, 0.62)
        .set(panelContent, { opacity: 1, pointerEvents: "auto" }, 0.62)
        .to(
          revealItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.09,
            stagger: 0.016,
            ease: "power2.out",
          },
          0.62,
        )
        .to(
          media,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.12,
            ease: "power2.out",
          },
          0.66,
        )
        .to(
          lightLayer,
          { yPercent: -100, duration: 0.07, ease: "power2.inOut" },
          0.9,
        )
        .to({}, { duration: 0.03 }, 0.97);

      let alive = true;
      const refresh = () => {
        if (alive) ScrollTrigger.refresh();
      };

      const frame = window.requestAnimationFrame(refresh);
      document.fonts.ready.then(refresh).catch(() => {});
      window.addEventListener("load", refresh);

      const images = gsap.utils.toArray<HTMLImageElement>("img", section);
      images.forEach((img) => {
        if (!img.complete) img.addEventListener("load", refresh);
      });

      return () => {
        alive = false;
        window.cancelAnimationFrame(frame);
        window.removeEventListener("load", refresh);
        images.forEach((img) => img.removeEventListener("load", refresh));
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative h-[380vh] w-full bg-[#f7f3ed] dark:bg-[#020202] md:h-[460vh]"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <BackgroundElements />

        <div
          ref={progressRef}
          aria-hidden="true"
          className="absolute left-0 top-0 z-40 h-[2px] w-full origin-left bg-emerald-400 dark:bg-emerald-400"
          style={{ transform: "scaleX(0)" }}
        />

        <div aria-hidden="true" className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col px-5 pb-5 pt-[104px] max-[360px]:pb-4 max-[360px]:pt-[88px] sm:px-8 sm:pb-7 sm:pt-[116px] lg:px-14 lg:pb-9 lg:pt-[40px]">
            <div
              ref={topMetaRef}
              className={`flex items-start justify-between ${META.replace("text-white/45", "text-black/60 dark:text-white/45")}`}
            ></div>

            <div
              ref={zoomRef}
              className="flex flex-1 flex-col justify-between py-4 sm:py-6"
            >
              <div>
                <p
                  ref={lineOneRef}
                  className="font-['Barlow_Condensed'] italic font-black uppercase leading-[0.78] tracking-[-0.04em] text-rose-500 text-[20rem]"
                >
                  PARTHI
                </p>
              </div>

              <div
                ref={scrollHintRef}
                className="flex items-end justify-between gap-4"
              >
                <div className="flex items-center gap-3 text-black/80 dark:text-white/80 border border-black/60 dark:border-white/60 rounded-full px-4 py-2">
                  <div className="w-12 h-[1px] bg-black dark:bg-white"></div>
                  <span               className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-rose-500">
                    SCROLL
                  </span>
                  <div className="w-12 h-[1px] bg-black dark:bg-white"></div>
                </div>
                <p
                  ref={lineThreeRef}
                  className="font-['Barlow_Condensed'] italic font-black uppercase leading-[0.78] tracking-[-0.04em] text-rose-500 text-[20rem] shrink-0 text-right"
                >
                  BAN
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={centerWordRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center opacity-0"
          style={{ opacity: 0 }}
        >
          <div className="-translate-y-[4%] text-center font-['Barlow_Condensed'] italic text-[clamp(3rem,10.5vw,12rem)] font-black uppercase leading-[0.78] [text-rendering:optimizeLegibility] [-webkit-font-smoothing:antialiased] will-change-auto">
            <span className="block text-[#12100c] dark:text-white">
              Software
            </span>
            <span className="block text-rose-500">Engineer</span>
          </div>
        </div>

        <div
          ref={exitLayerRef}
          aria-hidden="true"
          className="absolute inset-0 z-[18] bg-[#f7f3ed] text-[#12100c] dark:bg-[#0a0a0a] dark:text-white opacity-0"
          style={{ opacity: 0 }}
        >
          <div className="absolute inset-0 overflow-y-auto">
            <div className="min-h-full">
              <div className="mx-auto flex w-full max-w-[1600px] flex-col px-5 pt-[104px] max-[360px]:pt-[88px] sm:px-8 sm:pt-[116px] lg:px-14 lg:pt-[128px]">
                <div className="flex items-start justify-between font-mono text-[9px] uppercase tracking-[0.26em] text-black/45 dark:text-white/45 sm:text-[10px]">
                  <span>Parthiban M</span>
                  <span className="text-right">
                    Backend Engineer
                    <br />
                    Portfolio / 2026
                  </span>
                </div>
              </div>
              <div className="mt-10 sm:mt-2 lg:mt-10">
                <section className="bg-[#f7f3ed] dark:bg-[#0a0a0a] transition-colors duration-300">
                  <div className="max-w-full w-full relative z-10 bg-[#f7f3ed]/95 dark:bg-[#0a0a0a]/95 p-6 sm:p-10 lg:p-10 flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24 items-center transition-colors duration-300">
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-semibold tracking-[0.3em] text-gray-600 dark:text-gray-400 uppercase">
                          WHO AM I?
                        </span>
                      </div>

                      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-['Barlow_Condensed'] font-black uppercase whitespace-normal sm:whitespace-nowrap text-rose-500 leading-[0.9] mb-8 tracking-[-0.02em]">
                        Software Engineer.
                      </h2>

                      <p className="text-gray-700 dark:text-gray-300 text-md leading-relaxed mb-10 max-w-xl">
                        I'm <strong>Parthiban</strong>, a Full Stack Software
                        Engineer with
                        <strong> 1.10+ years of experience</strong> building
                        scalable SaaS applications using{" "}
                        <strong>
                          React.js, Node.js, NestJS, Express.js, TypeScript,
                          PostgreSQL, and Sequelize
                        </strong>
                        . I specialize in building responsive frontend
                        applications, scalable REST APIs, multi-tenant
                        architectures, authentication systems, and clean
                        full-stack solutions for enterprise applications.
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <NavLink
                          to={"/about-me"}
                          className="group inline-flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-base font-semibold text-gray-900 dark:text-gray-100 hover:border-gray-900 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 dark:hover:border-white transition-all"
                        >
                          Unfold My Story
                          <svg
                            className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </NavLink>

                        <div className="flex items-center gap-2.5 text-base text-gray-700 dark:text-gray-300">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          Open to Full-Time Frontend & Backend Opportunities
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                      <div className="flex items-center justify-between sm:justify-center w-full sm:w-auto gap-4 sm:gap-10 md:gap-16 text-center">
                        <div className="flex flex-col items-center">
                          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 dark:text-white mb-2.5 tracking-tight">
                            1.10+
                          </h3>
                          <p className="text-[9px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] leading-tight">
                            YEARS OF
                            <br />
                            EXPERIENCE
                          </p>
                        </div>

                        <div className="hidden sm:block h-20 sm:h-32 lg:h-44 w-px bg-gray-200 dark:bg-gray-800 shrink-0"></div>

                        <div className="flex flex-col items-center">
                          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 dark:text-white mb-2.5 tracking-tight">
                            10+
                          </h3>
                          <p className="text-[9px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] leading-tight">
                            BACKEND
                            <br />
                            PROJECTS
                          </p>
                        </div>

                        <div className="hidden sm:block h-20 sm:h-32 lg:h-44 w-px bg-gray-200 dark:bg-gray-800 shrink-0"></div>

                        <div className="flex flex-col items-center">
                          <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-950 dark:text-white mb-2.5 tracking-tight">
                            15+
                          </h3>
                          <p className="text-[9px] sm:text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-[0.2em] leading-tight">
                            TECHNOLOGIES
                            <br />
                            USED
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div ref={lightLayerRef} className="absolute inset-0 z-20">
          <div
            ref={panelBgRef}
            className="absolute inset-0 origin-center overflow-hidden bg-[#f7f3ed] dark:bg-[#0f0f0f]"
            style={{ transform: "scaleX(0)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(16,185,129,0.1),transparent_45%)] dark:bg-[radial-gradient(ellipse_at_85%_15%,rgba(16,185,129,0.05),transparent_45%)]" />
            <div className="absolute inset-0 bg-white dark:bg-black" />
            <div
              className="absolute inset-0 opacity-[0.035] dark:opacity-[0.015]"
              style={{
                backgroundImage:
                  "linear-gradient(#15130d 1px, transparent 1px), linear-gradient(90deg, #15130d 1px, transparent 1px)",
                backgroundSize: "72px 72px",
              }}
            />
          </div>

          <div
            ref={panelContentRef}
            className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] flex-col px-5 pb-5 pt-[104px] sm:px-8 sm:pb-7 sm:pt-[116px] lg:px-14 lg:pb-9 lg:pt-[128px]"
            style={{ opacity: 0 }}
          >
            <PanelBody />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <StaticHero />;
  }

  return <ScrollHero />;
}
