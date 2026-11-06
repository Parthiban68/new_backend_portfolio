import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

import portraitImage from "../../../assets/Parthiban.jpeg";
import cfoImage from "../../../assets/cfo.png";
import aboutImage from "../../../assets/about2.png";
import trendImage from "../../../assets/treadtrends.png";
import busStandImage from "../../../assets/tbs.png";
import taskFlowImage from "../../../assets/new_5.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CONTACT_EMAIL = "parthibanm1268@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/m-parthiban/";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type FloatingTile = {
  src: string;
  alt: string;
  aspect: string;
  stripWidth: string;
  desktopWidth: string;
  position: string;
  rotate: number;
  floatRotate: number;
  duration: number;
  delay: number;
  distance: number;
  stripOffset?: string;
  monochrome?: boolean;
};

const floatingTiles: FloatingTile[] = [
  {
    src: portraitImage,
    alt: "Parthiban M portrait",
    aspect: "aspect-[3/4]",
    stripWidth: "w-[64px] sm:w-[88px] md:w-[104px]",
    desktopWidth: "lg:w-[118px] xl:w-[146px] 2xl:w-[170px]",
    position:
      "lg:left-[3%] lg:top-[6%] xl:left-[6%] xl:top-[7%] 2xl:left-[8%] 2xl:top-[8%]",
    rotate: -6,
    floatRotate: -1.6,
    duration: 7.6,
    delay: 0.2,
    distance: 9,
    stripOffset: "mt-3",
  },
  {
    src: cfoImage,
    alt: "CFO360 finance platform preview",
    aspect: "aspect-[16/10]",
    stripWidth: "w-[76px] sm:w-[104px] md:w-[120px]",
    desktopWidth: "lg:w-[142px] xl:w-[176px] 2xl:w-[205px]",
    position:
      "lg:right-[3%] lg:top-[3%] xl:right-[6%] xl:top-[4%] 2xl:right-[8%] 2xl:top-[5%]",
    rotate: 4,
    floatRotate: 1.4,
    duration: 8.4,
    delay: 0.9,
    distance: 11,
    stripOffset: "-mt-2",
  },
  {
    src: aboutImage,
    alt: "Design and workspace detail",
    aspect: "aspect-[3/4]",
    stripWidth: "w-[58px] sm:w-[80px] md:w-[92px]",
    desktopWidth: "lg:w-[108px] xl:w-[134px] 2xl:w-[158px]",
    position:
      "lg:left-[5%] lg:top-[43%] xl:left-[8%] xl:top-[43%] 2xl:left-[10%] 2xl:top-[44%]",
    rotate: 3,
    floatRotate: 1.5,
    duration: 6.8,
    delay: 1.4,
    distance: 8,
    stripOffset: "mt-4",
  },
  {
    src: trendImage,
    alt: "TreadTrends project preview",
    aspect: "aspect-[4/5]",
    stripWidth: "w-[56px] sm:w-[76px] md:w-[88px]",
    desktopWidth: "lg:w-[112px] xl:w-[140px] 2xl:w-[162px]",
    position:
      "lg:right-[5%] lg:top-[41%] xl:right-[8%] xl:top-[42%] 2xl:right-[10%] 2xl:top-[42%]",
    rotate: -5,
    floatRotate: -1.3,
    duration: 7.2,
    delay: 0.6,
    distance: 10,
    stripOffset: "-mt-4",
    monochrome: true,
  },
  {
    src: busStandImage,
    alt: "TheBusStand booking platform preview",
    aspect: "aspect-[16/10]",
    stripWidth: "w-[74px] sm:w-[100px] md:w-[116px]",
    desktopWidth: "lg:w-[122px] xl:w-[152px] 2xl:w-[178px]",
    position:
      "lg:bottom-[6%] lg:left-[3%] xl:bottom-[8%] xl:left-[6%] 2xl:bottom-[9%] 2xl:left-[8%]",
    rotate: 5,
    floatRotate: 1.3,
    duration: 8.8,
    delay: 1.8,
    distance: 9,
  },
  {
    src: taskFlowImage,
    alt: "TaskFlow productivity app preview",
    aspect: "aspect-[3/4]",
    stripWidth: "w-[66px] sm:w-[90px] md:w-[104px]",
    desktopWidth: "lg:w-[112px] xl:w-[140px] 2xl:w-[162px]",
    position:
      "lg:bottom-[8%] lg:right-[5%] xl:bottom-[9%] xl:right-[8%] 2xl:bottom-[10%] 2xl:right-[9%]",
    rotate: -3,
    floatRotate: -1.4,
    duration: 7.9,
    delay: 1.1,
    distance: 10,
  },
];

