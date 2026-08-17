import React, { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiOpenid,
  SiPostgresql,
  SiJest,
  SiDocker,
} from "react-icons/si";

import {
  Search,
  Lightbulb,
  FileText,
  Zap,
  AlignJustify,
  Blocks,
  Settings,
  Database,
  Code2,
  CircleCheck,
  ShieldCheck,
  Activity,
  BarChart2,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface ToolMark {
  name: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  desc: string;
}

interface ProcessStep {
  [x: string]: any;
  number: string;
  title: string;
  description: string;
  side: "left" | "right";
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  tools: ToolMark[];
}

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Understand the problem",
    description:
      "Start with the problem, not the technology. Understand the users, requirements, constraints, and what the product actually needs to solve.",
    side: "right",
    icon: Search,
    tools: [
      {
        name: "Research",
        icon: Lightbulb,
        color: "#F59E0B",
        desc: "Discovery & insights",
      },
      {
        name: "Requirements",
        icon: FileText,
        color: "#3B82F6",
        desc: "Product requirements",
      },
      {
        name: "AI",
        icon: SiOpenid,
        color: "#10A37F",
        desc: "AI-assisted thinking",
      },
    ],
  },

  {
    number: "02",
    title: "Shape the solution",
    description:
      "Turn requirements into a clear technical direction. Define architecture, responsibilities, data flow, and constraints before implementation.",
    side: "left",
    icon: AlignJustify,
    tools: [
      {
        name: "Architecture",
        icon: Blocks,
        color: "#8B5CF6",
        desc: "System architecture",
      },
      {
        name: "API",
        icon: Settings,
        color: "#64748B",
        desc: "API design",
      },
      {
        name: "Data",
        icon: Database,
        color: "#06B6D4",
        desc: "Data modeling",
      },
    ],
  },

  {
    number: "03",
    title: "Design & build",
    description:
      "Build the experience from frontend to backend — creating thoughtful interfaces, reliable APIs, robust business logic, and maintainable systems.",
    side: "right",
    icon: Code2,
    tools: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
        desc: "Frontend library",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
        desc: "Type-safe JavaScript",
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "#339933",
        desc: "Backend runtime",
      },
      {
        name: "NestJS",
        icon: SiNestjs,
        color: "#E0234E",
        desc: "Backend framework",
      },
    ],
  },

  {
    number: "04",
    title: "Test & refine",
    description:
      "Validate the implementation against real requirements. Debug failures, improve usability, harden the system, and iterate until the solution is reliable.",
    side: "left",
    icon: CircleCheck,
    tools: [
      {
        name: "Testing",
        icon: ShieldCheck,
        color: "#22C55E",
        desc: "Quality assurance",
      },
      {
        name: "Security",
        icon: Settings,
        color: "#EF4444",
        desc: "Security & hardening",
      },
      {
        name: "Performance",
        icon: Activity,
        color: "#F97316",
        desc: "Performance tuning",
      },
    ],
  },

  {
    number: "05",
    title: "Ship & measure",
    description:
      "Deploy, observe, and improve. Track reliability, performance, and system behavior as the product evolves.",
    side: "right",
    icon: BarChart2,
    tools: [
      {
        name: "Deploy",
        icon: Zap,
        color: "#F59E0B",
        desc: "Production deployment",
      },
      {
        name: "Monitor",
        icon: Activity,
        color: "#06B6D4",
        desc: "System monitoring",
      },
      {
        name: "Scale",
        icon: Database,
        color: "#8B5CF6",
        desc: "Scalable infrastructure",
      },
      {
        name: "Analytics",
        icon: BarChart2,
        color: "#14B8A6",
        desc: "Product analytics",
      },
    ],
  },
];

