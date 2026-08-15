import React from 'react';
import { Search, AlignJustify, Code2, CircleCheck, BarChart2, Lightbulb, Database, Settings, ShieldCheck, FileText, Blocks, LayoutTemplate, Activity, Zap, Server } from 'lucide-react';

interface ToolMark {
  name: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  side: 'left' | 'right';
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  tools: ToolMark[];
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand the problem',
    description: 'Start with the problem, not the technology. Understand the users, requirements, constraints, and what the product actually needs to solve.',
    side: 'right',
    icon: Search,
    tools: [
      { name: 'Research', icon: Lightbulb },
      { name: 'Requirements', icon: FileText },
      { name: 'AI', icon: Zap }
    ]
  },
  {
    number: '02',
    title: 'Shape the solution',
    description: 'Turn requirements into a clear technical direction. Define architecture, responsibilities, data flow, and constraints before implementation.',
    side: 'left',
    icon: AlignJustify,
    tools: [
      { name: 'Architecture', icon: Blocks },
      { name: 'API', icon: Settings },
      { name: 'Data', icon: Database }
    ]
  },
  {
    number: '03',
    title: 'Design & build',
    description: 'Build the experience from frontend to backend — creating thoughtful interfaces, reliable APIs, robust business logic, and maintainable systems.',
    side: 'right',
    icon: Code2,
    tools: [
      { name: 'React', icon: LayoutTemplate },
      { name: 'TypeScript', icon: FileText },
      { name: 'Node.js', icon: Server },
      { name: 'NestJS', icon: Blocks }
    ]
  },
  {
    number: '04',
    title: 'Test & refine',
    description: 'Validate the implementation against real requirements. Debug failures, improve usability, harden the system, and iterate until the solution is reliable.',
    side: 'left',
    icon: CircleCheck,
    tools: [
      { name: 'Testing', icon: ShieldCheck },
      { name: 'Security', icon: Settings },
      { name: 'Performance', icon: Activity }
    ]
  },
  {
    number: '05',
    title: 'Ship & measure',
    description: 'Deploy, observe, and improve. Track reliability, performance, and system behavior as the product evolves.',
    side: 'right',
    icon: BarChart2,
    tools: [
      { name: 'Deploy', icon: Zap },
      { name: 'Monitor', icon: Activity },
      { name: 'Scale', icon: Database },
      { name: 'Analytics', icon: BarChart2 }
    ]
  }
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
  return (
    <section className="relative w-full overflow-x-hidden bg-[#FFFFFF] py-5 text-[#111111]">
      {/* <ProcessContourBackground /> */}

      <div className="relative z-10 w-full max-w-full mx-auto px-8 md:px-0 flex flex-col items-center">
        
        {/* Editorial Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-[400] tracking-light text-[#111111] leading-snug">
            From ideas to experiences
          </h2>
          <p className="text-2xl md:text-3xl font-serif italic text-[#777777] font-light mt-0.5">
            built with purpose.
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
              const isRight = step.side === 'right';

              return (
                <div key={step.number} className="relative flex flex-row w-full group">
                  
                  {/* MOBILE & DESKTOP LEFT SPACING */}
                  <div 
                    className={`hidden md:flex w-1/2 pr-[45px] justify-end ${
                      !isRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
                        <div className="flex flex-wrap justify-end gap-x-2 gap-y-1.5">
                          {step.tools.map((tool) => {
                            const ToolIcon = tool.icon;
                            return (
                              <div key={tool.name} className="flex items-center gap-1 opacity-70">
                                {ToolIcon && <ToolIcon size={12} className="text-[#999999]" />}
                                <span className="text-[12px] font-medium text-[#555555] tracking-wide">{tool.name}</span>
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
                      isRight ? 'opacity-100' : 'md:opacity-0 md:pointer-events-none'
                    }`}
                  >
                    <div className={`flex flex-col items-start text-left w-full max-w-[465px] ${!isRight ? 'block md:hidden' : ''}`}>
                      <h3 className="text-[16px] font-medium text-[#111111] mb-1.5 leading-[1.3] transition-transform duration-700 ease-out group-hover:-translate-y-1">
                        {step.title}
                      </h3>
                      <p className="text-[14px] text-[#777777] leading-[1.45] mb-3">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap justify-start gap-x-2 gap-y-1.5">
                        {step.tools.map((tool) => {
                          const ToolIcon = tool.icon;
                          return (
                            <div key={tool.name} className="flex items-center gap-1 opacity-70">
                              {ToolIcon && <ToolIcon size={12} className="text-[#999999]" />}
                              <span className="text-[12px] font-medium text-[#555555] tracking-wide">{tool.name}</span>
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