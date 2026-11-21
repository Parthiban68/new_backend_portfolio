import { useEffect, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { useReducedMotion } from "motion/react";
import researchImage from "../../../assets/Thoughtful Designer’s Creative Workspace.png";
import architectureImage from "../../../assets/Isometric System Architecture Planning.png";
import integrationImage from "../../../assets/Developer Building a Connected App.png";
import integrationStageImage from "../../../assets/Gemini_Generated_Image_1fgb1n1fgb1n1fgb.png";
import deliveryStageImage from "../../../assets/Gemini_Generated_Image_brigf9brigf9brig.png";

const stages = [
  {
    number: "01",
    title: "UNDERSTAND THE PROBLEM",
    category: "Research",
    focus: "Research • Requirements • Constraints",
    description:
      "Study the problem space, gather requirements, and map user needs and constraints before choosing a direction.",
    image: researchImage,
    imagePosition: "50% 42%",
    alt: "Visual for researching requirements and user needs",
  },
  {
    number: "02",
    title: "SHAPE THE SOLUTION",
    category: "Architecture",
    focus: "Architecture • Data Flow • Design Decisions",
    description:
      "Translate requirements into architecture, system design, technical decisions, and a clear data flow.",
    image: architectureImage,
    imagePosition: "50% 45%",
    alt: "Visual for system architecture and technical planning",
  },
  {
    number: "03",
    title: "BUILD THE EXPERIENCE",
    category: "Development",
    focus: "Frontend • Backend • APIs • Implementation",
    description:
      "Implement the interface, backend, APIs, and business logic as one coherent product experience.",
    image: integrationImage,
    imagePosition: "50% 48%",
    alt: "Visual for frontend and backend development",
  },
  {
    number: "04",
    title: "CONNECT THE SYSTEM",
    category: "Integration",
    focus: "Database • Security • Integrations • Connectivity",
    description:
      "Connect databases, secure critical paths, integrate third-party services, and make the system work end to end.",
    image: integrationStageImage,
    imagePosition: "50% 46%",
    alt: "Visual for database, security and third-party integration",
  },
  {
    number: "05",
    title: "DELIVER THE PRODUCT",
    category: "Delivery",
    focus: "Testing • Optimization • Deployment • Improvement",
    description:
      "Test, optimize, deploy, and refine the product as real usage reveals what should improve next.",
    image: deliveryStageImage,
    imagePosition: "50% 44%",
    alt: "Visual for testing, deployment and delivery",
  },
];

const tints = [
  ["#e2d4ec", "#ede4f5"],
  ["#e6cedb", "#dfc4d3"],
  ["#ced6e0", "#d9e0e8"],
  ["#e6e0d4", "#ede8dd"],
  ["#d2e0d6", "#e2ede5"],
] as const;

export default function ProcessTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hasInteracted = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      return;
    }

    const card = cardRefs.current[activeIndex];
    if (!card || !window.matchMedia("(max-width: 767px)").matches) return;

    card.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex, shouldReduceMotion]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + stages.length) % stages.length;
    setActiveIndex(nextIndex);
    cardRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      className="relative overflow-hidden bg-white text-[#1e1e1c]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto w-[min(90%,1600px)] py-[clamp(72px,8vw,128px)] max-[1100px]:w-[90%] max-[767px]:w-full max-[767px]:pt-[64px] max-[767px]:pb-[72px]">
        <header className="mb-[clamp(28px,4vw,52px)] grid grid-cols-[minmax(0,1fr)_auto] items-end gap-[32px] max-[767px]:grid-cols-1 max-[767px]:gap-[18px] max-[767px]:px-[20px] max-[767px]:mb-[28px]">
          <div>
            <p className="flex items-center gap-[12px] font-['JetBrains_Mono',monospace] text-[10px] font-medium tracking-[0.4em] uppercase text-[rgba(30,30,28,0.5)] before:h-[2px] before:w-[24px] before:bg-[#e42527] before:content-['']">
              Behind the Build
            </p>
            <h2
              className="mt-[18px] font-['Space_Grotesk','Inter',sans-serif] text-[clamp(2.35rem,4.6vw,4.75rem)] font-black leading-[0.9] tracking-[-0.045em] max-[1100px]:text-[clamp(2.2rem,5.2vw,3.5rem)] max-[767px]:text-[clamp(2.2rem,9vw,3.25rem)] max-[767px]:leading-[0.92]"
              id="process-heading"
            >
              FROM IDEA TO SYSTEM
            </h2>
            <p className="mt-[20px] max-w-[540px] text-[clamp(0.95rem,1.2vw,1.125rem)] leading-[1.55] text-[rgba(30,30,28,0.62)] max-[767px]:text-[14px]">
              A five-stage development journey, from understanding the problem
              to delivering a product that keeps improving.
            </p>
          </div>
          <p className="flex items-center gap-[12px] pb-[8px] font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.24em] whitespace-nowrap uppercase text-[rgba(30,30,28,0.48)] max-[767px]:px-[20px]">
            <span
              className="block h-px w-[56px] bg-[linear-gradient(90deg,#e42527,rgba(30,30,28,0.14))]"
              aria-hidden="true"
            />
            Hover or select a stage
          </p>
        </header>

        <div
          className="flex w-full gap-[clamp(8px,1vw,14px)] motion-reduce:[scroll-behavior:auto] max-[767px]:gap-[14px] max-[767px]:overflow-x-auto max-[767px]:[overscroll-behavior-inline:contain] max-[767px]:[scroll-padding-inline:20px] max-[767px]:[scroll-snap-type:x_mandatory] max-[767px]:p-[4px_20px_18px] max-[767px]:[scrollbar-width:none] max-[767px]:[-ms-overflow-style:none] max-[767px]:[&::-webkit-scrollbar]:hidden"
          aria-label="Development stages"
        >
          {stages.map((stage, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={stage.number}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
                type="button"
                className={`group relative block h-[532px] min-w-0 flex-[1_1_0px] cursor-pointer overflow-hidden rounded-[24px] border border-[#1e1e1c] bg-[#dedbd4] p-0 text-left text-[#1e1e1c] isolate [transition:flex-grow_720ms_cubic-bezier(0.22,1,0.36,1),flex-basis_720ms_cubic-bezier(0.22,1,0.36,1),transform_720ms_cubic-bezier(0.22,1,0.36,1)] data-[active=true]:grow-0 data-[active=true]:basis-[498px] data-[active=false]:hover:[transform:translateY(-4px)] focus-visible:[outline:2px_solid_#e42527] focus-visible:[outline-offset:4px] before:absolute before:inset-0 before:z-[2] before:pointer-events-none before:content-[''] before:[background-image:radial-gradient(#1e1e1c_0.75px,transparent_0.75px)] before:[background-size:6px_6px] before:[opacity:0.12] before:[transition:opacity_720ms_cubic-bezier(0.22,1,0.36,1)] data-[active=true]:before:[opacity:0] after:absolute after:inset-0 after:z-[2] after:pointer-events-none after:content-[''] after:[background:var(--card-tint)] after:[mix-blend-mode:multiply] after:[opacity:0.82] after:[transition:opacity_720ms_cubic-bezier(0.22,1,0.36,1)] data-[active=true]:after:[opacity:0] motion-reduce:[transition-duration:0.01ms]! motion-reduce:before:duration-[0.01ms]! motion-reduce:after:duration-[0.01ms]! max-[767px]:flex-[0_0_498px] max-[767px]:snap-center max-[767px]:data-[active=true]:flex-[0_0_498px] max-[767px]:data-[active=false]:hover:[transform:none]`}
                data-active={isActive ? "true" : "false"}
                aria-pressed={isActive}
                aria-label={`Stage ${stage.number}: ${stage.title}. ${stage.description}`}
                style={
                  {
                    "--image-position": stage.imagePosition,
                    "--card-tint": `linear-gradient(135deg, ${tints[index][0]} 0%, ${tints[index][1]} 100%)`,
                  } as CSSProperties
                }
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") setActiveIndex(index);
                }}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                <img
                  className="absolute inset-0 z-[1] h-full w-full object-cover [object-position:var(--image-position,center)] [filter:grayscale(100%)_contrast(1.05)] [transition:filter_720ms_cubic-bezier(0.22,1,0.36,1)] group-data-[active=true]:[filter:none] motion-reduce:[transition-duration:0.01ms]!"
                  src={stage.image}
                  alt={stage.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
                <span
                  className="absolute inset-0 z-[3] [background:linear-gradient(180deg,rgba(0,0,0,0.2)_0%,transparent_28%),linear-gradient(180deg,transparent_52%,rgba(0,0,0,0.62)_100%)] [transition:opacity_720ms_cubic-bezier(0.22,1,0.36,1)] group-data-[active=true]:[background:linear-gradient(180deg,rgba(0,0,0,0.1)_0%,transparent_32%),linear-gradient(180deg,transparent_62%,rgba(0,0,0,0.22)_100%)] motion-reduce:[transition-duration:0.01ms]!"
                  aria-hidden="true"
                />
                <span
                  className="absolute top-[18px] left-[18px] z-[4] inline-flex h-[38px] min-w-[38px] items-center justify-center rounded-[9999px] border border-[#1e1e1c] bg-[#fdfcf3] px-[9px] font-['JetBrains_Mono',monospace] text-[11px] font-bold tracking-[0.08em] text-[#1e1e1c] shadow-[0_8px_20px_rgba(30,30,28,0.12)] motion-reduce:[transition-duration:0.01ms]! max-[767px]:top-[16px] max-[767px]:left-[16px]"
                  aria-hidden="true"
                >
                  {stage.number}
                </span>
                <span
                  className="absolute bottom-[24px] left-[20px] z-[4] rounded-[9999px] border border-[#1e1e1c] bg-[#fdfcf3] px-[5px] py-[10px] font-['JetBrains_Mono',monospace] text-[10px] font-semibold tracking-[0.28em] uppercase text-[#1e1e1c] [transform:rotate(180deg)] [writing-mode:vertical-rl] [transition:opacity_480ms_ease,transform_720ms_cubic-bezier(0.22,1,0.36,1)] group-data-[active=true]:[transform:rotate(180deg)_translateX(12px)] group-data-[active=true]:opacity-0 motion-reduce:[transition-duration:0.01ms]! max-[767px]:bottom-[22px] max-[767px]:left-[18px]"
                  aria-hidden="true"
                >
                  {stage.category}
                </span>
                <span
                  className="absolute right-[clamp(14px,1.4vw,22px)] bottom-[clamp(14px,1.4vw,22px)] left-[clamp(14px,1.4vw,22px)] z-[5] block rounded-[20px] border border-[#1e1e1c] bg-[#fdfcf3] p-[clamp(16px,1.5vw,24px)] shadow-[0_22px_50px_rgba(30,30,28,0.18)] invisible opacity-0 pointer-events-none [transform:translateY(16px)_scale(0.98)] [backdrop-filter:blur(10px)] [transition:opacity_480ms_ease,transform_650ms_cubic-bezier(0.22,1,0.36,1),visibility_480ms_ease] group-data-[active=true]:visible group-data-[active=true]:opacity-100 group-data-[active=true]:[transform:translateY(0)_scale(1)] motion-reduce:[transition-duration:0.01ms]! max-[1100px]:p-[16px] max-[767px]:right-[14px] max-[767px]:bottom-[14px] max-[767px]:left-[14px] max-[767px]:rounded-[16px] max-[767px]:p-[12px]"
                  aria-hidden={!isActive}
                >
                  <span className="flex items-center gap-[9px] font-['JetBrains_Mono',monospace] text-[10px] tracking-[0.24em] uppercase text-[rgba(30,30,28,0.5)]">
                    <span
                      className="h-[7px] w-[7px] rounded-full bg-[#e42527] shadow-[0_0_0_4px_rgba(228,37,39,0.12)]"
                      aria-hidden="true"
                    />
                    Stage {stage.number} / 05
                  </span>
                  <span className="mt-[11px] block font-['Space_Grotesk','Inter',sans-serif] text-[clamp(1.35rem,1.8vw,1.95rem)] font-black leading-[1] tracking-[-0.03em] uppercase italic max-[1100px]:text-[clamp(1.35rem,2.2vw,1.75rem)] max-[767px]:text-[1.2rem]">
                    {stage.title}
                  </span>
                  <span className="mt-[10px] block min-h-[3em] max-w-[46ch] text-[13px] leading-[1.5] text-[rgba(30,30,28,0.72)] max-[1100px]:text-[12px] max-[767px]:min-h-[2.6em] max-[767px]:text-[11px]">
                    {stage.description}
                  </span>
                  <span className="mt-[14px] flex items-center gap-[10px] rounded-[12px] border border-[rgba(228,37,39,0.16)] bg-[linear-gradient(90deg,rgba(228,37,39,0.08),rgba(228,37,39,0.02))] p-[9px_11px] max-[767px]:mt-[8px] max-[767px]:p-[7px_9px]">
                    <span className="font-['JetBrains_Mono',monospace] text-[9px] font-bold tracking-[0.2em] uppercase text-[#e42527]">
                      Focus
                    </span>
                    <span className="text-[11px] leading-[1.35] text-[rgba(30,30,28,0.62)] max-[767px]:text-[10px]">
                      {stage.focus}
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
