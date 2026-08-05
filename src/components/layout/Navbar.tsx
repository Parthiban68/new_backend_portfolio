// import React, { useState, useEffect } from "react";
// import { Shield, Radio, Activity, Sun, Moon, FileText } from "lucide-react";
// import toast from "react-hot-toast";

// const Navbar: React.FC = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [isDark, setIsDark] = useState(
//     document.documentElement.classList.contains("dark"),
//   );

//   useEffect(() => {
//     const timer = setInterval(
//       () => setTime(new Date().toLocaleTimeString()),
//       1000,
//     );
//     return () => clearInterval(timer);
//   }, []);

//   const toggleTheme = () => {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//       setIsDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//       setIsDark(true);
//     }
//   };

//   const downloadResume = () => {
//     const downloadPromise = new Promise<void>((resolve) => {
//       setTimeout(() => {
//         const link = document.createElement("a");
//         link.href = "/resume.pdf";
//         link.download = "Parthiban_Resume.pdf";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);

//         resolve();
//       }, 3000);
//     });

//     toast.promise(
//       downloadPromise,
//       {
//         loading: (
//           <span className="flex items-center gap-2">Downloading...</span>
//         ),
//         success: "Download successful!",
//         error: "Download failed. Please try again.",
//       },
//       {
//         position: "top-center",
//       },
//     );
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full z-[100] pointer-events-none">
//       <div className="bg-white/90 dark:bg-black/95 backdrop-blur-xl border-b border-black/5 dark:border-white/10 px-4 md:px-6 py-2 flex justify-between items-center pointer-events-auto overflow-hidden transition-colors duration-300">
//         {/* Left: System Status - Hidden on small mobile */}
//         <div className="hidden sm:flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <Activity className="w-3 h-3 text-green-500 animate-pulse" />
//             <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mono text-green-600 dark:text-green-500 whitespace-nowrap">
//               STABLE
//             </span>
//           </div>
//           <div className="hidden lg:flex items-center space-x-3 text-[9px] mono text-black/30 dark:text-white/30 uppercase tracking-widest">
//             <Radio className="w-3 h-3" />
//             <span>CONNECTED</span>
//           </div>
//         </div>

//         {/* Center: Brand */}
//         <div className="flex flex-col items-center flex-1 sm:flex-none">
//           <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter mono glitch-text cursor-pointer leading-none text-black dark:text-white text-center">
//             PARTHIBAN_ARCHITECTURE_CORE_v2.0
//           </span>
//           <span className="text-[7px] md:text-[8px] mono text-black/20 dark:text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em] mt-1 whitespace-nowrap">
//             Industrial Backend Engineer
//           </span>
//         </div>

//         {/* Right: Diagnostics, Toggle & Download */}
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <button
//             onClick={() => {
//               downloadResume();
//             }}
//             className="hidden md:flex items-center space-x-2 bg-black dark:bg-white text-white dark:text-black px-3 py-1.5 border border-transparent hover:bg-transparent hover:text-black dark:hover:text-white dark:hover:bg-black hover:border-black/20 dark:hover:border-white/20 transition-all group"
//           >
//             <FileText className="w-3 h-3" />
//             <span className="text-[9px] font-black mono uppercase tracking-widest">
//               RESUME
//             </span>
//           </button>

//           <button
//             onClick={toggleTheme}
//             className="p-1.5 md:p-2 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-all text-black dark:text-white flex items-center space-x-2"
//           >
//             {isDark ? (
//               <Sun className="w-3 h-3" />
//             ) : (
//               <Moon className="w-3 h-3" />
//             )}
//           </button>
//           <div className="flex items-center space-x-1.5 md:space-x-2 bg-blue-600/10 border border-blue-500/20 px-2 md:px-3 py-1 rounded-sm">
//             <Shield className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
//             <span className="text-[8px] md:text-[9px] font-bold mono text-blue-500 uppercase">
//               {time.split(" ")[0]}
//             </span>
//           </div>
//         </div>
//       </div>

