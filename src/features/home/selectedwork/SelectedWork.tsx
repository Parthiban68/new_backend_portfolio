import {
  Fragment,
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import CardSwap, { Card } from "../../../components/ui/CardSwap/CardSwap";
import cfoImage from "../../../assets/cfo.png";
import treadTrendsImage from "../../../assets/treadtrends.png";
import taskFlowImage from "../../../assets/new_5.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "CFO360.ai",
    category: "Professional",
    role: "Full-Stack Engineer",
    description:
      "A multi-tenant accounting and finance platform built for scalable business operations.",
    tech: ["NestJS", "PostgreSQL", "Sequelize", "React"],
    link: "#cfo360",
    image: cfoImage,
  },
  {
    number: "02",
    title: "TreadTrends",
    category: "Professional",
    role: "Full-Stack Engineer",
    description:
      "A real-time product tracking and trend analysis platform for smarter decisions.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#treadtrends",
    image: treadTrendsImage,
  },
  {
    number: "03",
    title: "TaskFlow",
    category: "Personal",
    role: "Full-Stack Engineer",
    description:
      "A personal productivity app designed to help teams plan, track, and ship work with clarity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "#taskflow",
    image: taskFlowImage,
  },
];

const META =
  "font-mono text-[10px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 dark:text-white/40";
const STACK =
  "font-mono text-[10px] uppercase tracking-[0.22em] text-[#0a0a0a]/55 dark:text-white/45";
const LINK =
  "group/link inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-[#0a0a0a] transition-colors duration-300 hover:text-[#E42527] dark:text-white dark:hover:text-[#E42527]";

function ProjectLink({ link, label }: { link: string; label: string }) {
  return (
    <a href={link} className={LINK}>
      <span className="relative">
        {label}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#E42527] transition-transform duration-500 group-hover/link:scale-x-100" />
      </span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
    </a>
  );
}

