import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  TerminalSquare,
  AlertCircle,
  RefreshCcw,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white pt-24 md:pt-40 pb-12 relative overflow-hidden border-t border-black/5 dark:border-white/10 transition-colors duration-300">
      {/* Massive Background Text - Scaled for mobile */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.01] dark:opacity-[0.02] flex items-center justify-center transition-opacity duration-300">
        <span className="text-[30vw] md:text-[40vw] font-black uppercase leading-none select-none text-black dark:text-white">
          SYS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
          {/* Identity */}
          <div className="lg:col-span-6 space-y-8 md:space-y-12">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 md:p-4 shadow-xl">
                <TerminalSquare className="w-6 h-6 md:w-8 md:h-8 text-white dark:text-black" />
              </div>
              <div>
                <h4 className="text-3xl md:text-4xl heavy uppercase tracking-tighter leading-none text-black dark:text-white transition-colors duration-300">
                  PARTHIBAN_SYS
                </h4>
                <p className="text-[9px] md:text-[10px] mono text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] mt-2">
                  Core Architect v2.5
                </p>
              </div>
            </div>

            <p className="text-black/40 dark:text-white/40 mono text-lg md:text-xl leading-relaxed max-w-lg font-light transition-colors duration-300">
              Engineering{" "}
              <span className="text-black dark:text-white font-bold">
                Resilient Systems
              </span>{" "}
              for high-concurrency Node.js environments.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              {[
                {
                  icon: <Github size={20} />,
                  label: "GITHUB",
                  link: "https://github.com/Parthiban68",
                },
                {
                  icon: <Linkedin size={20} />,
                  label: "LINKEDIN",
                  link: "https://www.linkedin.com/in/m-parthiban",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
        flex items-center space-x-3
        border border-black/5 dark:border-white/5
        px-4 md:px-6 py-3 md:py-4
        bg-black/[0.02] dark:bg-white/[0.02]
        hover:bg-blue-600 hover:text-white
        transition-all duration-300
        group
      "
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>

                  <span className="text-[9px] md:text-[10px] mono font-bold tracking-widest hidden sm:block">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Directory */}
          <div className="lg:col-span-3 space-y-6 md:space-y-10">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600 mono flex items-center">
              <AlertCircle className="w-3 h-3 mr-2" /> ROOT_DIR
            </h5>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 mono text-[9px] md:text-xs text-black/30 dark:text-white/30 uppercase tracking-[0.2em] transition-colors duration-300">
              <li>
                <a
                  href="#work"
                  className="hover:text-blue-600 transition-all block"
                >
                  ./repositories
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-blue-600 transition-all block"
                >
                  ./architecture
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-blue-600 transition-all block"
                >
                  ./history
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-black dark:hover:text-white transition-all block underline decoration-blue-600"
                >
                  ./ping
                </a>
              </li>
            </ul>
          </div>

          {/* Telemetry */}
          <div className="lg:col-span-3 space-y-6 md:space-y-10">
            <h5 className="text-[10px] font-black uppercase tracking-[0.6em] text-blue-600 mono flex items-center">
              <RefreshCcw className="w-3 h-3 mr-2" /> TELEMETRY
            </h5>
            <div className="space-y-4 md:space-y-6">
              <div className="bg-black/5 dark:bg-white/5 p-5 md:p-6 border border-black/5 dark:border-white/5 space-y-4 transition-colors duration-300">
                <div className="flex justify-between items-center text-[8px] mono text-black/20 dark:text-white/20">
                  <span>LOAD_AVG</span>
                  <span>STABLE</span>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-[10px] font-bold uppercase text-black/50 dark:text-white/50">
                    CPU_01
                  </p>
                  <p className="text-xl md:text-2xl font-black mono text-blue-600">
                    0.02ms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-40 pt-12 border-t border-black/5 dark:border-white/10 flex flex-col lg:flex-row justify-between items-center gap-8 transition-colors duration-300">
          <div className="text-[9px] md:text-[10px] mono text-black/20 dark:text-white/20 uppercase tracking-[0.4em] text-center">
            © 2026 Parthiban Engineer // Industrial_Logic
          </div>

          <div className="flex items-center space-x-8 md:space-x-12">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[9px] md:text-[10px] mono text-black/40 dark:text-white/40 uppercase">
                All_Systems_Nominal
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