//       <nav className="max-w-7xl mx-auto flex justify-center mt-3 md:mt-4 px-4">
//         <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md border border-black/5 dark:border-white/10 px-4 md:px-8 py-2 rounded-full flex space-x-6 md:space-x-12 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] mono text-black/65 dark:text-white/40 pointer-events-auto shadow-2xl transition-colors duration-300">
//           <a
//             href="#work"
//             className="hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all"
//           >
//             ./work
//           </a>
//           <a
//             href="#services"
//             className="hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all"
//           >
//             ./stack
//           </a>
//           <a
//             href="#experience"
//             className="hover:text-blue-600 dark:hover:text-blue-500 hover:scale-110 transition-all"
//           >
//             ./logs
//           </a>
//           <a
//             href="#contact"
//             className="hover:text-black dark:hover:text-white transition-all text-black/90 dark:text-white/80"
//           >
//             ./ping
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

// <button
//   onClick={toggleTheme}
//   className="p-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 rounded-lg lg:rounded-full group"
//   aria-label="Toggle Theme"
// >
//   {isDark ? (
//     <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
//   ) : (
//     <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
//   )}
// </button>

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import gsap from "gsap";
// import {
//   Activity,
//   Sun,
//   Moon,
//   Terminal,
//   Download,
//   Cpu,
//   Command,
//   Sparkles,
//   ExternalLink,
//   Menu,
//   X
// } from "lucide-react";
// import toast from "react-hot-toast";

// const Navbar: React.FC = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());
//   const [isDark, setIsDark] = useState(
//     document.documentElement.classList.contains("dark")
//   );
//   const [activeTab, setActiveTab] = useState("work");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(
//       () => setTime(new Date().toLocaleTimeString()),
//       1000
//     );
//     return () => clearInterval(timer);
//   }, []);

//   // GSAP subtle intro animation for the main floating dock
//   useEffect(() => {
//     gsap.fromTo(
//       ".dock-container",
//       { y: -50, opacity: 0, scale: 0.95 },
//       { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
//     );
//   }, []);

//   const toggleTheme = () => {
//     if (document.documentElement.classList.contains("dark")) {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//       setIsDark(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//       setIsDark(true);
//     }
//   };

//   const downloadResume = () => {
//     const downloadPromise = new Promise<void>((resolve) => {
//       setTimeout(() => {
//         const link = document.createElement("a");
//         link.href = "/resume.pdf";
//         link.download = "Parthiban_Resume.pdf";
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         resolve();
//       }, 2500);
//     });

//     toast.promise(
//       downloadPromise,
//       {
//         loading: <span className=" text-[10px] uppercase tracking-widest">Compiling Resume...</span>,
//         success: <span className=" text-[10px] uppercase tracking-widest text-emerald-500">Extraction Complete</span>,
//         error: <span className=" text-[10px] uppercase tracking-widest text-rose-500">Process Failed</span>,
//       },
//       {
//         style: {
//           background: isDark ? '#09090b' : '#ffffff',
//           color: isDark ? '#f4f4f5' : '#18181b',
//           backdropFilter: 'blur(16px)',
//           border: '1px solid ' + (isDark ? '#27272a' : '#e4e4e7'),
//           borderRadius: '14px',
//           boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
//         }
//       }
//     );
//   };

//   const navItems = [
//     { id: "work", label: "work", index: "01" },
//     { id: "services", label: "stack", index: "02" },
//     { id: "experience", label: "logs", index: "03" },
//     { id: "lab", label: "projects", index: "04" },
//   ];

//   return (
//     <>
//       <header className="fixed top-0 inset-x-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
//         <div className="dock-container w-full max-w-6xl pointer-events-auto">

//           {/* Main Floating Glass Dock */}
//           <div className="relative flex items-center justify-between px-4 py-2.5 md:px-5 md:py-3 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]">

