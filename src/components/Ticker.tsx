import React from "react";

const Ticker: React.FC = () => {
  const tech = [
    "NODE.JS",
    "NEST.JS",
    "EXPRESS.JS",
    "TYPESCRIPT",
    "REACT.JS",
    "MONGODB",
    "POSTGRESQL",
    "DOCKER",
    "REDUX",
    "JAVASCRIPT",
    "DART",
    "FLUTTER",
  ];

  const TechSet = () => (
    <div className="flex items-center shrink-0">
      {tech.map((item, i) => (
        <div
          key={i}
          className="flex items-center px-12 sm:px-20 space-x-12 sm:space-x-20"
        >
          <span className="text-4xl sm:text-6xl font-black  uppercase tracking-tighter transition-colors cursor-default whitespace-nowrap mono group-hover:text-white">
            {item}
          </span>
          <div className="w-8 sm:w-12 h-1 bg-current opacity-20"></div>
        </div>
      ))}
    </div>
  );

  const UpperTechSet = () => (
    <div className="flex items-center shrink-0">
      {tech.map((item, i) => (
        <div
          key={i}
          className="flex items-center px-12 sm:px-20 space-x-12 sm:space-x-20"
        >
          <span className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter transition-colors cursor-default whitespace-nowrap mono group-hover:text-blue-600">
            {item}
          </span>
          <div className="w-8 sm:w-12 h-1 bg-current opacity-20"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 py-1 bg-black dark:bg-white/5 border-y border-black/5 dark:border-white/10 rotate-[-1deg] scale-[1.05] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-300">
      {/* Tier 1: Fast & Dark - Moving Left */}
      <div className="py-4 bg-black overflow-hidden border-b border-white/5 group">
        <div
          className="flex w-fit animate-ticker-left hover:[animation-play-state:paused]"
          style={{ animationDuration: "35s" }}
        >
          <div className="flex text-blue-600 opacity-50">
            <UpperTechSet />
            <UpperTechSet />
          </div>
        </div>
      </div>

      {/* Tier 2: Slow & Vivid - Moving Right */}
      <div className="py-6 bg-blue-600 overflow-hidden group">
        <div
          className="flex w-fit animate-ticker-right hover:[animation-play-state:paused]"
          style={{ animationDuration: "35s" }}
        >
          <div className="flex text-black">
            <TechSet />
            <TechSet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticker;
