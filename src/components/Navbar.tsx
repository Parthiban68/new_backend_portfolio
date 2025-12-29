import React, { useState, useEffect } from "react";
import { Shield, Radio, Activity, Sun, Moon, FileText } from "lucide-react";

const Navbar: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
      <div className="bg-white/90 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/10 px-4 md:px-6 py-2 flex justify-between items-center pointer-events-auto overflow-hidden transition-colors duration-300">
        {/* Left: System Status - Hidden on small mobile */}
        <div className="hidden sm:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Activity className="w-3 h-3 text-green-500 animate-pulse" />
            <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mono text-green-600 dark:text-green-500 whitespace-nowrap">
              STABLE
            </span>
          </div>
          <div className="hidden lg:flex items-center space-x-3 text-[9px] mono text-black/30 dark:text-white/30 uppercase tracking-widest">
            <Radio className="w-3 h-3" />
            <span>CONNECTED</span>
          </div>
        </div>

        {/* Center: Brand */}
        <div className="flex flex-col items-center flex-1 sm:flex-none">
          <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter mono glitch-text cursor-pointer leading-none text-black dark:text-white text-center">
            PARTHIBAN_ARCHITECTURE_CORE_v2.5
          </span>
          <span className="text-[7px] md:text-[8px] mono text-black/20 dark:text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em] mt-1 whitespace-nowrap">
            Industrial Backend Engineer
          </span>
        </div>

        {/* Right: Diagnostics, Toggle & Download */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <a
            href="#"
            className="hidden md:flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 border border-transparent hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all group"
          >
            <FileText className="w-3 h-3" />
            <span className="text-[9px] font-black mono uppercase tracking-widest">
              RESUME
            </span>
          </a>

          <button
            onClick={toggleTheme}
            className="p-1.5 md:p-2 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black dark:text-white flex items-center space-x-2"
          >
            {isDark ? (
              <Sun className="w-3 h-3" />
            ) : (
              <Moon className="w-3 h-3" />
            )}
          </button>
          <div className="flex items-center space-x-1.5 md:space-x-2 bg-blue-600/10 border border-blue-500/20 px-2 md:px-3 py-1 rounded-sm">
            <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
            <span className="text-[8px] md:text-[9px] font-bold mono text-blue-500 uppercase">
              {time.split(" ")[0]}
            </span>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto flex justify-center mt-3 md:mt-4 px-4">
        <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 px-4 md:px-8 py-2 rounded-full flex space-x-6 md:space-x-12 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mono text-black/65 dark:text-white/40 pointer-events-auto shadow-2xl transition-colors duration-300">
          <a
            href="#work"
            className="hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all"
          >
            ./work
          </a>
          <a
            href="#services"
            className="hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all"
          >
            ./stack
          </a>
          <a
            href="#experience"
            className="hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all"
          >
            ./logs
          </a>
          <a
            href="#contact"
            className="hover:text-black dark:hover:text-white transition-all text-black/90 dark:text-white/80"
          >
            ./ping
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
