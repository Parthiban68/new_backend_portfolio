import React from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// --- Background & Right Side (Kept intact from the premium concept) ---

const TechnicalBackground = () => (
  <div
    className="absolute inset-0 z-0 pointer-events-none opacity-[0.25]"
    aria-hidden="true"
  >
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="tech-grid"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 64 0 L 0 0 0 64"
            fill="none"
            stroke="#000000"
            strokeWidth="0.5"
            strokeOpacity="0.06"
          />
          <path
            d="M -2 0 L 2 0 M 0 -2 L 0 2"
            stroke="#000000"
            strokeWidth="1"
            strokeOpacity="0.1"
          />
        </pattern>
        <radialGradient id="fade-out" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#tech-grid)" />
      <rect width="100%" height="100%" fill="url(#fade-out)" />
    </svg>
  </div>
);

export default function ContactSection() {
  return (
    <section className="relative w-full bg-white dark:bg-[#0A0A0A] overflow-hidden min-h-150 lg:min-h-175 transition-colors duration-300">
      {/* <TechnicalBackground /> */}

      <div className="relative mx-auto max-w-[1500px] w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center z-10">
        {/* NEW LEFT COLUMN DESIGN: Data-driven & Structured */}
        <motion.div
          className="w-full lg:w-[55%] flex flex-col z-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Eyebrow: Sleek Badge Style */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-neutral-50 dark:bg-neutral-900 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[12px] font-medium tracking-wide text-neutral-600 dark:text-neutral-400">
                Let's work together
              </span>
            </div>
          </motion.div>

          {/* Main Heading: Stacked & Massive */}
          <motion.h2
            variants={itemVariants}
            className="text-[56px] leading-[0.95] lg:text-[60px] lg:leading-[0.9] tracking-tighter font-semibold text-[#0A0A0A] dark:text-white mb-10"
          >
            Lets's Connect
          </motion.h2>

          {/* Micro-Data Grid (Engineering/Specs vibe) */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 border-y border-black/[0.06] dark:border-white/[0.06] mb-10 max-w-[500px]"
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.06em] text-neutral-400 dark:text-neutral-500 font-semibold mb-1.5">
                Current Focus
              </span>
              <span className="block text-[15px] text-neutral-900 dark:text-neutral-100 font-medium">
                Scalable Systems & UI
              </span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-[0.06em] text-neutral-400 dark:text-neutral-500 font-semibold mb-1.5">
                Location
              </span>
              <span className="block text-[15px] text-neutral-900 dark:text-neutral-100 font-medium">
                Remote / Global
              </span>
            </div>
          </motion.div>

          {/* Shortened punchy description */}
          <motion.p
            variants={itemVariants}
            className="text-[16px] lg:text-[18px] leading-[1.6] text-[#666666] dark:text-gray-400 max-w-[540px] mb-10"
          >
            Whether it’s a complex backend architecture or a pristine product
            experience, I’m looking to partner with ambitious teams to build the
            next iteration of the web.
          </motion.p>

          {/* CTA Group: Editorial Style (Button + Text Link) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8"
          >
            <a
              href="mailto:parthibanm1268@gmail.com"
              className="group relative flex items-center justify-center gap-2 h-[52px] px-7 bg-[#0A0A0A] dark:bg-white text-white dark:text-[#0A0A0A] rounded-full text-[15px] font-medium transition-all duration-300 hover:bg-neutral-800 dark:hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none"
            >
              <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              <span>Drop a message</span>
            </a>

            <a
              href="https://www.linkedin.com/in/m-parthiban/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-[15px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: Visual (Unchanged) */}
        {/* <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end z-0">
          <SystemVisualization />
        </div> */}
           <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative bg-transparent shadow-sm overflow-hidden flex-shrink-0">

          {/* Badge 1: Email */}
          <div className="absolute top-[20%] left-[15%] -rotate-6 z-10 group cursor-pointer hover:-translate-y-1 transition-transform">
            <span className="absolute -top-5 right-2 text-xs font-semibold text-gray-500">-5°</span>
            <a href="mailto:parthibanm1268@gmail.com" className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_0px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span className="font-bold text-sm tracking-widest text-gray-900 dark:text-white">EMAIL</span>
            </a>
          </div>

          {/* Badge 2: GitHub */}
          <div className="absolute top-[22%] right-[15%] rotate-3 z-10 group cursor-pointer hover:-translate-y-1 transition-transform">
            <span className="absolute -top-5 right-2 text-xs font-semibold text-gray-500">3°</span>
            <a href="https://github.com/Parthiban68" className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_0px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              <span className="font-bold text-sm tracking-widest text-gray-900 dark:text-white">GITHUB</span>
            </a>
          </div>

          {/* Badge 3: LinkedIn (Moving) */}
          <div className="absolute top-[42%] left-[12%] rotate-3 z-10 group cursor-pointer">
            <span className="absolute -top-5 right-2 text-xs font-semibold text-gray-500">3°</span>
            
            {/* Motion Lines */}
            <div className="absolute top-1/2 -left-12 w-10 h-0.5 bg-gray-300 -translate-y-2 -rotate-12"></div>
            <div className="absolute top-1/2 -left-16 w-14 h-0.5 bg-gray-300 translate-y-1 -rotate-6"></div>
            <div className="absolute top-1/2 -left-10 w-8 h-0.5 bg-gray-300 translate-y-4 -rotate-3"></div>
            
            {/* Pointer Cursor */}
            <div className="absolute -bottom-10 -left-6 rotate-[25deg]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="black" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="m13 13 6 6"/></svg>
            </div>

            <a href="https://www.linkedin.com/in/m-parthiban/" className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_0px_0px_rgba(255,255,255,0.15)] relative">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="font-bold text-sm tracking-widest text-gray-900 dark:text-white">LINKEDIN</span>
            </a>
          </div>

          {/* Badge 4: Central LinkedIn with Ripples */}
          <div className="absolute top-[60%] left-[24%] -rotate-[4deg] z-20 cursor-pointer">
            
            {/* Connecting Path */}
            <svg className="absolute -top-[55px] -right-[50px] w-32 h-32 pointer-events-none" style={{ transform: 'rotate(4deg)' }}>
              <path d="M 0,90 Q 50,80 70,30 T 95,5" fill="none" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="95" cy="5" r="4" fill="#D1D5DB" />
            </svg>

            {/* Concentric Circles / Ripples */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border-2 border-gray-200 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190%] h-[190%] border border-gray-100 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] border border-gray-50 rounded-full"></div>
            </div>

            <NavLink to={"/contact"} className="bg-gray-100 dark:bg-neutral-800 border-2 border-black dark:border-white rounded-xl px-5 py-2.5 flex items-center gap-2 shadow-[2px_6px_0px_0px_rgba(0,0,0,0.25)] dark:shadow-[2px_6px_0px_0px_rgba(255,255,255,0.25)] relative z-10">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg> */}
              <span className="font-bold text-[15px] tracking-widest text-gray-900 dark:text-white">Let's Work Together</span>
            </NavLink>
          </div>

          {/* Badge 5: WhatsApp */}
          <div className="absolute top-[52%] right-[10%] rotate-6 z-10 group cursor-pointer hover:-translate-y-1 transition-transform">
            <span className="absolute -top-5 right-2 text-xs font-semibold text-gray-500">8°</span>
            <div className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_0px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
              <span className="font-bold text-sm tracking-widest text-gray-900 dark:text-white">WHATSAPP</span>
            </div>
          </div>

          {/* Badge 6: Resume */}
          <div className="absolute bottom-[15%] left-[45%] -rotate-6 z-10 group cursor-pointer hover:-translate-y-1 transition-transform">
            <span className="absolute -top-5 right-2 text-xs font-semibold text-gray-500">-5°</span>
            <div className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_0px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
              <span className="font-bold text-sm tracking-widest text-gray-900 dark:text-white">RESUME</span>
            </div>
          </div>

          {/* Badge 7: X (Twitter) */}
          <div className="absolute bottom-[20%] right-[20%] rotate-3 z-10 group cursor-pointer hover:-translate-y-1 transition-transform">
            <span className="absolute -top-5 right-2 text-xs font-semibold text-gray-500">3°</span>
            <div className="bg-white dark:bg-neutral-900 border-2 border-black dark:border-white rounded-xl px-4 py-2 flex items-center gap-2 shadow-[2px_4px_0px_0px_rgba(0,0,0,0.15)] dark:shadow-[2px_4px_0px_0px_rgba(255,255,255,0.15)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l16 16"/><path d="M4 20L20 4"/></svg>
              <span className="font-bold text-sm tracking-widest text-gray-900 dark:text-white">X</span>
            </div>
          </div>

          {/* Helper Texts */}
          <div className="absolute top-[44%] right-[25%] z-0">
            <span className="text-[10px] font-bold tracking-wider text-gray-600 dark:text-gray-400">CONNECT WITH ME →</span>
          </div>

          <div className="absolute bottom-[25%] left-[8%] z-0">
            <span className="text-[10px] font-bold tracking-wider text-gray-600 dark:text-gray-400">PICK A WAY TO CONNECT →</span>
          </div>

        </div>
      </div>
    </section>
  );
}