//             {/* Left: Brand Identity Matrix */}
//             <div className="flex items-center gap-3">
//               <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-md">
//                 <Terminal className="w-4 h-4" />
//                 <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-zinc-950 rounded-full animate-pulse" />
//               </div>

//               <div className="flex flex-col">
//                 <div className="flex items-center gap-1.5">
//                   <span className="text-[11px] font-black tracking-wider  text-zinc-900 dark:text-white uppercase">
//                     Parthiban
//                   </span>
//                   <span className="text-[9px]  px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400">
//                     v2.0
//                   </span>
//                 </div>
//                 <span className="text-[9px]  text-zinc-500 dark:text-zinc-400 tracking-widest uppercase flex items-center gap-1">
//                   <Cpu className="w-2.5 h-2.5 text-amber-500" /> Backend Core
//                 </span>
//               </div>
//             </div>

//             {/* Center: Desktop Navigation Dock */}
//             <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 dark:bg-zinc-900/60 p-1.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50">
//               {navItems.map((item) => {
//                 const isActive = activeTab === item.id;
//                 return (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     onClick={() => setActiveTab(item.id)}
//                     className="relative px-3.5 py-1.5 rounded-lg  text-[10px] uppercase tracking-wider transition-colors duration-200 group"
//                   >
//                     <span className={`relative z-10 flex items-center gap-1.5 ${isActive ? 'text-zinc-900 dark:text-white font-bold' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'}`}>
//                       <span className="text-[8px] text-zinc-400 dark:text-zinc-600 ">{item.index}.</span>
//                       {item.label}
//                     </span>

//                     {/* Framer Motion Layout Shared Background Pill */}
//                     {isActive && (
//                       <motion.div
//                         layoutId="activePill"
//                         className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200/60 dark:border-zinc-700/60"
//                         transition={{ type: "spring", stiffness: 400, damping: 30 }}
//                       />
//                     )}
//                   </a>
//                 );
//               })}
//             </nav>

//             {/* Right: Actions & Utilities */}
//             <div className="flex items-center gap-2">

//               {/* System Time Live Widget (Desktop) */}
//               <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-800/50  text-[9px] text-zinc-600 dark:text-zinc-400">
//                 <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
//                 <span>{time}</span>
//               </div>

//               {/* Theme Toggle */}
//               <button
//               onClick={toggleTheme}
//               className="p-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300 rounded-lg lg:rounded-full group"
//               aria-label="Toggle Theme"
//             >
//               {isDark ? (
//                 <Sun className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
//               ) : (
//                 <Moon className="w-4 h-4 group-hover:-rotate-12 transition-transform duration-300" />
//               )}
//             </button>

//               {/* Download Resume Button */}
//               <button
//                 onClick={downloadResume}
//                 className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200/60 dark:border-zinc-800/60 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800  text-[10px] uppercase tracking-wider transition-colors"
//               >
//                 <Download className="w-3.5 h-3.5" />
//                 <span>Resume</span>
//               </button>

//               {/* CTA Action Button */}
//               <a
//                 href="#contact"
//                 onClick={() => setActiveTab("contact")}
//                 className="relative group overflow-hidden px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900  text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg transition-transform active:scale-95"
//               >
//                 <span className="relative z-10 flex items-center gap-1.5">
//                   <Sparkles className="w-3 h-3 text-amber-400 dark:text-amber-600 animate-spin" />
//                   <span>Connect</span>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </a>

//               {/* Mobile Hamburger Menu Toggle */}
//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="lg:hidden p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white"
//               >
//                 {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
//               </button>

//             </div>

//           </div>