const ProcessContourBackground = () => (
  <div className="absolute inset-0 overflow-hidden bg-black pointer-events-none select-none z-0">
    <svg
      aria-hidden="true"
      className="absolute min-w-[200vw] md:min-w-[150vw] min-h-[150vh] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
      viewBox="0 0 1200 1200"
      preserveAspectRatio="none"
    >
      <g fill="none" stroke="#D9D9D9" strokeWidth="0.8">
        {/* Organic generative-style contour paths */}
        <path d="M-100,100 C200,300 400,-100 700,200 S1000,50 1300,300" />
        <path d="M-100,120 C220,320 420,-80 720,220 S1020,70 1300,320" />
        <path d="M-100,140 C240,340 440,-60 740,240 S1040,90 1300,340" />
        <path d="M-100,160 C260,360 460,-40 760,260 S1060,110 1300,360" />
        <path d="M-100,180 C280,380 480,-20 780,280 S1080,130 1300,380" />

        <path d="M-100,400 Q200,600 600,400 T1300,500" />
        <path d="M-100,420 Q220,620 620,420 T1300,520" />
        <path d="M-100,440 Q240,640 640,440 T1300,540" />
        <path d="M-100,460 Q260,660 660,460 T1300,560" />
        <path d="M-100,480 Q280,680 680,480 T1300,580" />

        <path d="M300,-100 C150,200 500,400 400,700 S600,1000 400,1300" />
        <path d="M320,-100 C170,220 520,420 420,720 S620,1020 420,1300" />
        <path d="M340,-100 C190,240 540,440 440,740 S640,1040 440,1300" />
        <path d="M360,-100 C210,260 560,460 460,760 S660,1060 460,1300" />

        <path d="M700,-100 Q500,400 800,600 T700,1300" />
        <path d="M720,-100 Q520,420 820,620 T720,1300" />
        <path d="M740,-100 Q540,440 840,640 T740,1300" />
        <path d="M760,-100 Q560,460 860,660 T760,1300" />
      </g>
    </svg>
  </div>
);

