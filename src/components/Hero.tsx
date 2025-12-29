// import React from 'react';
// import { Terminal, Cpu, Database, Command, ArrowRight } from 'lucide-react';

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden transition-colors duration-300">
//       <div className="absolute top-0 right-0 w-1/4 md:w-1/3 h-full border-l border-black/5 dark:border-white/5 pointer-events-none -z-10"></div>
//       <div className="absolute bottom-1/4 left-0 w-full h-px border-t border-black/5 dark:border-white/5 pointer-events-none -z-10"></div>

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
//         <div className="lg:col-span-9 space-y-8 md:space-y-12">
//           <div className="flex items-center space-x-4">
//             <div className="bg-black dark:bg-white text-white dark:text-black px-3 md:px-4 py-1.5 text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] mono transition-colors duration-300">
//               STATUS: Operational
//             </div>
//             <div className="flex items-center space-x-2 text-[8px] md:text-[9px] mono text-black/20 dark:text-white/20">
//               <Command className="w-3 h-3" />
//               <span>PID: 1268</span>
//             </div>
//           </div>

//           <div className="space-y-2">
//             <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[140px] xl:text-[160px] heavy leading-[0.8] md:leading-[0.7] tracking-tighter text-black dark:text-white uppercase glitch-text transition-colors duration-300">
//               FULL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-green-500">STACK</span> <br /> DEV
//             </h1>
//             <div className="flex items-center space-x-4 md:space-x-6 pt-2 md:pt-4">
//                <div className="h-0.5 bg-blue-600 flex-1"></div>
//                <p className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] md:tracking-[0.8em] text-black/40 dark:text-white/40 mono">v2.5_Parthiban</p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4 md:pt-8">
//             <div className="bg-black/[0.02] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 p-5 md:p-6 rounded-none relative overflow-hidden group transition-colors duration-300">
//                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600/50"></div>
//                <div className="mono text-[10px] md:text-xs text-black/60 dark:text-white/60 space-y-2 transition-colors duration-300">
//                   <p className="text-blue-600 dark:text-blue-500">$ <span className="text-black dark:text-white">whoami</span></p>
//                   <p className="pl-4">Parthiban: Engineering Specialist</p>
//                   <p className="text-blue-600 dark:text-blue-500">$ <span className="text-black dark:text-white">cat vision.txt</span></p>
//                   <p className="pl-4 text-green-600 dark:text-green-500 italic">"Engineering scale through precision."</p>
//                   <p className="text-blue-600 dark:text-blue-500">$ <span className="text-black dark:text-white cursor-blink">_</span></p>
//                </div>
//                <div className="absolute bottom-2 right-4 opacity-5 md:opacity-10 text-3xl md:text-[40px] font-black mono text-black dark:text-white">0xP1</div>
//             </div>