//           {/* Mobile Navigation Dropdown Menu with Framer Motion */}
//           <AnimatePresence>
//             {mobileMenuOpen && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -10, scale: 0.98 }}
//                 transition={{ duration: 0.2 }}
//                 className="lg:hidden mt-2 p-3 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col gap-1.5"
//               >
//                 {navItems.map((item) => (
//                   <a
//                     key={item.id}
//                     href={`#${item.id}`}
//                     onClick={() => {
//                       setActiveTab(item.id);
//                       setMobileMenuOpen(false);
//                     }}
//                     className={`flex items-center justify-between px-4 py-2.5 rounded-xl  text-xs uppercase tracking-wider ${
//                       activeTab === item.id
//                         ? "bg-zinc-100 dark:bg-zinc-900 font-bold text-zinc-900 dark:text-white"
//                         : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50"
//                     }`}
//                   >
//                     <span className="flex items-center gap-2">
//                       <span className="text-[10px] text-zinc-400">{item.index}.</span>
//                       {item.label}
//                     </span>
//                     <ExternalLink className="w-3 h-3 opacity-40" />
//                   </a>
//                 ))}
//                 <button
//                   onClick={() => {
//                     downloadResume();
//                     setMobileMenuOpen(false);
//                   }}
//                   className="w-full mt-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-900  text-xs uppercase tracking-wider text-zinc-900 dark:text-white"
//                 >
//                   <Download className="w-3.5 h-3.5" />
//                   <span>Download Resume</span>
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Activity,
  Terminal,
  Search,
  ArrowRight,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Sun,
  Moon,
  Monitor,
  Command,
  Check,
  Globe,
  Layers,
  FolderGit2,
  Briefcase,
  Code2,
  BookOpen,
  Mail,
  Cpu,
  Radio,
  ExternalLink,
  HomeIcon,
  FileText,
  FlaskConical,
  NotebookPen,
  BriefcaseBusiness,
  Home,
} from "lucide-react";

// ============================================================================
// 1. TYPES & CONFIGURATION
// ============================================================================

export type ThemeMode = "light" | "dark" | "system";

export interface NavSection {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

// export const NAV_SECTIONS: NavSection[] = [
//   { id: "home", label: "Home", href: "#", icon: HomeIcon },
//   {
//     id: "architecture",
//     label: "Architecture",
//     href: "#architecture",
//     icon: Cpu,
//   },
//   { id: "projects", label: "Projects", href: "#projects", icon: FolderGit2 },
//   {
//     id: "experience",
//     label: "Experience",
//     href: "#experience",
//     icon: Briefcase,
//   },
//   { id: "stack", label: "Stack", href: "#stack", icon: Layers },
//   { id: "blog", label: "Blog", href: "#blog", icon: BookOpen },
//   { id: "contact", label: "Contact", href: "#contact", icon: Mail },
// ];

// ============================================================================
// 2. SCROLL PROGRESS BAR (Top Edge)
// ============================================================================

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: "projects",
    label: "Projects",
    href: "projects",
    icon: FolderGit2,
  },
  {
    id: "case-studies",
    label: "Case Studies",
    href: "#case-studies",
    icon: BriefcaseBusiness,
  },
  {
    id: "architecture",
    label: "Architecture",
    href: "#architecture",
    icon: Cpu,
  },
  {
    id: "engineering-notes",
    label: "Engineering Notes",
    href: "#engineering-notes",
    icon: NotebookPen,
  },
  {
    id: "playground",
    label: "Playground",
    href: "#playground",
    icon: FlaskConical,
  },
  // {
  //   id: "resume",
  //   label: "Resume",
  //   href: "#resume",
  //   icon: FileText,
  // },
  {
    id: "contact",
    label: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 origin-left z-[120]"
      style={{ scaleX }}
    />
  );
};

// ============================================================================
// 3. TELEMETRY & SYSTEM STATUS
// ============================================================================

