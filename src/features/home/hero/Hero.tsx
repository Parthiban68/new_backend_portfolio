import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import BackgroundElements from "./components/BackgroundElements";
import LeftContent from "./components/LeftContent";
import RightNetwork from "./components/RightNetwork";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const META =
  "font-mono text-[9px] uppercase tracking-[0.26em] text-white/45 sm:text-[10px]";

function PanelBody() {
  return (
    <>
      <div className="flex items-center justify-between border-b border-black/10 pb-3 font-mono text-[9px] uppercase tracking-[0.26em] text-black/45 max-[360px]:pb-2 sm:pb-4 sm:text-[10px]">
        <span>01 / Introduction</span>
        <span className="hidden sm:inline">Parthiban M — Backend Engineer</span>
        <span className="sm:hidden">PB / 2026</span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 items-center gap-8 py-6 max-[360px]:py-3 sm:py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-12">
        <LeftContent />
        <div className="hidden min-h-0 items-center justify-center lg:flex">
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
      className="relative w-full bg-[#f5f3ee] text-[#12100c]"
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
        section
      );
      const media = gsap.utils.toArray<HTMLElement>(
        "[data-hero-media]",
        section
      );

      gsap.set(panelContent, { opacity: 0, pointerEvents: "none" });
      gsap.set(panelBg, { scaleX: 0 });
      gsap.set(centerWord, { opacity: 0, scale: 0.08 });
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
        .to(lineOne, { yPercent: -118, duration: 0.34, ease: "power2.in" }, 0.04)
        .to(
          lineThree,
          { yPercent: 65, opacity: 0.12, duration: 0.38, ease: "power1.in" },
          0.08
        )
        .to(centerWord, { opacity: 1, duration: 0.06 }, 0.26)
        .to(
          centerWord,
          {
            scale: () => (window.innerWidth < 768 ? 9.6 : 7.8),
            duration: 0.3,
            ease: "power2.in",
          },
          0.26
        )
        .to(panelBg, { scaleX: 1, duration: 0.18, ease: "power1.inOut" }, 0.46)
        .set(exitLayer, { opacity: 1 }, 0.62)
        .set(
          panelContent,
          { opacity: 1, pointerEvents: "auto" },
          0.62
        )
        .to(
          revealItems,
          {
            opacity: 1,
            y: 0,
            duration: 0.09,
            stagger: 0.016,
            ease: "power2.out",
          },
          0.62
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
          0.66
        )
        .to(
          lightLayer,
          { yPercent: -100, duration: 0.07, ease: "power2.inOut" },
          0.9
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
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative h-[380vh] w-full bg-[#020202] md:h-[460vh]"
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        <BackgroundElements />

        <div
          ref={progressRef}
          aria-hidden="true"
          className="absolute left-0 top-0 z-40 h-[2px] w-full origin-left bg-emerald-400"
          style={{ transform: "scaleX(0)" }}
        />

        <div aria-hidden="true" className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col px-5 pb-5 pt-[104px] max-[360px]:pb-4 max-[360px]:pt-[88px] sm:px-8 sm:pb-7 sm:pt-[116px] lg:px-14 lg:pb-9 lg:pt-[128px]">
            <div
              ref={topMetaRef}
              className={`flex items-start justify-between ${META}`}
            >
              <span>Parthiban M</span>
              <span className="text-right">
                Backend Engineer
                <br />
                Portfolio / 2026
              </span>
            </div>

            <div
              ref={zoomRef}
              className="flex flex-1 flex-col justify-between py-4 will-change-transform sm:py-6"
            >
              <div>
                <p ref={lineOneRef} className="hero-giant">
                  SO I BUILD
                </p>
                <p className="hero-giant text-emerald-300/90">SECURE APIS</p>
              </div>

              <div
                ref={scrollHintRef}
                className="flex items-end gap-4"
              >
                <span
                  aria-hidden="true"
                  className="hero-scroll-line hidden h-10 w-px shrink-0 bg-emerald-400/80 sm:h-14 lg:block"
                />
                <p
                  ref={lineThreeRef}
                  className="hero-giant ml-auto shrink-0 text-right"
                >
                  <span className="sm:hidden">
                    AS THEY
                    <br />
                    SHOULD BE
                  </span>
                  <span className="hidden whitespace-nowrap sm:inline">
                    AS THEY SHOULD BE
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={centerWordRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[15] flex items-center justify-center opacity-0 will-change-transform"
          style={{ opacity: 0 }}
        >
          <div className="-translate-y-[4%] text-center font-['Outfit'] text-[clamp(3rem,10.5vw,12rem)] font-black uppercase leading-[0.78] tracking-[-0.07em] text-white">
            <span className="block">Software</span>
            <span className="block text-emerald-300">Engineer</span>
          </div>
        </div>

        <div
          ref={exitLayerRef}
          aria-hidden="true"
          className="absolute inset-0 z-[18] bg-[#020202] text-white opacity-0"
          style={{ opacity: 0 }}
        >
          <div className="mx-auto flex h-full w-full max-w-[1600px] flex-col px-5 pb-5 pt-[104px] max-[360px]:pb-4 max-[360px]:pt-[88px] sm:px-8 sm:pb-7 sm:pt-[116px] lg:px-14 lg:pb-9 lg:pt-[128px]">
            <div className={`flex items-start justify-between ${META}`}>
              <span>Parthiban M</span>
              <span className="text-right">
                Backend Engineer
                <br />
                Portfolio / 2026
              </span>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-300/80 sm:text-[10px]">
                Selected work / 2026
              </span>
              <p className="mt-5 font-['Outfit'] text-[clamp(2.8rem,8vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]">
                Keep
                <br />
                <span className="text-white/40">Scrolling</span>
              </p>
              <span
                aria-hidden="true"
                className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white/60"
              >
                ↓
              </span>
            </div>

            <div
              className={`flex items-end justify-between gap-4 ${META}`}
            >
              <span className="leading-tight">
                Available for new backend projects
              </span>
              <span>02 — 04</span>
            </div>
          </div>
        </div>

        <div
          ref={lightLayerRef}
          className="absolute inset-0 z-20 will-change-transform"
        >
          <div
            ref={panelBgRef}
            className="absolute inset-0 origin-center overflow-hidden bg-[#f5f3ee] will-change-transform"
            style={{ transform: "scaleX(0)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_15%,rgba(16,185,129,0.1),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_10%_100%,rgba(21,19,13,0.08),transparent_50%)]" />
            <div
              className="absolute inset-0 opacity-[0.035]"
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