//             <div className="space-y-6 md:space-y-8">
//               <p className="text-lg md:text-xl text-black/50 dark:text-white/50 leading-relaxed font-light transition-colors duration-300">
//                 I blend <span className="text-black dark:text-white font-bold border-b border-blue-600">clean code</span>, modern design, and scalable architecture to craft resilient digital infrastructure.
//               </p>
//               <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//                 <a href="#contact" className="flex-1 bg-blue-600 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-white px-6 md:px-8 py-3.5 md:py-4 font-black uppercase text-[10px] tracking-[0.3em] transition-all flex items-center justify-center space-x-4 group">
//                   <span>INIT_PING</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
//                 </a>
//                 <a href="#work" className="w-full sm:w-16 h-14 sm:h-16 border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
//                   <Terminal className="w-5 h-5 text-black/40 dark:text-white/40" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="lg:col-span-3 hidden lg:block space-y-4">
//           {[
//             { id: 'STACK_HEALTH', val: 'STABLE', color: 'text-green-600 dark:text-green-500' },
//             { id: 'DB_LATENCY', val: '-25%', color: 'text-blue-600 dark:text-blue-500' },
//             { id: 'DELIVERY_SPD', val: '+70%', color: 'text-orange-600 dark:text-orange-500' },
//           ].map((stat, i) => (
//             <div key={i} className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-6 space-y-4 hover:border-black/20 dark:hover:border-white/20 transition-all">
//               <div className="flex justify-between items-center text-[8px] mono text-black/30 dark:text-white/30 tracking-[0.5em]">
//                 <span>DIAGNOSTIC_{i+1}</span>
//                 <span>[OK]</span>
//               </div>
//               <div className="flex justify-between items-end">
//                 <p className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60">{stat.id}</p>
//                 <p className={`text-2xl font-black mono ${stat.color}`}>{stat.val}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Terminal, Command, ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      className="
       relative min-h-screen flex flex-col justify-center pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 max-w-7xl mx-auto overflow-hidden transition-colors duration-300
      "
    >
      {/* Decorative Blueprint Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/10 dark:border-white/5 pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-full h-px border-t border-black/10 dark:border-white/5 pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-9 space-y-10 md:space-y-12">
          {/* Init Badge */}
          <div className="flex items-center space-x-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.5em] text-blue-600 dark:text-blue-500 mono">
            <span>Initializing Core Portfolio</span>
            <span className="cursor-blink">_</span>
          </div>

          {/* Title */}
          <h1
            className="
              text-6xl sm:text-7xl md:text-[160px]
              heavy leading-[0.8] md:leading-[0.75]
              tracking-tighter uppercase glitch-text
              text-black dark:text-white
            "
          >
            BACKEND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 italic">
              ARCHITECT
            </span>
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 pt-4 md:pt-8">
            {/* Terminal Card */}
            <div className="bg-black/3 dark:bg-white/3 border border-black/10 dark:border-white/10 p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-600/50" />

              {/* Terminal Dots */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>

              <div className="mono text-xs text-black/60 dark:text-white/60 space-y-2">
                <p className="text-blue-600 dark:text-blue-500">
                  $ <span className="text-black dark:text-white">whoami</span>
                </p>
                <p className="pl-4">Parthiban: Backend Specialist</p>

                <p className="text-blue-600 dark:text-blue-500">
                  ${" "}
                  <span className="text-black dark:text-white">
                    cat technical_stack.json
                  </span>
                </p>
                <p className="pl-4 text-green-600 dark:text-green-500">
                  {`{ "core": ["Node", "Nest", "Express"], "data": ["Postgres", "Mongo"] }`}
                </p>

                <p className="text-blue-600 dark:text-blue-500">
                  $ <span className="cursor-blink">_</span>
                </p>
              </div>

              <div className="absolute bottom-2 right-4 opacity-10 text-[40px] font-black mono text-black dark:text-white">
                0x01
              </div>
            </div>

            {/* Description + Actions */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-lg md:text-xl text-black/60 dark:text-white/50 leading-relaxed font-light">
                Architecting{" "}
                <span className="text-black dark:text-white font-bold border-b border-blue-600">
                  high-availability
                </span>{" "}
                backends. I bridge data-heavy systems with seamless experiences
                using the{" "}
                <span className="text-blue-600 dark:text-blue-500 mono font-bold">
                  Node.js ecosystem
                </span>
                .
              </p>

              <div className="flex space-x-4">
                <button
                  className="
                    flex-1 bg-blue-600
                    hover:bg-black dark:hover:bg-white
                    hover:text-white dark:hover:text-black
                    text-white px-8 py-4
                    font-black uppercase text-[10px]
                    tracking-[0.3em]
                    transition-all flex items-center justify-center space-x-4 group
                  "
                >
                  <span>INIT_PROJECT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>

                <button className="w-16 h-16 border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <Terminal className="w-5 h-5 text-black/40 dark:text-white/40" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SIDEBAR HUD */}
        <div className="lg:col-span-3 hidden lg:block space-y-4">
          {[
            {
              id: "CPU_LOAD",
              val: "12%",
              color: "text-green-600 dark:text-green-500",
            },
            {
              id: "UPTIME",
              val: "365d:12h",
              color: "text-blue-600 dark:text-blue-500",
            },
            {
              id: "ENV",
              val: "PRODUCTION",
              color: "text-orange-600 dark:text-orange-500",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 p-6 space-y-4 hover:border-black/20 dark:hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-center text-[8px] mono text-black/30 dark:text-white/30 tracking-[0.5em]">
                <span>DIAGNOSTIC_{i + 1}</span>
                <span>[OK]</span>
              </div>

              <div className="flex justify-between items-end">
                <p className="text-xs font-bold uppercase tracking-widest text-black/60 dark:text-white/60">
                  {stat.id}
                </p>
                <p className={`text-2xl font-black mono ${stat.color}`}>
                  {stat.val}
                </p>
              </div>

              <div className="w-full h-1 bg-black/5 dark:bg-white/5 relative">
                <div
                  className={`absolute top-0 left-0 h-full ${stat.color.replace(
                    "text",
                    "bg"
                  )} w-2/3`}
                />
              </div>
            </div>
          ))}

          <div className="p-4 border-2 border-dashed border-black/10 dark:border-white/5 text-center text-[10px] mono text-black/30 dark:text-white/20">
            Waiting for inbound data...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