const SystemTelemetry: React.FC = () => {
  const [latency, setLatency] = useState<number>(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 12); // Simulated live ping
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2.5  text-[10px] tracking-tight">
      {/* Status Badge */}
      <div className="flex items-center gap-1.5 px-2 py-0.5 rounded text-emerald-600 dark:text-emerald-400 font-semibold">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
        <span>SYSTEM ONLINE</span>
      </div>

      {/* Latency Telemetry */}
      <div className="hidden lg:flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
        <Radio className="w-3 h-3 text-cyan-500 animate-pulse" />
        <span>us-east-1</span>
        <span className="text-zinc-300 dark:text-zinc-700">/</span>
        <span className="text-zinc-700 dark:text-zinc-300 font-medium">
          {latency}ms
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 4. SEGMENTED THEME TOGGLE
// ============================================================================

const SegmentedThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    const saved = (localStorage.getItem("app-theme") as ThemeMode) || "system";
    applyTheme(saved);
  }, []);

  const applyTheme = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);

    const root = document.documentElement;
    const isDark =
      newTheme === "dark" ||
      (newTheme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);
  };

  const options: { id: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { id: "light", label: "Light", icon: <Sun size={11} /> },
    { id: "dark", label: "Dark", icon: <Moon size={11} /> },
    { id: "system", label: "Auto", icon: <Monitor size={11} /> },
  ];

  return (
    <div className="flex items-center p-0.5 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      {options.map((opt) => {
        const isActive = theme === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => applyTheme(opt.id)}
            className={`relative flex items-center gap-1 px-2 py-1 text-[10px]  font-medium transition-colors z-10 ${
              isActive
                ? "text-zinc-950 dark:text-white"
                : "text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300"
            }`}
            title={`Set theme to ${opt.label}`}
          >
            {isActive && (
              <motion.div
                layoutId="theme-active-pill"
                className="absolute inset-0 bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700 rounded-[5px] shadow-sm"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1">
              {opt.icon}
              <span className="hidden xl:inline">{opt.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

// ============================================================================
// 5. RESUME DOWNLOAD BUTTON
// ============================================================================

const ResumeButton: React.FC = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    if (downloading) return;

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Trigger native download action
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Parthiban_Backend_Engineeer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setDownloaded(false), 3000);
    }, 1200);
  };

  return (
    <button
      onClick={handleDownload}
      className="relative group overflow-hidden px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 border border-zinc-800 dark:border-zinc-200  text-[11px] font-semibold tracking-tight transition-all duration-200 hover:ring-2 hover:ring-emerald-500/40 active:scale-[0.98]"
    >
      <div className="flex items-center gap-1.5">
        <AnimatePresence mode="wait" initial={false}>
          {downloaded ? (
            <motion.span
              key="check"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-emerald-400 dark:text-emerald-600"
            >
              <Check size={12} />
            </motion.span>
          ) : downloading ? (
            <motion.span
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            >
              <Activity
                size={12}
                className="text-cyan-400 dark:text-cyan-600"
              />
            </motion.span>
          ) : (
            <motion.span
              key="download"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group-hover:translate-y-0.5 transition-transform"
            >
              <Download size={12} />
            </motion.span>
          )}
        </AnimatePresence>
        <span>
          {downloaded ? "Saved!" : downloading ? "Fetching..." : "Resume.pdf"}
        </span>
      </div>
    </button>
  );
};