function FloatingImage({
  tile,
  variant,
  className = "",
}: {
  tile: FloatingTile;
  variant: "strip" | "desktop";
  className?: string;
}) {
  const isDesktop = variant === "desktop";
  const tiltStyle = {
    "--tile-rotate": `${tile.rotate}deg`,
  } as CSSProperties;

  return (
    <div
      data-float-tile
      data-float-distance={tile.distance}
      data-float-duration={tile.duration}
      data-float-delay={tile.delay}
      data-float-rotate={tile.floatRotate}
      className={`group pointer-events-auto ${
        isDesktop
          ? `absolute ${tile.desktopWidth} ${tile.position}`
          : `relative shrink-0 ${tile.stripWidth} ${tile.stripOffset ?? ""}`
      } ${className}`}
    >
      <div
        style={tiltStyle}
        className="overflow-hidden rounded-[16px] border border-[#0a0a0a]/10 bg-white/90 p-1.5 shadow-[0_18px_45px_-28px_rgba(10,10,10,0.55)] transition-all duration-500 ease-out [transform:rotate(var(--tile-rotate))] group-hover:border-[#0a0a0a]/20 group-hover:shadow-[0_26px_55px_-24px_rgba(10,10,10,0.5)] group-hover:[transform:rotate(0deg)_scale(1.035)] motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_20px_45px_-24px_rgba(0,0,0,0.9)] dark:group-hover:border-white/20 dark:group-hover:shadow-[0_26px_55px_-18px_rgba(0,0,0,0.95)] sm:rounded-[18px] sm:p-2"
      >
        <div
          className={`overflow-hidden rounded-[11px] ${tile.aspect} sm:rounded-[12px]`}
        >
          <img
            src={tile.src}
            alt={tile.alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={`h-full w-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] ${
              tile.monochrome
                ? "grayscale group-hover:grayscale-0"
                : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default function LetsConnect() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [feedback, setFeedback] = useState("");

  useGSAP(
    () => {
      const section = sectionRef.current;
      const content = contentRef.current;
      if (!section || !content) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const revealItems = gsap.utils.toArray<HTMLElement>(
          "[data-connect-reveal]",
          content,
        );

        if (revealItems.length > 0) {
          gsap.from(revealItems, {
            y: 26,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: {
              trigger: content,
              start: "top 82%",
              toggleActions: "play none none none",
            },
          });
        }

        const tiles = gsap.utils.toArray<HTMLElement>(
          "[data-float-tile]",
          section,
        );

        if (tiles.length > 0) {
          gsap.from(tiles, {
            autoAlpha: 0,
            duration: 0.8,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              toggleActions: "play none none none",
            },
          });
        }

        tiles.forEach((tile) => {
          const distance = Number(tile.dataset.floatDistance ?? 9);
          const rotation = Number(tile.dataset.floatRotate ?? 1.4);
          const duration = Number(tile.dataset.floatDuration ?? 7);
          const delay = Number(tile.dataset.floatDelay ?? 0);

          gsap.set(tile, { transformOrigin: "50% 50%", force3D: true });
          gsap.to(tile, {
            y: -distance,
            rotation,
            duration,
            delay,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef },
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = email.trim();

    if (!value) {
      setStatus("error");
      setFeedback("Please enter your email address.");
      return;
    }

    if (!EMAIL_PATTERN.test(value)) {
      setStatus("error");
      setFeedback("That email address doesn't look right.");
      return;
    }

    const subject = encodeURIComponent("Let's create something together");
    const body = encodeURIComponent(
      `Hi Parthiban,\n\nI'd love to talk about a project or opportunity. You can reach me at ${value}.\n\nThanks!`,
    );

    setStatus("success");
    setFeedback("Opening your email client…");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={sectionRef}
      aria-labelledby="lets-connect-heading"
      className="relative isolate h-screen -mt-20 w-full overflow-hidden bg-[#f7f3ed] text-[#0a0a0a] transition-colors duration-300 dark:bg-[#050505] dark:text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.045] dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(#15130d 1px, transparent 1px), linear-gradient(90deg, #15130d 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
        <div
          className="absolute inset-0 hidden opacity-[0.035] dark:block"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[540px] w-[min(92vw,920px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.06),transparent_68%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.045),transparent_68%)]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[720px] lg:px-10 lg:py-24 xl:min-h-[760px] xl:px-14">
        {/* <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          {floatingTiles.map((tile) => (
            <FloatingImage
              key={`desktop-${tile.alt}`}
              tile={tile}
              variant="desktop"
            />
          ))}
        </div> */}

        <div
          ref={contentRef}
          className="relative z-20 mx-auto w-full max-w-[900px] text-center "
        >
          <div
            aria-hidden="true"
            className="relative z-10 mx-auto mb-9 flex w-full max-w-[430px] items-center justify-center gap-3 sm:mb-11 sm:max-w-[560px] sm:gap-5 lg:hidden"
          >
            {floatingTiles.slice(0, 4).map((tile, index) => (
              <FloatingImage
                key={`strip-${tile.alt}`}
                tile={tile}
                variant="strip"
                className={index === 3 ? "hidden sm:block" : ""}
              />
            ))}
          </div>

          <div data-connect-reveal>
            <span className="inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-[#0a0a0a]/50 dark:text-white/40">
              <span
                aria-hidden="true"
                className="h-px w-8 bg-gradient-to-r from-emerald-500 to-cyan-500"
              />
              Let's Connect
            </span>
          </div>

          <h2
            id="lets-connect-heading"
            data-connect-reveal
            className="mt-6 font-['Barlow_Condensed'] text-[clamp(2.75rem,8vw,5.5rem)] font-black uppercase leading-[0.84] tracking-[-0.02em] text-balance text-[#0a0a0a] dark:text-white"
          >
            A good idea is just the start.{" "}
            <span className="mt-1 block">Let's make something of it.</span>
          </h2>

          <p
            data-connect-reveal
            className="mx-auto mt-6 max-w-[540px] text-[15px] leading-[1.65] text-[#6B6B6B] dark:text-neutral-400 sm:text-base"
          >
            Have a project, an opportunity, or an interesting idea? I'd love to
            hear from you.
          </p>

          <form
            data-connect-reveal
            onSubmit={handleSubmit}
            noValidate
            className="mx-auto mt-9 w-full max-w-[560px] sm:mt-10"
          >
            <div className="flex flex-col gap-2 rounded-[26px] border border-[#0a0a0a]/10 bg-white/70 p-2 shadow-[0_24px_60px_-40px_rgba(10,10,10,0.55)] transition-all duration-300 focus-within:border-emerald-500/50 focus-within:ring-4 focus-within:ring-emerald-500/10 dark:border-white/10 dark:bg-white/[0.035] dark:shadow-[0_24px_60px_-40px_rgba(0,0,0,0.9)] dark:focus-within:border-emerald-400/50 dark:focus-within:ring-emerald-400/10 sm:flex-row sm:items-center sm:rounded-full">
              <label htmlFor="connect-email" className="sr-only">
                Email address
              </label>
              <input
                id="connect-email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your email goes here"
                value={email}
                aria-invalid={status === "error"}
                aria-describedby="connect-email-note"
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== "idle") {
                    setStatus("idle");
                    setFeedback("");
                  }
                }}
                className="h-12 w-full min-w-0 flex-none rounded-full bg-transparent px-5 text-[15px] text-[#0a0a0a] outline-none placeholder:text-[#0a0a0a]/35 sm:flex-1 dark:text-white dark:placeholder:text-white/30"
              />
              <button
                type="submit"
                className="group/cta inline-flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#E42527] px-6 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5  hover:shadow-[0_12px_30px_-12px_rgba(10,10,10,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f3ed] active:translate-y-0  dark:focus-visible:ring-offset-[#050505] sm:w-auto"
              >
                <span>Start creating</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
              </button>
            </div>

            <div
              id="connect-email-note"
              aria-live="polite"
              className="mt-3 min-h-[18px] text-center font-mono text-[9px] uppercase tracking-[0.22em] sm:text-[10px]"
            >
              {status === "error" ? (
                <span className="text-[#E42527]">
                  {feedback}
                </span>
              ) : status === "success" ? (
                <span className="text-emerald-600 dark:text-emerald-400">
                  {feedback}
                </span>
              ) : (
                <span className="text-[#0a0a0a]/35 dark:text-white/30">
                  Opens in your email client
                </span>
              )}
            </div>
          </form>

          <div
            data-connect-reveal
            className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[#0a0a0a]/40 dark:text-white/35 sm:text-[10px]"
          >
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="transition-colors duration-300 hover:text-[#0a0a0a] dark:hover:text-white"
            >
              {CONTACT_EMAIL}
            </a>
            <span
              aria-hidden="true"
              className="hidden h-3 w-px bg-[#0a0a0a]/15 dark:bg-white/15 sm:block"
            />
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 transition-colors duration-300 hover:text-[#0a0a0a] dark:hover:text-white"
            >
              LinkedIn
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
