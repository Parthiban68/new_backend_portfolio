import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Globe, 
  Clock, 
  MapPin, 
  ArrowUpRight, 
  FileText, 
  MessageSquare, 
  Zap, 
  Terminal,
  Activity,
  Box,
  GitBranch,
  Lock
} from 'lucide-react';

// ==========================================
// 1. HANDWRITTEN SVG NOTES (Subtle Annotations)
// ==========================================
const HandwrittenNote = ({ text, className, arrowPos = "left" }: { text: string; className?: string; arrowPos?: "left" | "right" | "top" }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
    transition={{ 
      opacity: { duration: 0.8 },
      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }}
    className={`absolute pointer-events-none z-30 flex items-center gap-2 font-handwriting text-slate-500 text-sm select-none ${className}`}
    style={{ fontFamily: '"Caveat", "Comic Sans MS", cursive, sans-serif' }}
  >
    {arrowPos === "left" && (
      <svg className="w-8 h-8 text-blue-500/60 -rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 10,25 Q 25,10 40,25 M 32,18 L 40,25 L 35,32" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
    <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200/60 shadow-sm text-slate-700 font-semibold text-xs tracking-wide">
      {text}
    </span>
    {arrowPos === "right" && (
      <svg className="w-8 h-8 text-blue-500/60 rotate-12" viewBox="0 0 50 50" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M 40,25 Q 25,10 10,25 M 18,18 L 10,25 L 15,32" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </motion.div>
);

// ==========================================
// 2. BACKEND TOPOLOGY SVG BACKGROUND
// ==========================================
const BackendTopologyMap = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)`,
          backgroundSize: '28px 28px'
        }}
      />

      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
          </linearGradient>

          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Distributed System Connection Lines */}
        <g stroke="url(#line-gradient)" strokeWidth="1.5" fill="none">
          {/* API Gateway to Services */}
          <path d="M 150,180 Q 350,100 600,220" strokeDasharray="6,6" className="animate-pulse" />
          <path d="M 600,220 T 950,150" strokeDasharray="4,4" />
          <path d="M 600,220 Q 750,450 1100,380" strokeDasharray="8,8" />
          <path d="M 200,500 C 400,350 700,550 900,420" />
          <path d="M 800,120 L 1150,220" strokeDasharray="5,5" />
        </g>

        {/* Animated Moving Packet Dots */}
        <motion.circle 
          r="4" 
          fill="#2563EB" 
          filter="url(#glow)"
          animate={{
            cx: [150, 350, 600],
            cy: [180, 100, 220],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle 
          r="3.5" 
          fill="#10B981" 
          filter="url(#glow)"
          animate={{
            cx: [600, 750, 1100],
            cy: [220, 450, 380],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.circle 
          r="3" 
          fill="#6366F1" 
          filter="url(#glow)"
          animate={{
            cx: [200, 550, 900],
            cy: [500, 420, 420],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 2 }}
        />

        {/* Endpoint Architecture Nodes */}
        {[
          { cx: 150, cy: 180, label: "API Gateway" },
          { cx: 600, cy: 220, label: "Auth / NestJS Core" },
          { cx: 950, cy: 150, label: "Postgres Master" },
          { cx: 1100, cy: 380, label: "Redis Cache" },
          { cx: 200, cy: 500, label: "Event Queue" },
        ].map((node, index) => (
          <g key={index} transform={`translate(${node.cx}, ${node.cy})`}>
            <circle r="7" fill="#FFFFFF" stroke="#2563EB" strokeWidth="2.5" className="shadow-sm" />
            <circle r="3" fill="#2563EB" />
            <circle r="12" fill="none" stroke="#2563EB" strokeOpacity="0.2" className="animate-ping" style={{ animationDuration: `${3 + index}s` }} />
            <text x="14" y="4" fill="#64748B" fontSize="10" fontWeight="600" fontFamily="sans-serif" className="tracking-wider">
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// ==========================================
// 3. TECH STACK BADGES WITH TOOLTIPS
// ==========================================
const techStackData = [
  { name: "NestJS", icon: Server, color: "text-red-500", desc: "Enterprise Architecture" },
  { name: "Node.js", icon: Cpu, color: "text-emerald-600", desc: "Runtime Environment" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-600", desc: "Relational Database" },
  { name: "TypeScript", icon: Terminal, color: "text-blue-500", desc: "Type Safety" },
  { name: "Redis", icon: Zap, color: "text-red-600", desc: "In-Memory Caching" },
  { name: "Docker", icon: Box, color: "text-sky-500", desc: "Containerization" },
  { name: "AWS", icon: Globe, color: "text-amber-500", desc: "Cloud Infrastructure" },
  { name: "GitHub", icon: GitBranch, color: "text-slate-800", desc: "Version Control & CI/CD" },
  { name: "React", icon: Layers, color: "text-cyan-500", desc: "Frontend Integration" },
  { name: "Next.js", icon: Activity, color: "text-slate-900", desc: "Fullstack Framework" },
];

const TechStackBar = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap items-center gap-3 pt-2">
      {techStackData.map((tech, idx) => {
        const Icon = tech.icon;
        return (
          <div 
            key={tech.name} 
            className="relative"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <motion.button
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <Icon className={`w-5 h-5 ${tech.color} transition-transform duration-300 group-hover:scale-110`} />
            </motion.button>

            {/* Glass Tooltip */}
            <AnimatePresence>
              {hoveredIdx === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap"
                >
                  <div className="bg-slate-900/90 text-white text-xs px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md border border-slate-700/50 flex flex-col items-center gap-0.5">
                    <span className="font-semibold text-slate-100">{tech.name}</span>
                    <span className="text-[10px] text-slate-400 font-normal">{tech.desc}</span>
                  </div>
                  {/* Tooltip Arrow */}
                  <div className="w-2 h-2 bg-slate-900/90 rotate-45 mx-auto -mt-1 border-r border-b border-slate-700/50" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

// ==========================================
// 4. MAIN ABOUT HERO SECTION
// ==========================================
export default function AboutHero() {
  // Live Local Time (IST - Coimbatore, India)
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTimeStr(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#FAFAFA] text-slate-900 overflow-hidden flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      
      {/* Background Animated SVG & Topology */}
      <BackendTopologyMap />

      {/* Radial Soft Ambient Glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Floating Handwritten Notes Around Section */}
      {/* <HandwrittenNote text="Clean Architecture" className="top-10 left-[18%] hidden lg:flex" arrowPos="right" />
      <HandwrittenNote text="System Design" className="top-[45%] left-[2%] hidden xl:flex" arrowPos="left" />
      <HandwrittenNote text="API First" className="top-16 right-[22%] hidden lg:flex" arrowPos="left" />
      <HandwrittenNote text="Scalable" className="bottom-28 left-[45%] hidden lg:flex" arrowPos="top" />
      <HandwrittenNote text="Backend > Frontend" className="top-[38%] right-[2%] hidden xl:flex" arrowPos="right" /> */}

      {/* HERO MAIN CONTAINER */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-16 relative z-10 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* ================= LEFT SIDE (7 COLS) ================= */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Headings */}
            <div className="space-y-3">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs font-mono tracking-widest text-blue-600 uppercase font-bold"
              >
                # About Me
              </motion.span>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.08]"
              >
                I'm <span className="text-slate-900">Parthiban</span>
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-xl sm:text-2xl font-medium text-slate-700 pt-1 leading-snug"
              >
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent font-bold">
                  Backend Engineer
                </span>
                <span className="text-slate-500 font-normal"> — </span>
                Building scalable backend systems, enterprise SaaS platforms, and distributed architectures.
              </motion.div>
            </div>

            {/* Editorial Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal"
            >
              I specialize in designing secure, scalable backend architectures that power modern business applications. From authentication systems and multi-tenant SaaS platforms to accounting engines and REST APIs, I enjoy building software that is reliable, maintainable, and built for scale. My focus is writing clean architecture, solving complex backend challenges, and engineering systems that continue to perform as products grow.
            </motion.p>

            {/* Small Info Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="inline-flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-slate-600 bg-white/70 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-slate-200/70 shadow-sm max-w-max"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 font-mono">
                <Clock className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-slate-800 font-semibold">{timeStr || '12:00:00 PM'} IST</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                <span>Backend Architecture</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              

              {/* Secondary CTA */}
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 rounded-2xl bg-white/80 backdrop-blur-md text-slate-800 font-semibold text-sm border border-slate-200/90 shadow-sm hover:border-slate-300 hover:bg-slate-50 transition-all duration-300 flex items-center gap-2"
              >
                 <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Let's Connect</span>
              </motion.button>

            </motion.div>

            {/* Tech Stack Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="pt-2"
            >
              <div className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider mb-2">
                Core Stack & Infrastructure
              </div>
              <TechStackBar />
            </motion.div>

          </div>

          {/* ================= RIGHT SIDE (5 COLS Showcase) ================= */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[520px]">
            
            {/* Engineering Interactive Diagram Backdrop (Behind Photo) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[340px] h-[340px] rounded-full border border-dashed border-blue-500/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-slate-200/50" />
            </div>

            {/* Floating Architecture Glass Cards (Top Right & Bottom Left) */}
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-2 sm:right-6 z-20 bg-white/80 backdrop-blur-xl border border-slate-200/80 p-3.5 rounded-2xl shadow-xl shadow-slate-900/5 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Multi Tenant</div>
                <div className="text-[10px] text-slate-500 font-mono">Isolated Schemas</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, -1, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 left-2 sm:left-4 z-20 bg-white/80 backdrop-blur-xl border border-slate-200/80 p-3.5 rounded-2xl shadow-xl shadow-slate-900/5 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Auth Infrastructure</div>
                <div className="text-[10px] text-slate-500 font-mono">JWT / RBAC / Sessions</div>
              </div>
            </motion.div>

            {/* POLAROID PHOTO CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative z-10 w-full max-w-[340px] bg-white p-4 pb-6 rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 group"
            >
              {/* Image Container with Framing */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
                  alt="Parthiban - Backend Engineer" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-900/80 backdrop-blur-md px-3 py-2 rounded-xl text-white flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    System Active
                  </span>
                  <span className="text-slate-400">PostgreSQL</span>
                </div>
              </div>

              {/* Polaroid Footer */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <div className="font-mono text-xs font-bold text-slate-800 tracking-tight">parthiban.jpeg</div>
                  <div className="text-[10px] text-slate-400 font-sans">Enterprise Software Specialist</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center">
                  <Terminal className="w-3.5 h-3.5 text-slate-600" />
                </div>
              </div>

              {/* Floating Engineering Label Pills Orbiting the Photo */}
              {/* {[
                { name: "NestJS", top: "12%", left: "-12%", delay: 0 },
                { name: "PostgreSQL", top: "38%", right: "-14%", delay: 0.8 },
                { name: "REST API", bottom: "28%", left: "-10%", delay: 1.5 },
                { name: "Docker", top: "-5%", left: "30%", delay: 2 },
                { name: "Microservices", bottom: "8%", right: "-8%", delay: 2.5 },
              ].map((pill, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: pill.delay }}
                  className="absolute z-30 pointer-events-none hidden sm:block"
                  style={{ top: pill.top, left: pill.left, right: pill.right, bottom: pill.bottom }}
                >
                  <span className="bg-slate-900/90 text-white text-[11px] font-mono px-3 py-1.5 rounded-xl shadow-lg border border-slate-700/60 backdrop-blur-md flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {pill.name}
                  </span>
                </motion.div>
              ))} */}

            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
}