// ============================================================================
// 6. RAYCAST-STYLE COMMAND PALETTE (⌘K)
// ============================================================================

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const CommandPalette = ({
  isOpen,
  onClose,
  activeSection,
}: {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // SCROLL LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case the component unmounts while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const filteredSections = NAV_SECTIONS.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = useCallback(
    (href: string) => {
      onClose();
      window.location.hash = href;
    },
    [onClose],
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredSections.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredSections.length) %
            (filteredSections.length || 1),
        );
      } else if (e.key === "Enter" && filteredSections[selectedIndex]) {
        e.preventDefault();
        handleSelect(filteredSections[selectedIndex].href);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredSections, selectedIndex, handleSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4">
          {/* Backdrop Overlay - Updated for Light/Dark */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-500/20 dark:bg-zinc-950/70 backdrop-blur-md"
          />

          {/* Raycast Modal Window - Updated for Light/Dark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl text-zinc-900 dark:text-zinc-100 font-sans z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
              <Search size={16} className="text-zinc-400 dark:text-zinc-500" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search section..."
                className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 outline-none font-medium"
              />
              <span className="text-[10px] text-zinc-500 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                ESC
              </span>
            </div>

            {/* List Items */}
            <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
              <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">
                Navigation Options
              </div>

              {filteredSections.map((item, idx) => {
                const Icon = item.icon;
                const isSelected = idx === selectedIndex;
                const isActive = activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.href)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
                        : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        size={16}
                        className={
                          isSelected
                            ? "text-emerald-500"
                            : "text-zinc-400 dark:text-zinc-500"
                        }
                      />
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 leading-none">
                          active
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-400 dark:text-zinc-500 text-xs">
                      <span>Jump</span>
                      <ArrowRight size={12} />
                    </div>
                  </button>
                );
              })}

              {filteredSections.length === 0 && (
                <div className="p-8 text-center text-sm text-zinc-500">
                  No matching section found for "{query}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/50 text-[11px] text-zinc-500">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="text-zinc-400 dark:text-zinc-500">↑↓</kbd>{" "}
                  Navigate
                </span>
                <span>
                  <kbd className="text-zinc-400 dark:text-zinc-500">↵</kbd>{" "}
                  Select
                </span>
              </div>
              <span className="text-emerald-600 dark:text-emerald-500 font-semibold">
                PARTHIBAN ARCHITECTURE CORE
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// 7. MOBILE SLIDE-OVER DRAWER
// ============================================================================

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  activeSection,
}) => {
  // SCROLL LOCK LOGIC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup in case the component unmounts while open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] md:hidden">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="fixed top-0 right-0 h-full w-[300px] bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col shadow-2xl text-zinc-100"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
              <div className="flex items-center gap-2  text-xs font-bold tracking-tight">
                <Terminal size={14} className="text-emerald-500" />
                <span>SYSTEM_MENU.SH</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-md border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="mb-6 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
              <div className="font-bold text-sm text-white">PARTHIBAN</div>
              <div className="text-[11px]  text-zinc-400 mt-0.5">
                Backend Systems Engineer
              </div>
              <div className="text-[10px]  text-emerald-400 mt-2 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Distributed Systems & Infra</span>
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col gap-1 mb-auto">
              {NAV_SECTIONS.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                console.log(activeSection, section.id);
                
                return (
                  <a
                    key={section.id}
                    href={section.href}
                    onClick={onClose}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-zinc-800 text-emerald-400 border border-zinc-700/50"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        size={16}
                        className={
                          isActive ? "text-emerald-400" : "text-zinc-500"
                        }
                      />
                      <span>{section.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs  text-zinc-400">Appearance</span>
                <SegmentedThemeToggle />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs  text-zinc-300 hover:text-white"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs  text-zinc-300 hover:text-white"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>

              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500 text-zinc-950  text-xs font-bold hover:bg-emerald-400 transition-colors"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// ============================================================================
// 8. MAIN NAVBAR CONTROL CENTER
// ============================================================================

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Scroll shrink observer
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section Observer (IntersectionObserver)
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      rootMargin: "-20% 0px -60% 0px",
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    NAV_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <ScrollProgressBar />

      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
        activeSection={activeSection}
      />

      <MobileDrawer
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />

      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-[#09090B]/90 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 shadow-md py-1.5"
            : "bg-white/40 dark:bg-[#09090B]/40 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 py-3"
        }`}
      >
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          {/* ========================================================================= */}
          {/* ROW 1: TOP STATUS & BRAND BAR                                            */}
          {/* ========================================================================= */}
          <div className="flex items-center justify-between">
            {/* Left: System Status Telemetry */}
            <div className="flex items-center gap-4">
              <SystemTelemetry />
            </div>

            {/* Center: Brand Identity */}
            <div className="flex flex-col items-center ">
              <a
                href="#"
                className="group flex items-center gap-1.5 font-sans font-bold text-zinc-900 dark:text-zinc-100 tracking-tight transition-transform"
              >
                <motion.span
                  animate={{ scale: isScrolled ? 0.92 : 1 }}
                  className="text-[10px] md:text-xs font-black uppercase tracking-tighter mono cursor-pointer leading-none text-black dark:text-white text-center"
                >
                  PARTHIBAN_ARCHITECTURE
                </motion.span>
              </a>
              <span className="hidden sm:block text-[9px]  tracking-widest uppercase text-zinc-400 dark:text-zinc-500">
                Building Scalable Infrastructure
              </span>
            </div>

            {/* <span className="text-[10px] md:text-xs font-black uppercase tracking-tighter mono glitch-text cursor-pointer leading-none text-black dark:text-white text-center">
                PARTHIBAN_ARCHITECTURE_CORE_v2.5
              </span>
              <span className="text-[7px] md:text-[8px] mono text-black/20 dark:text-white/20 uppercase tracking-[0.3em] md:tracking-[0.5em] mt-1 whitespace-nowrap">
                Industrial Backend Engineer
              </span> */}

            {/* Right: Actions, Socials & Mobile Trigger */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Build Metadata Info */}
              {/* <div className="hidden xl:flex flex-col items-end  text-[9px] text-zinc-400 dark:text-zinc-500 border-r border-zinc-200 dark:border-zinc-800 pr-3">
                <span className="text-zinc-700 dark:text-zinc-300 font-semibold">
                  Build v2.0.0
                </span>
                <span>Last deploy: 2m ago</span>
              </div> */}

              {/* Theme Toggle */}
              <div className="hidden sm:block">
                <SegmentedThemeToggle />
              </div>

              {/* Social Icons */}
              <div className="hidden md:flex items-center gap-1 text-zinc-500 dark:text-zinc-400 pl-1 border-l border-zinc-200 dark:border-zinc-800">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={15} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={15} />
                </a>
              </div>

              {/* Resume Download */}
              <div className="hidden sm:block border-l border-zinc-200 dark:border-zinc-800 pl-2">
                <ResumeButton />
              </div>

              {/* Mobile Drawer Trigger Button */}
              <button
                onClick={() => setIsMobileOpen(true)}
                className="md:hidden p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white"
                aria-label="Open Navigation Menu"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* ROW 2: CENTERED SECTION NAVIGATION BAR                                    */}
          {/* ========================================================================= */}
          <div className="hidden md:flex items-center justify-center pt-2 border-t border-zinc-200/50 dark:border-zinc-800/40">
            <nav className="flex items-center gap-1 sm:gap-2 relative">
              {NAV_SECTIONS.map((section) => {
                const isActive = activeSection === section.id;
                const Icon = section.icon;

                return (
                  <a
                    key={section.id}
                    href={section.href}
                    className={`relative px-3 py-1.5 text-xs tracking-tight transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? "text-zinc-950 dark:text-white font-bold"
                        : "dark:text-zinc-300 font-light hover:text-zinc-600 hover:font-medium dark:hover:text-zinc-300"
                    }`}
                  >
                    <Icon
                      size={13}
                      className={isActive ? "text-emerald-500" : "opacity-60 "}
                    />
                    <span>{section.label}</span>

                    {/* Smooth Animated Active Underline */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-underline"
                        className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}

              {/* Command Palette Hotkey Trigger Button */}
              <button
                onClick={() => setIsPaletteOpen(true)}
                className="group ml-3 flex items-center justify-center lg:justify-between h-8 w-8 lg:w-48 shrink-0 rounded-lg border border-zinc-200/80 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur lg:px-3 text-sm text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all duration-200"
                title="Open Command Palette (⌘K)"
              >
                <div className="flex items-center gap-2">
                  <Command
                    size={14}
                    className="text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors"
                  />
                  <span className="hidden lg:inline text-xs">
                    Search nodes...
                  </span>
                </div>
                <kbd className="hidden lg:block rounded-md border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-[10px]  text-zinc-500">
                  ⌘K
                </kbd>
              </button>
            </nav>
          </div>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