function useIsDarkTheme() {
  const [isDark, setIsDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(sync);

    sync();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return isDark;
}

function useViewportWidth() {
  const [width, setWidth] = useState(() =>
    typeof window === "undefined" ? 1440 : window.innerWidth,
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

function useNearViewport(ref: RefObject<HTMLElement | null>) {
  const [isNear, setIsNear] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    if (isNear) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsNear(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isNear, ref]);

  return isNear;
}

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const swapRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isDark = useIsDarkTheme();
  const viewportWidth = useViewportWidth();
  const [activeIndex, setActiveIndex] = useState(0);
  const isNearViewport = useNearViewport(swapRef);
  const shouldMountSwap = isNearViewport || Boolean(shouldReduceMotion);

  const activeProject = projects[activeIndex] ?? projects[0];

  const swapConfig = useMemo(() => {
    if (viewportWidth < 640) {
      return {
        width: 700,
        height: 440,
        cardDistance: 36,
        verticalDistance: 42,
        depth: 70,
        skewAmount: 4,
        cardRadius: 14,
      };
    }

    if (viewportWidth < 1024) {
      return {
        width: 620,
        height: 390,
        cardDistance: 48,
        verticalDistance: 56,
        depth: 86,
        skewAmount: 5,
        cardRadius: 16,
      };
    }

    if (viewportWidth < 1280) {
      return {
        width: 640,
        height: 400,
        cardDistance: 50,
        verticalDistance: 58,
        depth: 88,
        skewAmount: 5,
        cardRadius: 16,
      };
    }

    return {
      width: 720,
      height: 450,
      cardDistance: 56,
      verticalDistance: 64,
      depth: 92,
      skewAmount: 5,
      cardRadius: 18,
    };
  }, [viewportWidth]);

  useGSAP(
    () => {
      if (shouldReduceMotion) return;

      const section = sectionRef.current;
      const intro = section?.querySelector<HTMLElement>("[data-intro-group]");
      const featuredProject =
        section?.querySelector<HTMLElement>("[data-featured]");
      const cta = section?.querySelector<HTMLElement>("[data-cta-group]");

      if (!section || !intro || !featuredProject || !cta) return;

      const introItems = intro.querySelectorAll<HTMLElement>("[data-intro]");
      const swapShell =
        featuredProject.querySelector<HTMLElement>("[data-swap-shell]");
      const featuredItems =
        featuredProject.querySelectorAll<HTMLElement>("[data-featured-item]");

      if (!swapShell) return;

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "top 84%",
          toggleActions: "play none none reverse",
        },
      });

      introTl.from(introItems, {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });

      const featuredTl = gsap.timeline({
        scrollTrigger: {
          trigger: featuredProject,
          start: "top 82%",
          toggleActions: "play none none reverse",
        },
      });

      featuredTl
        .from(swapShell, {
          y: 38,
          autoAlpha: 0,
          duration: 1.15,
          ease: "expo.out",
        })
        .from(
          featuredItems,
          {
            y: 24,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          },
          0.14,
        );

      gsap.utils
        .toArray<HTMLElement>(
          "[data-project]:not([data-project-hidden])",
          section,
        )
        .forEach((project) => {
          const media = project.querySelector<HTMLElement>(
            "[data-project-media]",
          );
          const items = project.querySelectorAll<HTMLElement>(
            "[data-project-item]",
          );

          if (!media || items.length === 0) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top 84%",
              toggleActions: "play none none reverse",
            },
          });

          tl.from(media, {
            clipPath: "inset(0 0 100% 0)",
            scale: 1.05,
            duration: 1.15,
            ease: "expo.out",
          }).from(
            items,
            {
              y: 20,
              autoAlpha: 0,
              duration: 0.7,
              stagger: 0.06,
              ease: "power3.out",
            },
            0.12,
          );
        });

      const ctaItems = cta.querySelectorAll<HTMLElement>("[data-cta]");

      gsap.from(ctaItems, {
        y: 26,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });

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
    { scope: sectionRef, dependencies: [shouldReduceMotion] },
  );

  return (
    <section
      ref={sectionRef}
      aria-labelledby="selected-work-heading"
      className="relative w-full overflow-hidden bg-white text-[#0a0a0a] transition-colors duration-300 dark:bg-[#050505] dark:text-white -mt-20"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-24 pt-20 sm:px-10 sm:pb-28 sm:pt-24 lg:px-14 lg:pb-32 lg:pt-28">
        <div data-intro-group className="max-w-5xl">
          <p
            data-intro
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40"
          >
            <span aria-hidden="true" className="h-px w-8 bg-[#E42527]" />
            Selected Works
          </p>
          <h2
            id="selected-work-heading"
            data-intro
            className="mt-5 font-['Barlow_Condensed'] text-[5rem] font-black italic uppercase leading-[0.82] tracking-[-0.02em]"
          >
            Things I've Built.
          </h2>
          {/* <p
            data-intro
            className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#0a0a0a]/65 sm:text-base lg:text-lg dark:text-white/60"
          >
            From production systems to independent experiments — a selection of
            work shaped by product thinking, engineering, and attention to
            detail.
          </p> */}
        </div>

        <article
          data-featured
          className="mt-16 grid gap-10 sm:mt-20 lg:mt-10 lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)] lg:items-center lg:gap-16 xl:gap-20"
        >
          <figure className="relative flex flex-col">
            <div
              ref={swapRef}
              data-swap-shell
              className="relative aspect-[1.29] w-full"
            >
              {shouldMountSwap && (
                <CardSwap
                  ariaLabel="Selected project screenshots. Use the left and right arrow keys to browse."
                  width={swapConfig.width}
                  height={swapConfig.height}
                  cardDistance={swapConfig.cardDistance}
                  verticalDistance={swapConfig.verticalDistance}
                  depth={swapConfig.depth}
                  skewAmount={swapConfig.skewAmount}
                  visibleCards={3}
                  delay={5600}
                  autoplay={!shouldReduceMotion}
                  pauseOnHover
                  draggable
                  speed={0.9}
                  bounce={0.32}
                  parallax={0.35}
                  hoverSpread={0.1}
                  dim={0.58}
                  cardRadius={swapConfig.cardRadius}
                  intro={!shouldReduceMotion}
                  theme={isDark ? "dark" : "light"}
                  onChange={setActiveIndex}
                  className="selected-works-card-swap"
                >
                  {projects.map((project) => (
                    <Card key={project.number} className="card-swap-project">
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading={project === activeProject ? "eager" : "lazy"}
                        draggable={false}
                      />
                    </Card>
                  ))}
                </CardSwap>
              )}
            </div>

            <figcaption
              data-featured-item
              className="mt-5 flex items-center justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.28em] text-[#0a0a0a]/45 dark:text-white/40"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E42527]" />
                Drag or use arrow keys
              </span>
              <span>
                {activeProject.number} /{" "}
                {String(projects.length).padStart(2, "0")}
              </span>
            </figcaption>
          </figure>

          <div className="flex flex-col">
            <div data-featured-item className="flex items-center gap-4">
              <span className="font-['Barlow_Condensed'] text-2xl font-black italic leading-none text-black dark:text-white">
                {activeProject.number}
              </span>
              <span
                aria-hidden="true"
                className="h-px w-10 bg-[#0a0a0a]/15 dark:bg-white/15"
              />
              <span className={META}>{activeProject.category}</span>
            </div>

            <h3
              data-featured-item
              className="text-[#E42527] mt-6 font-['Barlow_Condensed'] text-[clamp(3rem,5.6vw,5.75rem)] font-black italic uppercase leading-[0.85] tracking-[-0.02em]"
            >
              {activeProject.title}
            </h3>

            <p
              data-featured-item
              className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#0a0a0a]/70 sm:text-base lg:text-lg dark:text-white/65"
            >
              {activeProject.description}
            </p>

            <div
              data-featured-item
              className="mt-8 border-t border-[#0a0a0a]/10 pt-5 dark:border-white/10"
            >
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.32em] text-[#0a0a0a]/40 dark:text-white/35">
                  Role
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#0a0a0a]/70 dark:text-white/60">
                  {activeProject.role}
                </span>
              </div>
              <div
                className={`mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 ${STACK}`}
              >
                {activeProject.tech.map((tech, index) => (
                  <Fragment key={tech}>
                    <span>{tech}</span>
                    {index < activeProject.tech.length - 1 && (
                      <span className="text-[#E42527]">/</span>
                    )}
                  </Fragment>
                ))}
              </div>
            </div>

            <div data-featured-item className="mt-8">
              <ProjectLink
                link={activeProject.link}
                label="Explore Project"
              />
            </div>
          </div>
        </article>

        <div
          data-cta-group
          className="mt-24 flex flex-col items-center text-center sm:mt-28 lg:mt-2"
        >
          <div
            data-cta
            aria-hidden="true"
            className="mb-6 h-1 w-12 bg-[#E42527]"
          />
          <h3
            data-cta
            className="max-w-4xl font-['Barlow_Condensed'] text-[3rem] font-black italic uppercase leading-[0.88] tracking-[-0.02em]"
          >
            See Everything I've Built.
          </h3>
          <NavLink
            data-cta
            to="/projects"
            className="group mt-7 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.32em] text-[#0a0a0a] transition-colors duration-300 hover:text-[#E42527] dark:text-white dark:hover:text-[#E42527]"
          >
            <span className="relative">
              View All Work
              <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#E42527] transition-transform duration-500 group-hover:scale-x-100" />
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}
