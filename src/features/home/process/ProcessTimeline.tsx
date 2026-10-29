import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import {
  Search,
  AlignJustify,
  Code2,
  CircleCheck,
  BarChart2,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "UNDERSTAND THE PROBLEM",
    subtitle: "Research • Requirements • Constraints",
    description:
      "Start with the problem, not the technology. Understand users, requirements, constraints, and what needs to be solved.",
    icon: Search,
  },
  {
    number: "02",
    title: "SHAPE THE SOLUTION",
    subtitle: "Architecture • Data Flow • Design Decisions",
    description:
      "Turn requirements into a clear technical direction. Define architecture, responsibilities, data flow, and system boundaries.",
    icon: AlignJustify,
  },
  {
    number: "03",
    title: "DESIGN & BUILD",
    subtitle: "APIs • UI • Business Logic",
    description:
      "Build thoughtful interfaces, reliable APIs, robust business logic, and maintainable systems with clean architecture.",
    icon: Code2,
  },
  {
    number: "04",
    title: "TEST & REFINE",
    subtitle: "QA • Security • Performance",
    description:
      "Validate the implementation, debug failures, improve usability, harden the system, and iterate until reliable.",
    icon: CircleCheck,
  },
  {
    number: "05",
    title: "SHIP & MEASURE",
    subtitle: "Deploy • Monitor • Improve",
    description:
      "Deploy, observe reliability and performance, and continuously improve as the product evolves.",
    icon: BarChart2,
  },
];

export default function ProcessTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useGSAP(
    () => {
      if (shouldReduceMotion) return;
      const trigger = triggerRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;
      if (!trigger || !track || !progress) return;

      const getDistance = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        if (trackWidth <= viewportWidth) return 0;
        return trackWidth - viewportWidth;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: "top top",
          end: () => {
            const dist = getDistance();
            if (dist <= 0) return "+=100vh";
            return "+=" + Math.max(800, dist * 0.8);
          },
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        track,
        {
          x: () => {
            const dist = getDistance();
            return -dist;
          },
          ease: "none",
        },
        0
      ).to(
        progress,
        {
          scaleX: 1,
          ease: "none",
        },
        0
      );

      const onResize = () => {
        ScrollTrigger.refresh();
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef, dependencies: [shouldReduceMotion] }
  );

  if (shouldReduceMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative bg-[#f7f3ed] text-[#0a0a0a] dark:bg-[#050505] dark:text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14">
          <div className="mb-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
              Behind the Build
            </p>
            <h2 className="mt-4 font-['Barlow_Condensed'] text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
              FROM IDEA TO SYSTEM
            </h2>
          </div>
          <div className="space-y-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="rounded-2xl border border-[#0a0a0a]/10 p-8 dark:border-white/10"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-[#0a0a0a]/50 dark:text-white/40">
                          {step.number}
                        </span>
                        <Icon className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                      </div>
                      <h3 className="mt-4 font-['Barlow_Condensed'] text-[clamp(2rem,6vw,4rem)] font-black uppercase leading-[0.9]">
                        {step.title}
                      </h3>
                      <p className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40">
                        {step.subtitle}
                      </p>
                      <p className="mt-4 max-w-2xl text-[#0a0a0a]/80 dark:text-white/70">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="rounded-2xl border border-[#0a0a0a]/10 p-10 text-center dark:border-white/10">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
                Complete
              </p>
              <h3 className="mt-4 font-['Barlow_Condensed'] text-[clamp(2.5rem,9vw,6rem)] font-black uppercase leading-[0.9]">
                THOUGHTFULLY BUILT. READY TO SCALE.
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f3ed] text-[#0a0a0a] dark:bg-[#050505] dark:text-white"
    >
      <div ref={triggerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.12),transparent_60%)]" />
            <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(ellipse_at_bottom,rgba(244,63,94,0.08),transparent_70%)]" />
            <div className="absolute inset-0 dark:hidden bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.06),transparent_60%)]" />
          </div>

          <div className="relative z-10 mx-auto flex h-full max-w-[1800px] flex-col px-6 pt-10 sm:px-10 lg:px-14">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
                  Behind the Build
                </p>
                <h2 className="mt-3 font-['Barlow_Condensed'] text-[clamp(2.8rem,9vw,7rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
                  FROM IDEA TO SYSTEM
                </h2>
              </div>
              <div className="hidden items-center gap-3 sm:flex">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40">
                  Progress
                </span>
                <div className="h-[2px] w-32 overflow-hidden rounded-full bg-[#0a0a0a]/10 dark:bg-white/10">
                  <div
                    ref={progressRef}
                    className="h-full origin-left scale-x-0 bg-rose-500 dark:bg-rose-400"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex-1 overflow-hidden">
              <div
                ref={trackRef}
                className="flex h-full items-center gap-8 will-change-transform"
              >
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <article
                      key={step.number}
                      className="process-panel relative flex h-[70vh] w-[85vw] max-w-[1100px] flex-shrink-0 flex-col justify-between overflow-hidden rounded-[28px] border border-[#0a0a0a]/10 bg-gradient-to-br from-[#0a0a0a]/[0.02] to-transparent p-8 sm:p-12 lg:p-16 dark:border-white/10 dark:from-white/[0.04]"
                    >
                      <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.14),transparent_55%)]" />
                      <div className="absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.08),transparent_55%)]" />
                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0a0a0a]/15 dark:border-white/15">
                            <Icon className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                          </span>
                          <div>
                            <p className="font-mono text-xs uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
                              Stage {step.number}
                            </p>
                            <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40">
                              {step.subtitle}
                            </p>
                          </div>
                        </div>
                        <span className="font-['Barlow_Condensed'] text-[clamp(4rem,12vw,10rem)] font-black leading-none text-[#0a0a0a]/5 dark:text-white/5">
                          {step.number}
                        </span>
                      </div>
                      <div className="relative z-10">
                        <h3 className="font-['Barlow_Condensed'] text-[clamp(2.8rem,9vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.02em]">
                          {step.title}
                        </h3>
                        <p className="mt-6 max-w-2xl text-lg text-[#0a0a0a]/80 sm:text-xl dark:text-white/70">
                          {step.description}
                        </p>
                        <div className="mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40">
                          <span>Scroll to continue</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </article>
                  );
                })}
                <article className="process-panel relative flex h-[70vh] w-[85vw] max-w-[1100px] flex-shrink-0 flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#0a0a0a]/10 bg-gradient-to-br from-[#0a0a0a]/[0.02] to-transparent text-center dark:border-white/10 dark:from-white/[0.04]">
                  <div className="absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.16),transparent_65%)]" />
                  <div className="absolute inset-0 dark:hidden bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1),transparent_65%)]" />
                  <div className="relative z-10 px-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
                      Complete
                    </p>
                    <h3 className="mt-6 font-['Barlow_Condensed'] text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]">
                      THOUGHTFULLY BUILT.
                      <br />
                      READY TO SCALE.
                    </h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