const ProcessTimeline: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  return (
    <section className="relative w-full overflow-x-hidden bg-[#FFFFFF] py-10 text-[#111111]">
      {/* <ProcessContourBackground /> */}

      <div className="relative z-10 w-full max-w-full mx-auto px-8 md:px-0 flex flex-col items-center">
        {/* Editorial Heading */}
        <div className="flex items-center gap-3 mb-6">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 dark:text-gray-400 uppercase">
              BEHIND THE BUILD
              {/* THE WAY I WORK */}
            </span>
          </div>
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-5xl font-normal whitespace-nowrap text-gray-950 dark:text-white leading-[1.05] tracking-tight">
           Ideas are only the beginning.
          </h2>
          <p className="text-2xl md:text-3xl font-serif italic text-[#777777] font-light mt-2">
            The interesting part is making them real.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full mx-auto">
          {/* Central Spine */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-[#E8E8E8] md:-translate-x-1/2 z-0" />

          {/* Steps */}
          <div className="flex flex-col space-y-[60px] md:space-y-[85px] w-full relative z-10 pb-10">
            {processSteps.map((step) => {
              const Icon = step.icon;
              const isRight = step.side === "right";

              return (
                <div
                  key={step.number}
                  className="relative flex flex-row w-full group"
                >
                  {/* MOBILE & DESKTOP LEFT SPACING */}
                  <div
                    className={`hidden md:flex w-1/2 pr-[45px] justify-end ${
                      !isRight ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {!isRight && (
                      <div className="flex flex-col items-end text-right w-[465px]">
                        <h3 className="text-[18px] font-medium text-[#111111] mb-1.5 leading-[1.3] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                          {step.title}
                        </h3>
                        <p className="text-[14px] text-[#777777] leading-[1.45] mb-3">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap justify-start gap-x-2 gap-y-1.5">
                          {step.tools.map((tool) => {
                            const ToolIcon = tool.icon;
                            const toolKey = `${step.number}-${tool.name}`;

                            const isHovered = hoveredTool === toolKey;

                            return (
                              <div
                                key={toolKey}
                                className="
                          relative
                          flex
                          flex-col
                          items-center
                        "
                                onMouseEnter={() => setHoveredTool(toolKey)}
                                onMouseLeave={() => setHoveredTool(null)}
                              >
                                <motion.button
                                  type="button"
                                  whileHover={{
                                    y: -4,
                                    scale: 1.05,
                                  }}
                                  whileTap={{
                                    scale: 0.95,
                                  }}
                                  className="
                            w-9
                            h-9
                            rounded-2xl
                            bg-white/80
                            dark:bg-slate-800/80
                            backdrop-blur-md
                            border
                            border-slate-200
                            dark:border-slate-200
                            shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                            dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                            flex
                            items-center
                            justify-center
                            transition-all
                            duration-300
                            hover:border-blue-300
                            dark:hover:border-gray-200
                            hover:shadow-lg
                            hover:shadow-blue-500/10
                            dark:hover:shadow-blue-500/20
                            group
                          "
                                >
                                 {ToolIcon && (
                                    <div style={{ color: tool.color }}>
                                      <ToolIcon
                                        size={16}
                                        className="
                                          transition-transform
                                          duration-300
                                          group-hover:scale-110
                                        "
                                      />
                                    </div>
                                  )}
                                </motion.button>

                                {/* ─────────────────────
                            Glass Tooltip
                        ───────────────────── */}

                                <AnimatePresence>
                                  {isHovered && (
                                    <motion.div
                                      initial={{
                                        opacity: 0,
                                        y: 8,
                                        x: "-50%",
                                        scale: 0.95,
                                      }}
                                      animate={{
                                        opacity: 1,
                                        y: 0,
                                        x: "-50%",
                                        scale: 1,
                                      }}
                                      exit={{
                                        opacity: 0,
                                        y: 4,
                                        x: "-50%",
                                        scale: 0.95,
                                      }}
                                      transition={{
                                        duration: 0.15,
                                      }}
                                      className="
                                absolute
                                bottom-full
                                mb-3
                                left-1/2
                                z-50
                                pointer-events-none
                                whitespace-nowrap
                                origin-bottom
                                flex
                                flex-col
                                items-center
                              "
                                    >
                                      {/* Tooltip Content */}
                                      <div
                                        className="
                                  bg-slate-900/90
                                  dark:bg-slate-100/90
                                  text-white
                                  dark:text-slate-900
                                  text-xs
                                  px-3
                                  py-1.5
                                  rounded-xl
                                  shadow-xl
                                  backdrop-blur-md
                                  border
                                  border-slate-700/50
                                  dark:border-slate-300/50
                                  flex
                                  flex-col
                                  items-center
                                  gap-0.5
                                "
                                      >
                                        {/* Tool Name */}
                                        <span
                                          className="
                                    font-semibold
                                    text-slate-100
                                    dark:text-slate-900
                                  "
                                        >
                                          {tool.name}
                                        </span>

                                        {/* Tool Description */}
                                        {tool.desc && (
                                          <span
                                            className="
                                      text-[10px]
                                      text-slate-400
                                      dark:text-slate-600
                                      font-normal
                                    "
                                          >
                                            {tool.desc}
                                          </span>
                                        )}
                                      </div>

                                      {/* Tooltip Arrow */}
                                      <div
                                        className="
                                  w-2
                                  h-2
                                  bg-slate-900/90
                                  dark:bg-slate-100/90
                                  rotate-45
                                  -mt-1
                                  border-r
                                  border-b
                                  border-slate-700/50
                                  dark:border-slate-300/50
                                "
                                      />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CENTER ICON NODE */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div className="w-[30px] h-[30px] flex items-center justify-center bg-[rgba(255,255,255,0.95)] border border-[#EEEEEE] rounded-[3px] shadow-[0_1px_5px_rgba(0,0,0,0.03)] z-10 transition-transform duration-500 group-hover:scale-105">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-[12px] text-[#999999] tracking-[0.05em] mt-1.5 uppercase font-medium">
                      {step.number}
                    </span>
                  </div>

                  {/* MOBILE TEXT BLOCK & DESKTOP RIGHT */}
                  <div
                    className={`w-full md:w-1/2 pl-[55px] md:pl-[45px] flex justify-start ${
                      isRight
                        ? "opacity-100"
                        : "md:opacity-0 md:pointer-events-none"
                    }`}
                  >
                    <div
                      className={`flex flex-col items-start text-left w-full max-w-[465px] ${!isRight ? "block md:hidden" : ""}`}
                    >
                      <h3 className="text-[16px] font-medium text-[#111111] mb-1.5 leading-[1.3] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-[#777777] leading-[1.45] mb-3">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap justify-start gap-x-2 gap-y-1.5">
                        {step.tools.map((tool) => {
                          const ToolIcon = tool.icon;
                          const toolKey = `${step.number}-${tool.name}`;

                          const isHovered = hoveredTool === toolKey;

                          return (
                            <div
                              key={toolKey}
                              className="
                                    relative
                                    flex
                                    flex-col
                                    items-center
                                  "
                              onMouseEnter={() => setHoveredTool(toolKey)}
                              onMouseLeave={() => setHoveredTool(null)}
                            >
                              <motion.button
                                type="button"
                                whileHover={{
                                  y: -4,
                                  scale: 1.05,
                                }}
                                whileTap={{
                                  scale: 0.95,
                                }}
                                className="
                                w-9
                                h-9
                                rounded-2xl
                                bg-white/80
                                dark:bg-slate-800/80
                                backdrop-blur-md
                                border
                                border-slate-200
                                dark:border-slate-200
                                shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                                dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                                flex
                                items-center
                                justify-center
                                transition-all
                                duration-300
                                hover:border-blue-300
                                dark:hover:border-gray-200
                                hover:shadow-lg
                                hover:shadow-blue-500/10
                                dark:hover:shadow-blue-500/20
                                group
                                "
                              >
                               {ToolIcon && (
                                    <div style={{ color: tool.color }}>
                                      <ToolIcon
                                        size={16}
                                        className="
                                          transition-transform
                                          duration-300
                                          group-hover:scale-110
                                        "
                                      />
                                    </div>
                                  )}
                              </motion.button>

                              <AnimatePresence>
                                {isHovered && (
                                  <motion.div
                                    initial={{
                                      opacity: 0,
                                      y: 8,
                                      x: "-50%",
                                      scale: 0.95,
                                    }}
                                    animate={{
                                      opacity: 1,
                                      y: 0,
                                      x: "-50%",
                                      scale: 1,
                                    }}
                                    exit={{
                                      opacity: 0,
                                      y: 4,
                                      x: "-50%",
                                      scale: 0.95,
                                    }}
                                    transition={{
                                      duration: 0.15,
                                    }}
                                    className="
                                absolute
                                bottom-full
                                mb-3
                                left-1/2
                                z-50
                                pointer-events-none
                                whitespace-nowrap
                                origin-bottom
                                flex
                                flex-col
                                items-center
                              "
                                  >
                                    <div
                                      className="
                                  bg-slate-900/90
                                  dark:bg-slate-100/90
                                  text-white
                                  dark:text-slate-900
                                  text-xs
                                  px-3
                                  py-1.5
                                  rounded-xl
                                  shadow-xl
                                  backdrop-blur-md
                                  border
                                  border-slate-700/50
                                  dark:border-slate-300/50
                                  flex
                                  flex-col
                                  items-center
                                  gap-0.5
                                "
                                    >
                                      <span
                                        className="
                                    font-semibold
                                    text-slate-100
                                    dark:text-slate-900
                                  "
                                      >
                                        {tool.name}
                                      </span>

                                      {tool.desc && (
                                        <span
                                          className="
                                      text-[10px]
                                      text-slate-400
                                      dark:text-slate-600
                                      font-normal
                                    "
                                        >
                                          {tool.desc}
                                        </span>
                                      )}
                                    </div>

                                    {/* Tooltip Arrow */}
                                    <div
                                      className="
                                  w-2
                                  h-2
                                  bg-slate-900/90
                                  dark:bg-slate-100/90
                                  rotate-45
                                  -mt-1
                                  border-r
                                  border-b
                                  border-slate-700/50
                                  dark:border-slate-300/50
                                "
                                    />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
